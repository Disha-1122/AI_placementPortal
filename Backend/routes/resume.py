from fastapi import APIRouter, UploadFile, File
import fitz

router = APIRouter()

@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    pdf_data = await file.read()

    pdf = fitz.open(
        stream=pdf_data,
        filetype="pdf"
    )

    text = ""

    for page in pdf:
        text += page.get_text()

    score = min(len(text) // 50, 100)

    return {
        "message": "Resume analyzed successfully",
        "score": score,
        "characters": len(text)
    }