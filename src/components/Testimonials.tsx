import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: '1',
      name: 'Marie Dubois',
      location: 'Paris',
      rating: 5,
      comment: 'Des légumes d\'une fraîcheur exceptionnelle ! La livraison est rapide et l\'emballage soigné. Je recommande vivement FreshVeg.',
      avatar: 'MD'
    },
    {
      id: '2',
      name: 'Pierre Martin',
      location: 'Lyon',
      rating: 5,
      comment: 'Enfin des vrais légumes avec du goût ! Les tomates cerises sont un délice, on sent vraiment la différence avec le bio.',
      avatar: 'PM'
    },
    {
      id: '3',
      name: 'Sophie Laurent',
      location: 'Marseille',
      rating: 5,
      comment: 'Service client au top et produits de qualité. Mes enfants adorent les carottes, c\'est un exploit ! Merci FreshVeg.',
      avatar: 'SL'
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits qui ont choisi la qualité 
            et la fraîcheur de nos légumes biologiques.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-2xl overflow-hidden"
            >
              {/* Icône citation */}
              <div className="absolute top-4 right-4 text-green-100">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-8">
                {/* Étoiles */}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star 
                      key={index} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Commentaire */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* Profil client */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-green-100 text-green-700 font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">Avis clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-gray-600">Livraison rapide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}