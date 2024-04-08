import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { chatSelector } from "../redux/chatSlice";
import { useFirestore } from "../config/Build/firestore";

const Messages = () => {
  const { chatId } = useSelector(chatSelector);
  const [messages, setMessages] = useState([]);
  const store = useFirestore();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (!chatId) return;
        const chatData = await store.getADocsFromFirestore("chats", chatId);
        if (chatData && chatData.messages) {
          setMessages(chatData.messages);
        } else {
          setMessages([]);
        }
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };
    fetchMessages();
  }, [chatId, store]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((m, i) => (
        <div key={i} ref={i === messages.length - 1 ? lastMessageRef : null}>
          <Message message={m} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
