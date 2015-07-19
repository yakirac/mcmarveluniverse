#!/bin/bash
#run setup for node server

echo change to server dir
cd ../server

echo list dirs
ls -la

echo install node packages 
npm install 

echo change to public dir
cd ../public

echo install bower components
bower install 

echo change dir to server
cd ../server


echo open a the site @http://localhost:3100
open -a safari http://localhost:3100


echo run node server
nodemon server.js 



