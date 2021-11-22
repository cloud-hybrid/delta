"""
Flag                    Value           Description                                                 Channel-Type
CREATE_INSTANT_INVITE   0x00000001      Allows creation of instant invites	                        T, V
KICK_MEMBERS*           0x00000002      Allows kicking members
BAN_MEMBERS*            0x00000004      Allows banning members
ADMINISTRATOR*          0x00000008      Allows all permissions and bypasses channel permission
                                            overwrites.
MANAGE_CHANNELS*        0x00000010      Allows management and editing of channels	                T, V
MANAGE_GUILD*           0x00000020      Allows management and editing of the guild
ADD_REACTIONS           0x00000040      Allows for the addition of reactions to messages	        T
VIEW_AUDIT_LOG          0x00000080      Allows for viewing of audit logs
PRIORITY_SPEAKER        0x00000100      Allows for using priority speaker in a voice channel	    V
STREAM                  0x00000200      Allows the user to go live	                                V
VIEW_CHANNEL            0x00000400      Allows guild members to view a channel, which includes      T, V
                                            reading messages in text channels
SEND_MESSAGES           0x00000800      Allows for sending messages in a channel	                T
SEND_TTS_MESSAGES       0x00001000      Allows for sending of /tts messages	                        T
MANAGE_MESSAGES*        0x00002000      Allows for deletion of other users messages	                T
EMBED_LINKS             0x00004000      Links sent by users with this permission will be            T
                                            auto-embedded
ATTACH_FILES            0x00008000      Allows for uploading images and files	                    T
READ_MESSAGE_HISTORY    0x00010000      Allows for reading of message history	                    T
MENTION_EVERYONE        0x00020000      Allows for using the @everyone tag to notify all users in   T
                                            a channel, and the @here tag to notify all online users
                                            in a channel
USE_EXTERNAL_EMOJIS     0x00040000      Allows the usage of custom emojis from other servers	    T
VIEW_GUILD_INSIGHTS     0x00080000      Allows for viewing guild insights
CONNECT                 0x00100000      Allows for joining of a voice channel	                    V
SPEAK                   0x00200000      Allows for speaking in a voice channel	                    V
MUTE_MEMBERS            0x00400000      Allows for muting members in a voice channel	            V
DEAFEN_MEMBERS          0x00800000      Allows for deafening of members in a voice channel	        V
MOVE_MEMBERS            0x01000000      Allows for moving of members between voice channels	        V
USE_VAD                 0x02000000      Allows for using voice-activity-detection in a voice        V
                                            channel
CHANGE_NICKNAME         0x04000000      Allows for modification of own nickname
MANAGE_NICKNAMES        0x08000000      Allows for modification of other users nicknames
MANAGE_ROLES*           0x10000000      Allows management and editing of roles	                    T, V
MANAGE_WEBHOOKS*        0x20000000      Allows management and editing of webhooks	                T, V
MANAGE_EMOJIS*          0x40000000      Allows management and editing of emojis

"""

import typing
import operator
import functools
import dataclasses

Array = typing.Union[typing.List, typing.Tuple, typing.Container]

Reduction = functools.reduce

Integer = int
String = str
Array = tuple
Boolean = bool

