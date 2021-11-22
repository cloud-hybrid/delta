"""
...
"""

from . import *

class Type(String, Enumeration):
    """
    ...
    """

    US_WEST = "us-west"
    US_WEST_VIP = "vip-us-west"

    US_EAST = "us-east"
    US_EAST_VIP = "vip-us-east"

    US_SOUTH = "us-south"
    US_CENTRAL = "us-central"
    EU_WEST = "eu-west"
    EU_CENTRAL = "eu-central"
    SINGAPORE = "singapore"
    LONDON = "london"
    SYDNEY = "sydney"

    AMSTERDAM = "amsterdam"
    AMSTERDAM_VIP = "vip-amsterdam"

    FRANKFURT = "frankfurt"
    BRAZIL = "brazil"
    HONGKONG = "hongkong"
    RUSSIA = "russia"
    JAPAN = "japan"
    SOUTH_AFRICA = "southafrica"
    SOUTH_KOREA = "south-korea"
    INDIA = "india"
    EUROPE = "europe"
    DUBAI = "dubai"

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
