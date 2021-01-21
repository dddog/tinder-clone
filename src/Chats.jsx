import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="YO 안녕~"
        timestamp="40 seconds ago"
        profilePic="https://res.cloudinary.com/dbb7vxenm/image/upload/v1609297654/et8ekpaua4bxwdl4kwqp.jpg"
      />
    </div>
  );
};

export default Chats;
