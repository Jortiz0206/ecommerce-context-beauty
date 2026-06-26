import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <main style={{ padding: '10px 0' }}>
      {/* Banner de Bienvenida Estético */}
      <header style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h1 style={{ color: '#C71585', fontFamily: 'Georgia, serif', fontSize: '2.2rem', marginBottom: '5px' }}>
          Tu Tocador de Belleza Global
        </h1>
        <p style={{ color: '#777', fontStyle: 'italic', margin: 0 }}>
          Explora nuestra selección y gestiona tus estados dinámicamente con Context API
        </p>
      </header>

      {/* Distribución en dos columnas: Productos a la izquierda, Carrito a la derecha */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr', 
        gap: '30px',
        alignItems: 'start'
      }}>
        <section>
          <ProductList />
        </section>
        
        <aside style={{ position: 'sticky', top: '20px' }}>
          <Cart />
        </aside>
      </div>
    </main>
  );
};

export default Home;