from fastapi import FastAPI
from Documentation.MDB.MDB_API.Routes.csgo import router as config_router

app = FastAPI()

app.include_router(config_router, tags=["Configuration"], prefix="/configuration")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

