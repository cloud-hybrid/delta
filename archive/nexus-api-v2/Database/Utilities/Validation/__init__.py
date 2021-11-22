"""
...
"""

import dataclasses

import pydantic
import pydantic.types

String = pydantic.types.StrBytes
Integer = pydantic.types.PositiveInt

Base = pydantic.BaseModel
Field = pydantic.Field
Optional = pydantic.types.Optional

__all__ = [
    "String",
    "Integer",
    "Base",
    "Field",
    "Optional"
]
