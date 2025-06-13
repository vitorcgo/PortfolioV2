import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const personalInfo = {
    portfolioUrl: "https://vitorgomes.tech",
    linkedinUrl: "https://linkedin.com/in/vitorcgms",
    githubUrl: "https://github.com/vitorcgo"
  };

  return (
    <footer id="links" className="bg-gray-900 border-t border-gray-800 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Links principais */}
          <div className="mb-8">
            <a 
              href={personalInfo.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors"
            >
              vitorgomes.tech
            </a>
          </div>

          {/* Redes sociais */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {currentYear} Vitor Cavalcante Gomes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
