'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_ABOUT = {
  title: 'Votre partenaire de transformation stratégique',
  subtitle: "Nous guidons les organisations vers l'excellence de demain",
  description:
    'Depuis plus de 15 ans, nous accompagnons les entreprises dans leur évolution stratégique. Notre approche combine vision prospective et mise en œuvre pragmatique pour créer des avantages concurrentiels durables.',
  imageUrl:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
  imageAlt: 'Équipe de consultants en stratégie travaillant ensemble',
  stats: [
    { number: '200+', label: 'Transformations réussies' },
    { number: '15', label: "Années d'expertise" },
    { number: '95%', label: 'Taux de satisfaction client' },
  ],
  values: [
    {
      icon: 'Target',
      title: 'Vision stratégique',
      description:
        'Nous anticipons les défis de demain pour construire votre avantage concurrentiel',
    },
    {
      icon: 'Users',
      title: 'Accompagnement humain',
      description: "Chaque transformation réussie place l'humain au cœur de notre méthodologie",
    },
    {
      icon: 'TrendingUp',
      title: 'Performance durable',
      description:
        'Nos solutions créent une croissance pérenne et responsable pour votre organisation',
    },
  ],
  ctaText: 'Découvrir notre approche',
  ctaHref: '/methode',
  secondaryCtaText: 'Nos références',
  secondaryCtaHref: '/references',
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return Target;
      case 'Users':
        return Users;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Target;
    }
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCtaClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="about" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    <span data-editable={`stats[${idx}].number`}>{stat.number}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCtaClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={handleSecondaryCtaClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-muted">
              <Image
                src={config.imageUrl}
                alt={config.imageAlt}
                fill
                className="object-cover"
                data-editable-src="imageUrl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <Badge variant="secondary" className="bg-primary-foreground text-primary">
                Excellence & Innovation
              </Badge>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-border pt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Nos valeurs fondamentales
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {config.values.map((value, idx) => {
              const IconComponent = getIcon(value.icon);
              return (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">
                      <span data-editable={`values[${idx}].title`}>{value.title}</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      <span data-editable={`values[${idx}].description`}>{value.description}</span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
