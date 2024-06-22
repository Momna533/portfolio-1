import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("resize", closeMenu);
    return () => window.addEventListener("resize", closeMenu);
  }, []);
  return (
    <AppContext.Provider value={{ toggleMenu, isMenuOpen, setIsMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
