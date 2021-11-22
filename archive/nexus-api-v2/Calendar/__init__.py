#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

import os
import sys
import stat
import shutil
import datetime
import textwrap

from Calendar.Imports import *

OVERWRITE = False

UMASK      = ( stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR
             | stat.S_IRGRP | stat.S_IWGRP | stat.S_IXGRP
             | stat.S_IROTH |                stat.S_IXOTH )

Days = [
    "First: Day = Field",
    "Second: Day = Field",
    "Third: Day = Field",
    "Fourth: Day = Field",
    "Fifth: Day = Field",
    "Sixth: Day = Field",
    "Seventh: Day = Field",
    "Eighth: Day = Field",
    "Ninth: Day = Field",
    "Tenth: Day = Field",
    "Eleventh: Day = Field",
    "Twelveth: Day = Field",
    "Thirteenth: Day = Field",
    "Fourteenth: Day = Field",
    "Fifteenth: Day = Field",
    "Sixteenth: Day = Field",
    "Seventeenth: Day = Field",
    "Eighteenth: Day = Field",
    "Nineteenth: Day = Field",
    "Twentyth: Day = Field",
    "twentyFirst: Day = Field",
    "twentySecond: Day = Field",
    "twentyThird: Day = Field",
    "twentyFourth: Day = Field",
    "twentyFifth: Day = Field",
    "twentySixth: Day = Field",
    "twentySeventh: Day = Field",
    "twentyEighth: Day = Field",
    "twentyNinth: Day = Field",
    "Thirtieth: Day = Field",
    "thirtyFirst: Day = Field"
]

def start(year: int):
    """
    Creating an object for 1st January of that particular year
    For that we are passing three argument (1) year (2) month
    i.e 1 for january (3) date i.e 1 for starting day of
    that particular year.
    """

    date = datetime.datetime(year, 1, 1)

    return date.strftime("%A")

def leap(year: int):
    """
    - If a year is evenly divisible by 4 means having no remainder then go to next step.
        - If it is not divisible by 4. It is not a leap year. For example: 1997 is not a leap year.
    - If a year is divisible by 4, but not by 100. For example: 2012, it is a leap year.
        - If a year is divisible by both 4 and 100, go to next step.
    - If a year is divisible by 100, but not by 400. For example: 1900, then it is not a leap year.
        - If a year is divisible by both, then it is a leap year. So 2000 is a leap year.
    """

    if (year % 4) == 0:
        if (year % 100) == 0:
            if (year % 400) == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

Path = os.path.abspath(os.path.dirname(__file__))
Year = datetime.date.today().year
Leap = leap(Year)
Initial = start(Year)

Annual = [
    (("January",    1),     31),
    (("February",   2),     28 if not Leap else 29),
    (("March",      3),     31),
    (("April",      4),     30),
    (("May",        5),     31),
    (("June",       6),     30),
    (("July",       7),     31),
    (("August",     8),     31),
    (("September",  9),     30),
    (("October",    10),    31),
    (("November",   11),    30),
    (("December",   12),    31)
]

