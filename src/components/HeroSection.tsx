import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import gsap from 'gsap';

const HeroSection = () => {
  const { isPortuguese, isDark } = useTheme();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo('.hero-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo('.tech-icons',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo('.hero-buttons',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  const texts = {
    pt: {
      welcome: "Bem vindo ao meu site.",
      name: "Vitor Gomes",
      role: "Desenvolvedor Front-End.",
      description: "Sou desenvolvedor Front-end com experiência em diversas tecnologias, incluindo React, Node.js, TypeScript, JavaScript, PHP, MySQL e testes unitários. Amo escrever código que proporciona experiências de usuário incríveis e faz com que as pessoas se sintam",
      optimal: "ÓTIMAS!",
      learning: "Estou sempre ansioso para aprender e explorar novas tecnologias, bibliotecas, frameworks, linguagens de programação e novas abordagens de desenvolvimento. Atualmente, estou aprendendo sobre",
      currentLearning: "Laravel e React Native",
      contact: "Entrar em contato",
      curriculum: "Currículo",
      followMe: "Me sigam:",
      studying: "Estudando e compartilhando conhecimento:",
      dailyLife: "Desenvolvimento Web, Café, cotidiano e algumas outras coisas.",
      following: "Seguindo",
      followers: "Seguidores",
      tags: ["Designer gráfico", "Disponivel para Propostas", "Entusiasta de Academia", "Entusiasta de Tecnologia"]
    },
    en: {
      welcome: "Welcome to my website.",
      name: "Vitor Gomes",
      role: "Front-End Developer.",
      description: "I am a Front-End Developer with experience in various technologies, including React, Node.js, TypeScript, JavaScript, PHP, MySQL, and unit testing. I love writing code that delivers amazing user experiences and makes people feel",
      optimal: "GREAT!",
      learning: "I am always eager to learn and explore new technologies, libraries, frameworks, programming languages, and development approaches. Currently, I’m learning about",
      currentLearning: "Laravel and React Native",
      contact: "Get in touch",
      curriculum: "Resume",
      followMe: "Follow me:",
      studying: "Studying and sharing knowledge:",
      dailyLife: "Web Development, coffee, daily life, and a few other things.",
      following: "Following",
      followers: "Followers",
      tags: ["Graphic Designer", "Available for Offers", "Fitness Enthusiast", "Tech Enthusiast"]
    }
  };

  const currentTexts = isPortuguese ? texts.pt : texts.en;

  const technologies = [
    {
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }
  ];

  const codeContent = `import { FC } from "react";

type WelcomeProps = {
  uses: 
    | "exploring new technologies"
    | "showcasing my skills"
    | "finding freelance opportunities"
    | "finding a full-time job";
};

export const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little corner of the Internet.</h1>
      <p>
        I use this site for <em>{uses}</em>.
      </p>
    </>
  );
};`;

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden ${isDark
        ? 'bg-gray-900'
        : 'bg-gray-50'
      }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Conteúdo Principal - Esquerda */}
        <div className="hero-content space-y-8">
          <div className="space-y-6">
            <p className={`text-lg font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
              {currentTexts.welcome}
            </p>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight ${isDark ? 'text-white' : 'text-gray-900'
              }`}>
              Eu sou <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {currentTexts.name}
              </span>,<br />
              {currentTexts.role}
            </h1>
          </div>

          {/* Tecnologias com ícones pequenos */}
          <div className="flex items-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-icons flex items-center gap-2"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6"
                />
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Descrição */}
          <div className="space-y-4">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
              {currentTexts.description} <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>{currentTexts.optimal}</span>
            </p>

            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
              {currentTexts.learning} <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>{currentTexts.currentLearning}</span>.
            </p>
          </div>

          {/* Botões */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4">
            <Button
              className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${isDark
                  ? 'bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {currentTexts.contact}
            </Button>

            {/* Botão de Download Adaptado */}
            <a
              href="/images/vitor-cavalcante-desenvolvedor-cc.pdf"
              download="Vitor_Gomes_Curriculo.pdf"
              className={`px-8 py-1 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center ${isDark
                  ? 'bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white'
                  : 'bg-transparent border-2 border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white'
                }`}
            >
              <Download className="mr-2 h-5 w-5" />
              {currentTexts.curriculum}
            </a>
          </div>
        </div>

        {/* Lado Direito - Código e Card */}
        <div className="hero-content space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {currentTexts.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${index === 0 ? (isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700') :
                    index === 1 ? (isDark ? 'bg-green-800 text-green-300' : 'bg-green-200 text-green-800') :
                      index === 2 ? (isDark ? 'bg-orange-800 text-orange-300' : 'bg-orange-200 text-orange-800') :
                        (isDark ? 'bg-blue-800 text-blue-300' : 'bg-blue-200 text-blue-800')
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Editor de Código Simulado */}
          <div className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-900 border-gray-300'
            }`}>
            <div className={`flex items-center justify-between px-4 py-3 border-b ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-800 border-gray-600'
              }`}>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">index.tsx</span>
              </div>
              <div className="text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            <div className="p-4">
              <pre className="text-sm">
                <code className="text-gray-300">
                  {codeContent}
                </code>
              </pre>
            </div>
          </div>

          {/* Card de Perfil */}
          <div className={`rounded-2xl p-6 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
            }`}>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                <img
                  src="/images/foto-perfil.png"
                  alt="Vitor Gomes"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    Vitor Gomes
                  </h3>
                  <Button
                    onClick={() => window.open('https://instagram.com/vittxw', '_blank')}
                    size="sm"
                    className={`px-4 py-1 rounded-full text-sm ${isDark
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                  >
                    Seguir
                  </Button>
                </div>

                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  @vittxw
                </p>

                <p className={`text-sm mt-3 ${isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {currentTexts.studying}
                </p>

                <p className={`text-sm mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {currentTexts.dailyLife}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    <span className="font-semibold text-white">83</span> {currentTexts.following}
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    <span className="font-semibold text-white">3907</span> {currentTexts.followers}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Sociais */}
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/vitorcgms/', '_blank')}
              className={`rounded-xl p-3 ${isDark
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
              <Linkedin className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://github.com/vitorcgo', '_blank')}
              className={`rounded-xl p-3 ${isDark
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
            >
              <Github className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`rounded-xl p-3 ${isDark
                  ? 'bg-pink-600 hover:bg-pink-700 text-white'
                  : 'bg-pink-600 hover:bg-pink-700 text-white'
                }`}
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;