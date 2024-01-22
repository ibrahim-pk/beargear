import RootLayout from '@/Component/Layout/RootLayout';
import { Button, Result } from 'antd';
import Link from 'next/link';

const OrderMsg = () => (
  <RootLayout>
       <Result
    status="success"
    title="Successfully"
    subTitle="Congratulation For Purchased"
    extra={[
      <Button key="home"><Link href='/' >Home</Link></Button>,
      <Button key="buy"><Link href='/profile/order/OrderData' >Dashboard</Link></Button>,
    ]}
  />
    </RootLayout>
  
);
export default OrderMsg;