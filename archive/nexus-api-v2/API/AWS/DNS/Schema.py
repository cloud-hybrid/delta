from Model import *

from enum import Enum

TLD = {
    0: "url-list.com",
    1: "social-url.com",
    2: "social-url.link",
    3: "socials.name"
}

class Meta(Model):
    """
    ...
    """

    Data: dict = None

class Enumeration(str, Enum):
    @classmethod
    def MRO(cls) -> List[str]:
        """
        ...
        """

        return [Index for Index in
            cls.__members__.keys()
        ]

class ID(Enumeration):
    _ = "Z062169438ARKPJ0QLEG5" # ... "url-list.com": "Z062169438ARKPJ0QLEG5"
    __ = "Z0903881WW4VJX06O83" # ... "social-url.com" "Z0903881WW4VJX06O83"
    ___ = "Z07370352I7Q5NXRZZQLH" # ... "social-url.link": "Z07370352I7Q5NXRZZQLH"
    ____ = "Z0730147BDV3KR69STTA" # ... "socials.name": "Z0730147BDV3KR69STTA"

class CRUD(Enumeration):
    CREATE = "CREATE"
    DELETE = "DELETE"
    UPSERT = "UPSERT"

class Record(Enumeration):
    SOA = "SOA"
    A = "A"
    TXT = "TXT"
    NS = "NS"
    CNAME = "CNAME"
    MX = "MX"
    NAPTR = "NAPTR"
    PTR = "PTR"
    SRV = "SRV"
    SPF = "SPF"
    AAAA = "AAAA"
    CAA = "CAA"
    DS = "DS"

class Region(Enumeration):
    us_east_one = 'us-east-1'
    us_east_two = 'us-east-2'
    use_west_one = 'us-west-1'
    use_west_two = 'us-west-2'
    ca_central_one = 'ca-central-1'
    eu_west_one = 'eu-west-1'
    eu_west_two = 'eu-west-2'
    eu_west_three = 'eu-west-3'
    eu_central_one = 'eu-central-1'
    ap_southeast_one = 'ap-southeast-1'
    ap_southeast_two = 'ap-southeast-2'
    ap_northeast_one = 'ap-northeast-1'
    ap_northeast_two = 'ap-northeast-2'
    ap_northeast_three = 'ap-northeast-3'
    eu_north_one = 'eu-north-1'
    sa_east_one = 'sa-east-1'
    cn_north_one = 'cn-north-1'
    cn_northwest_one = 'cn-northwest-1'
    ap_east_one = 'ap-east-1'
    me_south_one = 'me-south-1'
    ap_south_one = 'ap-south-1'
    af_south_one = 'af-south-1'
    eu_south_one = 'eu-south-1'

class Priority(Enumeration):
    PRIMARY = "PRIMARY"
    SECONDARY = "SECONDARY"

class Geolocation(Model):
    Continent: String = "String"
    Country: String = "String"
    Subdivision: String = "String"

    __mapping__ = {
        "Continent": "ContinentCode",
        "Country": "CountryCode",
        "Subdivision": "SubdivisionCode"
    }

class Live(Integer):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value):
        if not isinstance(value, Integer):
            raise TypeError("TTL !:= Valid Type")
        elif value < 60:
            raise ValueError("TTL Must be Greater than or Equal to 60 Seconds")
        else: return Integer(value)

class IDs(String):
    Map = {
        "url-list.com": "Z062169438ARKPJ0QLEG5",
        "social-url.com": "Z0903881WW4VJX06O83",
        "social-url.link": "Z07370352I7Q5NXRZZQLH",
        "socials.name": "Z0730147BDV3KR69STTA"
    }

    __values__ = [
        "Z062169438ARKPJ0QLEG5",
        "Z0903881WW4VJX06O83",
        "Z07370352I7Q5NXRZZQLH",
        "Z0730147BDV3KR69STTA"
    ]

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value):
        if not isinstance(value, String):
            raise TypeError("Zone-ID !:= Valid Type")
        elif value not in cls.__values__:
            raise ValueError("Hosted Zone-ID !:= Valid Zone")
        else: return value

class Create(Model):
    Zone: ID
    Name: String
    Assignment: String

    Action: CRUD    = CRUD.CREATE
    TTL:    Live    = Live(60)
    Type:   Record  = Record.A

    Comment: Optional[String] = ""
