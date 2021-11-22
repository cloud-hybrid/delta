from . import *


class Table(Database.SQL.Base):
    __tablename__ = "Server"

    _UUID: Column = Column(
        key="_UUID",
        name="UUID",
        type_=UUID,
        index=True,
        unique=True,
        default=None,
        nullable=False,
        primary_key=True,
    )

    Name: Column = Column(
        key="Name",
        name="Name",
        type_=String,
        index=True,
        unique=True,
        default=None,
        nullable=False,
        primary_key=True,
    )

    Type: Column = Column(
        key="Type",
        name="Type",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
    )

    # Requires FK
    VPS_ID: Column = Column(
        key="VPS_ID",
        name="VPS-ID",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
    )

    # Requires FK
    VPS_UUID: Column = Column(
        key="VPS_UUID",
        name="VPS-UUID",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
    )

    # Requires FK
    VPS_Name: Column = Column(
        key="VPS_Name",
        name="VPS-Name",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
    )

    serviceName: Column = Column(
        key="serviceName",
        name="Service-Name",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
    )
    serviceFile: Column = Column(
        key="serviceFile",
        name="Service-File",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
    )

    servicePath: Column = Column(
        key="servicePath",
        name="Service-Path",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
    )

    serviceDirectory: Column = Column(
        key="serviceDirectory",
        name="Service-Directory",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
    )

    deploymentURL: Column = Column(
        key="deploymentURL",
        name="Deployment-URL",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
    )

    deploymentUser: Column = Column(
        key="deploymentUser",
        name="Deployment-User",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
    )
    deploymentToken: Column = Column(
        key="deploymentToken",
        name="Deployment-Token",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
    )

    Purpose: Column = Column(
        key="Purpose",
        name="Purpose",
        type_=String,
        index=False,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
    )

    Creation: Column = Column(
        key="Creation",
        name="Record-Creation-Timestamp",
        type_=Date(timezone=True),
        index=True,
        quote=True,
        unique=False,
        server_default=Time.now(),
        nullable=False,
        primary_key=False,
        autoincrement=False,
    )

    Modification: Column = Column(
        key="Modification",
        name="Record-Modification-Timestamp",
        type_=Date(timezone=True),
        index=True,
        quote=True,
        unique=False,
        server_default=None,
        nullable=True,
        onupdate=Time.now(),
        primary_key=False,
        autoincrement=False
    )

    Deletion: Column = Column(
        key="Deletion",
        name="Record-Deletion-Timestamp",
        type_=Date(timezone=True),
        index=True,
        quote=True,
        unique=False,
        server_default=None,
        nullable=True,
        primary_key=False,
        autoincrement=False
    )


Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
