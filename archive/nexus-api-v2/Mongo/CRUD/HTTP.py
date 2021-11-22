from . Document import *

from .. Imports import *

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    def __init__(self, collection = __name__.split(".").pop()):
        self.Request = Request

        self.Endpoint = "/".join([self.Request.Prefix, collection])

        self.Generator = self.Request.Generator(
            prefix = self.Endpoint,
            tags = ["Testing", collection]
        )

        self.CRUD = Document(collection)
