from app.models import db, Post


# Adds demo posts, you can add other posts here if you want
def seed_posts():
    post = Post(
        user_id=2,
        text="Exciting News! I'm thrilled to announce my new career as a Software Developer!\nI'm turning my passion for software development into a thriving profession. From designing user interfaces to building applications, I'm ready to create innovative solutions in this dynamic field.\nI'm committed to continuous learning and staying ahead of emerging trends. If you are in the tech industry, I'd love to hear from you. Let's connect! Here's to new beginnings, innovation, and excellence in the world of software development!\n#SoftwareDevelopment #NewBeginnings #PassionToProfession",
        created_at='2022-10-10 10:10:10',
        edited_at='2022-10-10 10:10:10',
        image_link='https://bookface-site.s3.amazonaws.com/fa51927a64f24270a59f84b6eb2dc489.jpg')

    db.session.add(post)

    post = Post(
        user_id=3,
        text="Guess who just ran their first marathon? This girl! It was tough, but crossing that finish line was an incredible feeling. #MarathonRunner",
        created_at='2023-1-9 10:10:10',
        edited_at='2023-1-9 10:10:10',
        image_link='')

    db.session.add(post)

    post = Post(
        user_id=2,
        text="Spent the weekend exploring a new hiking trail and enjoying the breathtaking views. Nature never fails to amaze me!",
        created_at='2022-11-1 10:10:10',
        edited_at='2022-11-1 10:10:10',
        image_link='')

    db.session.add(post)

    post = Post(
        user_id=3,
        text="Exciting news! I just adopted the cutest little puppy today. Meet my new fur baby, Max! 🐶❤️",
        created_at='2022-11-1 10:10:10',
        edited_at='2022-11-1 10:10:10',
        image_link='https://bookface-site.s3.amazonaws.com/05f78ade597647958c40353e50f858a4.jpg')

    db.session.add(post)

    post = Post(
        user_id=1,
        text="Just had the most amazing vacation in a tropical paradise! 🌴☀️ Feeling refreshed and ready to take on the world!",
        created_at='2022-11-1 10:10:10',
        edited_at='2022-11-1 10:10:10',
        image_link='')

    db.session.add(post)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
