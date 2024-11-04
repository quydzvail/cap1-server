"use strict";

const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 8080,
    },
    db: {
        host: process.env.DEV_DB_HOST || "localhost",
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || "examguardDev",
    },
};

const prod = {
    app: {
        port: process.env.PROD_APP_PORT || 8080,
    },
    db: {
        host: process.env.PROD_DB_HOST || "localhost",
        port: process.env.PROD_DB_PORT || 27017,
        name: process.env.PROD_DB_NAME || "examguardProd",
    },
};

const config = { dev, prod };
const env = process.env.NODE_ENV || "dev";

module.exports = config[env];
