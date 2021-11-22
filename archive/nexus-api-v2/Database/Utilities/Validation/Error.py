"""
...
"""

from . import *

class Schema(Base):
    """
    ...
    """
    
    Message: Optional[String]
    Type: String = "Validation-Error"
    Traceback: String = "N/A"
    
    Response: Integer = 422
    
    class Config:
        orm_mode = True

__all__ = [
    "Schema"
]
