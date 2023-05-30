from app.models import db, Friend


# Adds demo friends, you can add other friends here if you want
def seed_friends():
    friend = Friend(
        user_id=2,
        friend_id=1,
        accepted=True)

    friend2 = Friend(
        user_id=2,
        friend_id=3,
        accepted=True)

    friend3 = Friend(
        user_id=1,
        friend_id=3,
        accepted=True)

    db.session.add(friend)
    db.session.add(friend2)
    db.session.add(friend3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_friends():
    db.session.execute('TRUNCATE friends RESTART IDENTITY CASCADE;')
    db.session.commit()
