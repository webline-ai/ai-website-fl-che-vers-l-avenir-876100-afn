'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logo: 'FlècheAvenir',
  tagline: "Transformez votre organisation aujourd'hui pour exceller dans l'économie de demain",
  ctaText: 'Commencer',
  ctaHref: '#contact',
  navigationItems: [
    { label: 'Accueil', href: '#hero' },
    { label: 'À Propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Vision', href: '#features' },
    { label: 'Contact', href: '#contact' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section
      id="navigation"
      className="bg-background text-foreground border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <ArrowRight className="h-6 w-6 transform rotate-45" />
            </div>
            <div className="flex flex-col">
              <span data-editable="logo" className="text-xl font-bold text-foreground">
                {config.logo}
              </span>
              <span
                data-editable="tagline"
                className="text-xs text-muted-foreground hidden sm:block max-w-xs truncate"
              >
                {config.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-1">
              {config.navigationItems.map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item.href)}
                    data-editable-href={`navigationItems[${idx}].href`}
                    data-href={item.href}
                    className="text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span data-editable={`navigationItems[${idx}].label`}>{item.label}</span>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={handleCtaClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card text-card-foreground">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2 pb-4 border-b border-border">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                    <ArrowRight className="h-5 w-5 transform rotate-45" />
                  </div>
                  <span data-editable="logo" className="text-lg font-bold text-card-foreground">
                    {config.logo}
                  </span>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="flex flex-col space-y-2">
                  {config.navigationItems.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      onClick={() => handleNavClick(item.href)}
                      data-editable-href={`navigationItems[${idx}].href`}
                      data-href={item.href}
                      className="justify-start text-card-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      <span data-editable={`navigationItems[${idx}].label`}>{item.label}</span>
                    </Button>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={handleCtaClick}
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
