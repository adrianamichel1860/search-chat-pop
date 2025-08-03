import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { ChatWidget } from "./ChatWidget";

export const ShopifyChatPlugin = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="relative">
      <SearchBox onChatClick={handleChatToggle} />
      <ChatWidget isOpen={isChatOpen} onClose={handleChatClose} />
    </div>
  );
};