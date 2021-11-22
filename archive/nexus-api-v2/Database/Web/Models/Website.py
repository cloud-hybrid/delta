"""
...
"""

import enum

from . import *

import Database.SQL as SQL
import Database.Web.Models.Base as Base

class Protocol(str, enum.Enum):
    """
    ... Enum where members are also (and must be) strings
    """

    def __new__(cls, *values):
        if len(values) > 3:
            raise TypeError("too many arguments for str(): %r" % (values, ))
        if len(values) == 1:
            # it must be a string
            if not isinstance(values[0], str):
                raise TypeError("%r is not a string" % (values[0], ))
        if len(values) >= 2:
            # check that encoding argument is a string
            if not isinstance(values[1], str):
                raise TypeError("encoding must be a string, not %r" % (values[1], ))
        if len(values) == 3:
            # check that errors argument is a string
            if not isinstance(values[2], str):
                raise TypeError("errors must be a string, not %r" % (values[2]))
        value = str(*values)
        member = str.__new__(cls, value)
        member._value_ = value
        return member

    __str__ = str.__str__

import Database.Web.Models.Breadcrumb
import Database.Web.Models.Route

class Table(SQL.Base, Base.Table):
    """
    Primary Table Type
    """

    __tablename__ = table = __module__.split(".").pop()

    Name: String = Column(
        key = "Name",
        name = "Name",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Protocol: String = Column(
        key = "Protocol",
        name = "Protocol",
        type_ = Enumeration(Protocol),
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Breadcrumbs = Relationship(Database.Web.Models.Breadcrumb.Table, cascade = "all, delete-orphan")
    Routes = Relationship(Database.Web.Models.Route.Table, cascade = "all, delete-orphan")

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
