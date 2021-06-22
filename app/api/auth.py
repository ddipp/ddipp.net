from flask import jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from . import api
from .models.authmodel import UserModel


@api.route("/auth/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = UserModel.query.filter_by(username=username).one_or_none()

    if not user or not user.check_password(password):
        return jsonify("Wrong username or password!"), 401

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
