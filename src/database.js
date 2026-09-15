const pgp = require("pg-promise")();

const db = pgp('postgres://dev:12345@localhost:5432/devweb');

module.exports = db;