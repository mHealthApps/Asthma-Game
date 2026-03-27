# server/app/routes.py
import json
from flask import Flask, request, Blueprint, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager


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
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    # TEMP TEST LOGIN (replace later with DB)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)

    return {"access_token": access_token}