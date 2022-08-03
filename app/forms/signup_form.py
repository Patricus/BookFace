from flask_wtf import FlaskForm
from wtforms import StringField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from datetime import datetime


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def age_check(form, field):
    # Checking if username is already in use
    birthday = datetime(field.data)
    now = datetime.now()
    if now - birthday < 13:
        raise ValidationError('Must be over 13.')


# def not_null(form, field):
#     # Checking for null
#     birthday = field.data
#     print(f"\n\n\n\n\n\n\n\n\ {birthday} \n\n\n\n\n")
#     if birthday == null:
#         return ValidationError("Birthday is required.")


class SignUpForm(FlaskForm):
    firstName = StringField(
        'first_name', validators=[DataRequired()])
    lastName = StringField(
        'last_name', validators=[DataRequired()])
    email = StringField('email', validators=[
                        DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    birthday = StringField('birthday', validators=[DataRequired()])
