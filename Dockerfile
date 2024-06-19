# Use a Node.js LTS version as base image
FROM node:alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve built React application with nginx
FROM nginx:alpine

# Copy build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default port for HTTP)
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
