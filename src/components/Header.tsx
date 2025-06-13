import { Moon, Sun, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../contexts/ThemeContext';
import { text } from 'stream/consumers';

const Header = () => {
  const { isDark, isPortuguese, toggleTheme, toggleLanguage } = useTheme();

  const texts = {
    pt: {
      navItems: [
        { name: 'Início', href: '#inicio' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Currículo', href: '#curriculo' },
        { name: 'Contato', href: '#contato' }
      ],
      contact: 'Contate-me'
    },
    en: {
      navItems: [
        { name: 'Home', href: '#inicio' },
        { name: 'About', href: '#sobre' },
        { name: 'Projects', href: '#projetos' },
        { name: 'Resume', href: '#curriculo' },
        { name: 'Contact', href: '#contato' }
      ],
      contact: 'Contact me'
    }
  };

  const currentTexts = isPortuguese ? texts.pt : texts.en;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navegação */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <div className="relative flex items-center space-x-2 bg-card/50 rounded-2xl px-6 py-2 backdrop-blur-sm border border-border/50">
                {currentTexts.navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-blue-400 transition-all duration-300 text-sm font-medium px-4 py-2 rounded-xl hover:bg-muted/50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Lado direito */}
          <div className="flex items-center space-x-4">
            {/* Bandeira clicável */}
            <button
              onClick={toggleLanguage}
              className="transition-transform duration-200 hover:scale-110 rounded-lg overflow-hidden"
              aria-label="Toggle Language"
            >
              {isPortuguese ? (
                <div>
                  <img
                    src="/images/brasil.png"
                    alt="Vitor Gomes"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div>
                  <div>
                    <div>
                      <img
                        src="/images/usa.png"
                        alt="Vitor Gomes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </button>

            {/* Instagram */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://instagram.com/vittxw', '_blank')}
              className="text-muted-foreground hover:text-pink-400 hover:bg-muted rounded-xl"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Button>

            {/* Toggle Theme */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Botão Contate-me */}
            <Button
              size="sm"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              {currentTexts.contact}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
