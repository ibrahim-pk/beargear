import { Card, Form, Input, Button, Upload, message } from 'antd';
import { UserOutlined, EnvironmentOutlined, FileTextOutlined, DollarOutlined, UploadOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import RootLayout from '@/Component/Layout/RootLayout';

const WholesalePage = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      // Set the uploaded file URL to a form field
      setValue('image', info.file.response.url);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card title="Company Information" style={{ width:'400px' }}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item name="companyName">
          <Input prefix={<UserOutlined />} placeholder="Company Name" {...register('companyName')} />
        </Form.Item>
        <Form.Item name="address">
          <Input prefix={<EnvironmentOutlined />} placeholder="Address" {...register('address')} />
        </Form.Item>
        <Form.Item name="productDetails">
          <Input prefix={<FileTextOutlined />} placeholder="Product Details" {...register('productDetails')} />
        </Form.Item>
        <Form.Item name="budget">
          <Input prefix={<DollarOutlined />} type="number" placeholder="Budget" {...register('budget')} />
        </Form.Item>
        <Form.Item name="image" label="Upload Image">
          <Upload
            name="file"
            action="/api/upload" // Replace with your API endpoint for file upload
            onChange={handleUpload}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
    
  );
};



export default WholesalePage;

WholesalePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
