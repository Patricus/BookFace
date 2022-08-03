from flask import Blueprint, request
from app.models import Post, db
from app.forms import PostForm
from flask_login import current_user, login_required

post_routes = Blueprint('post', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@post_routes.route('/', methods=['POST'])
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
            user_id=current_user.id,
            text=form.data['text'],
            image_link=form.data['image_link'],
            created_at=form.data['created_at'],
            edited_at=form.data['edited_at'],
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@post_routes.route('/')
@login_required
def read_posts():
    """
    Read posts.
    """

    my_posts = Post.query.filter(Post.user_id == current_user.id).all()

    return {'posts': [post.to_dict() for post in my_posts]}
