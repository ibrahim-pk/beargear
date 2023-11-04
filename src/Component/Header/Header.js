import { Button, Carousel, Col, Image, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
const Header = () => {
  return (
    <div style={{
      padding:'0 0 50px 0'
    }} className="header">
      <Row gutter={[0, 16]} justify="space-around">
        <Col
          xs={{
            span: 24,
          }}
          md={{
            span: 24,
          }}
          lg={{
            span: 10,
          }}
        >
          <div className="heade-left">
            <h2>
              TRUSTED SUPPLIER OF WHOLESALE
              <span className="backpack"> BACKPACKS</span>
            </h2>
            <p>
              We've been told it is not possible to overachieve our customer's
              expectations. We have not reinvented the wheel,we decided to build
              upon it.
            </p>
            <button className="seatBtn">
              <Link style={{
                color:'white'
              }} href="/product">
              Choose Product <ArrowRightOutlined />
              </Link>
            </button>
          </div>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          md={{
            span: 24,
          }}
          lg={{
            span: 10,
          }}
        >
          <div className="header-carousel">
            <Carousel autoplay>
              <div>
                <Image
                  src="/image/bugpack.png"
                  alt=""
                  width={350}
                  height={200}
                  responsive="true"
                />
              </div>
              <div>
                <Image
                  src="/image/bugpack.png"
                  alt=""
                  width={350}
                  height={200}
                  responsive="true"
                />
              </div>
              <div>
                <Image
                  src="/image/bugpack.png"
                  alt=""
                  width={350}
                  height={200}
                  responsive="true"
                />
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
