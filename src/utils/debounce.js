export const debounce = (func, delay = 300) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};



// import { debounce } from "../utils/debounce";

// useEffect(() => {
//   const handleScroll = debounce(() => {
//     console.log("Scrolled!");
//   }, 300);

//   window.addEventListener("scroll", handleScroll);
  
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);