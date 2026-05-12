# server/app/routes.py
import json
from flask import Flask, request, Blueprint, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required
from .models import User, Completion, Settings, db
from flask import request
from flask import current_app
from .extensions import bcrypt

main = Blueprint("main", __name__)

@main.route("/api/health")
def health():
    return jsonify({"status": "ok"})

@main.route('/api/test', methods=['GET'])
def test():
    return {"message": "Flask is working!"}

# Login Route
@main.route('/api/token', methods=['POST'])
def create_token():
    print("LOGIN SECRET:", current_app.config["JWT_SECRET_KEY"])
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    # TEMP TEST LOGIN (replace later with DB)
    # if email != "test@gmail.com" or password != "test":
    #    return {"msg": "Wrong email or password"}, 401

    # 1. Validate input
    if not email or not password:
        return jsonify({"msg": "Missing email or password"}), 400

    # 2. Look up user in database
    user = User.query.filter_by(email=email).first()

    # 3. Check if user exists
    if not user:
        return jsonify({"msg": "Invalid email or password"}), 401

    # 4. Check password hash
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"msg": "Invalid email or password"}), 401

    # 5. Create JWT token
    access_token = create_access_token(identity=str(user.id))

    return {"access_token": access_token}

# Logout Route
@main.route('/api/logout', methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

# Signup Route
@main.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")
    firstname = data.get("firstName")
    lastname = data.get("lastName")

    # Check if user exists
    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 400

    # Hash password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create user
    new_user = User(email=email, password=hashed_password, firstname=firstname, lastname=lastname)

    db.session.add(new_user)
    db.session.commit()

    # Initialize module completions
    for module_id in range(1, 7):
        completion = Completion(
            user_id=new_user.id,
            module_id=module_id,
            completed=False
        )

        db.session.add(completion)

    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

# Get Completion Route
@main.route("/api/completion", methods=["GET"])
@jwt_required()
def get_completion():
    print("AUTH HEADER:", request.headers.get("Authorization"))
    print("COMPLETION SECRET:", current_app.config["JWT_SECRET_KEY"])
    user_id = get_jwt_identity()

    completions = Completion.query.filter_by(user_id=user_id).all()

    return jsonify([
        {
            "module_id": c.module_id,
            "completed": c.completed
        }
        for c in completions
    ]), 200

# Update Completion Route
@main.route("/api/completion", methods=["PUT"])
@jwt_required()
def update_completion():
    data = request.get_json()

    user_id = data.get("user_id")
    module_id = data.get("module_id")
    completed = data.get("completed", True)

    completion = Completion.query.filter_by(
        user_id=user_id,
        module_id=module_id
    ).first()

    if not completion:
        return jsonify({"message": "Completion record not found"}), 404

    completion.completed = completed
    db.session.commit()

    return jsonify({"message": "Completion updated"}), 200