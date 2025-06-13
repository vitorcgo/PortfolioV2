
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const TypeWriter = () => {
  const { isPortuguese } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  const roles = isPortuguese 
    ? ['desenvolvedor front-end', 'designer', 'desenvolvedor full stack']
    : ['front-end developer', 'designer', 'full stack developer'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const shouldDelete = isDeleting;
    const timeout = shouldDelete ? 50 : 150;

    const timer = setTimeout(() => {
      if (shouldDelete) {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, roles]);

  return (
    <span className="text-blue-400 font-black">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;