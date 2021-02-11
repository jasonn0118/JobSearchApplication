const keys =  require('../config/key');
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = keys.mongoURI;
db.jobs = require("./Job")(mongoose);

module.exports = db;