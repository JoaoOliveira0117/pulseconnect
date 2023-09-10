const fs = require("fs");

module.exports = {
  development: {
    database: process.env.DATABASE_URL,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres",
  },
};
