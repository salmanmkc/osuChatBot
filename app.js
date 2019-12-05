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
            // if(user.ircUsername === USERNAME){
            //     return.
            // }
            if(message[0] !== "!") return;
            const command = message.split(" ")[0].toLowerCase();
            switch(command){
                case ".helloworld":
                    return await user.sendMessage(`Hey ${user.ircUsername}`);
            }
        });
    } catch(e1){
        console.error(e1);
    }
};

startBot();