from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

import Documentation.MDB.MDB_API.Collections.Configuration.CSGO as CSGO_CRUD
from Documentation.MDB.MDB_API.Schemas.csgo import (
    CSGOSchema,
    UpdateCSGOSchema,
    ResponseModel,
    ErrorResponseModel,
)

router = APIRouter()
CRUD = CSGO_CRUD.Document()


@router.get("/", response_description="Retrieves all configs in database.")
async def get_configs_data():
    configs = await CRUD.gets()
    if configs:
        return ResponseModel(configs, "Retrieved all configs successfully.")
    return ErrorResponseModel("An error occurred.", 404, "No configurations in database.")


@router.get("/{ID}", response_description="Retrieve a config from the database.")
async def get_config_data(identifier: str):
    config = await CRUD.get(identifier)
    if config:
        return ResponseModel(config, "Retrieved configuration successfully.")
    return ErrorResponseModel("An error occurred.", 404, "Configuration not found.")


@router.post("/", response_description="Adds a configuration to the database.")
async def add_config_data(config: CSGOSchema = Body(...)):
    config_ = jsonable_encoder(config)
    new_config = await CRUD.create(config_)
    return ResponseModel(new_config, "Config added successfully...")


@router.put("/{ID}", response_description="Update a configuration.")
async def update_config_data(identifier: str, request: UpdateCSGOSchema = Body(...)):
    req = {k: v for k, v in request.dict().items() if v is not None}
    updated_config = await CRUD.update(identifier, req)

    if updated_config:
        return ResponseModel(updated_config, "Updated configuration successfully.")

    return ErrorResponseModel("An error occurred.", 404, "Configuration could not be updated.")


@router.delete("/{ID}", response_description="Drop a configuration.")
async def drop_config_data(identifier: str):
    deleted_config = await CRUD.delete(identifier)

    if deleted_config:
        return ResponseModel(deleted_config, "Updated configuration successfully.")

    return ErrorResponseModel("An error occurred.", 404, "Configuration could not be deleted.")


