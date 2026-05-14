import os
from flask import Flask
from flask_migrate import upgrade
from .extensions import db, migrate, jwt, bcrypt
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

    # allows the flask server to accept HTTP requests from localhost 3000
    #CORS(app, origins=["http://localhost:3000"])
    #allows any origin for deployment testing
    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)

    # syncs database to migrations when app starts
    with app.app_context():
        try:
            upgrade() # Applies all migrations in your /migrations folder
            print("Database successfully migrated.")
        except Exception as e:
            print(f"Migration skipped or failed: {e}")

    from . import models
    from .routes import main
    app.register_blueprint(main)

    return app