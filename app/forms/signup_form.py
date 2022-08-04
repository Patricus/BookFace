from flask_wtf import FlaskForm
from wtforms import StringField
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
    if now + datetime.timedelta(days=365*13) - birthday > 0:
        raise ValidationError('Must be over 13.')

class SignUpForm(FlaskForm):
    firstName = StringField(
        'first_name', validators=[DataRequired()])
    lastName = StringField(
        'last_name', validators=[DataRequired()])
    email = StringField('email', validators=[
                        DataRequired(), Email(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    birthday = StringField('birthday', validators=[DataRequired()])
