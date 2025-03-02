import React, { useState, useEffect } from "react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish WebSocket connection
    const newSocket = new WebSocket("wss://example.com/chat");

    newSocket.onopen = () => {
      console.log("WebSocket connection established");
    };

    // Handle incoming messages
    newSocket.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    newSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(newSocket);

    // Cleanup on component unmount
    return () => {
      newSocket.close();
    };
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Ensure the WebSocket is connected and ready to send messages
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(input);
      setMessages((prevMessages) => [...prevMessages, `You: ${input}`]);
      setInput("");
    } else {
      alert("WebSocket is not connected. Please wait and try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800">Chat Room</h2>
        <div className="h-64 overflow-y-auto border border-gray-300 rounded-lg p-2 mt-4">
          {messages.length === 0 ? (
            <p className="text-gray-500">No messages yet...</p>
          ) : (
            messages.map((msg, index) => (
              <p key={index} className="text-gray-700 mb-1">
                {msg}
              </p>
            ))
          )}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
