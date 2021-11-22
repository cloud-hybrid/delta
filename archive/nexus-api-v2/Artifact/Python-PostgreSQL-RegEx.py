import re
import typing
import dataclasses

Identifier = dataclasses.dataclass(order = False, unsafe_hash = True, repr = False)
Input = "postgresql://postgres:ABCDEFGHIJKLMNOPQRSTUVWXYZ@123.456.78.000:5432/Database-Name"
Pattern = r"(postgresql)(:\/\/)(\S.*)(:)(\S.*)(@)+(\d.*)+(:)+(.*\d)+(\/)+(.*\S)"

Optional = typing.Optional
Union = typing.Union

Dictionary = typing.Dict
Sequence = typing.Sequence
Tuple = typing.Tuple
List = typing.List

String = str
Boolean = bool
Integer = int
Float = float

def main():
    """
    ...
    """

    matches = re.finditer(Pattern, Input, re.MULTILINE)

    for index, match in enumerate(matches, start = 1):

        # Example) Validation for Match
        print("Match := {0} [{1}:{2}] - {3}".format(
            index, match.start(), match.end(),
            match.group()
        ))

        # Example) Enumerated Groups for Match
        for iterator in range(0, len(match.groups())):
            iterator = iterator + 1

            print("Group := {0} [{1}-{2}] - {3}".format(
                iterator, match.start(iterator), match.end(iterator),
                match.group(iterator)
            ))

@Identifier
class PostgresURI:
    """
    ...
    """

    Enumeration: Dictionary[String, Sequence[String]]

    Match: Optional[Sequence[String]]

    Username: Optional[String]
    Password: Optional[String]
    Host: Optional[String]
    Port: Optional[String]
    Database: Optional[String]

    Expression: String = Pattern

    def __init__(self, input: str = Input, *argv, **kwargs):
        matches = re.finditer(self.Expression, input, re.MULTILINE)

        enumeration = [{"Match": value} for _, value in enumerate(
            match.groups() for match in matches
        )].pop()

        self.Match = enumeration.get("Match", None)
        self.Username = self.Match[2]
        self.Password = self.Match[4]
        self.Host = self.Match[6]
        self.Port = self.Match[8]
        self.Database = self.Match[10]

        del input
        del matches
        del enumeration

if __name__ == "__main__":
    URI = PostgresURI(Input)

    print(URI.Match)
    print(URI.Username)
    print(URI.Password)
    print(URI.Host)
    print(URI.Port)
    print(URI.Database)
