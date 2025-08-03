import { useState } from "react";
import { Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchProducts, Product } from "@/lib/mockProducts";

interface SearchBoxProps {
  onChatClick: () => void;
}

export const SearchBox = ({ onChatClick }: SearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      const results = searchProducts(query);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (product: Product) => {
    setSearchQuery(product.name);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Describe what you're looking for..."
            className="pl-10 pr-14 h-12 border-2 border-border focus:border-primary transition-colors"
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
          />
        </div>
        <Button
          onClick={onChatClick}
          className="absolute right-2 h-8 w-8 p-0 bg-gradient-to-r from-primary to-primary-glow shadow-[var(--shadow-button)] hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
          title="Open AI Shopping Assistant"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Product Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 animate-slide-in">
          <div className="p-2">
            <p className="text-xs text-muted-foreground mb-2 px-2">AI Suggestions:</p>
            {suggestions.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSuggestionClick(product)}
                className="flex items-center gap-3 p-2 hover:bg-accent rounded-md cursor-pointer transition-colors"
              >
                <span className="text-2xl">{product.image}</span>
                <div className="flex-1">
                  <p className="font-medium text-sm">{product.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    <p className="text-sm font-semibold text-primary">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};