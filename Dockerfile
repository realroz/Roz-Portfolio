# Use an official Node runtime as a parent image
FROM node:14 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . ./

# Build your app
RUN npm run build && ls -al /app/build

# Use Nginx to serve the static content
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# TLS is terminated upstream by the reverse proxy, so this image serves
# plain HTTP and holds no certificates.
EXPOSE 8089
CMD ["nginx", "-g", "daemon off;"]



