# from fastapi import FastAPI, HTTPException, Request

# app = FastAPI()

# # Define the custom function `ai_process` to calculate the length of a string
# def ai_process(input_string: str):
#     return {"string_length": len(input_string)}

# # Create a POST route that uses the `ai_process` function
# @app.post("/process")
# async def process_string(in_string):
#     try:

#         a=in_string.upper()

#         return a
#         # input_data = await request.json()
#         # input_string = input_data.get("input_string")

#         # if input_string is None:
#         #     raise HTTPException(status_code=422, detail="Input string is missing in the request.")

#         # return ai_process(input_string)

#     except ValueError:
#         raise HTTPException(status_code=422, detail="Invalid JSON in the request body")

#     except Exception as e:
#         raise HTTPException(status_code=500, detail="Internal Server Error") from e


from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Define the custom function `ai_process` to convert input string to uppercase
def ai_process(input_string: str):
    return input_string.upper()

# Create a POST route that uses the `ai_process` function
@app.post("/process")
async def process_string(in_string):
    print("********",in_string)
    try:
        processed_string = ai_process(in_string)
        return {"uppercase": processed_string}

    except ValueError:
        raise HTTPException(status_code=422, detail="Invalid JSON in the request body")

    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error") from e

# CORS (Cross-Origin Resource Sharing) settings
origins = [
    "http://localhost",        # Allow requests from localhost
    "http://localhost:3000",   # Allow requests from localhost on port 3000 (adjust as needed)
    # Add other allowed origins as needed for your frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
