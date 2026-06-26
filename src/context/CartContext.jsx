import React, { createContext, useState } from 'react';

// ==========================================
// 1. CREACIÓN DEL CONTEXTO DEL CARRITO
// ==========================================
export const CartContext = createContext();

// ==========================================
// 2. PROVEEDOR DE LA LÓGICA DE COMPRAS
// ==========================================
export const CartProvider = ({ children }) => {
  // Estado global: Colección de productos agregados con sus cantidades
  const [cart, setCart] = useState([]);

  // Lógica Reactiva: Añadir un producto o incrementar su cantidad si ya existe
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Lógica Reactiva: Quitar un producto específico del tocador de compras
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Lógica Reactiva: Vaciar por completo la bolsa de productos
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};