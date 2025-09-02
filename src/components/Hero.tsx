import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1618254676841-71055a17efc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBiYXNrZXQlMjBmYXJtfGVufDF8fHx8MTc1NjgxOTUwMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Légumes frais du potager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Badge qualité */}
          <div className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">100% Bio & Local</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Des légumes frais,
            <span className="block text-green-400">du champ à votre assiette</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Découvrez notre sélection de légumes biologiques, cultivés avec passion 
            par nos producteurs locaux. Fraîcheur et qualité garanties.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => onNavigate('shop')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos produits
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-xl transition-all duration-300"
            >
              En savoir plus
            </Button>
          </div>

          {/* Statistiques */}
          <div className="flex items-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Produits frais</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15</div>
              <div className="text-sm text-gray-300">Producteurs locaux</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.8★</div>
              <div className="text-sm text-gray-300">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}