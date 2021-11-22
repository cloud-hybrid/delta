"""
...
"""

from . import *

class Interface(Request):
    """
    ...
    """

    Route = "Date"

    Application = ASGI.Application

    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, Route
        ), tags = Request.Tags + [Route]
    )

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

    @staticmethod
    @Generator.get("")
    async def Date():
        """
        # Date API #
        """

        Time = Date.now()

        return JSON({
            "Stamp": Time.strftime("%d-%B-%Y"),
            "Format": R"%d-%B-%Y",
            "Day": "{0}".format(
                Integer(Today().split("-")[0])
            ),
            "Month": "{0}".format(
                String(Today().split("-")[1])
            ),
            "Year": "{0}".format(
                Integer(Today().split("-")[2])
            ),
            "String": "{0} {1}, {2}".format(
                Integer(Today().split("-")[0]),
                String(Today().split("-")[1]),
                Integer(Today().split("-")[2])
            )
        })

    @staticmethod
    @Generator.get("/ISO/Day",
        name = "Current ISO-Calendar Day",
        response_model = None,
        responses = Request.Responses
    )
    async def ISO(T: Type = Query(Type.Default, alias = "Type")):
        """ ...  """

        return T.cast(Date.today().isoweekday())

    @staticmethod
    @Generator.get("/ISO/Week",
        name = "Current ISO-Calendar Week",
        response_model = None,
        # responses = Request.Responses
    )
    async def ISO(T: Type = Query(Type.Default, alias = "Type")):
        """ ...  """

        return T.cast(Date.today().isocalendar()[1])

    @staticmethod
    @Generator.get("/ISO/Year",
        name = "Current ISO-Calendar Year",
        response_model = None,
        # responses = Request.Responses
    )
    async def ISO(T: Type = Query(Type.Default, alias = "Type")):
        """ ...  """

        return T.cast(Date.today().isocalendar()[0])

    @staticmethod
    @Generator.get("/ISO",
        name = "Current ISO Calendar",
        response_model = None,
        responses = Request.Responses
    )
    async def ISO():
        """ ...  """

        return Date.today().isocalendar()

    @staticmethod
    @Generator.get("/Week",
        name = "Current Week Number",
        response_model = None,
        responses = Request.Responses
    )
    async def ISO(T: Type = Query(Type.Default, alias = "Type")):
        """ ...  """

        return T.cast(Date.today().isoweekday())

    @staticmethod
    @Generator.get("/Day",
        name = "Current Day as Integer",
        response_model = None,
        # responses = Request.Responses
    )
    async def ISO(T: Type = Query(Type.Default.value, alias = "Type")):
        """ ...  """

        return T.cast(Date.today().weekday())

Interface.Application.API.include_router(Interface.Generator)

__all__ = [
    "Interface"
]
