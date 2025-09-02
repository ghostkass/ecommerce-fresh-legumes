import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CategoriesProps {
  onNavigate: (page: string, category?: string) => void;
}

export function Categories({ onNavigate }: CategoriesProps) {
  const categories = [
    {
      id: 'tomatoes',
      name: 'Tomates',
      description: 'Variétés goûteuses et colorées',
      image: 'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjBmcmVzaHxlbnwxfHx8fDE3NTY3NTQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '12 variétés'
    },
    {
      id: 'leafy',
      name: 'Légumes-feuilles',
      description: 'Salades, épinards, choux',
      image: 'https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTY4MTk1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '8 variétés'
    },
    {
      id: 'roots',
      name: 'Légumes-racines',
      description: 'Carottes, radis, betteraves',
      image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdHMlMjBvcmdhbmljfGVufDF8fHx8MTc1NjcyNjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      count: '15 variétés'
    },
    {
      id: 'peppers',
      name: 'Poivrons & Courgettes',
      description: 'Couleurs et saveurs variées',
      image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjczMzE4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      count: '10 variétés'
    },
    {
      id: 'seasonal',
      name: 'Légumes de saison',
      description: 'Sélection du moment',
      image: 'https://images.unsplash.com/photo-1690934164598-99267828e900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwbWFya2V0JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTY3NDUyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '20+ produits'
    },
    {
      id: 'herbs',
      name: 'Herbes aromatiques',
      description: 'Basilic, thym, persil',
      image: 'https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTY4MTk1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '12 variétés'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos catégories de légumes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez notre large gamme de légumes biologiques, soigneusement sélectionnés 
            pour leur fraîcheur et leur qualité exceptionnelle.
          </p>
        </div>

        {/* Grille des catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white rounded-2xl"
              onClick={() => onNavigate('shop', category.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg text-sm">
                    {category.count}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}