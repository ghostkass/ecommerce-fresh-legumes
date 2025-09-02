import { ShoppingCart, Search, User, Menu, Leaf } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemsCount: number;
}

export function Navigation({ currentPage, onNavigate, cartItemsCount }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Accueil', href: 'home' },
    { id: 'shop', label: 'Boutique', href: 'shop' },
    { id: 'about', label: 'À propos', href: 'about' },
    { id: 'contact', label: 'Contact', href: 'contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-xl text-gray-900">FreshVeg</span>
          </div>

          {/* Navigation centrale */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.href)}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  currentPage === item.href
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions à droite */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => onNavigate('cart')}
            >
              <ShoppingCart className="w-4 h-4" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-green-500 hover:bg-green-600"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}