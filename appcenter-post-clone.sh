#!/usr/bin/env bash
touch ./.env
printf "DARK_SKY_SECRET_KEY=$DARK_SKY_SECRET_KEY\nGOOGLE_MAPS_API_KEY=$GOOGLE_MAPS_API_KEY" > ./.env