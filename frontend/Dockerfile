# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the source code to the container
COPY . .

# Install dependencies
RUN npm install

# Build your application
RUN npm run build

# Expose the port on which your client-side application will be served
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
