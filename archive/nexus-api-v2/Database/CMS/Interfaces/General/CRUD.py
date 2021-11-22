from . import *

from Database.CMS.Models import General
from Database.CMS.Schemas import General as Schemas


class SQL(object):

    @staticmethod
    def CREATE(cms: Schemas.Create, db: Dependency = Connection):
        Attributes = cms.dict()
        cms_general = General.Table(**Attributes)

        db.add(cms_general)
        db.commit()
        db.refresh(cms_general)
        return cms_general

    @staticmethod
    def READ(limit: Integer, skip: Integer, db: Dependency = Connection):
        return db.query(General.Table).offset(skip).limit(limit).all()

    @staticmethod
    def UPDATE(record, cms: Schemas.Update, db: Dependency = Connection):
        record.Title = cms.Title
        record.Author = cms.Author
        record.AuthorID = cms.AuthorID
        record.Content = cms.Content
        record.ContentID = cms.ContentID
        record.Type = cms.Type
        record.Tags = cms.Tags

        db.commit()
        db.refresh(record)
        return record

    @staticmethod
    def DELETE(ContentID: String = None, ID: String = None, db: Dependency = Connection):

        if ContentID is None:
            cms_general = db.query(General.Table).filter(General.Table.ID == ID).first()
        else:
            cms_general = db.query(General.Table).filter(General.Table.ContentID == ContentID).first()

        db.delete(cms_general)
        db.commit()
        return cms_general

    @staticmethod
    def get_by_id(ID: String, db: Dependency = Connection):
        return db.query(General.Table).filter(General.Table.ID == ID).first()

    @staticmethod
    def get_by_content_id(ContentID: String, db: Dependency = Connection):
        return db.query(General.Table).filter(General.Table.ContentID == ContentID).first()
