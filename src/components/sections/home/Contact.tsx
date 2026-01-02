'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Transformons Ensemble Votre Vision en Réalité',
  subtitle:
    "Prêt à propulser votre organisation vers l'avenir ? Discutons de votre stratégie de transformation.",
  formTitle: 'Démarrons la Conversation',
  formSubtitle:
    'Partagez-nous votre vision et découvrons ensemble les opportunités de transformation.',
  submitText: 'Lancer la Transformation',
  contactMethods: [
    {
      icon: 'Mail',
      title: 'Email Direct',
      value: 'transformation@consulting.fr',
      description: 'Réponse sous 24h',
    },
    {
      icon: 'Phone',
      title: 'Consultation Téléphonique',
      value: '+33 1 23 45 67 89',
      description: 'Lun-Ven 9h-18h',
    },
    {
      icon: 'MapPin',
      title: 'Siège Social',
      value: '75008 Paris, France',
      description: 'Rendez-vous sur demande',
    },
  ],
  responseTime:
    'Nous nous engageons à vous répondre dans les 24 heures pour initier votre parcours de transformation.',
  privacyText: 'Vos données sont protégées et utilisées uniquement pour vous recontacter.',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement form submission logic
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    // Reset form or show success message
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="h-6 w-6" />;
      case 'Phone':
        return <Phone className="h-6 w-6" />;
      case 'MapPin':
        return <MapPin className="h-6 w-6" />;
      default:
        return <Mail className="h-6 w-6" />;
    }
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">
                <span data-editable="formTitle">{config.formTitle}</span>
              </CardTitle>
              <p className="text-muted-foreground">
                <span data-editable="formSubtitle">{config.formSubtitle}</span>
              </p>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-form-id="69584a18ec23667e37f2c568"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={e => handleInputChange('name', e.target.value)}
                      placeholder="Votre nom"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Organisation</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={e => handleInputChange('company', e.target.value)}
                    placeholder="Nom de votre organisation"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Votre projet de transformation</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    placeholder="Décrivez vos défis et objectifs de transformation..."
                    rows={5}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  <span data-editable="submitText">{config.submitText}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-muted-foreground">
                      <span data-editable="responseTime">{config.responseTime}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span data-editable="privacyText">{config.privacyText}</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Autres Moyens de Contact</h3>
              <div className="space-y-6">
                {config.contactMethods.map((method, idx) => (
                  <Card
                    key={idx}
                    className="bg-muted/50 border-border hover:bg-muted/70 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-lg flex-shrink-0">
                          {getIcon(method.icon)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">
                            <span data-editable={`contactMethods[${idx}].title`}>
                              {method.title}
                            </span>
                          </h4>
                          <p className="text-foreground font-medium mb-1">
                            <span data-editable={`contactMethods[${idx}].value`}>
                              {method.value}
                            </span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span data-editable={`contactMethods[${idx}].description`}>
                              {method.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3">Prêt à Transformer Votre Avenir ?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  Chaque grande transformation commence par une conversation. Prenons le temps
                  d'explorer ensemble vos opportunités.
                </p>
                <Button
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Planifier un Appel Stratégique
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
