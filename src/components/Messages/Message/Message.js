import React from "react";
import "./Message.css";

const Message = ({ message, name }) => {
  var isSentByCurrentUser = false;
  if (message.user == name) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{message.user}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundWhite">
        <p className="messageText colorDark">{message.text}</p>
        <p className="sentText">{message.user}</p>
      </div>
    </div>
  );
};
export default Message;
