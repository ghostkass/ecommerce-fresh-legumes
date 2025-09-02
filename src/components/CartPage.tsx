import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, CreditCard, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  weight: string;
}

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onNavigate: (page: string) => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }: CartPageProps) {
  const [promoCode, setPromoCode] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calculs
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 25000 ? 0 : 2500;
  const promoDiscount = promoCode.toLowerCase() === 'welcome10' ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - promoDiscount;

  const handleQuantityChange = (itemId: string, change: number) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulation d'un processus de commande
    setTimeout(() => {
      setIsCheckingOut(false);
      alert("Commande confirmée ! Merci pour votre achat.");
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={() => onNavigate('shop')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continuer mes achats</span>
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Votre panier est vide
          </h1>
          <p className="text-gray-600 mb-8">
            Découvrez notre sélection de légumes biologiques frais
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate('shop')}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Découvrir nos produits
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => onNavigate('shop')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continuer mes achats</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Mon panier ({cartItems.length} article{cartItems.length > 1 ? 's' : ''})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles du panier */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.weight}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-green-600">
                          {item.price.toFixed(2)}€
                        </span>
                        <span className="text-sm text-gray-500">
                          / pièce
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      {/* Contrôles quantité */}
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-3 py-2"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="px-4 py-2 min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="px-3 py-2"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Prix total */}
                      <div className="text-right min-w-[80px]">
                        <div className="font-bold text-gray-900">
                          {(item.price * item.quantity).toFixed(2)}€
                        </div>
                      </div>

                      {/* Supprimer */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Résumé de commande */}
          <div className="space-y-6">
            {/* Code promo */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Code promotionnel
                </h3>
                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Entrez votre code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled={!promoCode.trim()}
                  >
                    Appliquer
                  </Button>
                  {promoCode.toLowerCase() === 'welcome10' && (
                    <p className="text-green-600 text-sm">
                      ✓ Code appliqué : -10% sur votre commande
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Résumé */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Résumé de la commande
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-medium">{subtotal.toFixed(2)}€</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Livraison
                      {subtotal > 50 && (
                        <span className="text-green-600 text-sm ml-1">(Gratuite)</span>
                      )}
                    </span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? 'Gratuite' : `${deliveryFee.toFixed(2)}€`}
                    </span>
                  </div>

                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Remise (WELCOME10)</span>
                      <span>-{promoDiscount.toFixed(2)}€</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">{total.toFixed(2)}€</span>
                  </div>
                </div>

                {subtotal < 50 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-700 text-sm">
                      Ajoutez {(50 - subtotal).toFixed(2)}€ pour bénéficier 
                      de la livraison gratuite !
                    </p>
                  </div>
                )}

                <Button 
                  size="lg"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Traitement...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Procéder au paiement
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Informations livraison */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold text-gray-900">
                    Livraison rapide
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Livraison en 24h pour toute commande avant 14h</p>
                  <p>• Livraison gratuite à partir de 50€</p>
                  <p>• Emballage éco-responsable</p>
                  <p>• Fraîcheur garantie</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}