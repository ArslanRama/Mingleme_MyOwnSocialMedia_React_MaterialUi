Uses a Node.js base image, which is a lightweight Node.js image based on Alpine Linux.
Sets the working directory to /app.
Copies the package.json and package-lock.json files to the container and installs the dependencies using npm install.
Copies the rest of the application files to the container.
Builds the application using npm run build.
Exposes port 3000, which is the default port for many web applications.
Starts the application using npm start.