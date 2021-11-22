"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ...
    """

    NONE = 0x0
    BRAVERy = 0x1
    BRILLIANCE = 0x2
    BALANCE = 0x3

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
