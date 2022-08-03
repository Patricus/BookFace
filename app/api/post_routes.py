from flask import Blueprint, request
from app.models import Post, db
from app.forms import PostForm
from flask_login import current_user, login_required

auth_routes = Blueprint('post', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/', methods=['POST'])
@login_required
def create_post():
    """
    Create a post.
    """

    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # Create the post
        post = Post(
            user_id=current_user,
            text=form.data['text'],
            image_link=form.data['image_link'],
            created_at=form.data['created_at'],
            edited_at=form.data['edited_at'],
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    data = request.data
    # print(f"\n\n\n\n\n\n\n {data} \n\n\n")
    form = SignUpForm()
    # print(f"\n\n\n\n\n\n\n {form} \n\n\n")
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            first_name=form.data['firstName'],
            last_name=form.data['lastName'],
            email=form.data['email'],
            hashed_password=form.data['password'],
            birthday=form.data['birthday'],
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
