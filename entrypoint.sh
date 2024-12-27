#!/bin/sh
set -e
service ssh start

echo "IN ENTRYPOINT" 

# Start php-fpm and nginx in the background
php-fpm &

# Start nginx in the foreground (daemon off)
nginx -g 'daemon off;'