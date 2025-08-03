export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "🎧",
    rating: 4.5,
    category: "Electronics",
    description: "Premium sound quality with noise cancellation"
  },
  {
    id: "2",
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "👕",
    rating: 4.2,
    category: "Clothing",
    description: "Comfortable 100% cotton t-shirt in various colors"
  },
  {
    id: "3",
    name: "Smart Watch",
    price: 199.99,
    image: "⌚",
    rating: 4.7,
    category: "Electronics",
    description: "Track your fitness and stay connected"
  },
  {
    id: "4",
    name: "Running Shoes",
    price: 89.99,
    image: "👟",
    rating: 4.4,
    category: "Footwear",
    description: "Lightweight running shoes with excellent grip"
  },
  {
    id: "5",
    name: "Coffee Mug",
    price: 12.99,
    image: "☕",
    rating: 4.1,
    category: "Kitchen",
    description: "Ceramic coffee mug with heat retention"
  },
  {
    id: "6",
    name: "Leather Wallet",
    price: 49.99,
    image: "👛",
    rating: 4.6,
    category: "Accessories",
    description: "Premium leather wallet with RFID protection"
  },
  {
    id: "7",
    name: "Yoga Mat",
    price: 34.99,
    image: "🧘",
    rating: 4.3,
    category: "Fitness",
    description: "Non-slip yoga mat for home workouts"
  },
  {
    id: "8",
    name: "Sunglasses",
    price: 59.99,
    image: "🕶️",
    rating: 4.5,
    category: "Accessories",
    description: "UV protection sunglasses with polarized lenses"
  }
];

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 4); // Limit to 4 results
};