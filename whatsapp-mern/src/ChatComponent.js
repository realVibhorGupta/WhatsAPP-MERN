// import React  ,{useState , useEffect} from 'react';
// import "./ChatComponent.css";
// import MoreVert from '@material-ui/icons/MoreVert';
// import AttachFile from '@material-ui/icons/AttachFile';
// import { IconButton , Avatar} from '@material-ui/core';
// import SearchOutlined from '@material-ui/icons/SearchOutlined';
// import MicIcon from '@material-ui/icons/Mic';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import { axios } from 'axios';
// import { useParams } from "react-router-dom"
// import firebase from 'firebase';

// import { useStateValue } from './StateProvider';

// function ChatComponent() {
//     const [seed, setSeed] = useState("");
//     const [input, setInput] = useState("");
//     const { roomId } = useParams();
//     const [roomName, setRoomName] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [{user}, dispatch] = useStateValue();
//     useEffect(() => {
//         setSeed(Math.floor(Math.random() * 5000));
//     }, [roomId])

//     const sendMessage = async (e) => {
//         e.preventDefault();
//         await axios.post("/messages/new",{
//             message: input,
//             name : roomName,
//             timestamp:"Just now!",
//             received : false,
//         })
//         setInput('');
//     }
//     return (
//         <div className="chat">
//             <div className = "chat__header">
//             <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
//                 <div className = "chat__headerInfo">
//                     <h3>{roomName}</h3>
//                     <p>    Last seen{" "}
//                         {new Date(
//                             messages[messages.length - 1]?.timestamp?.toDate()
//                         ).toUTCString()}</p>
//                 </div>

//                 <div className="chat__headerRight">
//                     <IconButton>
//                         <SearchOutlined/>
//                     </IconButton>
//                     <IconButton>
//                         <AttachFile/>
//                     </IconButton>
//                     <IconButton>
//                         <MoreVert/>
//                     </IconButton>

//                 </div>
//             </div>

//             {/* Chat BODY */}
//             <div className="chat_body">
//                 {messages.map((message) => (
//                     <p className={`chat_message ${message.name === user.displayName && 'chat_reciever'}`}>
//                         <span className="chat_name">
//                             {message.name}
//                         </span>
//                         <span>
//                         {message.message}
//                         </span>
                            
//                         <span className="chat_timestamp">
//                             {new Date(message.timestamp?.toDate()).toUTCString()}
//                         </span>
//                     </p>
//                 ))}
//             </div>

        
//             <div className = "chat__footer">
//                 <InsertEmoticonIcon/>
//                 <form>
//                     <input placeholder = "Type a message" type="text"/>
//                     <button  
//                     value = {input}
//                     onChange = {(e) => setInput(e.target.value)}
//                     onClick = {sendMessage} type="submit">Send a message</button>
//                 </form>
//                 <MicIcon/>
//             </div>
//         </div>
//     )
// }

// export default ChatComponent;

  

