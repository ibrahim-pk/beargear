import { Card, Form, Input, Button, Upload, message } from 'antd';
import { UserOutlined, EnvironmentOutlined, FileTextOutlined, DollarOutlined, UploadOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import RootLayout from '@/Component/Layout/RootLayout';

const WholesalePage = () => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = (data) => {
    //console.log(data);
  };

  const handleUpload = async (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Company Information" style={{ width: '400px' }}>
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
              customRequest={async ({ file, onSuccess, onError }) => {
                const formData = new FormData();
                formData.append('file', file);

                try {
                  const response = await fetch('http://localhost:5000/api/upload', {
                    method: 'POST',
                    body: formData,
                  });

                  if (response.ok) {
                    const data = await response.json();
                    //console.log('File uploaded:', data.url);
                    onSuccess();
                  } else {
                    console.error('File upload failed:', response.statusText);
                    onError();
                  }
                } catch (error) {
                  console.error('Error uploading file:', error);
                  onError();
                }
              }}
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
