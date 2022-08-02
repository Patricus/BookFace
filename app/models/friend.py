from .db import db


class Friend(db.Model):
    __tablename__ = "friends"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    friend_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    accepted = db.Column(db.Boolean, nullable=True)

    user1 = db.relationship('User', foreign_keys=[
        user_id, ], back_populates='friend1')
    user2 = db.relationship('User', foreign_keys=[
        friend_id], back_populates='friend2')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'friend_id': self.friend_id,
            'accepted': self.accepted,
        }
