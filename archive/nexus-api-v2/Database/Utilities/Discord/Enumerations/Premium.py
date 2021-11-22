"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ...
    """

    NONE = 0x0
    CLASSIC = 0x1
    NITRO = 0x2

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
