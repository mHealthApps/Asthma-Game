# server/app/routes.py
from flask import Blueprint, jsonify

main = Blueprint("main", __name__)

@main.route("/api/health")
def health():
    return jsonify({"status": "ok"})

@app.route('/api/test', methods=['GET'])
def test():
    return {"message": "Flask is working!"}