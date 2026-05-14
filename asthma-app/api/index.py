# api/index.py
from .app import create_app()

# Call the factory function to create the app instance
app = create_app()