#!/usr/bin/env bash
touch $APPCENTER_SOURCE_DIRECTORY/.env
printf "DARK_SKY_SECRET_KEY=$DARK_SKY_SECRET_KEY\nGOOGLE_MAPS_API_KEY=$AIzaSyBjaCmlVXxsVaFENSZFrOGEUZj1OTk75Gk" > ./.env