import React from 'react';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <div style={{ 
          fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', 
          backgroundColor: '#FAFAFA', 
          minHeight: '100vh',
          padding: '30px'
        }}>
          <Navbar />
          <Home />
        </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;