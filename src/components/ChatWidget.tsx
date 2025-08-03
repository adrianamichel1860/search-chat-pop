import { useState, useEffect } from "react";
import { X, Send, MessageCircle, User, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductCarousel } from "./ProductCarousel";
import { mockProducts, Product } from "@/lib/mockProducts";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI shopping assistant. I can help you find products, answer questions, and provide personalized recommendations. Check out these trending products below!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  // Get random products when chat opens
  useEffect(() => {
    if (isOpen && recommendedProducts.length === 0) {
      const shuffled = [...mockProducts].sort(() => 0.5 - Math.random());
      setRecommendedProducts(shuffled.slice(0, 6));
    }
  }, [isOpen, recommendedProducts.length]);

  const handleProductSelect = (product: Product) => {
    const productMessage: Message = {
      id: Date.now().toString(),
      text: `Tell me more about the ${product.name}`,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, productMessage]);
    
    // AI response about the product
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Great choice! The ${product.name} is one of our popular items in the ${product.category} category. ${product.description} It's priced at $${product.price} and has a ${product.rating}-star rating. Would you like to see similar products or need more details about this item?`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand you're looking for that! Let me analyze your request and suggest some great options. Based on your search, I can recommend products that match your needs perfectly. Would you like me to show you some specific categories or price ranges?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bg-chat-bg border border-border rounded-lg shadow-[var(--shadow-chat)] animate-slide-in z-50 transition-all duration-300 ${
      isExpanded 
        ? 'top-4 left-4 right-4 bottom-4 w-auto h-auto' 
        : 'bottom-4 right-4 w-80 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold">AI Shopping Assistant</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-primary-foreground hover:bg-white/20"
            title={isExpanded ? "Minimize chat" : "Expand chat"}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-primary-foreground hover:bg-white/20"
            title="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className={`flex-1 p-4 ${isExpanded ? 'h-[calc(100vh-200px)]' : 'h-64'}`}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-chat-user text-primary-foreground'
                    : 'bg-chat-bot text-foreground border border-border'
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.sender === 'bot' && (
                    <MessageCircle className="h-4 w-4 mt-0.5 text-primary" />
                  )}
                  {message.sender === 'user' && (
                    <User className="h-4 w-4 mt-0.5" />
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Product Carousel - Show after first bot message */}
          {messages.length >= 1 && recommendedProducts.length > 0 && (
            <div className="mt-4">
              <ProductCarousel 
                products={recommendedProducts} 
                onProductSelect={handleProductSelect}
              />
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            size="sm"
            className="bg-gradient-to-r from-primary to-primary-glow shadow-[var(--shadow-button)] hover:shadow-lg"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};