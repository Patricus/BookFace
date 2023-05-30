from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .friends import seed_friends, undo_friends
from .comments import seed_comments, undo_comments
from .likes import seed_likes, undo_likes
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()

    # Add seed functions here
    seed_users()
    seed_posts()
    seed_friends()
    seed_comments()
    seed_likes()

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    # Add undo functions here
    undo_users()
    undo_posts()
    undo_friends()
    undo_comments()
    undo_likes()
