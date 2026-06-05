import { BrowserRouter, Routes, Route } from "react-router-dom";

function CatalogPage() {
  return <h1>Catalog</h1>;
}

function ProductDetailsPage() {
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