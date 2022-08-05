from flask import Blueprint, request
from app.models import Friend, User, db
from app.forms import FriendForm
from flask_login import current_user, login_required
from sqlalchemy import or_


friend_routes = Blueprint('friend', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@friend_routes.route('/', methods=['POST'])
@login_required
def create_friend_request():
    """
    Create a friend request.
    """

    form = FriendForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # Check if request already exists
        friend_request_check = Friend.query.filter(
            or_((Friend.user_id == current_user.id, Friend.friend_id == form.data['friend_id']), (Friend.friend_id == current_user.id, Friend.user_id == form.data['friend_id'])))
        # Create the friend request
        friend_request = Friend(
            user_id=current_user.id,
            friend_id=form.data['friend_id'],
            accepted=False,
        )
        db.session.add(friend_request)
        db.session.commit()
        return friend_request.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@friend_routes.route('/')
@login_required
def read_friends():
    """
    Read all friends and friend requests.
    """
    friends = User.query.join(Friend, or_(
        Friend.user_id == current_user.id, Friend.friend_id == current_user.id, )).filter(User.id != current_user.id).all()

    return {'friends': [friend.to_dict() for friend in friends]}


@friend_routes.route('/<int:id>/', methods=['PATCH'])
@login_required
def update_friend(id):
    """
    Accept a friend request.
    """

    form = FriendForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        friend_request = Friend.query.get(id)

        if friend_request.user_id != current_user.id or friend_request.friend_id != current_user.id:
            return {'errors': [{"user": "You can't accept this friend_request."}]}

        # Update the friend request
        friend_request.accepted = True,

        db.session.commit()
        return friend_request.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@friend_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_friend(id):
    """
    Delete a friend or decline friend request.
    """

    friend_request = Friend.query.get(id)

    if not friend_request:
        return {"errors": [{"friend": "Friend request not found."}]}
    if friend_request.user_id != current_user.id or friend_request.friend_id != current_user.id:
        return {'errors': [{"friend": "You aren't a part of this friendship."}]}

    db.session.delete(friend_request)
    db.session.commit()
    return friend_request.to_dict()
