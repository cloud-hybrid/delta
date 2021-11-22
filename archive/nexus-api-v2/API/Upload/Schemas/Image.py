import enum

from . import *
from . import Base as Scheme

__module__ = __name__

Schema = Scheme.Model

class Base(Schema):
    """
    ...
    """

    class Config(Schema.Configuration): title = "Upload" + "-" + "{0}".format(__module__.split(".").pop())

class Status(Base):
    """
    ...
    """

    Code: Optional[Integer] = 200
    Message: Optional[String] = "File Successfully Uploaded"

    class Config(Base.Config): title = Base.Config.title + "-" + "Status"

class Success(Status):
    """
    ...
    """

    Code: Integer = 200
    Message: String = "File Successfully Uploaded"

    class Config(Base.Config): title = Base.Config.title + "-" + "Success"

class Failure(Status):
    """
    ...
    """

    Code: Integer = 409
    Message: String = "File Uploaded was Unsuccessful"

    class Config(Base.Config): title = Base.Config.title + "-" + "Failure"

class Extensions(String, enum.Enum):
    png = "png"
    jpeg = "jpeg"
    svg = "svg"
    jpg = "jpg"
    gif = "gif"
    psd = "psd"
    tiff = "tiff"
    bmp = "bmp"

    @classmethod
    def MRO(cls) -> List[str]:
        """
        ...
        """

        return [Index for Index in cls.__members__.keys()]

class Size(Base):
    Bytes:  float
    KB:     float
    MB:     float
    GB:     float

    class Config(Base.Config): title = Base.Config.title + "-" + "Image-Size"

class Response(Base):
    Status: Status
    Name: String
    Extension: Optional[Union[Extensions, String]] = None

    Size: Size

    class Config(Base.Config): title = Base.Config.title + "-" + "Image"
