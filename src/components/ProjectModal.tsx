
import React, { useState } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    images?: string[];
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const images = project.images || [
    'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Project+Image+1',
    'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Project+Image+2',
    'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Project+Image+3'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
      <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-6 border bg-gray-900 p-8 shadow-2xl duration-200 sm:rounded-3xl border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-white">{project.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white rounded-full hover:bg-gray-800"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="space-y-8">
          {/* Carousel de imagens */}
          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
              <img 
                src={images[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navegação do carousel */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 text-white p-3 rounded-full hover:bg-gray-900 transition-all duration-200 shadow-lg"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 text-white p-3 rounded-full hover:bg-gray-900 transition-all duration-200 shadow-lg"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Indicadores */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sobre o Projeto */}
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-4">Sobre o Projeto</h3>
              <div className="bg-gray-800 rounded-2xl p-6 min-h-[120px] border border-gray-700 shadow-lg">
                <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
              </div>
            </div>
            
            {/* Tecnologias */}
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-4">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-2xl border border-blue-600/30 hover:bg-blue-600/30 transition-all duration-200 shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Botões */}
          <div className="flex space-x-4 pt-6">
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1 relative overflow-hidden group rounded-2xl py-4 shadow-lg shiny-text"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="h-5 w-5 mr-3" />
              <span className="shiny-text font-semibold">GitHub</span>
            </Button>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white flex-1 relative overflow-hidden group rounded-2xl py-4 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 shiny-text"
              onClick={() => window.open(project.demo, '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              <span className="shiny-text font-semibold">Demo</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;