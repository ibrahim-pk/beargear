import { Layout, Menu, Dropdown, Avatar } from "antd";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categoryBtn, setCategoryBtn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
      setCart(storedCart);
    }

    const fetchData = async () => {
      const { data } = await axios.get(
        `https://server.beargear.com.bd/api/v1/category/get`
      );
     // console.log(data);

      if (data.error) {
        setSelectedCategory([]);
      } else {
        setSelectedCategory(data);
      }
    };

    fetchData();
  }, []);

  return (
    <Header className="navbar">
      <Menu
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "700",
          fontSize: "16px",
        }}
        mode="horizontal"
      >
        <Menu.Item key="home2">
          <div>
            <Link href="/">Home</Link>
          </div>
        </Menu.Item>
        <Menu.Item key="g1">
          <div>
            <Link href="/gallery">Gallery</Link>
          </div>
        </Menu.Item>
        <Menu.Item key="pro1">
          <div>
            <Link href="/product">Product</Link>
          </div>
        </Menu.Item>
        <Menu.Item key="wh1">
          <div>
            <Link href="/wholesale">Wholesale</Link>
          </div>
        </Menu.Item>
        

        <SubMenu key="categories" title="Categories">
          {selectedCategory?.length > 0 &&
            selectedCategory.map((item, idx) => (
              <Menu.Item key={`${item.category}`}>
                <div>
                  <Link href={`/product/${item.id}`}>{item.category}</Link>
                </div>
              </Menu.Item>
            ))}
        </SubMenu>

        <Menu.Item key="cart2">
          <div>
            <Link href="/cart">
              <Badge size="small" count={cart?.length}>
                <ShoppingCartOutlined
                  style={{ fontSize: "20px", color: "black" }}
                />
              </Badge>
            </Link>
          </div>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
