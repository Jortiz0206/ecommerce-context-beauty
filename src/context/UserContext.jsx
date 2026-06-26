import React, { createContext, useState } from 'react';

// ==========================================
// 1. CREACIÓN DEL CONTEXTO DE USUARIO
// ==========================================
export const UserContext = createContext();

// ==========================================
// 2. PROVEEDOR DEL ESTADO DE SESIÓN
// ==========================================
export const UserProvider = ({ children }) => {
  // Estado global: guarda el objeto del usuario o null si no ha iniciado sesión
  const [user, setUser] = useState(null);

  // Lógica para simular el inicio de sesión de la estudiante ADSO
  const login = () => {
    setUser({ 
      name: "Johanna Ortiz", 
      role: "Administradora Joha Beauty Spa" 
    });
  };

  // Lógica para limpiar el estado al cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};