import React from "react";

function ProductDetails(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <img src={props.product.imageUrl} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>Rating: {props.product.rating}</p>
      {/* other details */}
    </div>
  );
}

export default ProductDetails;
