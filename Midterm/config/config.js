var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 3300,
        db: 'mongodb://127.0.0.1/foobar'

    },

    test: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 4000,
        db: 'mongodb://127.0.0.1/foobar-test'

    },

    production: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 80,
        db: 'mongodb://127.0.0.1/foobar-prod'

    }
};


module.exports = config[env];