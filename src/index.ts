import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port : 8080});

wss.on("connection", function(socket){
    console.log("New client connected");
    socket.send("Welcome to the WebSocket server!");
    setInterval(()=>{
        socket.send("Current time: " + new Date().toLocaleTimeString());
    },5000); // Send a message every 5 seconds    

    socket.on("message", (e)=>{
        console.log(e.toString());
        
    })

})