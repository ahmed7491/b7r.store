import React, { useState } from "react";

import { Row_Container } from "../../styles/parents.styles";
import {
  PricingPageContainer,
  TopBanner,
  PricingCard,
  Badge,
} from "./pricingPage.styles";
import { Row, Col, Space, Typography, Button } from "antd";

import TableIndexComponent from "./table/table.component";
import TabePaneComponent from "./tabePane/tabe.component";

const { Title, Text } = Typography;
class PricingPageComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      existViewPort: null,
    };
  }
  componentDidMount() {
    this.setState({ existViewPort: window.innerWidth });
  }
  render() {
    return (
      <PricingPageContainer>
        <TopBanner>
          <Row_Container>
            <Space direction="vertical" size={19}>
              <Typography>
                <Title level={1}>انشئ متجرك الان وزود مبيعاتك مع بحر</Title>
                <Title className="upper-description">
                  مجاناً لمدة 14 يوم بدون الحاجة إلى تفاصيل بطاقة الائتمان
                </Title>
              </Typography>
              <Button type="primary" className="btn-1">
                ابدأ تجربتك المجانية
              </Button>
            </Space>
          </Row_Container>
        </TopBanner>
        <Row_Container>
          <Row
            gutter={[30, 30]}
            justify="center"
            style={{ marginBottom: "64px" }}
          >
            <Col>
              <PricingCard>
                <Space direction="vertical" size={"middle"}>
                  <Typography className="header">
                    <Title level={1}>1299 جنيه </Title>
                    <span className="duration-pay">/شهريا</span>
                  </Typography>
                  <Typography style={{ textAlign: "right" }}>
                    <Title level={3} style={{ color: "#FFA412" }}>
                      الذهبية
                    </Title>
                    <p className="description">
                      انت جاهز لمواكبة التوسع في اعمالك التجارية
                    </p>
                  </Typography>
                </Space>
              </PricingCard>
            </Col>
            <Col>
              <PricingCard>
                <Space direction="vertical" size={"middle"}>
                  <Typography className="header">
                    <Title level={1}>1299 جنيه </Title>
                    <span className="duration-pay">/شهريا</span>
                  </Typography>
                  <Typography style={{ textAlign: "right" }}>
                    <Title level={4} style={{ color: "#163663" }}>
                      {" "}
                      الفضية{" "}
                    </Title>
                    <Badge>
                      <span>الأكثر طلباً</span>
                    </Badge>
                    <p className="description">
                      انت جاهز لزيادة مبيعاتك علي كل المنصات
                    </p>
                  </Typography>
                </Space>
              </PricingCard>
            </Col>
            <Col>
              <PricingCard>
                <Space direction="vertical" size={"middle"}>
                  <Typography className="header">
                    <Title level={1}>1299 جنيه </Title>
                    <span className="duration-pay">/شهريا</span>
                  </Typography>
                  <Typography style={{ textAlign: "right" }}>
                    <Title level={4} style={{ color: "#1985A1" }}>
                      البرونزية
                    </Title>
                    <p className="description">
                      انت جاهز لنقل نشاطك التجاري باستخدام متجر الكتروني احترافي
                    </p>
                  </Typography>
                </Space>
              </PricingCard>
            </Col>
          </Row>
          <Button type="ghost" className="btn-2">
            {" "}
            مقارنة خطط الأسعار ــــ
          </Button>
        </Row_Container>

        <Row_Container>
          {this.state.existViewPort > 992 ? (
            <TableIndexComponent />
          ) : (
            <TabePaneComponent />
          )}
        </Row_Container>
      </PricingPageContainer>
    );
  }
}

export default PricingPageComponent;
