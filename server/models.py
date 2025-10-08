from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    category = db.Column(db.String(50))  # e.g. "vape", "pipe", etc.
    flavors = db.Column(JSON)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "image_url": self.image_url,
            "flavors": self.flavors
        }

class Special(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    discount = db.Column(db.String(100), nullable=False)
    details = db.Column(db.Text)
    expires_on = db.Column(db.Date)
    image_url = db.Column(db.String(255))
    oPrice = db.Column(db.Float, nullable=True)
    nPrice = db.Column(db.Float, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "discount": self.discount,
            "details": self.details,
            "expires_on": self.expires_on.isoformat() if self.expires_on else None,
            "image_url": self.image_url,
            "oPrice": self.oPrice,
            "nPrice": self.nPrice
        }
