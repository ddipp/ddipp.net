from flask import jsonify
from . import api
from app import redis_client as r


@api.route('/counter', methods=['GET'])
def counter_get():
    if not r.exists("counter"):
        r.set('counter', 0)
    return jsonify(int(r.get("counter")))


@api.route('/counter/increment10', methods=['POST'])
def counter_increment10():
    return jsonify(r.incrby("counter", 10))


@api.route('/counter/increment', methods=['POST'])
def counter_increment():
    return jsonify(r.incr("counter"))
