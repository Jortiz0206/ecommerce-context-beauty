import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div style={{ border: '1px dashed #FFD1DC', padding: '20px', borderRadius: '12px', textAlign: 'center', backgroundColor: '#FFFDFD' }}>
        <p style={{ color: '#999' }}>Tu tocador de compras está vacío. ¡Añade mimos para tu piel!</p>
      </div>
    );
  }

  return (
    <div style={{ 
      border: '1px solid #FFE4E1', 
      padding: '25px', 
      borderRadius: '12px', 
      backgroundColor: '#FFFDFD',
      boxShadow: '0 4px 10px rgba(0,0,0,0.01)'
    }}>
      <h3 style={{ color: '#C71585', margin: '0 0 15px 0', fontFamily: 'Georgia, serif' }}>Tus Consentidos</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {cart.map(item => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #FFF0F5' }}>
            <div>
              <span style={{ color: '#444', fontWeight: '500' }}>{item.name}</span>
              <br />
              <small style={{ color: '#888' }}>${item.price} x {item.quantity}</small>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)} 
              style={{ color: '#FF69B4', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <h4 style={{ color: '#444', textAlign: 'right', marginTop: '20px', fontSize: '1.2rem' }}>Total: <span style={{ color: '#C71585' }}>${totalPrice}</span></h4>
      <button 
        onClick={clearCart}
        style={{ 
          backgroundColor: '#FFF', 
          color: '#FF69B4', 
          border: '1px solid #FF69B4', 
          padding: '8px 12px', 
          borderRadius: '20px', 
          cursor: 'pointer',
          width: '100%',
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;