import React, { useEffect, useState } from "react";
import { Row, Col, Card, List, Button, InputNumber } from "antd";
import RootLayout from "@/Component/Layout/RootLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  // Calculate total dynamically based on the cart state
  const total = cart.reduce((acc, item) => acc + item.newPrice * item.qtr, 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
      setCart(storedCart);
    }
  }, []);

  // Function to remove an item from the cart
  const removeToCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("Cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, qtr: newQuantity }; // Update the quantity
      }
      return item;
    });
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <RootLayout>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
        Welcome to Your Online Store
      </h1>
      <Row style={{ marginBottom: "20px", minHeight: "80vh" }} justify="space-around" gutter={16}>
        <Col xs={20} sm={20} md={14} lg={14} xl={14}>
          <Card title="Product List">
            {cart.length > 0 ? (
              <List
                itemLayout="horizontal"
                dataSource={cart}
                renderItem={(product) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<img style={{ width: "150px", height: "100px" }} src={product?.image} alt={product.name} />}
                      title={product.title}
                      description={
                        <div>
                          <p>Price: Tk.{product.newPrice.toFixed(2)}</p>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <span>Quantity: </span>
                            <InputNumber
                              min={1}
                              value={product.qtr}
                              onChange={(value) => updateQuantity(product.id, value)}
                              style={{ marginLeft: "10px" }}
                            />
                          </div>
                        </div>
                      }
                    />
                    <Button onClick={() => removeToCart(product.id)}>Remove</Button>
                  </List.Item>
                )}
              />
            ) : (
              <h2 style={{ textAlign: "center" }}>Cart is empty!</h2>
            )}
          </Card>
        </Col>
        <Col xs={20} sm={20} md={6} lg={6} xl={6}>
          <Card title="Shopping Cart">
            <ul>
              {cart?.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
            <h3>Total Price: Tk.{total.toFixed(2)}</h3>
            <button className="productSeatBtn">
              {total > 0 ? (
                <Link style={{ color: "white" }} href="/payment">
                  Process
                </Link>
              ) : (
                <h3>Order Please</h3>
              )}
            </button>
          </Card>
        </Col>
      </Row>
    </RootLayout>
  );
};

export default Cart;
