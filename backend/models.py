from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(100), nullable = False)

  wishList = db.relationship("WishList", back_populates="user")
  cart = db.relationship("Cart", back_populates="user")

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }

class Camera(db.Model):
  __tablename__ = 'cameras'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(150), nullable=False)
  brand = db.Column(db.String(50), nullable=False)
  type = db.Column(db.String(50), nullable=False)
  description = db.Column(db.String(5000))
  price = db.Column(db.Float)
  quantity = db.Column(db.Integer)

  image = db.relationship("Image", back_populates="camera")
  wishList = db.relationship("WishList", back_populates="camera")
  cart = db.relationship("Cart", back_populates="camera")

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "brand": self.brand,
      "type": self.type,
      "price": self.price,
      "description": self.description,
      "quantity": self.quantity,
      "urls": []
    }

  
class WishList(db.Model):
  __tablename__ = 'wishLists'

  id = db.Column(db.Integer, primary_key = True)
  camera_id = db.Column(db.Integer, db.ForeignKey('cameras.id'), nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

  user = db.relationship("User", back_populates="wishList")
  camera = db.relationship("Camera", back_populates="wishList")


class Cart(db.Model):
  __tablename__ = 'carts'

  id = db.Column(db.Integer, primary_key = True)
  camera_id = db.Column(db.Integer, db.ForeignKey('cameras.id'), nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

  user = db.relationship("User", back_populates="cart")
  camera = db.relationship("Camera", back_populates="cart")


class Image(db.Model):
  __tablename__ = 'images'

  id = db.Column(db.Integer, primary_key = True)
  camera_id = db.Column(db.Integer, db.ForeignKey('cameras.id'), nullable = False)
  url_reference = db.Column(db.String(1000), nullable = False)

  camera = db.relationship("Camera", back_populates="image")

  def to_dict(self):
    return {
      "url": self.url_reference,
      "camera_id": self.camera_id
    }
