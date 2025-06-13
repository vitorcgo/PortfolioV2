import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { isPortuguese, isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo('.contact-card', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-container',
          start: "top 80%",
        }
      }
    );
  }, []);

  const texts = {
    pt: {
      title: "Vamos Trabalhar Juntos?",
      subtitle: "Entre em contato comigo para discutir seu próximo projeto",
      form: {
        name: "Seu Nome",
        email: "Seu E-mail",
        message: "Sua Mensagem",
        send: "Enviar Mensagem"
      },
      contact: {
        title: "Informações de Contato",
        email: "zbro2018@gmail.com",
        phone: "+55 (11) 94450-6528",
        location: "São Paulo, SP - Brasil"
      },
      social: {
        title: "Redes Sociais"
      }
    },
    en: {
      title: "Let's Work Together?",
      subtitle: "Get in touch with me to discuss your next project",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message"
      },
      contact: {
        title: "Contact Information",
        email: "zbro2018@gmail.com",
        phone: "+55 (11) 94450-6528",
        location: "São Paulo, Brazil"
      },
      social: {
        title: "Social Media"
      }
    }
  };

  const currentTexts = isPortuguese ? texts.pt : texts.en;

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/php/send_email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Erro ao enviar a mensagem: ' + (data.message || 'Erro desconhecido'));
    }
  } catch (error) {
    console.error('Erro no envio:', error);
    alert('Erro no envio da mensagem. Tente novamente.');
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: currentTexts.contact.email,
      href: `mailto:${currentTexts.contact.email}`
    },
    {
      icon: Phone,
      label: "Telefone",
      value: currentTexts.contact.phone,
      href: `tel:${currentTexts.contact.phone}`
    },
    {
      icon: MapPin,
      label: "Localização",
      value: currentTexts.contact.location,
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/vitorcgo",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/vitorcgms",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/vittxw",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contato" className={`py-16 md:py-24 px-4 md:px-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
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

        <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Formulário de contato */}
          <Card className={`contact-card p-4 md:p-6 lg:p-8 border-2 ${
            isDark 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 md:mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {currentTexts.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 md:px-4 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                      isDark 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder={currentTexts.form.name}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 md:mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {currentTexts.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 md:px-4 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                      isDark 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder={currentTexts.form.email}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 md:mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {currentTexts.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-3 md:px-4 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm md:text-base ${
                      isDark 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder={currentTexts.form.message}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  {currentTexts.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de contato */}
          <div className="space-y-6 md:space-y-8">
            {/* Informações */}
            <Card className={`contact-card p-4 md:p-6 lg:p-8 border-2 ${
              isDark 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <CardContent className="p-0">
                <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {currentTexts.contact.title}
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 ${
                        isDark 
                          ? 'hover:bg-gray-800' 
                          : 'hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${
                        isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <info.icon className={`h-5 w-5 md:h-6 md:w-6 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <p className={`font-semibold text-sm md:text-base ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {info.label}
                        </p>
                        <p className={`text-base md:text-lg ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Redes sociais */}
            <Card className={`contact-card p-4 md:p-6 lg:p-8 border-2 ${
              isDark 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <CardContent className="p-0">
                <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {currentTexts.social.title}
                </h3>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-110 ${
                        isDark 
                          ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                          : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
                      } ${social.color}`}
                    >
                      <social.icon className="h-5 w-5 md:h-6 md:w-6" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
