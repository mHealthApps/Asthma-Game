from .extensions import db

#user information
class User(db.Model):
    #required information
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80))
    lastname = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(255), nullable=False)

    #extra information
    agerange = db.Column(db.String(50))
    gender = db.Column(db.String(50))
    demographic = db.Column(db.String(50))


    def __repr__(self):
        return f"<User {self.username}>"

#information on what modules the user has completed
class Completion(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    module_id = db.Column(db.Integer, nullable=False)
    completed = db.Column(db.Boolean, default=False)

    user = db.relationship("User", backref="completions")

#information on the settings of a user
class Settings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    enabled_sound = db.Column(db.Boolean, default=False)
    game_mode = db.Column(db.Boolean, default=True)