import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://res.cloudinary.com/dbb7vxenm/image/upload/v1609055873/sample.jpg",
      message: "HEY!!!",
    },
    {
      name: "Ellen",
      image:
        "https://res.cloudinary.com/dbb7vxenm/image/upload/v1609055873/sample.jpg",
      message: "Fuck You",
    },
    {
      message: "What!!!!????",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
