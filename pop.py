#!/usr/bin/env python3

from app.api.models.authmodel import UserModel
user = UserModel(username='test', password='test')
user.save_to_db()
