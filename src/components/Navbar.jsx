import { useContext } from 'react';
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
      padding: '15px 30px', 
      backgroundColor: '#FFF0F5', 
      borderBottom: '2px solid #FFD1DC', 
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#C71585', margin: 0, fontFamily: 'Georgia, serif' }}>🌸 Glow & Grace</h2>
      <div>
        {user ? (
          <>
            <span style={{ color: '#555', marginRight: '15px' }}>Bienvenida,eres una chica especial <strong style={{ color: '#C71585' }}>{user.name}</strong></span>
            <button onClick={logout} style={{ backgroundColor: '#fff', border: '1px solid #FFD1DC', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', color: '#555' }}>Cerrar Sesión</button>
          </>
        ) : (
          <button onClick={login} style={{ backgroundColor: '#C71585', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>Iniciar Sesión</button>
        )}
      </div>
      <div style={{ color: '#C71585', fontWeight: 'bold', fontSize: '1.1rem' }}>
        🛍️ Carrito ({totalItems})
      </div>
    </nav>
  );
};

export default Navbar;