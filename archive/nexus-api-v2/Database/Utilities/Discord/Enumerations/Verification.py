"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ...
    """

    NONE = 0x0
    LOW = 0x1
    MEDIUM = 0x2
    HIGH = 0x3
    EXTREME = 0x4

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
