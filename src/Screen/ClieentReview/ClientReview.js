import { Card, Col, Row } from "antd";

import React from "react";

const ClientReview = () => {
  return (
    <div className="reviewSection">
      <h2>Client Review</h2>
      <div className="reviewDetails">
        <Row justify="center">
          <Col
            xs={{
              span: 20,
            }}
            md={{
              span: 20,
            }}
            lg={{
              span: 20,
            }}
          >
            <Card hoverable>
              <div className="reviewCard">
                <div className="cardImg">
                  <img alt="example" src="/image/bagpack.jpg" />
                </div>
                <div>
                  <h1>An amazing service</h1>
                  <p>
                    An amazing service.An amazing service.An amazing service.An
                    amazing service.An amazing service.An amazing service.An
                    amazing service.An amazing service.An amazing service.An
                    amazing service.An amazing service
                  </p>
                  <h3>Ibrahim Pk</h3>
                  <h1>Degisner and developer</h1>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ClientReview;
