export const scrollToSection = (id, offset = 80) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

// import { scrollToSection } from '../utils/scrollToSection';


// Example:
//  <button onClick={() => scrollToSection('services')}>Services</button>