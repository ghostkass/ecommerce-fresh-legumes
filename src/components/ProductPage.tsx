import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Star, ShoppingCart, Heart, Minus, Plus, ArrowLeft, Truck, Shield, Leaf, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductPageProps {
  productId: string;
  onAddToCart: (productId: string, quantity: number) => void;
  onNavigate: (page: string) => void;
}

export function ProductPage({ productId, onAddToCart, onNavigate }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Données fictives du produit (dans une vraie app, on ferait un fetch basé sur productId)
  const product = {
    id: productId,
    name: 'Tomates Cerises Bio',
    price: 2250,
    originalPrice: 2600,
    images: [
      'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    rating: 4.8,
    reviewCount: 127,
    category: 'Tomates',
    description: 'Nos tomates cerises biologiques sont cultivées avec soin par nos producteurs partenaires dans la région des Niayes. Elles offrent une explosion de saveurs sucrées et acidulées, parfaites pour vos salades, apéritifs ou à déguster nature. Récoltées à maturité, elles conservent toute leur fraîcheur et leurs qualités nutritionnelles.',
    features: [
      'Certification biologique',
      'Cultivées au Sénégal',
      'Récoltées à maturité',
      'Riches en antioxydants',
      'Sans pesticides'
    ],
    nutritionalInfo: [
      { label: 'Calories', value: '18 kcal/100g' },
      { label: 'Vitamine C', value: '23mg/100g' },
      { label: 'Potassium', value: '237mg/100g' },
      { label: 'Fibres', value: '1.2g/100g' }
    ],
    storage: 'À conserver au réfrigérateur entre 8 et 12°C. Consommer dans les 5 jours suivant la réception.',
    origin: 'Région des Niayes, Sénégal',
    producer: 'Coopérative Bio Niayes',
    weight: '500g',
    season: 'Octobre à Mai',
    badge: 'Promo'
  };

  const relatedProducts = [
    {
      id: '5',
      name: 'Tomates Anciennes',
      price: 2950,
      image: 'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9
    },
    {
      id: '3',
      name: 'Poivrons Colorés',
      price: 3450,
      image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjczMzE4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7
    },
    {
      id: '8',
      name: 'Courgettes Bio',
      price: 1900,
      image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjczMzE4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6
    }
  ];

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    onAddToCart(product.id, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => onNavigate('shop')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à la boutique</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images du produit */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white">
                  {product.badge}
                </Badge>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      index === selectedImage ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informations du produit */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                      key={index} 
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewCount} avis)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  {product.price.toLocaleString()} F CFA
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice.toLocaleString()} F CFA
                  </span>
                )}
                <span className="text-sm text-gray-600">
                  / {product.weight}
                </span>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Caractéristiques */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Caractéristiques</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Sélection quantité et ajout panier */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Quantité :</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decreaseQuantity}
                    className="px-3 py-2"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={increaseQuantity}
                    className="px-3 py-2"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ajouter au panier - {(product.price * quantity).toLocaleString()} F CFA
                </Button>
                
                <Button variant="outline" size="lg" className="px-4">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Garanties */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-green-500" />
                <span>Livraison 24h</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Qualité garantie</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Leaf className="w-4 h-4 text-green-500" />
                <span>100% biologique</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Fraîcheur optimale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Informations détaillées */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations nutritionnelles</h3>
              <div className="space-y-3">
                {product.nutritionalInfo.map((info, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Origine & Conservation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Origine</span>
                  <span className="font-medium">{product.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Producteur</span>
                  <span className="font-medium">{product.producer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saison</span>
                  <span className="font-medium">{product.season}</span>
                </div>
                <Separator />
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.storage}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Produits similaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card 
                key={relatedProduct.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white rounded-2xl"
                onClick={() => onNavigate('product', relatedProduct.id)}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      {relatedProduct.price.toLocaleString()} F CFA
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}