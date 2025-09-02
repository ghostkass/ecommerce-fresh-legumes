import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Restez informé de nos dernières nouveautés
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter et recevez nos offres exclusives, 
              conseils de jardinage et actualités des producteurs locaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button className="bg-green-800 hover:bg-green-900 text-white">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-xl">FreshVeg</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Votre partenaire de confiance pour des légumes biologiques frais, 
              cultivés avec passion par nos producteurs locaux.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Boutique
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Catégories</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Tomates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Légumes-feuilles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Légumes-racines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Légumes de saison
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Avenue Cheikh Anta Diop<br />
                  Dakar, Sénégal
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+221 33 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@freshveg.sn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 FreshVeg. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Mentions légales
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                CGV
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}