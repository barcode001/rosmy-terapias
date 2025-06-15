import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;


// import React from "react";
// import usePageTracking from "./hooks/usePageTracking";

// const App = () => {
//   usePageTracking();

//   return (
//     <>
//       {/* Your existing router, navbar, routes, etc */}
//     </>
//   );
// };

// export default App;