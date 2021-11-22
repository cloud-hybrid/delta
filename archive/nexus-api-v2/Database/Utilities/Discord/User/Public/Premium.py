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
    NITRO_CLASSIC = 1
    NITRO = 2

__all__ = [
    Flag
]
