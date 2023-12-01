# Use an official Python runtime as a base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file and install the dependencies
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the entire current directory into the container at /app
COPY . .

# Expose the port that Flask runs on (8002 by default)
EXPOSE 8002

# Command to run the Flask application
CMD ["python3", "app.py"]
