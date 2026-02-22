from app import create_app
from app.extensions import db
from app import models  # IMPORTANT: ensures models are registered

app = create_app()
app.app_context().push()

db.create_all()
print("Tables created!")