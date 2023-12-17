# Use an official Python runtime as a base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y libgl1-mesa-glx

# Copy the requirements.txt file and install the Python dependencies
COPY requirements.txt .
ENV NEW_RELIC_NO_CONFIG_FILE=true

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the entire current directory into the container at /app
COPY . .

# Expose the port that Flask runs on (8002 by default)
EXPOSE 8002

# Command to run the Flask application
CMD ["python3", "app.py"]

