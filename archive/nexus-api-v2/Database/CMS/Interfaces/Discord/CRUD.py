from . import *

from Database.CMS.Models import Discord
from Database.CMS.Schemas import Discord as Schemas


class SQL(object):

    @staticmethod
    def CREATE(cms: Schemas.Create, db: Dependency = Connection):
        Attributes = cms.dict()
        cms_discord = Discord.Table(**Attributes)

        db.add(cms_discord)
        db.commit()
        db.refresh(cms_discord)
        return cms_discord

    @staticmethod
    def READ(limit: Integer, skip: Integer, db: Dependency = Connection):
        return db.query(Discord.Table).offset(skip).limit(limit).all()

    @staticmethod
    def UPDATE(record, cms: Schemas.Update, db: Dependency = Connection):
        record.Author = cms.Author
        record.AuthorID = cms.AuthorID
        record.ChannelID = cms.ChannelID
        record.ChannelType = cms.ChannelType
        record.GuildID = cms.GuildID
        record.Content = cms.Content
        record.ContentID = cms.ContentID

        db.commit()
        db.refresh(record)
        return record

    @staticmethod
    def DELETE(ContentID: String = None, ID: String = None, db: Dependency = Connection):

        if ContentID is None:
            cms_discord = db.query(Discord.Table).filter(Discord.Table.ID == ID).first()
        else:
            cms_discord = db.query(Discord.Table).filter(Discord.Table.ContentID == ContentID).first()

        db.delete(cms_discord)
        db.commit()
        return cms_discord

    @staticmethod
    def get_by_id(ID: String, db: Dependency = Connection):
        return db.query(Discord.Table).filter(Discord.Table.ID == ID).first()

    @staticmethod
    def get_by_content_id(ContentID: String, db: Dependency = Connection):
        return db.query(Discord.Table).filter(Discord.Table.ContentID == ContentID).first()

    @staticmethod
    def get_all_by_author_id(AuthorID: String, db: Dependency = Connection):
        return db.query(Discord.Table).filter(Discord.Table.AuthorID == AuthorID).all()

    @staticmethod
    def get_all_by_channel_id(ChannelID: String, db: Dependency = Connection):
        return db.query(Discord.Table).filter(Discord.Table.ChannelID == ChannelID).all()
