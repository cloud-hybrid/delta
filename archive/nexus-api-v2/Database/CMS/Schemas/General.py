"""
...
"""

from . import *

__module__ = __name__


class Base(Scheme):

    Title: String = Field(None, alias="Title")
    Author: String = Field(None, alias="Author")
    AuthorID: String = Field(None, alias="Author-ID")
    Content: String = Field(None, alias="Content")
    ContentID: String = Field(None, alias="Content-ID")
    Type: String = Field(None, alias="Type")
    Tags: String = Field(None, alias="Tags")

    class Config(Configuration):
        title = "{0}-{1}".format("CMS", __module__.split(".").pop())


class Create(Base):
    class Config(Base.Config):
        title = Base.Config.title + "-" + "Create"


class Update(Base):
    class Config(Base.Config):
        title = Base.Config.title + "-" + "Update"


class Delete(Base):
    ContentID: String = Field(None, alias="Content-ID")
    ID: String = Field("{0}".format(UID()), alias="Record-ID")
    Creation: Date = Field(None, alias="Record-Creation-Timestamp")
    Modification: Optional[Date] = Field(None, alias="Record-Modification-Timestamp")
    Deletion: Optional[Date] = Field(None, alias="Record-Deletion-Timestamp")

    class Config(Base.Config):
        title = Base.Config.title + "-" + "Delete"


class Schema(Base):
    ID: String = Field("{0}".format(UID()), alias="Record-ID")
    Creation: Date = Field(None, alias="Record-Creation-Timestamp")
    Modification: Optional[Date] = Field(None, alias="Record-Modification-Timestamp")
    Deletion: Optional[Date] = Field(None, alias="Record-Deletion-Timestamp")

    class Config(Base.Config):
        title = Base.Config.title + "-" + "Schema"
