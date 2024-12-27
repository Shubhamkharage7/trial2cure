# Use PHP with FPM (FastCGI Process Manager)
FROM php:8.0-fpm

# Install Nginx and other dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends nginx curl gnupg2 build-essential dialog openssh-server && \
    # Set up SSH password for root user
    echo "root:Docker!" | chpasswd

# Copy your application code into the container
COPY . /var/www/html

# Copy Nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy SSH config
COPY sshd_config /etc/ssh/

# Expose ports 80 and 2222
EXPOSE 80 2222

# Start SSH service, PHP-FPM, and Nginx
ENTRYPOINT ["sh", "-c", "service ssh start && php-fpm & nginx -g 'daemon off;'"]
