import os
from flask import Flask
from .extensions import db, migrate, jwt, bcrypt
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    app.config["JWT_SECRET_KEY"] = "temp-asthma432!_SUPER_SECURE_KEY_123456" #temp hard-coded, change later

    # allows the flask server to accept HTTP requests from localhost 3000
    CORS(app, origins=["http://localhost:3000"])

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)

    from . import models
    from .routes import main
    app.register_blueprint(main)

    return app