import React, { useState, useEffect } from 'react';

const ProductFetcher = ({ render }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API (using a service or directly making an API call)
    fetchProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return render(products);
};

export default ProductFetcher;
