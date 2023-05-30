from app.models import db, Comment


# Adds demo comments, you can add other comments here if you want
def seed_comments():
    comment = Comment(
        user_id=3,
        post_id=1,
        text="I'm so happy for you, I know you'll do great!",
        created_at='2022-10-10 10:10:10',
        edited_at='2022-10-10 10:10:10')

    comment2 = Comment(
        user_id=2,
        post_id=1,
        text="Thanks Jane!",
        created_at='2022-10-10 10:10:10',
        edited_at='2022-10-10 10:10:10')

    db.session.add(comment)
    db.session.add(comment2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
