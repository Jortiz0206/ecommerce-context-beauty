import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    alert(`Joha Beauty Spa 🌸\n\nTu pedido ha sido procesado con éxito.\nTotal a pagar: $${totalPrice.toLocaleString('es-CO')}\n\n¡Gracias por tu compra!`);
    clearCart();
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #EAD8C8',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 8px 20px rgba(138, 123, 115, 0.04)'
    }}>
      <h3 style={{ color: '#4A3E3D', marginTop: 0, marginBottom: '25px', fontFamily: 'Georgia, serif', fontSize: '1.3rem' }}>
        Mi Tocador de Compras
      </h3>

      {cart.length === 0 ? (
        <p style={{ color: '#B5A8A0', fontStyle: 'italic', textAlign: 'center', margin: '30px 0' }}>
          Tu tocador está vacío.
        </p>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '25px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '12px',
                borderBottom: '1px dashed #EAD8C8'
              }}>
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ margin: 0, color: '#4A3E3D', fontSize: '0.95rem' }}>{item.name}</h5>
                  <span style={{ fontSize: '0.85rem', color: '#8A7B73' }}>
                    ${item.price.toLocaleString('es-CO')} x {item.quantity}
                  </span>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ backgroundColor: 'transparent', border: 'none', color: '#C29B9B', cursor: 'pointer', fontSize: '1.2rem' }}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '600',
            fontSize: '1.2rem',
            color: '#4A3E3D',
            borderTop: '1px solid #EAD8C8',
            paddingTop: '20px',
            marginBottom: '25px'
          }}>
            <span>Total:</span>
            <span>${totalPrice.toLocaleString('es-CO')}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button 
              onClick={handleCheckout}
              style={{
                backgroundColor: '#8B2651', // Vino/fucsia oscuro del diseño
                color: 'white',
                border: 'none',
                padding: '14px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '600',
                width: '100%',
                fontSize: '0.95rem',
                boxShadow: '0 4px 10px rgba(139,38,81,0.15)'
              }}
            >
              Finalizar Compra y Pagar
            </button>

            <button 
              onClick={clearCart}
              style={{
                backgroundColor: 'transparent',
                color: '#4A3E3D',
                border: '1px solid #4A3E3D',
                padding: '10px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '500',
                width: '100%',
                fontSize: '0.9rem'
              }}
            >
              Vaciar el Tocador
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;