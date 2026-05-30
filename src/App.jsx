import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './views/Home';
import Catalog from './views/Catalog';
import ProductDetail from './views/ProductDetail';
import Checkout from './views/Checkout';
import Admin from './views/Admin';
import { products as initialProducts } from './data/products';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'catalog' | 'product-detail' | 'checkout' | 'admin'
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Localized products state persisted via localStorage
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('lobo_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('lobo_products', JSON.stringify(products));
  }, [products]);

  // Cart state persisted via LocalStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('lobo_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('lobo_cart', JSON.stringify(cart));
  }, [cart]);

  // Cart Handlers
  const handleAddToCart = ({ product, color, size, quantity }) => {
    setCart(prevCart => {
      const existingIdx = prevCart.findIndex(
        item => item.product.id === product.id && item.color === color && item.size === size
      );

      if (existingIdx > -1) {
        const newCart = [...prevCart];
        newCart[existingIdx].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { product, color, size, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty < 1) return;
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart[index].quantity = newQty;
      return newCart;
    });
  };

  const handleRemoveItem = (index) => {
    setCart(prevCart => prevCart.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Reviews Handler (Updates localized products database state)
  const handleAddReview = (productId, newReview) => {
    setProducts(prevProducts => prevProducts.map(p => {
      if (p.id === productId) {
        const updatedReviews = [newReview, ...p.reviews];
        const newRating = parseFloat((updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length).toFixed(1));
        return {
          ...p,
          reviews: updatedReviews,
          reviewsCount: updatedReviews.length,
          rating: newRating
        };
      }
      return p;
    }));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const selectedProduct = products.find(p => p.id === selectedProductId);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selectedProductId]);

  return (
    <div className="min-h-screen bg-premium-dark text-premium-light flex flex-col font-sans">
      
      {/* Sticky Header */}
      <Header 
        currentView={view} 
        setView={setView} 
        cartCount={cartCount} 
        openCart={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
      />

      {/* Main Viewport Content */}
      <main className="flex-grow">
        {view === 'home' && (
          <Home 
            products={products} 
            setView={setView} 
            setSelectedProductId={setSelectedProductId} 
            onAddToCart={handleAddToCart}
          />
        )}
        {view === 'catalog' && (
          <Catalog 
            products={products} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setView={setView} 
            setSelectedProductId={setSelectedProductId} 
            onAddToCart={handleAddToCart}
          />
        )}
        {view === 'product-detail' && (
          <ProductDetail 
            product={selectedProduct} 
            setView={setView} 
            onAddToCart={handleAddToCart}
            onAddReview={handleAddReview}
          />
        )}
        {view === 'checkout' && (
          <Checkout 
            cartItems={cart} 
            clearCart={handleClearCart} 
            setView={setView}
          />
        )}
        {view === 'admin' && (
          <Admin 
            products={products} 
            setProducts={setProducts} 
            setView={setView}
          />
        )}
      </main>

      {/* Persistent slide-out shopping cart */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        setView={setView}
      />

      {/* Trust & Policy Footer */}
      <Footer setView={setView} />
      
    </div>
  );
}
