import React, { useState } from 'react';
import { Spin } from 'antd';

const Spinner = () => {
    const [spinning,setspinning]=useState(true)
  const overlayStyle = {
    display: spinning ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.9)',
    zIndex: 9999,
    transition: 'opacity 0.3s ease',
    opacity: spinning ? 1 : 0,
    backdropFilter: spinning ? 'blur(5px)' : 'none', // Adjust the blur amount as needed
  };

  const spinStyle = {
    position: 'static',
    transform: 'none',
  };

  return (
    <div style={overlayStyle}>
      <Spin size="large" style={spinStyle} />
    </div>
  );
};

export default Spinner;
