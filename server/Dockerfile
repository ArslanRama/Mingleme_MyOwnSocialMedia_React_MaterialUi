# Use Node.js version 14 as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the app's source code to the working directory
COPY . .

# Expose port 6001 for the app to listen on
EXPOSE 6001

# Start the app when the Docker container starts
CMD ["npm", "start"]
