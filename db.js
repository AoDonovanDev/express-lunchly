/** Database for lunchly */

const pg = require("pg");
const secret = require("./secret")

const db = new pg.Client("postgresql:///lunchly");

db.connect();

module.exports = db;
