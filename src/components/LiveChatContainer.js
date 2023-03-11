import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";
import ChatMessage from "./ChatMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatchMessage();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function dispatchMessage() {
    dispatch(
      addMessage({
        commentBy: generateRandomName(),
        msg: generateRandomMsg(20),
      })
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="bg-gray-100 h-60 flex flex-col-reverse overflow-y-scroll rounded-xl mb-3 ">
        {messages.length > 0 &&
          messages.map((message, index) => {
            return (
              <ChatMessage
                commentBy={message?.commentBy}
                msg={message?.msg}
                key={index}
              />
            );
          })}
      </div>
      <div className="flex items-center p-2 gap-4">
        <input
          className=" outline-0 border-b-2 border-b-gray-200 w-3/4 p-2 "
          placeholder="Say Something"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          className=" bg-gray-700 text-white p-3 rounded-lg flex items-center "
          onClick={() => {
            dispatch(
              addMessage({
                commentBy: "Prabhat Lokwani",
                msg: message,
              })
            );
            setMessage('')
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default LiveChatContainer;
