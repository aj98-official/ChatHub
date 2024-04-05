import React from 'react';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import Footer from './Footer';

const Chat = () => {

    return (
        <div>
            <ChatHeader></ChatHeader>
            <Messages></Messages>
            <Footer></Footer>
        </div>
    );
};

export default Chat;