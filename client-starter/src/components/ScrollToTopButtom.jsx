// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setVisible(window.scrollY > 200);
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={handleScrollTop}>
        ↑ Top
      </button>
    )
  );
}

// import ScrollToTopButton from "./components/ScrollToTopButton";

// function App() {
//   // ...
//   return (
//     <>
//       {/* other layout parts */}
//       <ScrollToTopButton />
//     </>
//   );
// }

// <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
//   Scroll to Top
// </button>

//scroll to the section

// function scrollToId(id) {
//   const el = document.getElementById(id);
//   if (el) el.scrollIntoView({ behavior: "smooth" });
// }
