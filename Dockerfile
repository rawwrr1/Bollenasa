FROM nginx:alpine

# Copy static website files
COPY . /usr/share/nginx/html

# Copy custom Nginx configuration for the app
COPY nginx-app.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
