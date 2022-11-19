"""image_link nullable

Revision ID: aced1e059eed
Revises: 459f83eae0d1
Create Date: 2022-08-02 22:50:18.333555

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = 'aced1e059eed'
down_revision = '459f83eae0d1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('posts', 'image_link')
    op.add_column('posts', sa.Column('image_link', sa.VARCHAR(
        length=255), autoincrement=False, nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('posts', 'image_link')
    op.add_column('posts', sa.Column('image_link', sa.VARCHAR(
        length=255), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
