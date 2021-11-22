"""
...
"""

import typing
import operator
import functools
import dataclasses

Array = typing.Union[typing.List, typing.Tuple, typing.Container]

Reduction = functools.reduce

Integer = int
String = str
Array = tuple
Boolean = bool

@dataclasses.dataclass(unsafe_hash = True, frozen = True, order = True)
class Flag(object):
    """
    ...
    """
    
    NONE: None
    EMPLOYEE = 1 << 0
    PARTNER = 1 << 1
    HYPE_SQUAD_EVENTS = 1 << 2
    BUG_HUNTER_LEVEL_1 = 1 << 3
    HOUSE_BRAVERY = 1 << 6
    HOUSE_BRILLIANCE = 1 << 7
    HOUSE_BALANCE = 1 << 8
    EARLY_SUPPORTER = 1 << 9
    TEAM_USER = 1 << 10
    SYSTEM = 1 << 12
    BUG_HUNTER_LEVEL_2 = 1 << 14
    VERIFIED_BOT = 1 << 16
    EARLY_VERIFIED_BOT_DEVELOPER = 1 << 17
    
    @classmethod
    def Summation(cls, roles: Array) -> Integer:
        """
        Returns the Summation as an Integer.
        """
        
        return Reduction(operator.ior, roles)
    
__all__ = [
    Flag
]
