import React from 'react';
import { Button } from 'antd';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <Button className="twitter-icon" icon={<TwitterOutlined />} shape="circle" size="small" />
      <Button className="facebook-icon" icon={<FacebookOutlined />} shape="circle" size="small" />
      <Button className="instagram-icon" icon={<InstagramOutlined />} shape="circle" size="small" />
    </div>
  );
};

export default SocialIcons;
