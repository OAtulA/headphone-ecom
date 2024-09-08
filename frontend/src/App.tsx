import { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";

const ProductsPage = lazy(() => import("./pages/products/Products"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
