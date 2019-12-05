const Banchojs = require("bancho.js");
const {USERNAME, PASSWORD} = require("./credentials");

const client = new Banchojs.BanchoClient({
    username = USERNAME,
    password = PASSWORD
});