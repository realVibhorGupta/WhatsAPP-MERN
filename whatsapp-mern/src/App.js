import React from 'react';
import './App.css';
import  Sidebar  from  "./Sidebar";

import { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import axios from './axios';
import Chat from './Chat';
function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync")
    .then((response)=> {
      setMessages(response.data);
    }); 
  }, []);


  useEffect(() => {

    var pusher = new Pusher('f45f84b377db9afd7625', {
      cluster: 'ap2'
    });
  
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessages) {
      alert(JSON.stringify(newMessages));
      setMessages([...messages,newMessages])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])




  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );

}
export default App;
