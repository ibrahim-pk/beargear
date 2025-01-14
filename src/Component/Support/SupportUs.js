import { Card, Row, Col, Image } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const SupportUs = () => {
  const [banner, setBanner] = useState([]);
  const [loader, setLoader] = useState(false);
  const [reLoader, setReLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/support/get"
      );
      setLoader(false);
      setBanner(data);
      //console.log(data);
    };
    fetchData();
  }, [reLoader]);

  return (
    <div className="support">
      <h2>Who Suport Us</h2>
      <div>
        <Row justify='center' gutter={[10,10]}>
          {banner.length > 0 &&
            banner.map((item, idx) =>(
              <Col key={idx} sm={4} md={5} lg={5}>
              <Image
                src={item?.imageLink}
                alt={item?.title}
                height="50px"
                width="auto"
              />
            </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default SupportUs;
