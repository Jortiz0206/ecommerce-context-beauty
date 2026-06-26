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
          fontFamily: '"Comfortaa", "Segoe UI", Roboto, sans-serif', 
          backgroundColor: '#FDFBF7', // Fondo crema suave estilo Spa
          minHeight: '100vh',
          padding: '40px 60px', 
          boxSizing: 'border-box'
        }}>
          <Navbar />
          <Home />
          
          {/* Pie de página elegante */}
          <footer style={{
            textAlign: 'center',
            marginTop: '50px',
            color: '#8A7B73',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            borderTop: '1px solid #EFEAE4',
            paddingTop: '20px'
          }}>
            Un rincón de belleza por Johanna Ortiz
          </footer>
        </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;