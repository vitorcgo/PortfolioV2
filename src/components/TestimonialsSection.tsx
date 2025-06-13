import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TestimonialsSection = () => {
  const { isPortuguese, isDark } = useTheme();

const texts = {
    pt: {
      title: "O Que Dizem Meus Clientes",
      subtitle: "Feedback de projetos realizados",
      testimonials: [
        {
          name: "Daiana",
          role: "Diretora, Speed Meeting - FeiraEBS",
          content: "Excelente trabalho! Vitor fez nosso sistema para sorteio e ainda adicionou funcionalidades extras que nós ajudou muito, serviço rápido e no prazo correto!",
          rating: 5,
          image: "/images/feiraebs.jpg"
        },
        {
          name: "Marcelo Goes",
          role: "CEO, KeyUP Idiomas",
          content: "Ótimo trabalho! Vitor nos atendeu rápido e trouxe modernidade ao nosso site! Indico para todos!",
          rating: 5,
          image: "/images/keyup.png"
        },
        {
          name: "Natalia Duete",
          role: "ADM, Amil",
          content: "Em questão de minutos de alinhamento o Vitor já entendeu o meu problema e me deu uma solução moderna e do jeito que eu imaginava!",
          rating: 5,
          image: "/images/amil.png"
        },
        {
          name: "Allan Henrique",
          role: "Programador",
          content: "Participei de um projeto com o Vitor e pude acompanhar um desenvolvimento limpo, com agilidade compôs bem minha equipe e nossas ideias!",
          rating: 5,
          image: "/images/allan.png"
        }
      ]
    },
    en: {
      title: "What My Clients Say",
      subtitle: "Feedback from completed projects",
      testimonials: [
        {
          name: "Daiana",
          role: "Director, Speed Meeting - FeiraEBS",
          content: "Excellent work! Vitor made our raffle system and even added extra functionalities that helped us a lot, quick service and on time!",
          rating: 5,
          image: "/images/feiraebs.jpg"
        },
        {
          name: "Marcelo Goes",
          role: "CEO, KeyUP Idiomas",
          content: "Great work! Vitor responded quickly and brought modernity to our website! I recommend him to everyone!",
          rating: 5,
          image: "/images/keyup.png"
        },
        {
          name: "Natalia Duete",
          role: "ADM, Amil",
          content: "Within minutes of alignment, Vitor understood my problem and gave me a modern solution exactly as I imagined!",
          rating: 5,
          image: "/images/amil.png"
        },
        {
          name: "Allan Henrique",
          role: "Programmer",
          content: "I participated in a project with Vitor and witnessed clean development. He quickly complemented my team and our ideas!",
          rating: 5,
          image: "/images/allan.png"
        }
      ]
    }
  };

  const currentTexts = isPortuguese ? texts.pt : texts.en;

  const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: true });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? 'text-yellow-400 fill-yellow-400'
            : isDark ? 'text-gray-600' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className={`py-16 md:py-24 px-4 md:px-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {currentTexts.title}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {currentTexts.subtitle}
          </p>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            plugins={[autoplayPlugin]}
            className="w-full"
            onMouseEnter={() => autoplayPlugin.stop()}
            onMouseLeave={() => autoplayPlugin.reset()}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {currentTexts.testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className={`h-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isDark 
                      ? 'bg-gray-900 border-gray-700 hover:border-blue-500' 
                      : 'bg-gray-50 border-gray-200 hover:border-blue-400'
                  }`}>
                    <CardContent className="p-4 md:p-6 lg:p-8 h-full flex flex-col">
                      <div className="flex-1 space-y-4 md:space-y-6">
                        {/* Quote icon */}
                        <Quote className={`h-6 w-6 md:h-8 md:w-8 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                        
                        {/* Conteúdo do depoimento */}
                        <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          "{testimonial.content}"
                        </p>
                        
                        {/* Rating */}
                        <div className="flex gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      
                      {/* Informações do cliente */}
                      <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className={`font-semibold text-sm md:text-base ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {testimonial.name}
                          </h4>
                          <p className={`text-xs md:text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Botões de navegação - ocultos em mobile */}
            <CarouselPrevious className={`hidden md:flex -left-12 h-12 w-12 ${
              isDark ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700' : ''
            }`} />
            <CarouselNext className={`hidden md:flex -right-12 h-12 w-12 ${
              isDark ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700' : ''
            }`} />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;