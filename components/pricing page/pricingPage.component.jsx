import React from "react";

import { Row_Container } from "../../styles/parents.styles";
import {
  PricingPageContainer,
  TopBanner,
  PricingCard,
  Badge,
  PricingTableContainer,
} from "./pricingPage.styles";
import { Row, Col, Space, Image, Typography, Button, Card, Table } from "antd";
import { CheckOutlined } from "@ant-design/icons/lib/icons";

const { Title, Text } = Typography;

const columns = [
  {
    align: "right",
    title: (
        <Title level={3}>مقارنة خطط الأسعار</Title>
    ),
    dataIndex: "features",
    key: "features",
    width: "48%",
  },
  {
    align: "right",
    title: (
        <Typography>
          <Text>البرونزية</Text>
          <p style={{display: "flex", alignItems: 'center', gap: '2px'}}>

          <Title level={4} style={{fontWeight:'700', lineHeight:'28px', fontSize: '18px', color: '#37474F'}}>249 جنيه</Title>
          <span style={{fontWeight:'400', lineHeight:'28px', fontSize: '14px', color: '#BDBDBD'}}>/شهريا</span>
          </p>
      </Typography>
    ),
    dataIndex: "advanced",
    key: "advanced",
  },
  {
    align: "right",
    title: (
        <Typography >
          <Text>الفضية</Text>
          <p style={{display: "flex", alignItems: 'center', gap: '2px'}}>

          <Title level={4} style={{fontWeight:'700', lineHeight:'28px', fontSize: '18px', color: '#37474F'}}>499 جنيه</Title>
          <span style={{fontWeight:'400', lineHeight:'28px', fontSize: '14px', color: '#BDBDBD'}}>/شهريا</span>
          </p>
      </Typography>
    ),
    dataIndex: "silver",
    key: "silver",
  },
  {
    align: "right",
    title: (
        <Typography >
          <Text>الذهبية</Text>
          <p style={{display: "flex", alignItems: 'center', gap: '2px'}}>

          <Title level={4} style={{fontWeight:'700', lineHeight:'28px', fontSize: '18px', color: '#37474F'}}>1299 جنيه</Title>
          <span style={{fontWeight:'400', lineHeight:'28px', fontSize: '14px', color: '#BDBDBD'}}>/شهريا</span>
          </p>
      </Typography>
    ),
    dataIndex: "gold",
    key: "gold",
  },
];

const data = [
    {
        key: '1',
        colSpan: '4',
        features: 'متجر إلكتروني احترافي'
    },
    {
        key: '2',
        features: 'متجر إلكتروني احترافي',
        advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
    },
    {
        key: '3',
        features: 'تعدد لغات المتجر',
        advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
    },
    {
        key: '4',
        features: 'تعدد العملات بالمتجر ',
        advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
    },
    {
        key: '5',
        features: ' تكامل الدفع والشحن',
        advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
    },
    {
        key: '6',
        features: 'عدد المنتجات غير محدود',
        advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
        gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
    }
]

const PricingPageComponent = () => {
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
      <PricingTableContainer>
        <Row_Container>
          <p className="g-bestSeller">الأكثر طلباً</p>
          <Table
            align="right"
            pagination={false}
            bordered={false}
            className="table-section"
            scroll={{ x: 1000 }}
            columns={columns}
            dataSource={data}
          />
        </Row_Container>
      </PricingTableContainer>
    </PricingPageContainer>
  );
};

export default PricingPageComponent;
