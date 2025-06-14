// components/ChatBox.tsx
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const phoneNumber = "9779768367873"; // 👈 Replace with your WhatsApp number
    const message = encodeURIComponent(input);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    setInput(""); // Clear input after sending
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-xl border rounded-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-600 text-white p-3 rounded-t-2xl">
            <h4 className="font-semibold">Chat with us</h4>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            <p className="text-gray-500 text-sm text-center">
              Send your message via WhatsApp
            </p>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-1 px-3 py-1.5 border rounded-md text-sm"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ChatBox;
