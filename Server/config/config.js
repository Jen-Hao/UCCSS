var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 5000,
        db: 'mongodb://127.0.0.1/helpMe-dev',
        secret: "JenHaolikedhistreats",
        uploads: './public/uploadedFiles' 
    },
    test: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 4000,
        db: 'mongodb://127.0.0.1/helpMe-test',
        secret: "JenHaolikedhistreats",
        uploads: './public/uploadedFiles' 

    },

    production: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 80,
        db: 'mongodb://127.0.0.1/helpMe',
        secret: "JenHaolikedhistreats",
        uploads: './public/uploadedFiles' 
    }
};

module.exports = config[env];
