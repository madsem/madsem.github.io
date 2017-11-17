#!/usr/bin/env bash

###########################################################################
# clean up old files that codedeploy missed
# rm -f -R /var/www/*
# gives error when instace had no files before cleanup, have to make conditional
###########################################################################
sudo rm -Rf /var/www/*
