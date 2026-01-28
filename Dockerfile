# Use Node.js to build the project
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy source code
COPY . .

# Build the project
RUN pnpm run build

# Use nginx to serve the built files
FROM nginx:alpine

# Copy built files to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]