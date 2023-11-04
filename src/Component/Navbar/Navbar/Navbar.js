import { Layout, Menu, Dropdown, Avatar } from "antd";
import Link from "next/link";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
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

  const menu = (
    <Menu>
      <Menu.Item key="profile2">
        <Link href="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout1">
        <Link href="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="navbar">
      <div className="container">
        <div className="left-menu">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home2"]}>
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
          </Menu>
        </div>

        <div className="right-menu">
          <Menu className="right-menu-bar" theme="dark" mode="horizontal">
            <Menu.Item key="log1">
              <div>
                <Link href="/user/login">Login</Link>
              </div>
            </Menu.Item>
            <Menu.Item key="signup1">
              <div>
                <Link href="/user/register">Sign Up</Link>
              </div>
            </Menu.Item>
            <Menu.Item key="cart2">
              <div>
                <Link href="/cart">
                  <Badge size="small" count={cart?.length}>
                    <ShoppingCartOutlined
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  </Badge>
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item key="drop1">
              <div>
                <Dropdown menu={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar icon={<UserOutlined />} /> <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
