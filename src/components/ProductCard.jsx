import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{
      background: 'linear-gradient(145deg, #ffffff, #F9F5F0)',
      border: '1px solid #EAD8C8',
      borderRadius: '20px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 6px 12px rgba(138, 123, 115, 0.03)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '380px', // Le damos un poquito más de altura para que respire el diseño
      boxSizing: 'border-box'
    }}>
      <div>
        {/* Contenedor de la Imagen Mejorado */}
        <div style={{ 
          height: '150px', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginBottom: '15px',
          overflow: 'hidden',
          borderRadius: '14px',
          backgroundColor: '#ffffff', 
          border: '1px solid #F3ECE6' 
        }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              height: '95%', 
              width: '95%', 
              objectFit: 'contain' 
            }} 
          />
        </div>

        {/* Categoría del Producto */}
        <span style={{ 
          fontSize: '0.75rem', 
          color: '#A39289', 
          textTransform: 'uppercase', 
          fontWeight: '600',
          letterSpacing: '1px' 
        }}>
          {product.category}
        </span>

        {/* Nombre del Producto */}
        <h4 style={{ 
          margin: '10px 0 5px 0', 
          color: '#4A3E3D', 
          fontSize: '1.1rem', 
          fontFamily: 'Georgia, serif',
          lineHeight: '1.3'
        }}>
          {product.name}
        </h4>
      </div>

      {/* Sección Inferior: Precio y Botón */}
      <div>
        <p style={{ 
          fontWeight: '600', 
          color: '#4A3E3D', 
          margin: '0 0 15px 0', 
          fontSize: '1.2rem' 
        }}>
          ${product.price.toLocaleString('es-CO')}
        </p>
        
        <button 
          onClick={() => addToCart(product)}
          style={{
            background: 'linear-gradient(135deg, #C29B9B, #AA7C7C)', 
            border: 'none',
            padding: '12px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: '600',
            width: '100%',
            boxShadow: '0 3px 6px rgba(170,124,124,0.2)',
            fontSize: '0.9rem',
            transition: 'transform 0.1s ease',
            outline: 'none'
          }}
        >
          Agregar al Tocador
        </button>
      </div>
    </div>
  );
};

export default ProductCard;