"""
...
"""

from . import *

import Database.CMS.Models.Base as Base
from Database.Utilities.Discord.Enumerations import Channel


class Table(Base.Table, Database.SQL.Base):
    __tablename__ = "CMS-Discord"

    AuthorID: Column = Column(Foreign("Discord-User.ID"),
        key = "AuthorID",
        name = "Author-ID",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    ChannelName: Column = Column(
        key = "ChannelName",
        name = "Channel-Name",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    ChannelID: Column = Column(
        key = "ChannelID",
        name = "Channel-ID",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    ChannelType: Column = Column(
        key = "ChannelType",
        name = "Channel-Type",
        type_ = Enumeration(Channel.Type),
        index = False,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    GuildID: Column = Column(
        key = "GuildID",
        name = "Guild-ID",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )


Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]