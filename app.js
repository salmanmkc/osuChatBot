const Banchojs = require("bancho.js");
const { USERNAME, PASSWORD } = require("./credentials");

const client = new Banchojs.BanchoClient({
    username: USERNAME,
    password: PASSWORD
});

const startBot = async () => {
    try{
        await client.connect();
        console.log("Successfully connected to the bot");
        client.on("PM", async({message, user}) =>{
            if(user.ircUsername === USERNAME){
                client.
            }
            if(message[0] !== "!") return;
            
        });
    } catch(e1){
        console.error(e1);
    }
};

startBot();