import React, { useEffect } from 'react';
import axios from 'axios';

const Chatpage = () => {

    const fetchChats = async () => {
        try {
            const response = await axios.get('/api/chat'); // Make the API call
            console.log(response.data); // Log the fetched data
        } catch (error) {
            console.error('Error fetching chats:', error); // Handle any errors
        }
    };

    useEffect(() => {
        fetchChats(); // Call fetchChats on component mount
    }, []); // Dependency array to prevent infinite re-renders

    return (
        <div>
            Chat Page
        </div>
    );
};

export default Chatpage;
