"""
...
"""

from . import *

class Type(String, Enumeration):
    """
    ...
    """

    ONLINE = "online"
    OFFLINE = "offline"
    IDLE = "idle"
    DND = "dnd"
    DO_NOT_DISTURB = "dnd"
    INVISIBLE = "invisible"

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
