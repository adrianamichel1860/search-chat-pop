import { ShopifyChatPlugin } from "@/components/ShopifyChatPlugin";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">StyleStore</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Collections</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Find Your Perfect Style
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover amazing products with our intelligent search and get instant help from our chat assistant
          </p>
          
          {/* Search Box with Chat Integration */}
          <div className="max-w-md mx-auto mb-8">
            <ShopifyChatPlugin />
          </div>
          
          <p className="text-sm text-muted-foreground">
            💬 Click the chat button in the search box for instant assistance!
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-t-lg mb-4"></div>
                  <div className="p-6">
                    <h4 className="font-semibold mb-2">Premium Product {item}</h4>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(124)</span>
                    </div>
                    <p className="text-2xl font-bold text-primary mb-4">$99.99</p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-primary to-primary-glow">
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Info */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Shopify Chat Plugin Demo</h3>
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
            <p>✨ This demonstrates how the chat plugin integrates seamlessly with your Shopify store's search functionality.</p>
            <p>🎯 The chat button appears right in the search box for easy access.</p>
            <p>💬 Click it to open an intelligent chatbot that can help customers find products and get support.</p>
            <p>📱 Fully responsive and designed to match any store theme.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
