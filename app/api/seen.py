from flask import jsonify
from . import api
from app import redis_client as r


@api.route('/seen', methods=['GET'])
def seen_get():
    if not r.exists("seen"):
        r.set('seen', 0)
    return jsonify(int(r.get("seen")))


@api.route('/seen', methods=['POST'])
def seen_toogle():
    seen = 1 if int(r.get("seen")) == 0 else 0
    r.set("seen", seen)
    return jsonify(int(r.get("seen")))
