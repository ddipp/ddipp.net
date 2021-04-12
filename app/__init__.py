from flask import Flask, render_template
from flask_cors import CORS
from flask_redis import FlaskRedis


app = Flask(__name__, static_folder="../dist/static", template_folder="../dist")
try:
    app.config.from_object('app.productionconfig')
except ImportError:
    app.config.from_object('app.config')

CORS(app)
redis_client = FlaskRedis(app)

from app.api import api

app.register_blueprint(api)


@app.route('/')
def catch_all():
    return render_template("index.html")
