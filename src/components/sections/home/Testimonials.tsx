'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_TESTIMONIALS = {
  title: 'Ils nous font confiance',
  subtitle:
    "Découvrez comment nous avons accompagné nos clients vers l'excellence et la transformation durable",
  ctaText: 'Découvrir nos solutions',
  ctaHref: '/solutions',
  testimonials: [
    {
      id: '1',
      quote:
        'Grâce à leur accompagnement stratégique, nous avons transformé notre organisation et anticipé les défis de demain. Une vision claire pour un avenir performant.',
      author: 'Marie Dubois',
      position: 'Directrice Générale',
      company: 'TechnoVision',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Photo de Marie Dubois',
    },
    {
      id: '2',
      quote:
        "Leur méthodologie éprouvée nous a permis de construire un avantage concurrentiel durable. L'innovation pratique au service de la performance.",
      author: 'Jean-Pierre Martin',
      position: 'Président',
      company: 'Groupe Évolution',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Photo de Jean-Pierre Martin',
    },
    {
      id: '3',
      quote:
        "Une transformation réussie qui nous positionne parfaitement pour exceller dans l'économie de demain. Un partenariat de confiance.",
      author: 'Sophie Laurent',
      position: 'DRH',
      company: 'Avenir Solutions',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Photo de Sophie Laurent',
    },
  ],
} as const;

type TestimonialsProps = Partial<typeof DEFAULT_TESTIMONIALS>;

export default function Testimonials(props: TestimonialsProps) {
  const config = { ...DEFAULT_TESTIMONIALS, ...props };
  const navigate = useSmartNavigation();

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {config.testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].quote`}>"{testimonial.quote}"</span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.avatarAlt}
                      data-editable-src={`testimonials[${idx}].avatarUrl`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.author
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      <span data-editable={`testimonials[${idx}].author`}>
                        {testimonial.author}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`testimonials[${idx}].position`}>
                        {testimonial.position}
                      </span>
                    </div>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      <span data-editable={`testimonials[${idx}].company`}>
                        {testimonial.company}
                      </span>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleCtaClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
