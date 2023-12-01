# Use the official Node.js image as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire current directory into the container at /app
COPY . .

# Expose port 3000 (same port used by React development server)
EXPOSE 3000

# Command to start the React development server
CMD ["npm", "start"]
