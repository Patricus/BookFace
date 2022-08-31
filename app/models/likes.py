from .db import db


class Like(db.Model):
    __tablename__ = "likes"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id', ondelete='CASCADE'))
    comment_id = db.Column(db.Integer, db.ForeignKey(
        'comments.id', ondelete='CASCADE'))

    users = db.relationship('User', back_populates='likes')
    posts = db.relationship('Post', back_populates='likes')
    comments = db.relationship('Comment', back_populates='likes')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'comment_id': self.comment_id,
        }
