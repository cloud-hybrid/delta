"""
...
"""

from . import *

import Database.SQL as SQL
import Database.Web.Models.Base as Base

class Table(SQL.Base, Base.Table):
    """
    Child Table Type
    - Child -> Many-to-One
    - Parent -> One-to-Many

    location?: H.Location | undefined;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;
    render?: ((props: RouteComponentProps<Params>) => React.ReactNode) | undefined;
    children?: ((props: RouteChildrenProps<Params>) => React.ReactNode) | React.ReactNode | undefined;
    path?: Path | readonly Path[] | undefined;
    exact?: boolean | undefined;
    sensitive?: boolean | undefined;
    strict?: boolean | undefined;
    """

    __tablename__ = "Website" + "-" + __module__.split(".").pop()

    Path: String = Column(
        key = "Path",
        name = "Path",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Location: Optional[String] = Column(
        key = "Location",
        name = "Location",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

    Exact: Boolean = Column(
        key = "Exact",
        name = "Exact",
        type_ = Boolean,
        index = False,
        quote = True,
        unique = False,
        nullable = False,
        primary_key = False,
        autoincrement = False,
        default = False
    )

    Sensitive: Boolean = Column(
        key = "Sensitive",
        name = "Sensitive",
        type_ = Boolean,
        index = False,
        quote = True,
        unique = False,
        nullable = False,
        primary_key = False,
        autoincrement = False,
        default = False
    )

    Strict: Boolean = Column(
        key = "Strict",
        name = "Strict",
        type_ = Boolean,
        index = False,
        quote = True,
        unique = False,
        nullable = False,
        primary_key = False,
        autoincrement = False,
        default = False
    )

    Association = Column(
        Foreign("Website.ID"),
        name = "Website-Foreign-Key"
    )

    # Website = Relationship("Website",
    #     back_populates = "Breadcrumbs"
    # )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
