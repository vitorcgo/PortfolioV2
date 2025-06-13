import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users, Award, Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const { isPortuguese, isDark } = useTheme();

  useEffect(() => {
    gsap.fromTo('.about-card', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.about-cards',
          start: "top 80%",
        }
      }
    );

    gsap.fromTo('.about-text', 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.about-content',
          start: "top 80%",
        }
      }
    );

    gsap.fromTo('.stats-item', 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.stats-grid',
          start: "top 85%",
        }
      }
    );
  }, []);

  const texts = {
    pt: {
      title: "Sobre Mim",
      subtitle: "Desenvolvedor apaixonado por tecnologia!",
      description: "Sou um desenvolvedor front-end com conhecimento e diferencial com back-end e designer gráfico com 1 ano e meio de experiência criando soluções digitais inovadoras. Especializado em desenvolvimento web moderno, sempre buscando as melhores práticas e tecnologias mais recentes para entregar projetos de alta qualidade, atualmente estou cursando Sistemas para Internet no SENAC buscando me aprofundar também em desenvolvimento mobile.",
      passion: "Minha paixão está em transformar ideias em realidade através do código, criando experiências digitais que fazem a diferença na vida das pessoas.",
      skills: [
        {
          icon: Code,
          title: "Desenvolvimento de Sistemas",
          description: "Domínio completo do ciclo de desenvolvimento, desde a concepção até a implementação final."
        },
        {
          icon: Palette,
          title: "Design & UX/UI",
          description: "Criação de interfaces intuitivas e experiências de usuário memoráveis e eficientes."
        },
        {
          icon: Zap,
          title: "Performance & Otimização",
          description: "Foco em aplicações rápidas, otimizadas e com excelente performance em todos os dispositivos."
        },
        {
          icon: Users,
          title: "Colaboração em Equipes",
          description: "Trabalho eficaz em equipe, mentoria e liderança técnica em projetos complexos."
        },
        {
          icon: Award,
          title: "Qualidade & Testes",
          description: "Desenvolvimento orientado a testes e garantia de qualidade em todas as entregas."
        },
        {
          icon: Target,
          title: "Foco em Resultados",
          description: "Orientação para entrega de valor e impacto real nos negócios dos clientes."
        }
      ],
      stats: [
        { number: "1+", label: "Anos de Experiência" },
        { number: "10+", label: "Projetos Concluídos" },
        { number: "8+", label: "Tecnologias" },
        { number: "100%", label: "Dedicação" }
      ]
    },
    en: {
      title: "About Me",
      subtitle: "Developer passionate about technology!",
      description: "I’m a front-end developer with knowledge and differentiation in back-end and graphic design, with 1.5 years of experience creating innovative digital solutions. Specialized in modern web development, always seeking best practices and the latest technologies to deliver high-quality projects. I’m currently studying Internet Systems at SENAC, also looking to deepen my skills in mobile development.",
      passion: "My passion lies in turning ideas into reality through code, creating digital experiences that make a difference in people’s lives.",
      skills: [
        {
          icon: Code,
          title: "System Development",
          description: "Complete mastery of the development cycle, from conception to final implementation."
        },
        {
          icon: Palette,
          title: "Design & UX/UI",
          description: "Creating intuitive interfaces and memorable, efficient user experiences."
        },
        {
          icon: Zap,
          title: "Performance & Optimization",
          description: "Focus on fast, optimized applications with excellent performance across all devices."
        },
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Effective teamwork, mentoring, and technical leadership in complex projects."
        },
        {
          icon: Award,
          title: "Quality & Testing",
          description: "Test-driven development and quality assurance in every delivery."
        },
        {
          icon: Target,
          title: "Results-Oriented",
          description: "Focused on delivering value and real impact to clients’ businesses."
        }
      ],
      stats: [
        { number: "1+", label: "Years of Experience" },
        { number: "10+", label: "Completed Projects" },
        { number: "8+", label: "Technologies" },
        { number: "100%", label: "Dedication" }
      ]
    }
  };

  const currentTexts = isPortuguese ? texts.pt : texts.en;

  return (
    <section id="sobre" className={`py-24 px-6 relative overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full opacity-10 ${
          isDark ? 'bg-blue-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-5 ${
          isDark ? 'bg-purple-500' : 'bg-purple-400'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header da seção */}
        <div className="about-text text-center mb-20">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {currentTexts.title}
          </h2>
          
          <p className={`text-xl md:text-2xl font-medium mb-8 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {currentTexts.subtitle}
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className={`text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {currentTexts.description}
            </p>
            
            <p className={`text-lg md:text-xl leading-relaxed font-medium ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {currentTexts.passion}
            </p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {currentTexts.stats.map((stat, index) => (
            <div 
              key={index}
              className={`stats-item text-center p-6 rounded-2xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white/80'
              } backdrop-blur-sm border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className={`text-3xl md:text-4xl font-black mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {stat.number}
              </div>
              <div className={`text-sm md:text-base font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid de habilidades */}
        <div className="about-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTexts.skills.map((skill, index) => (
            <Card 
              key={index}
              className={`about-card group p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-800/80 border-gray-700 hover:border-blue-500 hover:bg-gray-800' 
                  : 'bg-white/90 border-gray-200 hover:border-blue-400 hover:bg-white'
              } backdrop-blur-sm`}
            >
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                  }`}>
                    <skill.icon className={`h-8 w-8 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className={`text-xl lg:text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.title}
                    </h3>
                    
                    <p className={`text-base leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
