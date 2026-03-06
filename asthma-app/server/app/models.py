from .extensions import db

class User(db.Model):
    #required information
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    firstname = db.Column(db.String(80))
    lastname = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True)

    #extra information
    agerange = db.Column(db.String(50))
    gender = db.Column(db.String(50))
    demographic = db.Column(db.String(50))


    def __repr__(self):
        return f"<User {self.username}>"