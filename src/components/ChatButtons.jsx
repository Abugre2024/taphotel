import React from "react";

const ChatButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/233595173997"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white flex items-center px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6 mr-2"
        />
        Chat on WhatsApp
      </a>

      {/* Telegram Button */}
      <a
        href="https://t.me/Beholdyou"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white flex items-center px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          alt="Telegram"
          className="w-6 h-6 mr-2"
        />
        Chat on Telegram
      </a>
    </div>
  );
};

export default ChatButtons;
