import enum
import typing
import datetime
import dataclasses

String = str
Boolean = bool
Integer = int

Unique = enum.unique

General = typing.Any
List = typing.List

Enumeration = enum.Enum

Date = datetime.datetime

Union = typing.Union

Email = String

Optional = typing.Optional

@dataclasses.dataclass
class User:
    """
    ...
    """

    Username: Optional[String]

    Email: Optional[String]

    Preferred: Optional[String]

    Active: Optional[Boolean]
