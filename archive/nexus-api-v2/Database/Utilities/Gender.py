"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ISO/IEC 5218 - Gender Codes
    """

    NULL = 0x0
    MALE = 0x1
    FEMALE = 0x2
    OTHER = 0x9

__all__ = [
    "Type"
]
