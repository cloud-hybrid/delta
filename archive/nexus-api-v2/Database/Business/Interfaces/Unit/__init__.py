from .. import *

import enum

Enumeration = enum.Enum
String = str

class Index(String, Enumeration):
    ID: String = "ID"
    Name: String = "Name"
