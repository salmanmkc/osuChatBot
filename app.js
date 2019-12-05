const Banchojs = require("bancho.js");
const {USERNAME, PASSWORD} = require("./credentials");

const client = new Banchojs.BanchoClient({
    username = USERNAME,
    password = PASSWORD
});

const startBot = async () => {
    try{
        await client.connect();

    } catch(e1){
        console.error(e1);
    }
}