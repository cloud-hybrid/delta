from Model import *

class Storage(enum.Enum):
    Standard:    String = "STANDARD"
    Infrequent:  String = "REDUCED_REDUNDANCY"
    Intelligent: String = "INTELLIGENT_TIERING"
    Zone:        String = "ONEZONE_IA"
    Glacier:     String = "GLACIER"
    Deep:        String = "DEEP_ARCHIVE"

class File(Model):
    """
    ...
    """

    Key: String
    Modified: Optional[datetime.datetime]
    Size: Integer

    Class: Storage

    __mapping__ = {
        "Modified": "LastModified",
        "Class": "StorageClass"
    }

class Meta(Model):
    """
    ...
    """

    Data: dict = None

class Upload(Model):
    """
    ...
    """

    Status:     str = "Complete"
    Return:     int = 0
    Error:      int = None
