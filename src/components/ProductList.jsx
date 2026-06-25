import ProductCard from './ProductCard';

const BEAUTY_PRODUCTS = [
  { id: 1, name: 'Sérum Facial Iluminador', price: 35, description: 'Vitamina C y Ácido Hialurónico', icon: '✨' },
  { id: 2, name: 'Mascarilla de Arcilla Rosa', price: 22, description: 'Limpieza profunda y suavidad', icon: '🌸' },
  { id: 3, name: 'Brillo Labial Hidratante', price: 15, description: 'Efecto voluminizador con coco', icon: '💄' },
  { id: 4, name: 'Crema Contorno de Ojos', price: 28, description: 'Adiós ojeras y líneas finas', icon: '👁️' },
];

const ProductList = () => {
  return (
    <div>
      <h3 style={{ color: '#555', fontFamily: 'Georgia, serif', borderBottom: '1px solid #FFE4E1', paddingBottom: '10px' }}>Nuestra Colección</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
        {BEAUTY_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;