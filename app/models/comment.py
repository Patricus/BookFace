from app.models.likes import Like
from .db import db


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id', ondelete='CASCADE'), nullable=False)
    text = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.String(255), nullable=False)
    edited_at = db.Column(db.String(255), nullable=False)

    users = db.relationship('User', back_populates='comments')
    posts = db.relationship('Post', back_populates='comments')
    likes = db.relationship('Like', back_populates='comments',
                            cascade='all, delete-orphan', passive_deletes=True)

    def to_dict(self):
        likes = Like.query.filter(Like.post_id == self.id).count()

        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'text': self.text,
            'created_at': self.created_at,
            'edited_at': self.edited_at,
            'likes': likes
        }
