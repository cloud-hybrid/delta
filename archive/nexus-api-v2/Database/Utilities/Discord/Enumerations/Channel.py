"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ...
    """

    TEXT = 0x0
    PRIVATE = 0x1
    VOICE = 0x2
    GROUP = 0x3
    CATEGORTY = 0x4
    NEWS = 0x5
    STORE = 0x6

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
