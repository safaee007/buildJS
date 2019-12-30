const http = require('http');
const { spawn, exec } = require('child_process');

let pageBuild = (body) =>{
    console.log('start page build');
    console.log(body.uid);
};

module.exports ={
    pageBuild
}