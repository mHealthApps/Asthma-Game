# server/app/routes.py
import json
from flask import Flask, request, Blueprint, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from .models import User, Completion, Settings, db

main = Blueprint("main", __name__)
bcrypt = Bcrypt()

@main.route("/api/health")
def health():
    return jsonify({"status": "ok"})

@main.route('/api/test', methods=['GET'])
def test():
    return {"message": "Flask is working!"}

# Login Route
@main.route('/api/token', methods=['POST'])
def create_token():
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
    access_token = create_access_token(identity=user.email)

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