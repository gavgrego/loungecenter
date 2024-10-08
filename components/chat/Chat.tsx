"use client";

import { useChat } from "ai/react";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      // this route is the default when using useChat, but I wanted to show it here
      api: "/api/chat",
      streamProtocol: "text"
    });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
          {message.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          disabled={isLoading}
          placeholder="Talk to the AI..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Chat;
