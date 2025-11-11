# Multi-stage Dockerfile for React app
# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --silent

# Copy source code
COPY . .

# Build arguments for React app environment variables
ARG REACT_APP_API_BASE
ARG REACT_APP_ENV
ARG REACT_APP_ANALYTICS_ID
ARG REACT_APP_FEATURE_FLAG
ARG REACT_APP_BLOG_URL

# Set environment variables for the build
ENV REACT_APP_API_BASE=$REACT_APP_API_BASE
ENV REACT_APP_ENV=$REACT_APP_ENV
ENV REACT_APP_ANALYTICS_ID=$REACT_APP_ANALYTICS_ID
ENV REACT_APP_FEATURE_FLAG=$REACT_APP_FEATURE_FLAG
ENV REACT_APP_BLOG_URL=$REACT_APP_BLOG_URL

# Build the app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]