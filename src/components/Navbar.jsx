import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '20px 40px', 
      backgroundColor: '#F7EBE1', 
      borderBottom: '1px solid #EAD8C8', 
      borderRadius: '16px',
      marginBottom: '40px',
      boxShadow: '0 4px 15px rgba(138, 123, 115, 0.05)'
    }}>
      {/* Logo estilo Spa */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.6rem' }}></span>
        <h2 style={{ 
          color: '#4A3E3D', 
          margin: 0, 
          fontFamily: '"Playfair Display", Georgia, serif', 
          fontWeight: '400',
          fontSize: '1.8rem'
        }}>
          🌸 Joha Beauty Spa
        </h2>
      </div>

      {/* Control de Sesión */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {user ? (
          <>
            <span style={{ color: '#6D5D5C', fontSize: '0.95rem' }}>
              Bienvenida eres unica, <strong style={{ color: '#8B2651' }}>{user.name}</strong>
            </span>
            <button onClick={logout} style={{ backgroundColor: 'transparent', border: '1px solid #8B2651', padding: '8px 16px', borderRadius: '25px', cursor: 'pointer', color: '#8B2651', fontWeight: 'bold' }}>
              Salir
            </button>
          </>
        ) : (
          <button onClick={login} style={{ backgroundColor: '#8B2651', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold', letterSpacing: '0.5px' }}>
            Iniciar Sesión
          </button>
        )}

        {/* Indicador del Tocador */}
        <div style={{ 
          color: '#4A3E3D', 
          fontWeight: '600', 
          backgroundColor: '#FFF',
          padding: '8px 18px',
          borderRadius: '25px',
          border: '1px solid #EAD8C8'
        }}>
          🛍️ Tocador ({totalItems})
        </div>
      </div>
    </nav>
  );
};

export default Navbar;