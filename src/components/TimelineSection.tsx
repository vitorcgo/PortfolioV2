import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const { isPortuguese, isDark } = useTheme();

  useEffect(() => {
    gsap.fromTo('.timeline-item', 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.timeline-container',
          start: "top 80%",
        }
      }
    );
  }, []);

const texts = {
    pt: {
      title: "Experiência Profissional",
      subtitle: "Minha jornada pessoal e de desenvolvimento.",
      experiences: [
        {
          period: "2021 - Presente",
          position: "Analista Financeiro",
          company: "Amil - Hospital da Luz",
          location: "São Paulo, SP",
          description: "Configurando pagamentos e criações de requisições, Organizando relatorios com automação usando a plataforma SAP e lançamento de notas fiscais.",
          technologies: ["XML", "SAP", "Python", "AWS"]
        },
        {
          period: "2024 - Presente",
          position: "Desenvolvedor Front-end",
          company: "Freelancer",
          location: "São Paulo, SP",
          description: "Desenvolvendo e projetando designers com Figma, Wordpress e Sistemas para empresas, tanto quanto sistemas com API de pagamentos e sistemas com PHP e transformando qualquer ideia de clientes numa realidade!",
          technologies: ["Vite", "PHP", "MySQL", "Javascript", "TailwindCSS", "HTML", "React", "Node.js", "Next.js", "Python"]
        }
      ]
    },
    en: {
      title: "Professional Experience",
      subtitle: "My personal and development journey.",
      experiences: [
        {
          period: "2021 - Present",
          position: "Financial Analyst",
          company: "Amil - Hospital da Luz",
          location: "São Paulo, SP",
          description: "Configuring payments and creating requisitions, organizing reports with automation using the SAP platform, and issuing invoices.",
          technologies: ["XML", "SAP", "Python", "AWS"]
        },
        {
          period: "2024 - Present",
          position: "Front-end Developer",
          company: "Freelancer",
          location: "São Paulo, SP",
          description: "Developing and designing with Figma, WordPress, and systems for companies, including systems with payment APIs and PHP systems, transforming any client idea into reality!",
          technologies: ["Vite", "PHP", "MySQL", "Javascript", "TailwindCSS", "HTML", "React", "Node.js", "Next.js", "Python"]
        }
      ]
    }
  };

  const currentTexts = isPortuguese ? texts.pt : texts.en;

  return (
    <section id="experiencia" className={`py-24 px-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {currentTexts.title}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {currentTexts.subtitle}
          </p>
        </div>

        <div className="timeline-container relative">
          {/* Linha vertical */}
          <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 ${
            isDark ? 'bg-blue-500/30' : 'bg-blue-300'
          }`}></div>

          <div className="space-y-12">
            {currentTexts.experiences.map((experience, index) => (
              <div 
                key={index}
                className={`timeline-item relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Indicador na linha */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 ${
                  isDark 
                    ? 'bg-blue-500 border-gray-900' 
                    : 'bg-blue-600 border-gray-50'
                }`}></div>

                {/* Card de experiência */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                }`}>
                  <Card className={`p-6 md:p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                      : 'bg-white border-gray-200 hover:border-blue-400'
                  }`}>
                    <CardContent className="p-0 space-y-6">
                      {/* Período */}
                      <div className="flex items-center gap-3">
                        <Calendar className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`font-semibold text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          {experience.period}
                        </span>
                      </div>

                      {/* Posição e empresa */}
                      <div className="space-y-2">
                        <h3 className={`text-xl md:text-2xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {experience.position}
                        </h3>
                        
                        <div className="flex items-center gap-2">
                          <Briefcase className={`h-4 w-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          <span className={`font-medium text-lg ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {experience.company}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className={`h-4 w-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      {/* Descrição */}
                      <p className={`text-base md:text-lg leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {experience.description}
                      </p>

                      {/* Tecnologias */}
                      <div className="space-y-3">
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Tecnologias:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                isDark 
                                  ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
