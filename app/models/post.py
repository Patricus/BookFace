from .db import db


class Post(db.Model):
    __tablename__ = "posts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    text = db.Column(db.Text, nullable=False)
    image_link = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.String(255), nullable=False)
    edited_at = db.Column(db.String(255), nullable=False)

    users = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='posts',
                               cascade='all, delete-orphan', passive_deletes=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'text': self.text,
            'image_link': self.image_link,
            'created_at': self.created_at,
            'edited_at': self.edited_at,
        }
