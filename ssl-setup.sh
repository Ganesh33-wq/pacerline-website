#!/bin/bash

# SSL Setup Script for Pacerline Website
# This script sets up SSL certificates using Let's Encrypt

echo "Setting up SSL certificates for pacerline.com..."

# Check if Certbot is installed
if ! command -v certbot &> /dev/null; then
    echo "Installing Certbot..."
    apt update
    apt install -y certbot python3-certbot-nginx
fi

# Stop Nginx temporarily
systemctl stop nginx

# Obtain SSL certificate
echo "Obtaining SSL certificate from Let's Encrypt..."
certbot certonly --standalone -d pacerline.com -d www.pacerline.com --agree-tos --no-eff-email --email admin@pacerline.com

# Check if certificate was obtained successfully
if [ $? -eq 0 ]; then
    echo "SSL certificate obtained successfully!"
    
    # Start Nginx
    systemctl start nginx
    
    # Update Nginx configuration to use SSL
    certbot --nginx -d pacerline.com -d www.pacerline.com --agree-tos --no-eff-email
    
    # Test Nginx configuration
    nginx -t
    
    if [ $? -eq 0 ]; then
        # Reload Nginx with new configuration
        systemctl reload nginx
        
        # Set up automatic renewal
        echo "Setting up automatic SSL renewal..."
        (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
        
        echo "SSL setup completed successfully!"
        echo "Your website is now accessible at:"
        echo "- https://pacerline.com"
        echo "- https://www.pacerline.com"
        echo ""
        echo "SSL certificates will auto-renew every 12 hours."
    else
        echo "Error: Nginx configuration test failed"
        exit 1
    fi
else
    echo "Error: Failed to obtain SSL certificate"
    echo "Please check:"
    echo "1. Domain DNS is pointing to this server"
    echo "2. Ports 80 and 443 are open"
    echo "3. No other web server is running"
    systemctl start nginx
    exit 1
fi