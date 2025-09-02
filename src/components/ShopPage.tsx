import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Star, ShoppingCart, Heart, Search, Filter } from "lucide-react";
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
  season: string;
}

interface ShopPageProps {
  onAddToCart: (productId: string) => void;
  onNavigate: (page: string, productId?: string) => void;
  selectedCategory?: string;
}

export function ShopPage({ onAddToCart, onNavigate, selectedCategory }: ShopPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(selectedCategory || "all");
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState("all");

  const products: Product[] = [
    {
      id: '1',
      name: 'Tomates Cerises Bio',
      price: 2250,
      originalPrice: 2600,
      image: 'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      category: 'tomatoes',
      description: 'Tomates cerises biologiques, sucrées et croquantes',
      badge: 'Promo',
      season: 'été'
    },
    {
      id: '2',
      name: 'Carottes Bio du Potager',
      price: 1400,
      image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdHMlMjBvcmdhbmljfGVufDF8fHx8MTc1NjcyNjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      category: 'roots',
      description: 'Carottes biologiques fraîchement récoltées',
      badge: 'Nouveau',
      season: 'automne'
    },
    {
      id: '3',
      name: 'Poivrons Colorés',
      price: 3450,
      image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjczMzE4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      category: 'peppers',
      description: 'Mélange de poivrons rouges, jaunes et verts',
      season: 'été'
    },
    {
      id: '4',
      name: 'Salade Verte Fraîche',
      price: 975,
      image: 'https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTY4MTk1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      category: 'leafy',
      description: 'Salade verte croquante et tendre',
      season: 'printemps'
    },
    {
      id: '5',
      name: 'Tomates Anciennes',
      price: 2950,
      image: 'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      category: 'tomatoes',
      description: 'Variétés anciennes aux saveurs authentiques',
      season: 'été'
    },
    {
      id: '6',
      name: 'Épinards Frais',
      price: 1600,
      image: 'https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTY4MTk1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.5,
      category: 'leafy',
      description: 'Épinards tendres et riches en fer',
      season: 'hiver'
    },
    {
      id: '7',
      name: 'Radis Roses',
      price: 750,
      image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdHMlMjBvcmdhbmljfGVufDF8fHx8MTc1NjcyNjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.4,
      category: 'roots',
      description: 'Radis croquants et légèrement piquants',
      season: 'printemps'
    },
    {
      id: '8',
      name: 'Courgettes Bio',
      price: 1900,
      image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjczMzE4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      category: 'peppers',
      description: 'Courgettes tendres et savoureuses',
      season: 'été'
    }
  ];

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'tomatoes', label: 'Tomates' },
    { value: 'leafy', label: 'Légumes-feuilles' },
    { value: 'roots', label: 'Légumes-racines' },
    { value: 'peppers', label: 'Poivrons & Courgettes' },
    { value: 'seasonal', label: 'Légumes de saison' },
    { value: 'herbs', label: 'Herbes aromatiques' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategoryFilter === 'all' || product.category === selectedCategoryFilter;
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'low' && product.price < 1500) ||
                        (priceRange === 'medium' && product.price >= 1500 && product.price <= 3000) ||
                        (priceRange === 'high' && product.price > 3000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleProductClick = (productId: string) => {
    onNavigate('product', productId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre boutique
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Découvrez notre sélection de légumes biologiques frais, cultivés avec passion 
            par nos producteurs sénégalais. Des produits de qualité, directement du champ à votre table.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Livraison gratuite à Dakar</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Produits 100% bio</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fraîcheur garantie</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar des filtres */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
              </div>

              {/* Recherche */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rechercher
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Nom du produit..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Catégorie */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <Select value={selectedCategoryFilter} onValueChange={setSelectedCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Prix */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gamme de prix
                </label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les prix</SelectItem>
                    <SelectItem value="low">Moins de 1500 F CFA</SelectItem>
                    <SelectItem value="medium">1500 - 3000 F CFA</SelectItem>
                    <SelectItem value="high">Plus de 3000 F CFA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tri */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trier par
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nom A-Z</SelectItem>
                    <SelectItem value="price-low">Prix croissant</SelectItem>
                    <SelectItem value="price-high">Prix décroissant</SelectItem>
                    <SelectItem value="rating">Mieux notés</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Grille des produits */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
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
                        {product.season}
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

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Aucun produit ne correspond à vos critères de recherche.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}