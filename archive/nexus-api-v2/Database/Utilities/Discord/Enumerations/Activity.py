"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ...
    """

    UNKNOWN = 0x0
    PLAYING = 0x1
    STREAMING = 0x2
    LISTENING = 0x3
    WATCHING = 0x4
    COMPETING = 0x5

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
