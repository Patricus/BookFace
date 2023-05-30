from app.models import db, Like


# Adds demo likes, you can add other likes here if you want
def seed_likes():
    like = Like(
        user_id=2,
        post_id=None,
        comment_id=1)

    like2 = Like(
        user_id=3,
        post_id=1,
        comment_id=None)

    db.session.add(like)
    db.session.add(like2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