@dataclasses.dataclass(unsafe_hash = True, frozen = True, order = True)
class Flag(object):
    """
    https://discord.com/developers/docs/topics/permissions

    (*) These permissions require the owner account to use two-factor authentication
        when used on a guild that has server-wide 2FA enabled.

    Note that these internal permission names may be referred to differently by
        the Discord client. For example, "Manage Permissions" refers to MANAGE_ROLES,
        "Read Messages" refers to VIEW_CHANNEL, and "Use Voice Activity" refers to
        USE_VAD.

    Note -- the `@everyone` role has the same ID as the guild the object belongs
        to.
    """

    CREATE_INSTANT_INVITE = 0x00000001
    ADD_REACTIONS = 0x00000040
    VIEW_AUDIT_LOG = 0x00000080
    PRIORITY_SPEAKER = 0x00000100
    STREAM = 0x00000200
    VIEW_CHANNEL = 0x00000400
    SEND_MESSAGES = 0x00000800
    SEND_TTS_MESSAGES = 0x00001000
    EMBED_LINKS = 0x00004000
    ATTACH_FILES = 0x00008000
    READ_MESSAGE_HISTORY = 0x00010000
    MENTION_EVERYONE = 0x00020000
    USE_EXTERNAL_EMOJIS = 0x00040000
    VIEW_GUILD_INSIGHTS = 0x00080000
    CONNECT = 0x00100000
    SPEAK = 0x00200000
    MUTE_MEMBERS = 0x00400000
    DEAFEN_MEMBERS = 0x00800000
    MOVE_MEMBERS = 0x01000000
    USE_VAD = 0x02000000
    CHANGE_NICKNAME = 0x04000000
    MANAGE_NICKNAMES = 0x08000000

    # ---------------------------------
    # --> Duel Auth Rec
    # ---------------------------------

    KICK_MEMBERS = 0x00000002

    BAN_MEMBERS = 0x00000004

    ADMINISTRATOR = 0x00000008

    MANAGE_CHANNELS = 0x00000010
    MANAGE_GUILD = 0x00000020
    MANAGE_MESSAGES = 0x00002000
    MANAGE_ROLES = 0x10000000
    MANAGE_WEBHOOKS = 0x20000000
    MANAGE_EMOJIS = 0x40000000

    DEFAULT = 0

    __dict__ = {
        "CREATE_INSTANT_INVITE": CREATE_INSTANT_INVITE,
        "ADD_REACTIONS": ADD_REACTIONS,
        "VIEW_AUDIT_LOG": VIEW_AUDIT_LOG,
        "PRIORITY_SPEAKER": PRIORITY_SPEAKER,
        "STREAM": STREAM,
        "VIEW_CHANNEL": VIEW_CHANNEL,
        "SEND_MESSAGES": SEND_MESSAGES,
        "SEND_TTS_MESSAGES": SEND_TTS_MESSAGES,
        "EMBED_LINKS": EMBED_LINKS,
        "ATTACH_FILES": ATTACH_FILES,
        "READ_MESSAGE_HISTORY": READ_MESSAGE_HISTORY,
        "MENTION_EVERYONE": MENTION_EVERYONE,
        "USE_EXTERNAL_EMOJIS": USE_EXTERNAL_EMOJIS,
        "VIEW_GUILD_INSIGHTS": VIEW_GUILD_INSIGHTS,
        "CONNECT": CONNECT,
        "SPEAK": SPEAK,
        "MUTE_MEMBERS": MUTE_MEMBERS,
        "DEAFEN_MEMBERS": DEAFEN_MEMBERS,
        "MOVE_MEMBERS": MOVE_MEMBERS,
        "USE_VAD": USE_VAD,
        "CHANGE_NICKNAME": CHANGE_NICKNAME,
        "MANAGE_NICKNAMES": MANAGE_NICKNAMES,

        "KICK_MEMBERS": KICK_MEMBERS,
        "BAN_MEMBERS": BAN_MEMBERS,
        "ADMINISTRATOR": ADMINISTRATOR,
        "MANAGE_CHANNELS": MANAGE_CHANNELS,
        "MANAGE_GUILD": MANAGE_GUILD,
        "MANAGE_MESSAGES": MANAGE_MESSAGES,
        "MANAGE_ROLES": MANAGE_ROLES,
        "MANAGE_WEBHOOKS": MANAGE_WEBHOOKS,
        "MANAGE_EMOJIS": MANAGE_EMOJIS,

        "DEFAULT": 0
    }

    @classmethod
    def Summation(cls, roles: Array) -> Integer:
        """
        Usage: Compute a User's Permissions through BitWise Summation of
            their assigned role(s); function can be useful during the role
            assignment of a new user.

        Returns the Summation as an Integer.
        """

        return Reduction(operator.ior, roles)

    @classmethod
    def Permittable(cls, roles: Array, Target: Integer) -> Boolean:
        """
        Return True or False by testing a user's given `roles` as input against
        a `Target` Permission's Flag; i.e. *is user.permissions permitted
        for `Flag.Administrator` --> True || False.

        Example)
            >>> print(Flag.Permittable([Flag.SPEAK, Flag.SEND_MESSAGES], Flag.STREAM))
        """

        return True if cls.Summation(roles) & Target == Target else False

__all__ = [
    Flag
]


if __name__ == "__main__":
    print(Flag.Summation([Flag.MANAGE_NICKNAMES, Flag.MANAGE_GUILD]))
