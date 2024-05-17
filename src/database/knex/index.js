const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development);

connection.raw("PRAGMA foreign_keys=ON");
module.exports = connection;