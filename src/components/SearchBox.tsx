import { Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBoxProps {
  onChatClick: () => void;
}

export const SearchBox = ({ onChatClick }: SearchBoxProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-14 h-12 border-2 border-border focus:border-primary transition-colors"
          />
        </div>
        <Button
          onClick={onChatClick}
          className="absolute right-2 h-8 w-8 p-0 bg-gradient-to-r from-primary to-primary-glow shadow-[var(--shadow-button)] hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
          title="Open Chat Support"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};