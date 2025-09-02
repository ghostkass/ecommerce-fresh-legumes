import { Leaf, Users, Award, Heart, CheckCircle, Truck, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Leaf,
      title: "Agriculture Bio",
      description: "Nous soutenons l'agriculture biologique locale et respectueuse de l'environnement sénégalais."
    },
    {
      icon: Users,
      title: "Producteurs Locaux",
      description: "Partenariat direct avec les agriculteurs des régions de Niayes, Casamance et Fleuve."
    },
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Sélection rigoureuse et contrôle qualité pour vous garantir le meilleur de nos terres."
    },
    {
      icon: Heart,
      title: "Passion du Terroir",
      description: "L'amour de la terre sénégalaise et de ses produits guide chacune de nos actions."
    }
  ];

  const stats = [
    { number: "500+", label: "Producteurs partenaires" },
    { number: "15+", label: "Régions couvertes" },
    { number: "1000+", label: "Familles servies" },
    { number: "24h", label: "Fraîcheur garantie" }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Certification Bio",
      description: "Tous nos légumes sont certifiés biologiques selon les standards internationaux."
    },
    {
      icon: Truck,
      title: "Livraison Express",
      description: "Livraison gratuite dans le Grand Dakar sous 24h, fraîcheur préservée."
    },
    {
      icon: Smartphone,
      title: "Commande Facile",
      description: "Interface simple et paiement mobile (Orange Money, Wave) pour votre confort."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            À propos de FreshVeg
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Votre partenaire de confiance pour des légumes biologiques frais,
            cultivés avec passion par nos producteurs sénégalais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('shop')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Découvrir nos produits
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Notre Mission */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre mission : Des légumes frais, du champ à votre assiette
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Depuis notre création à Dakar, nous nous engageons à révolutionner 
                la distribution de légumes biologiques au Sénégal. Notre plateforme 
                connecte directement les consommateurs aux meilleurs producteurs locaux.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nous croyons fermement que l'agriculture biologique est l'avenir 
                de notre alimentation et de notre environnement. C'est pourquoi nous 
                soutenons activement les pratiques agricoles durables dans nos régions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB2ZWdldGFibGVzJTIwZmllbGR8ZW58MXx8fHwxNzU2ODI5NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Producteur sénégalais dans son champ"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Valeurs */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui nous guide chaque jour dans notre engagement 
              envers une agriculture durable au Sénégal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Nos Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir FreshVeg ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience d'achat moderne, adaptée au mode de vie sénégalais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rejoignez la communauté FreshVeg
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Découvrez le goût authentique des légumes biologiques sénégalais 
            et soutenez nos producteurs locaux
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('shop')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
          >
            Commencer mes achats
          </Button>
        </div>
      </div>
    </div>
  );
}