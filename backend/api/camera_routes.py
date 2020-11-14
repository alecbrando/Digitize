from flask import Blueprint, jsonify, request, make_response
from backend.models import Camera, Image, db
import json


camera_routes = Blueprint('cameras', __name__)

@camera_routes.route('/')
def fetch_images():
    response = db.session.query(Camera, Image).join(Image).all()
    camera_dict = {}
    for camera, image in response:
        camera_instance = camera.to_dict()
        image_instance = image.to_dict()
        if camera_instance['id'] == image_instance['camera_id']:
            camera_instance['urls'].append(image_instance['url'])

        if camera_instance['id'] in camera_dict:
            camera_dict[camera_instance['id']]['urls'].append(image_instance['url'])
        else:
            camera_dict[camera_instance['id']] = camera_instance


    return jsonify(camera_dict)

@camera_routes.route('/<int:id>', methods=['POST'])
def camera(id):
    camera = Camera.query.filter_by(id=id).first()
    images = Image.query.filter_by(camera_id=id).all()
    image = []
    cam = camera.to_dict()
    for img in images:
        img_instance = img.to_dict()
        url = img_instance['url']
        image.append(url)
    cam['urls'] = image
    return jsonify(cam)

