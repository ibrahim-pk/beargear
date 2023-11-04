import { Button, Result } from 'antd';
import Link from 'next/link';
const OrderMsg = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button key="home"><Link href='/' >Home</Link></Button>,
      <Button key="buy"><Link href='/product' >Buy Again</Link></Button>,
    ]}
  />
);
export default OrderMsg;