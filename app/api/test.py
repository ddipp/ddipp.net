from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from . import api


@api.route("/test/all", methods=["GET"])
# @jwt_required()
def testall():
    return jsonify("test"), 200


@api.route("/test/user", methods=["GET"])
@jwt_required()
def testuser():
    print(request.headers)
    return jsonify("testUser"), 200
