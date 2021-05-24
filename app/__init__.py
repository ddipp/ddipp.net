from flask import Flask, render_template
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_redis import FlaskRedis
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__, static_folder="../dist/static", template_folder="../dist")
jwt = JWTManager(app)
try:
    app.config.from_object('app.productionconfig')
except ImportError:
    app.config.from_object('app.config')

db = SQLAlchemy(app)

if app.config["SQLALCHEMY_DATABASE_URI"].startswith("sqlite"):
    from sqlalchemy.engine import Engine
    from sqlalchemy import event

    @event.listens_for(Engine, "connect")
    def set_sqlite_pragma(dbapi_connection, connection_record):
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA foreign_keys=ON")
        cursor.close()

migrate = Migrate(app, db)
CORS(app)
redis_client = FlaskRedis(app)

from app.api import api
from app.api.models.authmodel import UserModel

app.register_blueprint(api)


# @jwt.user_identity_loader
# def user_identity_lookup(user):
#     return user.id


# @jwt.user_lookup_loader
# def user_lookup_callback(_jwt_header, jwt_data):
#     identity = jwt_data["sub"]
#     return UserModel.query.filter_by(id=identity).one_or_none()


@app.route('/')
def catch_all():
    return render_template("index.html")
