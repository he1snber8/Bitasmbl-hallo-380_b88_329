/**
 * [BITASMBL] Score : 12/100 STATUS: ❌ FAIL | 
 * CRITICAL INSIGHT:   The foundational React Router configuration for global routes is entirely missing, leaving the application without a navigation structure.
 */

/**
 * [BITASMBL] - Configure global state and routing
 * ------------------------------
 * Application routes (e.g., catalog, product details, unknown) are not yet configured using React Router's <Routes> and <Route> components.
 * ProductDetailsPag2 appears to be a duplicate or typo and is not utilized in a route configuration.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

function CatalogPage() {
  return <h1>This is Catalog Page!</h1>;
}

function ProductDetailsPage() {
  return <h1>Product Details</h1>;
}
function ProductDetailsPag2() {
  return <h1>Product Details</h1>;
}

function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/catalog" element={<CatalogPage />} />

        {}
        <Route path="/products/:id" element={<ProductDetailsPage />} />

        {}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}