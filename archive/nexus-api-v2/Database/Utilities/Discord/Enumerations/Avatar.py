"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ...
    """

    BLURPLE     = 0x0
    GRAY        = 0x1
    GREEN       = 0x2
    ORANGE      = 0x3
    RED         = 0x4

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
