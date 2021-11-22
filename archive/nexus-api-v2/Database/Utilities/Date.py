"""
...
"""

from . import *

import fastapi.responses

# JSON = fastapi.responses.UJSONResponse
JSON = fastapi.responses.JSONResponse

class Interface(Base):
    """
    ...
    """

    Route = "/"

    Generator = Application.Router()

    Methods = [
        "GET", "POST", "HEAD", "CONNECT", "PUT"
    ]

    Metadata = {
        # "JWN"           : "{}".format(Settings.JWN),
        # "Author"        : Settings.Author,
        # "Company"       : Settings.Company,
        # "Shortname"     : Settings.Shortname,
        # "Directories"   : Settings.Directories,
        # "Favicons"      : Settings.Favicons,
        # "Domain"        : Settings.Domain,
        # "Application"   : Settings.Application,

        "X-Access-Token": None
    }

    def __init__(self, *argv, **kwargs):
        super(Interface, self).__init__()

    @property
    def Server(self):
        return Server(self.Settings)

    @staticmethod
    @Generator.get(Route + "Date")
    async def Date():
        """
        # Date API #
        """

        Time = Date.now()

        return JSON({
            "Day": "{0}".format(
                Integer(Datetime.strftime(Time, "%d"))
            ),
            "Month": "{0}".format(
                Datetime.strftime(Time, "%B")
            ),
            "Year": "{0}".format(
                Datetime.strftime(Time, "%Y")
            ),
            "String": "{0} {1}, {2}".format(
                Datetime.strftime(Time, "%B"),
                Integer(Datetime.strftime(Time, "%d")),
                Datetime.strftime(Time, "%Y")
            )
        })

    @property
    def Router(self):
        return self.Generator

Application.API.include_router(Interface.Generator,
    prefix = "/API",
    tags = [
        "Utility"
    ], default_response_class = JSON
)

__all__ = [
    "Interface"
]
