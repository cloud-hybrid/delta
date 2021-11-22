import typing
import datetime
import pydantic

import sqlalchemy

import pydantic.typing
import pydantic.networks

Union = typing.Union

Scheme = pydantic.BaseModel

Requirement = pydantic.Required

Optional = pydantic.typing.Optional

Array = pydantic.typing.List

V4IP = pydantic.networks.IPv4Address
V4Interface = pydantic.networks.IPv4Interface
V4Network = pydantic.networks.IPv4Network

V6IP = pydantic.networks.IPv6Address
V6Interface = pydantic.networks.IPv6Interface
V6Network = pydantic.networks.IPv6Network

Secret = pydantic.SecretStr

Data = pydantic.Json

Any = pydantic.typing.Any

Stamp = datetime.datetime.utcnow

Email = str

Integer = int
String = str
Boolean = bool
List = typing.List

class ISO5218(pydantic.typing.Enum):
    """
    ISO/IEC 5218 - Gender Codes
    """
    
    NULL = 0x0
    MALE = 0x1
    FEMALE = 0x2
    OTHER = 0x9

__all__ = [
    "Union",
    
    "Scheme",
    
    "Requirement",
    "Optional",
    
    "String",
    "Integer",
    "List",
    "Boolean",
    
    "Secret",
    "Data",
    # ... "Email",
    "Array",
    
    "V4IP",
    "V4Interface",
    "V4Network",
    
    "V6IP",
    "V6Interface",
    "V6Network",
    
    "ISO5218",
    
    "Any",
    "Stamp"
]
