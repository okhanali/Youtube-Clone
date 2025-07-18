import { createContext, useContext, useState } from "react";

// context yapısının kurulumu
export const SidebarContext = createContext();

// sağlayıcı componentını tanımla
export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebar }} //
    >
      {children}
    </SidebarContext.Provider>
  );
};

// custom hook: kendi hookumuzu yazma
// context yapısına abone olmamızı sağlayacak hook
export const useSidebar = () => {
  // context yapısına abone ol
  const context = useContext(SidebarContext);

  // veriler gelmezse hata fırlat
  if (!context) {
    throw new Error("Provider ile app'i sarmalamayı unutmayın");
  }

  // verileri return et
  return context;
};