import dataclasses

import datetime as Time

Date = Time.datetime

String = str
Integer = int

@dataclasses.dataclass(init = False)
class JSON:
    Stamp: Time.datetime

    Day: String
    Month: String
    Year: String
    String: String

    Format: String = R"%d-%B-%Y"

    def __init__(self, Day = None, Month = None, Year = None, *argv, **kwargs):
        _ = Time.datetime.now()
        __ = {
            "Day": Day,
            "Month": Month,
            "Year": Year
        }

        self.Day: String = __.get("Day", "{0}".format(
            Integer(Date.strftime(_, "%d"))
        ))
        self.Month: String = __.get("Month", "{0}".format(
            Integer(Date.strftime(_, "%B"))
        ))
        self.Year: String = __.get("Year", "{0}".format(
            Integer(Date.strftime(_, "%Y"))
        ))

        self.String: String = "{0} {1}, {2}".format(
            self.Month,
            self.Day,
            self.Year
        )
