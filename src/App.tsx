import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Categories } from "./components/Categories";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { ShopPage } from "./components/ShopPage";
import { ProductPage } from "./components/ProductPage";
import { CartPage } from "./components/CartPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { toast } from "sonner@2.0.3";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  weight: string;
}

type Page = 'home' | 'shop' | 'product' | 'cart' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Données des produits (normalement dans une base de données)
  const productsData = {
    '1': {
      name: 'Tomates Cerises Bio',
      price: 2250,
      image: 'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      weight: '500g'
    },
    '2': {
      name: 'Carottes Bio du Potager',
      price: 1400,
      image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdHMlMjBvcmdhbmljfGVufDF8fHx8MTc1NjcyNjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      weight: '1kg'
    },
    '3': {
      name: 'Poivrons Colorés',
      price: 3450,
      image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjczMzE4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      weight: '750g'
    },
    '4': {
      name: 'Salade Verte Fraîche',
      price: 975,
      image: 'https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTY4MTk1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      weight: '200g'
    }
  };

  const handleNavigation = (page: string, productId?: string, category?: string) => {
    setCurrentPage(page as Page);
    if (productId) {
      setSelectedProductId(productId);
    }
    if (category) {
      setSelectedCategory(category);
    }
    // Scroll vers le haut lors du changement de page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (productId: string, quantity: number = 1) => {
    const product = productsData[productId as keyof typeof productsData];
    if (!product) {
      toast.error("Produit non trouvé");
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem) {
        toast.success(`Quantité mise à jour : ${product.name}`);
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`Ajouté au panier : ${product.name}`);
        return [...prevItems, {
          id: productId,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          weight: product.weight
        }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(itemId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
      toast.success(`${item.name} retiré du panier`);
    }
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <FeaturedProducts 
              onAddToCart={handleAddToCart} 
              onNavigate={handleNavigation}
            />
            <Categories onNavigate={handleNavigation} />
            <Testimonials />
          </>
        );
      
      case 'shop':
        return (
          <ShopPage 
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigation}
            selectedCategory={selectedCategory}
          />
        );
      
      case 'product':
        return (
          <ProductPage 
            productId={selectedProductId}
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigation}
          />
        );
      
      case 'cart':
        return (
          <CartPage 
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigation}
          />
        );

      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;

      case 'contact':
        return <ContactPage onNavigate={handleNavigation} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentPage={currentPage}
        onNavigate={handleNavigation}
        cartItemsCount={getTotalCartItems()}
      />
      
      <main>
        {renderCurrentPage()}
      </main>
      
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}