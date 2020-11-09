from flask import Blueprint, jsonify, request, make_response
from backend.models import Camera, Image, db



camera_routes = Blueprint('cameras', __name__)

@camera_routes.route('/')
def fetch_images():
    response = db.session.query(Camera).join(Image).all()

    print(response[0].to_dict())

    return {"mess":""}

