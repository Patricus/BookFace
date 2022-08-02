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

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'text': self.text,
            'created_at': self.created_at,
            'edited_at': self.edited_at,
        }
