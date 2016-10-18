#!/bin/sh      
IP_ADDRESS="$(node -p "require('./package.json').ipAddr")"
ssh jbelmont@`IP_ADDRESS` <<EOF        
 cd paradiso-bakery-website
 git pull       
 pm2 restart www
 exit       
EOF