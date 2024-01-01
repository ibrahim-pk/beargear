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
        "https://server.beargear.com.bd/api/v1/support/get"
      );
      setLoader(false);
      setBanner(data);
      console.log(data);
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
              <Col sm={4} md={5} lg={5}>
              <Image
                src={`https://drive.google.com/uc?id=${item?.imageLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)[1]
                }`}
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
