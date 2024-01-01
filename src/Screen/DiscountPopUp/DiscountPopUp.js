// components/DiscountPopup.js
import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import axios from 'axios';

const DiscountPopup = () => {
  const [visible, setVisible] = useState(false);
  const [loader,setLoader]=useState(false)
  const [popData,setPopData]=useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);
    
    const fetchData=async()=>{
      setLoader(true)
      const {data}=await axios.get('https://server.beargear.com.bd/api/v1/popup/get')
      setLoader(false)
      setPopData(data)
      console.log(data);
    }
    fetchData()




    return () => clearTimeout(timer);





  }, []);

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      title={popData[0]?.title}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

      
    >
      <div>
        <img style={{
            height:'auto',
            width:'100%'
        }} 
        
        src={`https://drive.google.com/uc?id=${
          popData[0]?.imageLink?.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)[1]
        }`} 
        
        alt='' 
        
        />
      </div>
    </Modal>
  );
};

export default DiscountPopup;
