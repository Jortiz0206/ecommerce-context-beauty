import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ 
      border: '1px solid #FFE4E1', 
      borderRadius: '12px', 
      padding: '20px', 
      margin: '10px', 
      width: '210px', 
      textAlign: 'center',
      backgroundColor: '#FFF',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
      transition: 'transform 0.2s'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{product.icon}</div>
      <h4 style={{ color: '#444', margin: '10px 0 5px 0' }}>{product.name}</h4>
      <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 10px 0' }}>{product.description}</p>
      <p style={{ color: '#C71585', fontWeight: 'bold', fontSize: '1.2rem', margin: '10px 0' }}>${product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        style={{ 
          backgroundColor: '#FFB6C1', 
          color: '#FFF', 
          border: 'none', 
          padding: '10px 15px', 
          borderRadius: '20px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%'
        }}
      >
        Agregar al Tocador
      </button>
    </div>
  );
};

export default ProductCard;