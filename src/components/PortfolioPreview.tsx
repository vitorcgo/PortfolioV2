import { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from '../contexts/ThemeContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import gsap from 'gsap';

const PortfolioPreview = () => {
  const { isPortuguese, isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    gsap.fromTo('.portfolio-card', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  const texts = {
    pt: {
      title: "Meus Projetos",
      subtitle: "Clique na foto do projeto para ver mais, ao abrir, poderá arrastar a foto para o lado para visualizar mais, projetos reais não tem demonstração.",
      viewProject: "Ver projeto",
      sourceCode: "Código",
      close: "Fechar"
    },
    en: {
      title: "My Projects", 
      subtitle: "A selection of my most recent work",
      viewProject: "View project",
      sourceCode: "Source code",
      close: "Close"
    }
  };

  const currentTexts = isPortuguese ? texts.pt : texts.en;

  const projects = [
    {
      id: 1,
      title: "Liga dos Bichos",
      description: isPortuguese 
        ? "Um re-design de uma landing page feito no figma juntamente com o codigo em formato basico para ele, meu primeiro projeto feito utilizando cores e propriedades UI/UX e totalmente responsivo para mobile. OBS: Projeto não está disponivel atualmente para mobile "
        : "A redesign of a landing page made in Figma along with the code in basic format for it, my first project made using colors and UI/UX properties and fully responsive for mobile. NOTE: Project is not currently available for mobile.",
      tech: ["HTML", "TailwindCSS", "Javascript"],
      images: [
        "/images/liga-1.png",
        "/images/liga-2.png",
        "/images/liga-3.png",
        "/images/liga-4.png",
        "/images/liga-6.png",
        "/images/liga-5.png"
      ],
      github: "https://github.com/vitorcgo/ligadosbichos",
      demo: "https://ligadosbichos.vercel.app/"
    },
    {
      id: 2,
      title: "HemoHelp ONG - Banco de Sangue",
      description: isPortuguese 
        ? "Um site ficticio sobre um banco de sangue, landing page, explorando o basico utilizando TailwindCSS e MaterialUI. OBS: Projeto não está disponivel atualmente para mobile.."
        : "A fictional website about a blood bank, landing page, exploring the basics using TailwindCSS and MaterialUI. NOTE: Project is not currently available for mobile.",
      tech: ["HTML", "TailwindCSS", "MaterialUI"],
      images: [
        "/images/banco-1.png",
        "/images/banco-4.png",
        "/images/banco-2.png",
        "/images/banco-3.png",
      ],
      github: "https://github.com/vitorcgo/HemoHelpONG",
      demo: "https://hemo-help-ong.vercel.app/"
    },
    {
      id: 3,
      title: "PortfolioV2",
      description: isPortuguese 
        ? "Meu portfolio v2 - Disponibilizado o codigo que explora bastante propriedades do react e vite e novas ideias UI/UX com 3D escondidas e com Modo Escuro/Modo Claro, conteudo em português e em inglês, Utilizando Hooks e Props corretamente. "
        : "My portfolio v2 - Code available that explores a lot of react and vite properties and new UI/UX ideas with hidden 3D and Dark Mode/Light Mode, content in Portuguese and English, using Hooks and Props correctly.",
      tech: ["React", "Vite", "TypeScript", "TailwindCSS", "ReactBits", "Eslint", "RadixUI"],
      images: [
        "/images/port-v2.png"
      ],
      github: "#",
      demo: "https://vitorgomes.tech/"
    },
    {
      id: 4,
      title: "KeyUP Idiomas",
      description: isPortuguese 
        ? "Site institucional que fiz para a escola de Inglês da KeyUP, fiz o design no figma, adaptei o design com plugins e CMS (WordPress) com PHP e Elementor, utilizei práticas de SEO/UI-UX e deixei tudo certinho para o cliente, com responsividade para mobile/tablet/desktop "
        : "Institutional website that I made for the KeyUP English school, I designed it in Figma, adapted the design with plugins and CMS (WordPress) with PHP and Elementor, used SEO/UI-UX practices and left everything perfect for the client, with responsiveness for mobile/tablet/desktop.",
      tech: ["PHP", "Figma", "WordPress", "Elementor"],
      images: [
        "/images/keyup-2.png",
        "/images/keyup-3.png",
        "/images/keyup-4.png",
        "/images/keyup-1.png",
        "/images/keyup-5.png",
        "/images/keyup-6.png",
        "/images/keyup-7.png"
      ],
      github: "#",
      demo: "https://keyupidiomas.com.br/"
    },
    {
      id: 5,
      title: "Sistema Sorteio - Speed Meeting",
      description: isPortuguese 
        ? "Sistema de Sorteio para Registrar os eventos ja teve em uma lista com CRUD em PHP com banco de dados feito com MYSQL e visualização em tempo real com AJAX, é um projeto que exibe quem foi sorteado aleatoriamente sem repetir e mostra em pagina separada com uma contagem regressiva quem foi o sorteado e depois da a opção também de Exportar em excel a planilha que foi colocada anteriomente ou exportar quem foi o sorteado, design também foi feito de acordo com as cores da marca em um projeto real, OBS: Demonstração está sendo administrado e guardando as informações no javascript com localstorage"
        : "Raffle System to Record Events already had in a list with CRUD in PHP with a database made with MYSQL and real-time visualization with AJAX, it is a project that displays who was randomly drawn without repeating and shows on a separate page with a countdown who was drawn and then gives the option to also Export in Excel the spreadsheet that was previously placed or export who was drawn, design was also made according to the brand colors in a real project, OBS: Demonstration is being managed and saving the information in javascript with localstorage",
      tech: ["MySQL", "PHP", "Javascript", "PHPSpreadsheet", "HTML", "CSS", "CRUD"],
      images: [
        "/images/speed-1.png",
        "/images/speed-2.png",
        "/images/speed-3.png",
        "/images/speed-4.png",
        "/images/speed-5.png",
        "/images/speed-6.png",
        "/images/speed-7.png"
      ],
      github: "https://github.com/vitorcgo/SpeedMeeting-Sorteio",
      demo: "https://www.vitorgomes.tech"
    },
    {
      id: 6,
      title: "PortfolioV1",
      description: isPortuguese 
        ? "Meu primeiro portfolio feito simples com HTML, CSS e JS, Usando algumas brincadeiras com Motion Design e Feito com Figma, contém responsividade para mobile."
        : "My first portfolio made simple with HTML, CSS and JS, Using some play with Motion Design and Made with Figma, contains responsiveness for mobile.",
      tech: ["Figma", "Motion Design", "HTML", "CSS", "Javascript", "PHP"],
      images: [
        "/images/pv1-1.png",
        "/images/pv1-2.png",
        "/images/pv1-3.png",
        "/images/pv1-5.png",
        "/images/pv1-4.png"
      ],
      github: "https://github.com/vitorcgo/MeuPortfolio/tree/main",
      demo: "https://www.vitorgomes.tech"
    },
    {
      id: 7,
      title: "Agência Orbeo",
      description: isPortuguese 
        ? "Site ficticio feito para uma agência que fornece serviço, feito com HTML, CSS e Javascript"
        : "Fictional website made for an agency that provides services, made with HTML, CSS and Javascript.",
      tech: ["HTML", "CSS", "Javascript"],
      images: [
        "/images/orbeo-1.png",
        "/images/orbeo-2.png",
        "/images/orbeo-3.png",
        "/images/orbeo-4.png",
        "/images/orbeo-5.png",
        "/images/orbeo-6.png"
      ],
      github: "https://github.com/vitor-gomes/recipe-platform",
      demo: "https://github.com/vitorcgo/orbeo"
    },
    {
      id: 9,
      title: "Sistema de Organização de Prontuarios Hospitalares",
      description: isPortuguese 
        ? "Plataforma pensada para organização de prontuarios em caixas com a data, conforme pedido do cliente."
        : "Platform designed for organizing medical records in boxes with the date, as requested by the client.",
      tech: ["HTML", "CSS", "PHP", "MYSQL", "CRUD"],
      images: [
        "/images/same-1.png",
        "/images/same-2.png",
        "/images/same-3.png",
        "/images/same-4.png"
      ],
      github: "",
      demo: ""
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projetos" className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
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

        {/* Grid de projetos responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`portfolio-card overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-400'
              }`}
              onClick={() => openModal(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className={`font-bold text-lg md:text-xl mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 text-sm md:text-base line-clamp-3 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                        isDark 
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                    }`}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm"
                  >
                    <ExternalLink className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                    className={`flex-1 text-xs md:text-sm ${
                      isDark 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Github className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal responsivo */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              {/* Header do modal */}
              <div className={`sticky top-0 flex items-center justify-between p-4 md:p-6 border-b ${
                isDark 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-xl md:text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedProject.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className={`hover:bg-gray-100 rounded-full ${
                    isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600'
                  }`}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Conteúdo do modal */}
              <div className="p-4 md:p-6">
                {/* Carrossel de imagens restaurado */}
                <div className="mb-6">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video">
                            <img
                              src={image}
                              alt={`${selectedProject.title} - ${index + 1}`}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                {/* Descrição */}
                <p className={`text-base md:text-lg mb-6 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedProject.description}
                </p>

                {/* Tecnologias */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 text-base md:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Tecnologias utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 md:px-4 py-2 rounded-full font-medium text-sm md:text-base ${
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

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open(selectedProject.demo, '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    {currentTexts.viewProject}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                    className={`px-6 py-3 rounded-2xl border-2 flex items-center justify-center gap-2 ${
                      isDark 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Github className="h-5 w-5" />
                    {currentTexts.sourceCode}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioPreview;
