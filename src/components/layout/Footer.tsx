'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: "Flèche vers l'Avenir",
  tagline: "Transformez votre organisation aujourd'hui pour exceller dans l'économie de demain",
  copyright: "© 2024 Flèche vers l'Avenir. Tous droits réservés.",

  // Contact Information
  email: 'contact@flecheavenir.fr',
  phone: '+33 1 23 45 67 89',
  address: "123 Avenue de l'Innovation, 75001 Paris",

  // Company Links
  companyLinks: [
    { label: 'À propos', href: '/about' },
    { label: 'Nos services', href: '/services' },
    { label: 'Équipe', href: '/team' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Mentions légales', href: '/legal' },
    { label: 'Politique de confidentialité', href: '/privacy' },
  ],

  // Social Media
  socialLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/fleche-avenir', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com/flecheavenir', icon: 'twitter' },
  ],

  // Newsletter
  newsletterTitle: 'Restez informé des dernières tendances',
  newsletterDescription: 'Recevez nos insights sur la transformation organisationnelle',
  newsletterPlaceholder: 'Votre adresse email',
  newsletterButtonText: "S'abonner",
  newsletterHref: '/newsletter',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleNewsletterSubmit = () => {
    navigate(config.newsletterHref);
  };

  const handleSocialClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      default:
        return <ArrowRight className="h-5 w-5" />;
    }
  };

  return (
    <section id="footer" className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span data-editable="companyName">{config.companyName}</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                <span data-editable="tagline">{config.tagline}</span>
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span data-editable="email">{config.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span data-editable="phone">{config.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span data-editable="address">{config.address}</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Entreprise</h4>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => navigate(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  data-editable="newsletterPlaceholder"
                />
                <Button
                  size="sm"
                  onClick={handleNewsletterSubmit}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-editable-href="newsletterHref"
                  data-href={config.newsletterHref}
                >
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyright">{config.copyright}</span>
            </p>

            {/* Legal Links & Social */}
            <div className="flex items-center gap-6">
              {/* Legal Links */}
              <div className="flex gap-4">
                {config.legalLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </button>
                ))}
              </div>

              <Separator orientation="vertical" className="h-4 bg-border" />

              {/* Social Links */}
              <div className="flex gap-3">
                {config.socialLinks.map((social, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSocialClick(social.href)}
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    aria-label={social.label}
                    data-editable-href={`socialLinks[${idx}].href`}
                    data-href={social.href}
                  >
                    {renderSocialIcon(social.icon)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
