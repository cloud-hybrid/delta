from pydantic import BaseModel, Field


class CSGOSchema(BaseModel):
    ip: str = Field(...)
    port: str = Field(...)
    clientport: str = Field(...)
    sourcetvport: str = Field(...)
    defaultmap: str = Field(...)
    maxplayers: str = Field(...)
    tickrate: str = Field(...)

    class Config:
        schema_extra = {
            "csgo": [
                {
                "ip": "0.0.0.0",
                "port": "27015",
                "clientport": "27005",
                "sourcetvport": "27020",
                "defaultmap": "de_mirage",
                "maxplayers": "16",
                "tickrate": "64"
                }
            ]
        }


class UpdateCSGOSchema(BaseModel):
    ip: str = Field(...)
    port: str = Field(...)
    clientport: str = Field(...)
    sourcetvport: str = Field(...)
    defaultmap: str = Field(...)
    maxplayers: str = Field(...)
    tickrate: str = Field(...)

    class Config:
        schema_extra = {
            "csgo": [
                {
                "ip": "0.0.0.0",
                "port": "27015",
                "clientport": "27005",
                "sourcetvport": "27020",
                "defaultmap": "de_mirage",
                "maxplayers": "16",
                "tickrate": "64"
                }
            ]
        }


def ResponseModel(data, message):
    return{
        "data": [data],
        "code": 200,
        "message": message
    }


def ErrorResponseModel(error, code, message):
    return {
        "error": error,
        "code": code,
        "message": message
    }
