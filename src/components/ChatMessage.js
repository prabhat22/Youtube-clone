import React from "react";
import Profile from "../assets/profile.png";

const ChatMessage = ({ commentBy, msg }) => {
  return (
    <div className="flex flex-row p-4 text-base items-center gap-3">
      <img className=" w-8 h-8" src={Profile} alt="profile" />
      <p className="text-gray-600">{commentBy}</p>
      <p className="text-black">{msg}</p>
    </div>
  );
};

export default ChatMessage;
