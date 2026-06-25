import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <main style={{ marginTop: '25px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '30px' }}>
        <div>
          <ProductList />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </main>
  );
};

export default Home;