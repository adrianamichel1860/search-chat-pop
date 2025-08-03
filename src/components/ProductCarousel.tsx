import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/mockProducts";

interface ProductCarouselProps {
  products: Product[];
  onProductSelect?: (product: Product) => void;
}

export const ProductCarousel = ({ products, onProductSelect }: ProductCarouselProps) => {
  if (products.length === 0) return null;

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">🎯 AI Recommended Products:</p>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="min-w-[200px] max-w-[200px] border-border hover:shadow-md transition-all duration-200 cursor-pointer"
            onClick={() => onProductSelect?.(product)}
          >
            <CardContent className="p-3">
              <div className="text-center mb-2">
                <div className="text-3xl mb-2">{product.image}</div>
                <h4 className="font-medium text-sm line-clamp-2 h-10 text-foreground">
                  {product.name}
                </h4>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.rating})
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-bold text-primary">${product.price}</p>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full h-8 text-xs bg-gradient-to-r from-primary to-primary-glow"
                  onClick={(e) => {
                    e.stopPropagation();
                    onProductSelect?.(product);
                  }}
                >
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};