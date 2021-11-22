#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

from . import *

"""
Auto-Generated Python Module - July

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

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "July" + "-" + "Day"

class Days(Scheme):
    """
    A Schema Representation of the Days in July, 2021
    """

    First: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 26,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 26, 4),
            Value = 1
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Second: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 26,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 26, 5),
            Value = 2
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Third: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 26,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 26, 6),
            Value = 3
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Fourth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 27,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 26, 7),
            Value = 4
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Fifth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 27,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 27, 1),
            Value = 5
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Sixth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 27,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 27, 2),
            Value = 6
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Seventh: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 27,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 27, 3),
            Value = 7
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Eighth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 27,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 27, 4),
            Value = 8
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Ninth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 27,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 27, 5),
            Value = 9
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Tenth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 27,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 27, 6),
            Value = 10
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Eleventh: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 28,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 27, 7),
            Value = 11
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Twelveth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 28,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 28, 1),
            Value = 12
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Thirteenth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 28,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 28, 2),
            Value = 13
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Fourteenth: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 28,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 28, 3),
            Value = 14
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Fifteenth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 28,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 28, 4),
            Value = 15
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Sixteenth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 28,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 28, 5),
            Value = 16
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Seventeenth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 28,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 28, 6),
            Value = 17
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Eighteenth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 29,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 28, 7),
            Value = 18
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Nineteenth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 29,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 29, 1),
            Value = 19
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Twentyth: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 29,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 29, 2),
            Value = 20
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentyFirst: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 29,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 29, 3),
            Value = 21
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentySecond: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 29,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 29, 4),
            Value = 22
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentyThird: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 29,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 29, 5),
            Value = 23
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentyFourth: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 29,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 29, 6),
            Value = 24
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentyFifth: Day = Field(
        default = Day(
            Canonical = "Sunday",
            Week = 30,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 29, 7),
            Value = 25
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentySixth: Day = Field(
        default = Day(
            Canonical = "Monday",
            Week = 30,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 30, 1),
            Value = 26
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentySeventh: Day = Field(
        default = Day(
            Canonical = "Tuesday",
            Week = 30,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 30, 2),
            Value = 27
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentyEighth: Day = Field(
        default = Day(
            Canonical = "Wednesday",
            Week = 30,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 30, 3),
            Value = 28
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    twentyNinth: Day = Field(
        default = Day(
            Canonical = "Thursday",
            Week = 30,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 30, 4),
            Value = 29
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    Thirtieth: Day = Field(
        default = Day(
            Canonical = "Friday",
            Week = 30,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 30, 5),
            Value = 30
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    thirtyFirst: Day = Field(
        default = Day(
            Canonical = "Saturday",
            Week = 30,
            Month = ("July", "Jul", 7),
            ISO = ("2021", 30, 6),
            Value = 31
        ), description = "Day Schema Representation for Date in July, 2021"
    )

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "July" + "-" + "Days"

class Month(Scheme):
    """
    A Schema Representation of July in the Year 2021
    """

    Year: Integer = Field(default_factory = lambda: datetime.date.today().year)
    Canonical: String = Field(default = "July", description = "Canonical Name for July")
    Triple: Tuple[String, Integer, Integer] = Field(default = (July, 7, 31))

    Dates: Days = Days()

    class Config(Base.Config, Setup): title = Base.Config.title + "-" + "July"

__all__ = [
    "Day",
    "Days",
    "Month"
]
