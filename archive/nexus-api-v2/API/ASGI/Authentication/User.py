"""
...
"""

from . import *

Scheme = pydantic.BaseModel

class Base(Model):
    """
    ...
    """

    Username: String
    Email: String
    Name: Optional[String] = None
    Disabled: Optional[Boolean] = None

class Record(Base):
    """
    An Established User in the Database
    """

    Password: String

class Input(Scheme):
    Username:   String
    Password:   String

    Grant:      String = "Password"

class Authorization(Scheme):
    JWT:    String

    Type:   String = "Bearer"

class Busines(Scheme):
    ID: String
    Name: String
    Type: String
    Website: String

class Department(Scheme):
    ID: String

class Data(Scheme):
    Company: Busines
    Unit: Department

class Session(Authorization):
    """
    ...
    """

    Account: Union[String, Integer, UUID]
    Server: String
    User: String

    Scopes: List[Optional[String]] = []

    Information: Data
