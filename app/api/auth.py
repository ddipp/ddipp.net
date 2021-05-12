from flask import jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from . import api


@api.route("/auth/login", methods=["POST"])
def login():
    request_data = request.get_json()
    username = None
    password = None
    if 'username' in request_data:
        username = request_data['username']
    if 'password' in request_data:
        password = request_data['password']

    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token, username=username)


@api.route("/auth/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@api.route('/auth/register', methods=['POST'])
def auth_register():
    request_data = request.get_json()
    username = None
    password = None
    if 'username' in request_data:
        username = request_data['username']
    if 'password' in request_data:
        password = request_data['password']

    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)
