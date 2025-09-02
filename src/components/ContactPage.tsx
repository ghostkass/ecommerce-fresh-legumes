import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: ""
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: [
        "Avenue Cheikh Anta Diop",
        "Point E, Dakar",
        "Sénégal"
      ]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: [
        "+221 33 123 45 67",
        "+221 77 987 65 43"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@freshveg.sn",
        "support@freshveg.sn"
      ]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: [
        "Lun - Ven: 8h00 - 18h00",
        "Sam: 8h00 - 14h00",
        "Dimanche: Fermé"
      ]
    }
  ];

  const subjects = [
    "Commande et livraison",
    "Qualité des produits",
    "Partenariat producteur",
    "Service client",
    "Réclamation",
    "Autre"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Une question ? Un problème ? Notre équipe est là pour vous aider.
            Contactez-nous par le moyen qui vous convient le mieux.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>Réponse sous 2h en moyenne</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-green-600" />
              <span>WhatsApp disponible</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span>Support téléphonique</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations de contact */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-green-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Besoin d'aide urgente ?
                </h3>
                <p className="text-gray-600 mb-4">
                  Pour les questions urgentes liées aux livraisons en cours, 
                  contactez-nous directement par WhatsApp.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: +221 77 987 65 43
                </Button>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envoyez-nous un message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Votre nom complet"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="votre@email.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+221 XX XXX XX XX"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact préféré
                        </label>
                        <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange("preferredContact", value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Comment préférez-vous être contacté ?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Téléphone</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)} required>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choisissez le sujet de votre message" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Décrivez votre demande en détail..."
                        required
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Quels sont les délais de livraison ?
                </h3>
                <p className="text-gray-600">
                  Nous livrons dans le Grand Dakar sous 24h. Pour les autres régions, 
                  comptez 2-3 jours ouvrés. La livraison est gratuite pour les commandes 
                  supérieures à 15 000 F CFA.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Comment payer ma commande ?
                </h3>
                <p className="text-gray-600">
                  Nous acceptons Orange Money, Wave, les virements bancaires et 
                  le paiement à la livraison. Tous les paiements sont sécurisés.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Vos légumes sont-ils vraiment bio ?
                </h3>
                <p className="text-gray-600">
                  Oui, tous nos légumes sont certifiés biologiques. Nous travaillons 
                  uniquement avec des producteurs certifiés et effectuons des contrôles qualité réguliers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Que faire si je ne suis pas satisfait ?
                </h3>
                <p className="text-gray-600">
                  Nous garantissons la fraîcheur de nos produits. En cas de problème, 
                  contactez-nous sous 24h et nous procéderons au remboursement ou à l'échange.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => onNavigate('shop')}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Découvrir nos produits
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}