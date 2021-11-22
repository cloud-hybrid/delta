"""
...
"""

from . import *

import Database.SQL
import Database.AGILE.Models.Base as Base

class Table(Base.Table, Database.SQL.Base):
    """
    ...
    """

    __tablename__ = "AGILE-Update"

    Day: Column = Column(
        key = "Day",
        name = "Day",
        type_ = Integer,
        index = True,
        quote = True,
        unique = False,
        default = lambda: Day(),
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Week: Column = Column(
        key = "Week",
        name = "Week",
        type_ = Integer,
        index = True,
        quote = True,
        unique = False,
        default = lambda: ISO8601(),
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Year: Column = Column(
        key = "Year",
        name = "Year",
        type_ = Integer,
        index = True,
        quote = True,
        unique = False,
        default = lambda: Year(),
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Synopsis: Column = Column(
        key = "Synopsis",
        name = "Synopsis",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Projection: Column = Column(
        key = "Projection",
        name = "Projection",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Complication: Column = Column(
        key = "Complication",
        name = "Complication",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = "N/A",
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    # ... User: Column = Column(UUID, Foreign("User.ID"),
    # ...     key = "User",
    # ...     name = "User-Foreign-Key",
    # ...     index = True,
    # ...     quote = True,
    # ...     default = None,
    # ...     nullable = True
    # ... ); # ... URM: Relationship = Relationship("Database.User.Models.Nexus.Table")

    UID: Column = Column(UUID, Foreign("User.ID"),
        key = "UID",
        name = "UID",
        index = True,
        quote = True,
        default = None,
        nullable = True
    )

    User: Relationship = Relationship("Database.User.Models.Nexus.Table")

    # ... Discord: Column = Column(String, Foreign("Discord-User.ID"),
    # ...     key = "Discord",
    # ...     name = "Discord-User-Foreign-Key",
    # ...     index = True,
    # ...     quote = True,
    # ...     default = None,
    # ...     nullable = True
    # ... ); # ... DRM: Relationship = Relationship("Database.Discord.Models.User.Table")

    # ... Company: Column = Column(UUID, Foreign("Business-Company.ID"),
    # ...     key = "Company",
    # ...     name = "Company-Foreign-Key",
    # ...     index = True,
    # ...     quote = True,
    # ...     default = None,
    # ...     nullable = True
    # ... ); # ... CRM: Relationship = Relationship("Database.Business.Models.Company.Table")

    # ... Unit: Column = Column(UUID, Foreign("Business-Unit.ID"),
    # ...     key = "Unit",
    # ...     name = "Unit-Foreign-Key",
    # ...     index = True,
    # ...     quote = True,
    # ...     default = None,
    # ...     nullable = True
    # ... ); # ... BRM: Relationship = Relationship("Database.Business.Models.Unit.Table")

    Note: Relationship = Relationship(
        "Database.AGILE.Models.Note.Table",
        back_populates = "Assignment",
        uselist = False
    )

    Submission: Column = Column(
        key = "Submission",
        name = "Submission-Date",
        type_ = Date(timezone = True),
        index = False,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False,
        server_default = Time.now(),
    )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
