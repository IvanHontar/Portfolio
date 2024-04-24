from fastapi import APIRouter
from fastapi.responses import FileResponse
import logging


redirect_router = APIRouter()

logger = logging.getLogger(__name__)

@redirect_router.post('/answer',response_class=FileResponse )
async def asnwer_page():
    logger.info('Recived request for /answer')
    return FileResponse('Front/message.html') 