if not os.path.isfile(Path + os.sep + "LOCK") or OVERWRITE:
    # Lock = open(Path + os.sep + "LOCK", "w+")
    # Lock.write("{0}".format(Year))
    # Lock.close()

    for Month in Annual:
        Attributes = []

        File = Path + os.sep + Month[0][0] + ".py"

        Name = File.split("/").pop(-1)

        month = (Month[0][0], Month[0][-1], Month[-1])

        print("File-Target: {0}".format(Name))

        print(" - Month: {0}".format(month[0]))
        print(" - ISO-Month: {0}".format(month[1]))
        print(" - Total Days: {0}".format(month[2]))

        attributes = "\n".join(Days[0:Month[-1]]).split("\n")

        counter = 0
        for day in attributes:
            counter += 1

            Date = datetime.datetime(Year, month[1], counter)

            Attributes.append(
                (
                    "{0}("
                    + "\n" + "    " + "default = Day("
                    + "\n" + "    " + "    " + "Canonical = \"{1}\","
                    + "\n" + "    " + "    " + "Week = {2},"
                    + "\n" + "    " + "    " + "Month = (\"{3}\", \"{4}\", {5}),"
                    + "\n" + "    " + "    " + "ISO = (\"{6}\", {7}, {8}),"
                    + "\n" + "    " + "    " + "Value = {9}"
                    + "\n" + "    " + "), description = \"{10}\""
                    + "\n" + ")"
                    + "\n"
                ).format(
                    day,
                    Date.strftime("%A"),
                    int(Date.strftime("%U")),
                    Date.strftime("%B"),
                    Date.strftime("%b"),
                    month[1],
                    Date.isocalendar()[0],
                    Date.isocalendar()[1],
                    Date.isocalendar()[2],
                    counter,
                    "Day Schema Representation for Date in {0}, {1}".format(
                        month[0], Year
                    )
                )
            )

        print()

        Contents = []

        Attributes = "\n".join(Attributes)

        Contents.append(textwrap.dedent("""\
            #!/usr/bin/env python3

            # -*- Coding: UTF-8 -*- #
            # -*- System: Linux -*- #
            # -*- Usage:  *.py  -*- #

            # Owner:    Jacob B. Sanders
            # Source:   gitlab.cloud-technology.io
            # License:  BSD 3-Clause License
            
            from . import *

            \"\"\"
            Auto-Generated Python Module - {0}

                | Directive | Meaning                                                                                        | Example                        |
                |-----------|------------------------------------------------------------------------------------------------|--------------------------------|
                | %a        | Weekday as locale’s abbreviated name.                                                          | Sun, Mon, …                    |
                | %A        | Weekday as locale’s full name.                                                                 | Sunday, Monday                 |
                | %w        | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.                              | 0, 1, …, 6                     |
                | %d        | Day of the month as a zero-padded decimal number.                                              | 01, 02, …, 31                  |
                | %b        | Month as locale’s abbreviated name.                                                            | Jan, Feb, …                    |
                | %B        | Month as locale’s full name.                                                                   | January, February, …, December |
                | %m        | Month as a zero-padded decimal number.                                                         | 01, 02, …, 12                  |
                | %y        | Year without century as a zero-padded decimal number.                                          | 00, 01, …, 99                  |
                | %Y        | Year with century as a decimal number.                                                         | 0001, 0002, …, 2013, 2014, …   |
                | %H        | Hour (24-hour clock) as a zero-padded decimal number.                                          | 00, 01, …, 23                  |
                | %I        | Hour (12-hour clock) as a zero-padded decimal number.                                          | 01, 02, …, 12                  |
                | %p        | Locale’s equivalent of either AM or PM.                                                        | AM, PM, am, pm                 |
                | %M        | Minute as a zero-padded decimal number.                                                        | 00, 01, …, 59                  |
                | %S        | Second as a zero-padded decimal number.                                                        | 00, 01, …, 59                  |
                | %f        | Microsecond as a decimal number, zero-padded on the left.                                      | 000000, 000001, …, 999999      |
                | %z        | UTC offset in the form±HHMM[SS[.ffffff]] (empty string if the object is naive).                | (empty), +0000, -0400, +1030   |
                | %Z        | Time zone name (empty string if the object is naive).                                          | (empty), UTC, GMT              |
                | %j        | Day of the year as a zero-padded decimal number.                                               | 001, 002, …, 366               |
                | %U        | Week number of the year (Sunday as the first day of the week) as a zero padded decimal number. | 00, 01, …, 53                  |
                | %W        | Week number of the year (Monday as the first day of the week) as a decimal number.             | 00, 01, …, 53                  |
                | %c        | Locale’s appropriate date and time representation.                                             | Tue Aug 16 21:30:00 1988       |
                | %x        | Locale’s appropriate date representation.                                                      | 08/16/88 (None); 08/16/1988    |
                | %X        | Locale’s appropriate time representation.                                                      | 21:30:00                       |
            \"\"\"

            # =============================================================================
            # Standard Library
            # =============================================================================

            import dataclasses
            import ipaddress
            import datetime
            import enum

            # =============================================================================
            # Local Imports
            # =============================================================================

            import Calendar.Base

            # =============================================================================
            # Reference Type(s)
            # =============================================================================

            Scheme = Calendar.Base.Model

            Setup = Scheme.Configuration

            Enum = enum.Enum

            # =============================================================================
            # Class (Schema) Initialization
            # =============================================================================

            __module__ = __name__
            """.format(Month[0][0])))

        Contents.append(textwrap.dedent("""
            class Day(Scheme):
                \"\"\"
                A Schema Representation of a Day
                \"\"\"

                Canonical: String = Field(..., description = "Common-Name")
                Week: Integer = Field(..., description = "ISO Numerical Representation")
                Month: Tuple[String, String, Integer] = Field(..., description = "Full-Name, Short-Name, ISO-Number")
                ISO: Tuple[String, Integer, Integer] = Field(..., description = "Year, ISO-Week, Date")
                Value: Integer = Field(..., description = "Date-Time Numerical Representation")

                class Config(Base.Config, Setup): title = Base.Config.title + "-" + "{0}" + "-" + "Day"

            class Days(Scheme):
                \"\"\"
                A Schema Representation of the Days in {0}, {1}
                \"\"\"

            """.format(Month[0][0], Year)))

        Contents.append(textwrap.indent(Attributes, prefix = "    " * 1))
        Contents.append("\n")
        Contents.append(textwrap.indent(
            "class Config(Base.Config, Setup): title = Base.Config.title + \"-\" + \"{0}\" + \"-\" + \"Days\"".format(
                Month[0][0]), prefix = "    " * 1)) ;
        Contents.append("\n")

        Contents.append(textwrap.dedent("""
            class Month(Scheme):
                \"\"\"
                A Schema Representation of {0} in the Year {1}
                \"\"\"

                Year: Integer = Field(default_factory = lambda: datetime.date.today().year)
                Canonical: String = Field(default = \"{0}\", description = \"Canonical Name for {0}\")
                Triple: Tuple[String, Integer, Integer] = Field(default = ({2}, {3}, {4}))

                Dates: Days = Days()

                class Config(Base.Config, Setup): title = Base.Config.title + "-" + "{0}"

            __all__ = [
                "Day",
                "Days",
                "Month"
            ]
        """.format(Month[0][0],  # 0
            Year,  # 1
            month[0],  # 2
            month[1],  # 3
            month[2],  # 4
        )))

        if not os.path.isfile(File) or OVERWRITE:
            Target = open(File, "w+")

            Target.write(Contents[0])
            Target.write(Contents[1])
            Target.write(Contents[2])
            Target.write(Contents[3])
            Target.write(Contents[4])
            Target.write(Contents[5])
            Target.write(Contents[6])

            Target.close()

__all__ = [
    "JSON",
    "Scheme",
    "Union",
    "URL",
    "Requirement",
    "Optional",
    "String",
    "Integer",
    "List",
    "Boolean",
    "General",
    "Unique",
    "Corporate",
    "Secret",
    "Password",
    "Token",
    "Enumeration",
    "Industry",
    "Network",
    "Field",
    "Date",
    "UUID",
    "UID",
    "UTC",
    "Time",
    "ID",
    "Object"
]
