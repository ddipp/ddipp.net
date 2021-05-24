from flask import Blueprint

api = Blueprint('api', __name__, url_prefix='/api')

from .auth import *
from .counter import *
from .seen import *
