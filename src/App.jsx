import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import ProductList from "./components/ProductList";
import PDP from "./components/PDP";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Toast from "./components/toast";           // 🩶 correct case (T capital)
import SkeletonGrid from "./components/Skeleton"; // 🩶 correct import name

export default function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showPDP, setShowPDP] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [loading, setLoading] = useState(true);

  // 🩶 Fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1000)); // small fake delay
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setFiltered(data.slice(0, 8));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // 🩶 Handle category change
  const handleCategoryChange = (cat) => {
    setShowContact(false);
    if (cat === "home") setFiltered(products.slice(0, 8));
    else if (cat === "jewellery") setFiltered(products.filter((p) => p.category === "jewelery"));
    else if (cat === "gadgets") setFiltered(products.filter((p) => p.category.includes("electronics")));
    else setFiltered(products.filter((p) => p.category === cat));
  };

  // 🩶 Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing)
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      return [...prev, { ...product, qty: 1 }];
    });

    setToastMsg("✅ Item successfully added to cart!");
    setShowToast(true);
    setShowCart(true);
    setShowPDP(false);
  };

  // 🩶 Change qty
  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty + delta } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  return (
    <>
      <Header
        cartCount={cart.reduce((a, c) => a + c.qty, 0)}
        onCartClick={() => setShowCart(true)}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
      />

      <NavMenu
        open={menuOpen}
        onCategory={(cat) => {
          handleCategoryChange(cat);
          setMenuOpen(false);
        }}
        onContact={() => {
          setShowContact(true);
          setMenuOpen(false);
        }}
      />

      {/* 🌸 PRODUCT / CONTACT SECTIONS */}
      {!showContact ? (
        loading ? (
          <SkeletonGrid />   // 🩶 show skeleton while loading
        ) : (
          <ProductList
            products={filtered}
            onProductClick={(p) => {
              setCurrentProduct(p);
              setShowPDP(true);
            }}
          />
        )
      ) : (
        <Contact />
      )}

      {showPDP && (
        <PDP
          product={currentProduct}
          onClose={() => setShowPDP(false)}
          onAdd={() => addToCart(currentProduct)}
        />
      )}

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onQtyChange={changeQty}
        />
      )}

      {showToast && (
        <Toast
          message={toastMsg}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
