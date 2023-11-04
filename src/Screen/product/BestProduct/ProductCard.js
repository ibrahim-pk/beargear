// components/ProductCard.js
import { Card, Carousel, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const initialValue = 4;
  const addToCart = (product) => {
    const existingCartItem = JSON.parse(localStorage.getItem("Cart")) || [];

    const productInCart = existingCartItem?.find(
      (item) => item.id === product.id
    );

    if (productInCart) {
      productInCart.qtr += 1;
    } else {
      existingCartItem.push({ ...product, qtr: 1 });
    }

    localStorage.setItem("Cart", JSON.stringify(existingCartItem));

    alert("Product added to cart!");
  };
  return (
    <div>
      <Link href="/single-product/1">
        <Card hoverable title={product.title}>
           <div>
           <img
              src={`https://drive.google.com/uc?id=${
                product?.image?.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)[1]
              }`}
              alt="product"
              style={{
                width: "100%",
                height: "200px",
                padding: "10px 10px 1px 10px",
              }}
            />
           </div>
          <h3>
            <span className="newPrice" style={{ color: "#FE5102" }}>
              Tk{product.newPrice}
            </span>{" "}
            <br />
            <del style={{ fontSize: "12px" }} className="oldPrice delPrice">
              Tk{product.oldPrice}
            </del>
          </h3>
          <div>
            <Rate
              style={{ fontSize: "10px" }}
              allowHalf
              defaultValue={product.rating}
            />
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
