import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import "./Messages.css";
import "./Message/Message.css";

const Messages = ({ messages, name }) => {
  return (
    <div>
      <ScrollToBottom className="messages">
        {messages.map((message, i) => (
          <Message key={i} message={message} name={name} />
        ))}
      </ScrollToBottom>
    </div>
  );
};

export default Messages;
