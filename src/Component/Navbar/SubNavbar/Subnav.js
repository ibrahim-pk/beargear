import { Input } from "antd";
import { DeliveredProcedureOutlined, PhoneOutlined } from "@ant-design/icons";
const { Search } = Input;
const Subnav = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className="subNav">
      <div className="logo">
        <h3>Logo</h3>
        <h3 className="beargearName">Bear Gear</h3>
      </div>
      <div>
        <Search
          placeholder="search..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <div className="navService">
        <div className="s1">
          <PhoneOutlined />
          <h5>Customer Service</h5>
        </div>
        <div className="s2">
          <DeliveredProcedureOutlined />
          <h5>Delivary Service</h5>
        </div>
      </div>
    </div>
  );
};

export default Subnav;



// import React from 'react';
// import { Menu, Input } from 'antd';
// import {
//   HomeOutlined,
//   AppstoreOutlined,
//   SearchOutlined,
// } from '@ant-design/icons';

// const { Search } = Input;

// const Subnav = () => {
//   const onSearch = (value) => console.log(value);
//   return (
//     <div className='topNavbar'>
//       <Menu  mode="horizontal" theme="dark">
//       <Menu.SubMenu key="category" title={<span><AppstoreOutlined /> Category</span>}>
//         <Menu.Item key="category1">Category 1</Menu.Item>
//         <Menu.Item key="category2">Category 2</Menu.Item>
//         <Menu.Item key="category3">Category 3</Menu.Item>
//         <Menu.Item key="category4">Category 4</Menu.Item>
//         <Menu.Item key="category5">Category 5</Menu.Item>
//       </Menu.SubMenu>
//       <Menu.Item key="search" style={{ 
//         width:'70%',
//         marginTop:'10px'

//       }}>
//       <div>
//       <Search
//           placeholder="search..."
//           allowClear
//           enterButton="Search"
//           size="small"
//           onSearch={onSearch}
//          />
//       </div>
//       </Menu.Item>
//     </Menu>
//     </div>
//   );
// };


// export default Subnav;
