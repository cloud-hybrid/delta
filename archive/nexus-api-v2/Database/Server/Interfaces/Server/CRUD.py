from . import *

from Database.Server.Models import Server
from Database.Server.Schemas import Server as Schemas


class SQL(object):

    @staticmethod
    def CREATE(schematic: Schemas.Create, db: Dependency = Connection):
        Attributes = schematic.dict()
        server_record = Server.Table(**Attributes)

        db.add(server_record)
        db.commit()
        db.refresh(server_record)
        return server_record

    @staticmethod
    def READ(limit: Integer, skip: Integer, db: Dependency = Connection):
        return db.query(Server.Table).offset(skip).limit(limit).all()

    @staticmethod
    def UPDATE(record, schematic: Schemas.Update, db: Dependency = Connection):
        record.Name = schematic.Name
        record.Type = schematic.Type
        record.VPS_ID = schematic.VPS_ID
        record.VPS_UUID = schematic.VPS_UUID
        record.VPS_Name = schematic.VPS_Name
        record.serviceName = schematic.serviceName
        record.serviceFile = schematic.serviceFile
        record.servicePath = schematic.servicePath
        record.serviceDirectory = schematic.serviceDirectory
        record.deploymentURL = schematic.deploymentURL
        record.deploymentUser = schematic.deploymentUser
        record.deploymentToken = schematic.deploymentToken
        record.Purpose = schematic.Purpose

        db.commit()
        db.refresh(record)
        return record

    @staticmethod
    def DELETE(_UUID: String = None, Name: String = None, db: Dependency = Connection):

        if _UUID is None:
            server_record = db.query(Server.Table).filter(Server.Table.Name == Name).first()
        else:
            server_record = db.query(Server.Table).filter(Server.Table.VPS_UUID == _UUID).first()

        db.delete(server_record)
        db.commit()
        return server_record

    @staticmethod
    def get_by_uuid(_UUID: String, db: Dependency = Connection):
        return db.query(Server.Table).filter(Server.Table.VPS_UUID == _UUID).first()

    @staticmethod
    def get_by_name(Name: String, db: Dependency = Connection):
        return db.query(Server.Table).filter(Server.Table.Name == Name).first()

    @staticmethod
    def get_all_type(Type: String, db: Dependency = Connection):
        return db.query(Server.Table).filter(Server.Table.Type == Type).all()