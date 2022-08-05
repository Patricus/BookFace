from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from app.models import User
from app.models.friend import Friend

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.filter(User.id != current_user.id).all()
    friends = User.query.join(Friend, or_(
        Friend.user_id == current_user.id, Friend.friend_id == current_user.id, )).filter(User.id != current_user.id).all()

    users = users - friends
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
