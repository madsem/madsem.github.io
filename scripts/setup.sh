#!/usr/bin/env bash

###########################################################################
# Create Group and Set User Rights / File Permissions
###########################################################################
groupadd www
usermod -a -G www ubuntu
chown -R root:www /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} \;
find /var/www -type f -exec chmod 0664 {} \;

# remove the ".vm" ending on all domains
find /var/www -maxdepth 1 -type d -exec rename 's/.vm//g' {} \;

# restart php and nginx to clear out php opcache
sudo service php7.1-fpm restart
sudo service nginx restart