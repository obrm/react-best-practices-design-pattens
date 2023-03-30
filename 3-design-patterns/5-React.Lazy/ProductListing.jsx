import React, { Suspense } from "react";

const ProductDetails = React.lazy(() => import("./ProductDetails"));

function ProductListing(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  return (
    <div>
      <h1>Product Listing Page</h1>
      {props.products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>Price: {product.price}</p>
        </div>
      ))}
      {selectedProduct && (
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetails product={selectedProduct} />
        </Suspense>
      )}
    </div>
  );
}

export default ProductListing;
