# Use the official NGINX image as a parent image
FROM nginx:alpine

# Copy the build output directory (out) to the container's NGINX html directory
COPY ./out /usr/share/nginx/html
# Copy the custom NGINX config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]