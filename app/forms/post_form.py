from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from datetime import datetime


# def not_null(form, field):
#     # Checking for null
#     birthday = field.data
#     print(f"\n\n\n\n\n\n\n\n\ {birthday} \n\n\n\n\n")
#     if birthday == null:
#         return ValidationError("Birthday is required.")


class PostForm(FlaskForm):
    text = TextField(
        'text', validators=[DataRequired()])
    image_link = StringField('image_link')
    created_at = StringField('created_at', default=datetime.now())
    edited_at = StringField('edited_at', default=datetime.now())
