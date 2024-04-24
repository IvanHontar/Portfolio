import os
import logging
from fastapi import FastAPI, Form
from fastapi.responses import FileResponse,RedirectResponse
from fastapi.staticfiles import StaticFiles
from router import redirect_router


app = FastAPI()

app.include_router(redirect_router)


static_dir = os.path.join(os.path.dirname(__file__), "Front")
app.mount("/static", StaticFiles(directory=static_dir), name="static")

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@app.get('/', response_class=FileResponse)
async def read_root():
    logger.info('Recived request for root returning html...')
    return FileResponse("Front/index.html")


@app.post('/submit_form')
async def submit_form(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    logger.info({'name': name, "email": email, "message": message})
    logger.info('Redirecting to /answer')
    return RedirectResponse('/answer')
