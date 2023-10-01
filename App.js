import { CartProvider } from './src/providers/CartContext';
import Routes from './src/routes';

export default function App() {
  return (
    <CartProvider>
        <Routes />
    </CartProvider>
  );
}

