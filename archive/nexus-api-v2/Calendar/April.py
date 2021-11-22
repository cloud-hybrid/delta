#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

from . import *

"""
Auto-Generated Python Module - April

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

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "April" + "-" + "Day"

class Days(Scheme):
    """
    A Schema Representation of the Days in April, 2021
    """

    First: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 13,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 13, 4),
            Value = 1
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Second: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 13,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 13, 5),
            Value = 2
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Third: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 13,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 13, 6),
            Value = 3
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Fourth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 14,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 13, 7),
            Value = 4
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Fifth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 14,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 14, 1),
            Value = 5
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Sixth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 14,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 14, 2),
            Value = 6
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Seventh: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 14,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 14, 3),
            Value = 7
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Eighth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 14,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 14, 4),
            Value = 8
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Ninth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 14,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 14, 5),
            Value = 9
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Tenth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 14,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 14, 6),
            Value = 10
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Eleventh: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 15,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 14, 7),
            Value = 11
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Twelveth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 15,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 15, 1),
            Value = 12
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Thirteenth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 15,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 15, 2),
            Value = 13
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Fourteenth: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 15,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 15, 3),
            Value = 14
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Fifteenth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 15,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 15, 4),
            Value = 15
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Sixteenth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 15,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 15, 5),
            Value = 16
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Seventeenth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 15,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 15, 6),
            Value = 17
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Eighteenth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 16,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 15, 7),
            Value = 18
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Nineteenth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 16,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 16, 1),
            Value = 19
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Twentyth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 16,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 16, 2),
            Value = 20
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentyFirst: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 16,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 16, 3),
            Value = 21
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentySecond: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 16,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 16, 4),
            Value = 22
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentyThird: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 16,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 16, 5),
            Value = 23
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentyFourth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 16,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 16, 6),
            Value = 24
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentyFifth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 17,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 16, 7),
            Value = 25
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentySixth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 17,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 17, 1),
            Value = 26
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentySeventh: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 17,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 17, 2),
            Value = 27
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentyEighth: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 17,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 17, 3),
            Value = 28
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    twentyNinth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 17,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 17, 4),
            Value = 29
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    Thirtieth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 17,
            Month = ("April", "Apr", 4),
            ISO = ("2021", 17, 5),
            Value = 30
        ), description = "Day Schema Representation for Date in April, 2021"
    )

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "April" + "-" + "Days"

class Month(Scheme):
    """
    A Schema Representation of April in the Year 2021
    """

    Year: Integer = Field(default_factory = lambda: datetime.date.today().year)
    Canonical: String = Field(default = "April", description = "Canonical Name for April")
    Triple: Tuple[String, Integer, Integer] = Field(default = (April, 4, 30))

    Dates: Days = Days()

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "April"

__all__ = [
    "Day",
    "Days",
    "Month"
]
