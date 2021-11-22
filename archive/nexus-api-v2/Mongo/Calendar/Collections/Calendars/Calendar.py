import abc

from . import *

import Mongo.Calendar.Collections.Base as Base

class Document(Base.CRUD, abc.ABC):
    """
    ...
    """

    def __init__(self, collection: String = __name__.split(".").pop()):
        super(Document, self).__init__(collection)
