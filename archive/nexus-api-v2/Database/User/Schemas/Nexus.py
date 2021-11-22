#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
...
"""

import fastapi

import secrets
import datetime
import dataclasses

from . import *

import Database.User.Schemas.Base

import Database.User.Schemas.Note
import Database.User.Schemas.Name
import Database.User.Schemas.Verification

import Database.Business.Schemas.Company
import Database.Business.Schemas.Unit

Configuration = Scheme.Config

__module__ = __name__

@dataclasses.dataclass()
class Types:
    Note: Database.User.Schemas.Note = Database.User.Schemas.Note
    Name: Database.User.Schemas.Name = Database.User.Schemas.Name
    Verification: Database.User.Schemas.Verification = Database.User.Schemas.Verification
    Company: Database.Business.Schemas.Company = Database.Business.Schemas.Company
    Unit: Database.Business.Schemas.Unit = Database.Business.Schemas.Unit

    Industry: Database.Business.Schemas.Industry = Database.Business.Schemas.Industry
    Website: Database.Business.Schemas.URL = Database.Business.Schemas.URL

class Base(Scheme):
    """
    ...
    """

    Username: Optional[String] = Field("Administrator", alias = "Username")
    Email: Optional[String] = Field("Engineer@Cloud-Technology.IO", alias = "Email-Address")
    Preferred: Optional[String] = Field("Name", alias = "Preferred-Name")
    Password: Optional[Secret] = Field("Kn0wledge!")
    Active: Optional[Boolean] = Field(True)
    GISO: Optional[ISO5218] = Field(0x9, alias = "Gender-Code")

    class Config(Scheme.Config): title = ".".join([__package__, "Base"])

    @classmethod
    def Example(cls):
        """
        >>> from fastapi import Body
        >>> ...
        >>> class Example(Base):
        ...     ...
        ...     class Config(Base.Config):
        ...         ...
        ...     def Example(cls):
        ...         return Body(..., example = \"\"\"
        ... {}
        ... \"\"\"): ...
        """

class Secure(Base):
    """
    ...
    """

    Username: String = Field("Null-Byte", alias = "Username")
    Email: String = Field("Engineer@Cloud-Technology.IO", alias = "Email-Address")

    Preferred: Optional[String] = Field("Null-Bot", alias = "Preferred-Name")

    Active: Boolean = Field(True)

    GISO: ISO5218 = Field(0x9, alias = "Gender-Code")

    HTML: Optional[String] = Field(None, alias = "HTML-Foreign-Key")

    class Config(Base.Config): title = ".".join([__package__, "Secure"])

class Identifier(Secure):
    ID: Union[String, UUID, Integer] = Field(..., alias = "ID")

    class Config(Base.Config): title = ".".join([__package__, "Identifier"])

class Shard(Base):
    """
    Shard(Database.User.Schemas.Nexus.Shard) - `class`
    --------------------------------------------------------

    A Sharded, Nexus-User Schema with Private, Sensitive Information Sanitized.

        Parent:
            - `Database.User.Schemas.Nexus.Schema`

        Arguments:
            - `Password` (String): `User.Password`, Raw Value.
            - `Salt` (String): `User.Salt`, Raw Value.
            - `Token` (String): `User.Token`, Raw Value.

        Attributes:
            - `Password` (Secret): `User.Password`, Sanitized Value.
            - `Salt` (Secret): `User.Salt`, Sanitized Value.
            - `Token` (Secret): `User.Token`, Sanitized Value.
    """

    ID: Union[String, UUID, Integer] = UID()

    Password: Secret = "*" * 8

    Salt: Secret = "*" * 8

    Token: Secret = "*" * 8

    Company: Optional[Database.Business.Schemas.Company.Schema] = Field(alias = "Company")
    Note: Optional[List[Database.User.Schemas.Note.Schema]] = Field(alias = "Note")

    class Config(Base.Config): title = ".".join([__package__, "Shard"])

class Token(Shard):
    """
    ...
    """

    JWT: String

    class Config(Base.Config): title = ".".join([__package__, "Token"])

class Create(Base):
    """
    ...
    """

    Verification: Types.Verification.Create
    Company: Optional[Types.Company.Create] = None
    Unit: Optional[Types.Unit.Create] = None
    Name: List[Optional[Types.Name.Create]] = None
    Note: List[Optional[Types.Note.Create]] = None

    class Config(Base.Config): title = ".".join([__package__, "Create"])

class Update(Base):
    """
    ...
    """

    ID: UUID

    class Config(Base.Config): title = ".".join([__package__, "Update"])

class Delete(Base):
    """
    ...
    """

    ID: UUID

    class Config(Base.Config): title = ".".join([__package__, "Delete"])

class Reference(Base):
    """ ... """

    ID: Union[String, UUID, Integer]

    Password: String

    Salt: String

    Token: String

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(alias = "Record-Modification-Date")

    class Config(Base.Config): title = ".".join([__package__, "Reference"])

class Schema(Base):
    """ Contains Sensitive Information """

    ID: Union[UUID, String, Integer] = UID()
    Password: Union[String, Secret] = "*" * 16
    Salt: Union[String, Secret] = "*" * 32
    Token: Optional[Union[String, Secret]] = "*" * 32

    Name: List[Optional[Types.Name.Schema]] = None
    Verification: Optional[Types.Verification.Schema] = None
    Company: Optional[Types.Company.Schema] = None
    Note: List[Optional[Types.Note.Schema]] = None

    HTML: Optional[String] = Field(None, alias = "HTML-Foreign-Key")

    class Config(Base.Config): title = ".".join([__package__, "Schema"])

class Sanitation(Schema):
    """
    Sanitation(Database.User.Schemas.Nexus.Schema) - `class`
    --------------------------------------------------------

    A Full Nexus-User Schema with Private, Senitive Information Sanitized.

        Parent:
            - `Database.User.Schemas.Nexus.Schema`

        Arguments:
            - `Password` (String): `User.Password`, Raw Value.
            - `Salt` (String): `User.Salt`, Raw Value.
            - `Token` (String): `User.Token`, Raw Value.

        Attributes:
            - `Password` (Secret): `User.Password`, Sanitized Value.
            - `Salt` (Secret): `User.Salt`, Sanitized Value.
            - `Token` (Secret): `User.Token`, Sanitized Value.
    """

    Password: Secret

    Salt: Secret

    Token: Optional[Secret]

    class Config(Base.Config): title = ".".join([__package__, "Sanitation"])

class Association(Base):
    """ ... """

    ID: Union[UUID, String, Integer]

    Name: Optional[List[Database.User.Schemas.Name.Association]] = None
    Verification: Optional[Database.User.Schemas.Verification.Association] = None
    Company: Optional[Database.Business.Schemas.Company.Association] = None
    Note: Optional[List[Database.User.Schemas.Note.Association]] = Field(alias = "Note")

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(alias = "Record-Modification-Date")

    HTML: Optional[String] = Field(None, alias = "HTML-Foreign-Key")

    class Config(Base.Config): title = Base.Config.title + "." + "Association"

class JSON(Schema):
    """ ... """

    Name: Optional[List[Types.Name.Create]]
    Verification: Optional[Types.Verification.Create]
    Company: Optional[Types.Company.Create]
    Note: Optional[List[Types.Note.Create]]

    # class Config(Base.Config):
    #     title = ".".join([__package__, "JSON"])
    #     schema_extras = {
    #         "examples": [
    #             {
    #                 "Creation":     "2021-08-24T10:47:03.272394+00:00",
    #                 "Active":       True,
    #                 "ID":           "37561705-d544-4f08-892f-1fa07f42658a",
    #                 "Token":        "kT-pLZ11IdUgd448wDimU8A8SvqoxL1wWUyZo_Hyi6A",
    #                 "Modification": None,
    #                 "GISO":         9,
    #                 "Username":     "Username",
    #                 "Preferred":    "Name",
    #                 "Email":        "Engineer@Cloud-Technology.IO",
    #                 "CFK":          "cfcffc86-7360-441c-ba7b-64380e14d6ee",
    #                 "Password":     "$2b$12$WTnh7I8Fi7mpWfZhhVC1M.setlrwQoKqdWE/DKR5/R2m/O7RdBNKe",
    #                 "UFK":          "89eb8979-49a8-4ebc-b289-1cf5d0096c63",
    #                 "Salt":         "$2b$12$WTnh7I8Fi7mpWfZhhVC1M.",
    #                 "VFK":          "c266b817-e38d-431d-ab59-3001aebad3c9",
    #                 "Company":      {
    #                     "ID":           "cfcffc86-7360-441c-ba7b-64380e14d6ee",
    #                     "Name":         "Cloud-Technology LLC.",
    #                     "Website":      "https://nexus.cloud-technology.io/",
    #                     "Creation":     "2021-08-24T10:47:03.272394+00:00",
    #                     "Modification": None,
    #                     "Type":         "IT"
    #                 },
    #                 "Unit":         {
    #                     "ID":           "89eb8979-49a8-4ebc-b289-1cf5d0096c63",
    #                     "Creation":     "2021-08-24T10:47:03.272394+00:00",
    #                     "Name":         "Research & Development",
    #                     "Modification": None,
    #                     "CFK":          "cfcffc86-7360-441c-ba7b-64380e14d6ee"
    #                 },
    #                 "Verification": {
    #                     "ID":           "c266b817-e38d-431d-ab59-3001aebad3c9",
    #                     "Verified":     True,
    #                     "Modification": None,
    #                     "Creation":     "2021-08-24T10:47:03.272394+00:00"
    #                 },
    #                 "Name":         [
    #                     {
    #                         "Modification": None,
    #                         "ID":           "604f7a36-53a4-4438-853d-de544b13ece8",
    #                         "Middle":       "Brian",
    #                         "UID":          "37561705-d544-4f08-892f-1fa07f42658a",
    #                         "Creation":     "2021-08-24T10:47:03.272394+00:00",
    #                         "First":        "Jacob",
    #                         "Last":         "Sanders"
    #                     }
    #                 ],
    #                 "Note":         [
    #                     {
    #                         "Creation":     "2021-08-24T10:47:03.272394+00:00",
    #                         "ID":           "054583e2-040b-46f8-a882-4c2dc020cdab",
    #                         "Content":      "...",
    #                         "Internal":     True,
    #                         "UID":          "37561705-d544-4f08-892f-1fa07f42658a",
    #                         "Modification": None
    #                     }
    #                 ]
    #             }
    #         ]
    #     }

class Form(Base):
    """ ... """

    Username: Optional[String] = Field("Segmentational", alias = "Username")
    Email: Optional[String] = Field("jacob.sanders@cloudhybrid.io", alias = "Email-Address")
    Preferred: Optional[String] = Field("Null-Byte", alias = "Preferred-Name")
    Password: Optional[Secret] = Field("Kn0wledge!", alias = "Password")
    Active: Optional[Boolean] = Field(True, alias = "Active")
    GISO: Optional[ISO5218] = Field(0x0, alias = "Gender-Code")

    First: Optional[String] = Field("Jacob", alias = "First-Name")
    Middle: Optional[String] = Field("Brian", alias = "Middle-Name")
    Last: Optional[String] = Field("Sanders", alias = "Last-Name")

    Company: Optional[String] = Field("Cloud-Technology LLC.")
    Industry: Optional[Types.Industry] = Field(Types.Industry.IT)
    Website: Optional[Types.Website] = Field("https://cloud-hybrid.io")

    Unit: Optional[String] = Field("Business-Unit-Example", alias = "Business-Unit")

    Note: Optional[None] = None

    Verification: Optional[Boolean] = True

    class Config(Base.Config): title = ".".join([__package__, "Form"])

class Information(Base):
    """
    Sanitation(Database.User.Schemas.Nexus.Schema) - `class`
    --------------------------------------------------------

    A Full Nexus-User Schema with Private, Senitive Information Sanitized.

        Parent:
            - `Database.User.Schemas.Nexus.Schema`

        Arguments:
            - `Password` (String): `User.Password`, Raw Value.
            - `Salt` (String): `User.Salt`, Raw Value.
            - `Token` (String): `User.Token`, Raw Value.

        Attributes:
            - `Password` (Secret): `User.Password`, Sanitized Value.
            - `Salt` (Secret): `User.Salt`, Sanitized Value.
            - `Token` (Secret): `User.Token`, Sanitized Value.
    """

    ID: Union[String] = Field(default_factory = UID)
    Password: Union[Secret, String] = Field("*" * 12)
    Salt: Union[Secret, String] = Field("*" * 32)
    Token: Optional[Union[Secret, String]] = Field("*" * 24)
    HTML: Optional[String] = Field(None, alias = "HTML-Foreign-Key")

    class Config(Base.Config): title = ".".join([__package__, "Information"])
