import { Input, Menu } from "antd";
import Link from "next/link";
const { Search } = Input;
import {UserOutlined} from "@ant-design/icons";
const { SubMenu } = Menu;

const Subnav = () => {

  const onSearch = (value) =>{
    if(value.key==="Enter"){
       console.log(value.target.value);
    }else{
      console.log(value);
    }
  }


  return (
    <div className="subNav">
      <div className="logo">
        <img className="BearGearLogo" src="/image/logo.png" alt="" />
      </div>
      <div>
        <Search
          className="searchBar"
          placeholder="search..."
          allowClear="true"
          enterButton
          size="large"
          onPressEnter={onSearch}
          onSearch={onSearch}
        />

      </div>
      <div className="userProfile">
         <Menu >
         <SubMenu mode="horizontal" theme="dark" key="profile" title={<UserOutlined />}>
            <Menu.Item  key="account">
                  <Link href="/category/inbox/sender">Account</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                  <Link href="/category/inbox/receiver">Logout</Link>
                </Menu.Item>
              
            </SubMenu>
         </Menu>
        </div>
    </div>
  );
};

export default Subnav;



