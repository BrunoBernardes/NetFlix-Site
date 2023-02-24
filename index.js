//const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/coonect");

dotenv.config();

connectToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");

require("./modules/express");

//const person = new Person("Bruno");
