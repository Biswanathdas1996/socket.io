import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import JoinChat from './components/JoinChat';
import SendMsg from './components/SendMsg';
import ChatList from './components/ChatList';
import LayOut from "./Layout";
import { SERVER_URL } from "./config";

let socket;

const LiveChat = () =>{

  const [msgs, setMsgs] = useState([]);
  const [userID, setUserID] = useState(Math.random());
  const [name, setName] = useState("");
  const [jion, setJion] = useState(false);

  useEffect(() => {
    // Initallize socket with our backend SERVER_URL is configured in .env
    socket = io(SERVER_URL, { transports: ['websocket', 'polling', 'flashsocket'] });
  }, [SERVER_URL])

  useEffect(() => {
    socket.on('chat message', function (msg) {
      // Get the brodcusted msg as trigred from any endpoint
      setMsgs(msg);
    });
  }, [])

  const joinChat = (name) => {
    // A new user join the chat
    setName(name);
    setJion(true);
  }

  // when msg is send
  const sendMsg = (msg) => {
    let prevMsg = [...msgs];
    let currentMsg = {
      userID,
      name,
      msg
    }
    prevMsg.push(currentMsg);
    setMsgs(prevMsg);
    // emmit the data to backend socket for brodcust
    socket.emit('chat message', prevMsg, () => true);
  }

  return (
    <React.Fragment>
      {!jion ? (
        <LayOut
          heading="Join Chat"
          subHeading="Join the conversation to know each other">
          <JoinChat joinChat={joinChat} />
        </LayOut>
      ) : (
        <LayOut
          heading={name}
          subHeading="You have joined the room">
          <div className="wrapperContainer">
            <ChatList name={name} msgs={msgs} />
          </div>
          <SendMsg sendMsg={sendMsg} />
        </LayOut>
      )}
    </React.Fragment >
  );
}

export default LiveChat;
