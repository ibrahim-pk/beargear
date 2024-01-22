import { Input, Menu } from "antd";
import Link from "next/link";
const { Search } = Input;
import {UserOutlined} from "@ant-design/icons";
const { SubMenu } = Menu;
import { useRouter } from 'next/router';
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const Subnav = () => {
 
  let jwtToken;
  if (typeof window !== "undefined") {
    jwtToken = JSON.parse(localStorage.getItem("User")) || [];
  }

  const router = useRouter();
  const onSearch = (value) =>{
    if(value.key==="Enter"){
       //console.log(value.target.value);
       router.push(`/product/search/${encodeURIComponent(value?.target?.value)}`);
    }else{
     // console.log(value);
      router.push(`/product/search/${encodeURIComponent(value)}`);
    }
  }

  const handleProfile=()=>{
    if(jwtToken?.token){
      router.push("/profile/order/OrderData")
    }else{
      router.push("/user/login")
    }
  }

  const handleLogout =()=>{
    localStorage.removeItem('User')
    localStorage.removeItem('BgAdmin')
    NotificationManager.success("Success message", "Logout", 4000);
    window.location.href='/user/login'

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
              
                  <div onClick={handleProfile} >Profile</div>
                </Menu.Item>
                <Menu.Item key="logout">
                  <div onClick={handleLogout}>Logout</div>
                </Menu.Item>
              
            </SubMenu>
         </Menu>
        </div>
        <NotificationContainer />
    </div>
  );
};

export default Subnav;



