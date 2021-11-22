import uvicorn

# Server-side entry point
if __name__ == "__main__":
    uvicorn.run("Interface.API:app", host="0.0.0.0", port=8000, reload=True)
