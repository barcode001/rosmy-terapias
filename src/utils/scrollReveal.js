export const scrollReveal = (selector, options = {}) => {
  const elements = document.querySelectorAll(selector);
  
  const defaultOptions = {
    threshold: 0.15, // 15% of the element visible triggers the animation
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // only trigger once
      }
    });
  }, { ...defaultOptions, ...options });

  elements.forEach(el => observer.observe(el));
};



// import { useEffect } from "react";
// import { scrollReveal } from "../utils/scrollReveal";




// const Home = () => {
//   useEffect(() => {
//     scrollReveal('.reveal');
//   }, []);


// Example:
// import { useEffect } from "react";
// import { scrollReveal } from "../utils/scrollReveal";

// const Home = () => {
//   useEffect(() => {
//     scrollReveal('.reveal');
//   }, []);

//   return (
//     <section className="home">
//       <h1 className="reveal">Welcome to My Website</h1>
//       <p className="reveal">Fully custom websites built with React.</p>
//     </section>
//   );
// };

// export default Home;