import React, { useEffect, useState } from "react";

import { Row_Container } from "../../styles/parents.styles";
import {
  PricingPageContainer,
  TopBanner,
  PricingCard,
  Badge,
} from "./pricingPage.styles";
import { Row, Col, Space, Typography, Button, Image } from "antd";

import TableIndexComponent from "./table/table.component";
import TabePaneComponent from "./tabePane/tabe.component";
import { PRICE_DATA } from "../../locales/ar/price";
function useWindowResize(callback) {
  useEffect(() => {
    callback();
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", () => {
        console.log("event removed");
      });
    };
  }, []);
}
const { Title, Text } = Typography;
const PricingPageComponent = () =>  {
 
  const [width, setWidth] = useState(true);
  const [tablePreview, setTablePreview] = useState(true);
  const featureTableCallback = () => {
    if (window.innerWidth > 992) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  };
  useWindowResize(featureTableCallback)
    return (
      <PricingPageContainer>
        <TopBanner>
          <Row_Container>
            <Space direction="vertical" size={19}>
              <Typography>
                <Title className="upper-header" level={1}>انشئ متجرك الان وزود مبيعاتك مع بحر</Title>
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
        <Row_Container style={{paddingBottom:'65px'}}>
          <Row
            gutter={[30, 30]}
            justify="center"
            style={{ marginBottom: "64px" ,direction:"rtl"}}
          >
            <Col lg={8} md={14}>
              <PricingCard>
                <Space direction="vertical" size={"middle"}>
                  <Typography className="header">
                    <Title className="card-price" level={1}>249 جنيه</Title>
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
            <Col lg={8} md={14}>
              <PricingCard className="bestSeller-card">
                <Space direction="vertical" size={"middle"}>
                  <Typography className="header">
                    <Title className="card-price" level={1}>499 جنيه</Title>
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
            <Col lg={8} md={14}>
              <PricingCard>
                <Space direction="vertical" size={"middle"}>
                  <Typography className="header">
                    <Title className="card-price" level={1}>1299 جنيه </Title>
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
            
          </Row>
          <Button type="ghost" onClick={()=> setTablePreview(!tablePreview)} className="btn-2">
            {PRICE_DATA.comparepricing }{tablePreview? (<Image preview={false} alt="right" width={24} height={24} className="plus-minus" src="/static/minus.svg"/>)
            :(<Image preview={false} alt="right" width={24} height={24} className="plus-minus" src="/static/plus.svg"/>)}
          </Button>
        </Row_Container>

        <Row_Container>
          { tablePreview ?

          (width ? (
            <TableIndexComponent />
          ) : (
            <TabePaneComponent/>
          )): null
          }
        </Row_Container>
      </PricingPageContainer>
    );
  
}

export default PricingPageComponent;
