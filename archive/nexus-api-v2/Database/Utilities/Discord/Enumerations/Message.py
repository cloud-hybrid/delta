"""
...
"""

from . import *

class Type(Integer, Enumeration):
    """
    ...

    Properties:
        >>> DEFAULT = 0x0  # --> Default Message Type
        >>> RECIPIENT_ADD = 0x1  # --> Message User Add
        >>> RECIPIENT_REMOVE = 0x2 # --> Message User Remove
        >>> CALL = 0x3 # --> Call Reference to Message
        >>> CHANNEL_NAME = 0x4 # --> Update Channel Name
        >>> CHANNEL_ICON = 0x5 # --> Update Channel Icon
        >>> PINS = 0x6 # --> New Pin
        >>> MEMBER = 0x7 # --> New Member
        >>> PREMIUM = 0x8 # --> Premium Guild Subscription
        >>> TIER_1 = 0x9  # --> Premium Guild Subscription, Tier 1
        >>> TIER_2 = 0x10 # --> Premium Guild Subscription, Tier 1
        >>> TIER_3 = 0x11 # --> Premium Guild Subscription, Tier 1
        >>> FOLLOW = 0x12 # --> Additional Channel Follower
    """

    DEFAULT = 0x0  # --> Default Message Type
    RECIPIENT_ADD = 0x1  # --> Message User Add
    RECIPIENT_REMOVE = 0x2 # --> Message User Remove
    CALL = 0x3 # --> Call Reference to Message
    CHANNEL_NAME = 0x4 # --> Update Channel Name
    CHANNEL_ICON = 0x5 # --> Update Channel Icon
    PINS = 0x6 # --> New Pin
    MEMBER = 0x7 # --> New Member
    PREMIUM = 0x8 # --> Premium Guild Subscription
    TIER_1 = 0x9  # --> Premium Guild Subscription, Tier 1
    TIER_2 = 0x10 # --> Premium Guild Subscription, Tier 1
    TIER_3 = 0x11 # --> Premium Guild Subscription, Tier 1
    FOLLOW = 0x12 # --> Additional Channel Follower

    def __str__(self):
        """ String Representation of Enumeration """

        return self.name

__all__ = [
    "Type"
]
