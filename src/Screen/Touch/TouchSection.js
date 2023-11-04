import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, BankOutlined, FileTextOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';


const TouchSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div
      
    >
      <h2 style={{
        textAlign:'center',
        marginTop:'20px'
      }}>Get Touch With Us</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'50px 0 20px 0'
      }}>
        
      <Form
        name="responsive-form"
        onFinish={onFinish}
        style={{
          width: isMobile ? '90%' : '50%',
        }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please enter your name!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email address!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="company"
          rules={[
            {
              required: true,
              message: 'Please enter your company name!',
            },
          ]}
        >
          <Input
            prefix={<BankOutlined />}
            placeholder="Company"
          />
        </Form.Item>
        <Form.Item
          name="topic"
          rules={[
            {
              required: true,
              message: 'Please enter the topic!',
            },
          ]}
        >
          <Input
            prefix={<FileTextOutlined />}
            placeholder="Topic"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};




export default TouchSection;
