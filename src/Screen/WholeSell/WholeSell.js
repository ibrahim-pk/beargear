import { Form, Input, Upload, Button, InputNumber, Col, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const WholesaleForm = () => {
  const onFinish = (values) => {
    //console.log('Submitted values:', values);
  };

  const beforeUpload = (file) => {
    const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedFormats.includes(file.type)) {
      message.error('Only JPG, PNG, and GIF file formats are allowed!');
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  return (
    <Form name="wholesaleForm" onFinish={onFinish}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Form.Item label="Company Name" name="companyName" required>
            <Input />
          </Form.Item>
        
          <Form.Item label="Address" name="address" required>
            <Input.TextArea />
          </Form.Item>
        
          <Form.Item label="Budget Change Option" name="budgetChange">
            <InputNumber />
          </Form.Item>
        
          <Form.Item label="Sample Image" name="sampleImage">
            <Upload
              name="image"
              accept="image/jpeg,image/png,image/gif"
              showUploadList={false}
              beforeUpload={beforeUpload}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default WholesaleForm;
