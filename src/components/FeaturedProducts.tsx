import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
  description: string;
  badge?: string;
}

interface FeaturedProductsProps {
  onAddToCart: (productId: string) => void;
  onNavigate: (page: string, productId?: string) => void;
}

export function FeaturedProducts({ onAddToCart, onNavigate }: FeaturedProductsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products: Product[] = [
    {
      id: '1',
      name: 'Tomates Cerises Bio',
      price: 2250,
      originalPrice: 2600,
      image: 'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      category: 'Tomates',
      description: 'Tomates cerises biologiques, sucrées et croquantes',
      badge: 'Promo'
    },
    {
      id: '2',
      name: 'Carottes Bio du Potager',
      price: 1400,
      image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdHMlMjBvcmdhbmljfGVufDF8fHx8MTc1NjcyNjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      category: 'Légumes-racines',
      description: 'Carottes biologiques fraîchement récoltées',
      badge: 'Nouveau'
    },
    {
      id: '3',
      name: 'Poivrons Colorés',
      price: 3450,
      image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjczMzE4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      category: 'Poivrons',
      description: 'Mélange de poivrons rouges, jaunes et verts'
    },
    {
      id: '4',
      name: 'Salade Verte Fraîche',
      price: 975,
      image: 'https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTY4MTk1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      category: 'Légumes-feuilles',
      description: 'Salade verte croquante et tendre'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3));
  };

  const handleProductClick = (productId: string) => {
    onNavigate('product', productId);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos produits phares
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez nos légumes les plus appréciés par nos clients
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="sm" onClick={prevSlide}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Carrousel des produits */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((product) => (
                      <Card 
                        key={product.id}
                        className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white rounded-2xl"
                      >
                        <div className="relative">
                          <div 
                            className="h-64 overflow-hidden"
                            onClick={() => handleProductClick(product.id)}
                          >
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          
                          {product.badge && (
                            <Badge 
                              className={`absolute top-3 left-3 ${
                                product.badge === 'Promo' 
                                  ? 'bg-red-500 hover:bg-red-600' 
                                  : 'bg-green-500 hover:bg-green-600'
                              } text-white`}
                            >
                              {product.badge}
                            </Badge>
                          )}
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/90 hover:bg-white"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {product.category}
                            </Badge>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600">{product.rating}</span>
                            </div>
                          </div>
                          
                          <h3 
                            className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200 cursor-pointer"
                            onClick={() => handleProductClick(product.id)}
                          >
                            {product.name}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-green-600">
                                {product.price.toLocaleString()} F CFA
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">
                                  {product.originalPrice.toLocaleString()} F CFA
                                </span>
                              )}
                            </div>
                            
                            <Button 
                              size="sm"
                              onClick={() => onAddToCart(product.id)}
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              <ShoppingCart className="w-4 h-4 mr-1" />
                              Ajouter
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs pour mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => onNavigate('shop')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl"
          >
            Voir tous nos produits
          </Button>
        </div>
      </div>
    </section>
  );
}