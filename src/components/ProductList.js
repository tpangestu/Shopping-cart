/* eslint-disable jsx-a11y/alt-text */
import "../App.css";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "33%" }}>
            <div className="product-item">
              <img src={productItem.url} width="90%" />
              <div className="wrap-box">
                <p>{productItem.name} </p>
                <p>Seller : {productItem.seller} </p>
                <p> Rp. {productItem.price}</p>
                <button onClick={() => addToCart(productItem)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
