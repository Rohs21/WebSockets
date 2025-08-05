import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port : 8080});

wss.on("connection", function(socket){
    console.log("New client connected");
    socket.send("Welcome to the WebSocket server!");

    socket.on("message", (e)=>{
        console.log(e.toString());

        if(e.toString() === "ping"){
            socket.send("pong");
        }
        
    })

})