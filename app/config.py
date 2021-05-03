import os

basedir = os.path.abspath(os.path.dirname(__file__))
JWT_SECRET_KEY = "my strong secret key"
REDIS_URL = "redis://localhost:6379/10"
SECRET_KEY = 'my strong secret key'
SQLALCHEMY_TRACK_MODIFICATIONS = False
# SQLALCHEMY_ECHO = True
# SQLALCHEMY_DATABASE_URI = 'postgresql://%(user)s:%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
