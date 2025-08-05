import { useEffect , useState} from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  function sendMessage() {
    //@ts-ignore
    socket.send("ping")
  } 
  
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080") // this will initiate a WebSocket connection to the server
    setSocket(ws);
    ws.onmessage = (e) =>{
      console.log(e.data);
      ws.send("Pong") // this will send a message back to the server
    }

  },[])


  return (
    <>
      <div>
        <input type="text" placeholder="Type your message here..." /> <br/>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
