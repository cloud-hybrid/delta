import yaml
import json
import typing
import functools
import enum
import dataclasses
import pprint

Tuple = tuple
String = str
Integer = int
Boolean = bool
List = list

Any = typing.Any
Optional = typing.Optional
Dictionary = typing.OrderedDict

Type = dataclasses.dataclass(unsafe_hash = True)

@enum.unique
class Types(str, enum.Enum):
    String = "String"
    Integer = "Integer"
    Boolean = "Boolean"

@Type
class Parameter:
    Options: List
    Secret: Boolean
    Type: Types
    Value: Any

    def __repr__(self) -> String:
        return JSON.stringify(self)

Parameters = List[Parameter]

@Type
class Configuration:
    Organization: Parameter
    Resource: Parameter
    Service: Parameter
    Name: Parameter
    Environment: Parameter

    def __repr__(self) -> String:
        return JSON.stringify(self)

class JSON:
    Options = {
        "skipkeys": False,
        "ensure_ascii": True,
        "check_circular": True,
        "allow_nan": True,
        "indent": 4,
        "separators": (", ", ": "),
        "default": None,
        "sort_keys": True
    }

    @classmethod
    def stringify(cls, Object: object) -> str:
        """
        Serialize Python Object into JSON-Formatted String.
        """

        try:
            return json.dumps(Object, **cls.Options)
        except TypeError as Error:
            if type(Object) == type([]):
                    array = []
                    for item in Object:
                        array.append(cls.serialize(cls.stringify(vars(item))))
                    return cls.stringify(array)
            else:
                return json.dumps(vars(Object), **cls.Options)

    @classmethod
    def keys(cls, Data: dict) -> list:
        """
        Dictionary Object Key(s) Shallow Filter.
        """

        return [*filter((lambda _: _), Data.keys())]

    @classmethod
    def values(cls, Data: dict) -> list:
        """
        Dictionary Object Value(s) Shallow Filter.
        """

        return [*filter((lambda _: _), Data.values())]

    @classmethod
    def serialize(cls, Input: String) -> Dictionary:
        """
        Serialize JSON String into Python Ordered-Dictionary.
        """

        return {**Dictionary(json.loads(Input))}

# File = open("Vault.YAML", "r")

# Content = yaml.safe_load(File)
#
# pprint.pprint(Content)
#
# print("{0}".format(Configuration(**Content)))

YAML = open("Value.YAML", "r")

Content = yaml.safe_load(YAML)

print(Content.get("Value").get("Evaluation").format("Test").strip())
