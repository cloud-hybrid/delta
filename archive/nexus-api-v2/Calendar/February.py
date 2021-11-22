#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

from . import *

"""
Auto-Generated Python Module - February

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
"""

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

class Day(Scheme):
    """
    A Schema Representation of a Day
    """

    Canonical: String = Field(..., description = "Common-Name")
    Week: Integer = Field(..., description = "ISO Numerical Representation")
    Month: Tuple[String, String, Integer] = Field(..., description = "Full-Name, Short-Name, ISO-Number")
    ISO: Tuple[String, Integer, Integer] = Field(..., description = "Year, ISO-Week, Date")
    Value: Integer = Field(..., description = "Date-Time Numerical Representation")

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "February" + "-" + "Day"

class Days(Scheme):
    """
    A Schema Representation of the Days in February, 2021
    """

    First: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 5,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 5, 1),
            Value = 1
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Second: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 5,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 5, 2),
            Value = 2
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Third: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 5,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 5, 3),
            Value = 3
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Fourth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 5,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 5, 4),
            Value = 4
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Fifth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 5,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 5, 5),
            Value = 5
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Sixth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 5,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 5, 6),
            Value = 6
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Seventh: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 6,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 5, 7),
            Value = 7
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Eighth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 6,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 6, 1),
            Value = 8
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Ninth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 6,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 6, 2),
            Value = 9
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Tenth: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 6,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 6, 3),
            Value = 10
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Eleventh: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 6,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 6, 4),
            Value = 11
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Twelveth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 6,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 6, 5),
            Value = 12
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Thirteenth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 6,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 6, 6),
            Value = 13
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Fourteenth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 7,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 6, 7),
            Value = 14
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Fifteenth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 7,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 7, 1),
            Value = 15
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Sixteenth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 7,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 7, 2),
            Value = 16
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Seventeenth: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 7,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 7, 3),
            Value = 17
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Eighteenth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 7,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 7, 4),
            Value = 18
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Nineteenth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 7,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 7, 5),
            Value = 19
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    Twentyth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 7,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 7, 6),
            Value = 20
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentyFirst: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 8,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 7, 7),
            Value = 21
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentySecond: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 8,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 8, 1),
            Value = 22
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentyThird: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 8,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 8, 2),
            Value = 23
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentyFourth: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 8,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 8, 3),
            Value = 24
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentyFifth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 8,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 8, 4),
            Value = 25
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentySixth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 8,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 8, 5),
            Value = 26
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentySeventh: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 8,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 8, 6),
            Value = 27
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    twentyEighth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 9,
            Month = ("February", "Feb", 2),
            ISO = ("2021", 8, 7),
            Value = 28
        ), description = "Day Schema Representation for Date in February, 2021"
    )

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "February" + "-" + "Days"

class Month(Scheme):
    """
    A Schema Representation of February in the Year 2021
    """

    Year: Integer = Field(default_factory = lambda: datetime.date.today().year)
    Canonical: String = Field(default = "February", description = "Canonical Name for February")
    Triple: Tuple[String, Integer, Integer] = Field(default = (February, 2, 28))

    Dates: Days = Days()

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "February"

__all__ = [
    "Day",
    "Days",
    "Month"
]
