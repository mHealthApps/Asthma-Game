# server/app/routes.py
import json
from flask import Flask, request, Blueprint, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from flask_bcrypt import Bcrypt

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
    if email != "test@gmail.com" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)

    return {"access_token": access_token}

# Logout Route
@main.route('/api/logout', methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

# Signup Route
@api.route("api/signup", methods=["POST"])
def signup():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")
    firstname = data.get("firstname")
    lastname = data.get("lastname")

    # Check if user exists
    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 400

    # Hash password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create user
    new_user = User(email=email, password=hashed_password, firstname=firstname, lastname=lastname)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201