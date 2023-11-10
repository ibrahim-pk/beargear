import { Layout, Menu, Dropdown, Avatar } from "antd";
import Link from "next/link";
import {ShoppingCartOutlined} from "@ant-design/icons";
import { Badge } from "antd";
import { useEffect, useState } from "react";
const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryBtn, setCategoryBtn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
      setCart(storedCart);
    }
  }, []);

 

  return (
    <Header className="navbar">
      <Menu style={{
        display:'flex',
        justifyContent:'center'
      }} mode="horizontal">
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

            <SubMenu key="categories" title="Categories">
              
              <SubMenu key="fashion" title="Fashion">
                <Menu.Item key="mdress">
                  <Link href="/category/inbox/sender">Men's Dress</Link>
                </Menu.Item>
                <Menu.Item key="wdress">
                  <Link href="/category/inbox/receiver">Women's Dress</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="backpack" title="Backpack">
                <Menu.Item key="lapBag">
                  <Link href="/category/inbox/sender">Laptop Bag</Link>
                </Menu.Item>
                <Menu.Item key="Schbag">
                  <Link href="/category/inbox/receiver">School Bag</Link>
                </Menu.Item>
              </SubMenu>
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
