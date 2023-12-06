from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from prediction import make_predictions

app = FastAPI()


def ai_process(input_string: str):
    return input_string.upper()


@app.post("/process")
async def process_string(in_string: str):
    print('check1')
    try:
   
        predictions = make_predictions(in_string)
        print("Predictions:", predictions)
        return {"uppercase": predictions}

    except ValueError:
        raise HTTPException(status_code=422, detail="Invalid JSON in the request body")

    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error") from e

# CORS (Cross-Origin Resource Sharing) settings
origins = [
    "http://localhost",        
    "http://localhost:3000",   

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
