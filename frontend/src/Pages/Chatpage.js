import React, { useState, useEffect } from 'react'; // Add useState to the import
import axios from 'axios';

const Chatpage = () => {
  const [chats, setChats] = useState([]); // State to store fetched chats

  const fetchChats = async () => {
    try {
      const response = await axios.get('/api/chat'); // Make the API call
      setChats(response.data); // Update the chats state
    } catch (error) {
      console.error('Error fetching chats:', error); // Handle any errors
    }
  };

  useEffect(() => {
    fetchChats(); // Call fetchChats on component mount
  }, []); // Dependency array to prevent infinite re-renders

  return (
    <div>
      {/* Render the chats */}
      {chats.map((chat) => (
        <div key={chat._id}>
          <h3>{chat.chatName}</h3> {/* Replace `chatName` with the actual property to display */}
          {chat.isGroupChat && <p>Group Chat</p>}
          <p>Users: {chat.users.map((user) => user.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Chatpage;
