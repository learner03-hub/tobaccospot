from flask import Flask, jsonify
from config import Config
from models import db
from models import Product, Special
from datetime import date
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

# Initialize SQLAlchemy
db.init_app(app)

migrate = Migrate(app, db)

# CLI command to create the database tables
@app.cli.command("create-db")
def create_db():
    db.create_all()
    print("Database tables created.")

# Basic route to test server
@app.route("/api/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    print(products)
    return jsonify([product.to_dict() for product in products]) if products else 'No products found'

@app.route("/api/specials", methods=["GET"])
def get_specials():
    specials = Special.query.all()
    print(specials)
    return jsonify([special.to_dict() for special in specials]) if specials else 'No specials found'

@app.route("/")
def home():
    return "Backend is running!"



