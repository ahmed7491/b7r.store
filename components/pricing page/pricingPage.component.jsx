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
import { CheckOutlined, LineOutlined } from "@ant-design/icons/lib/icons";

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
    align: "center",
    title: (
        <Typography style={{textAlign:'right'}}>
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
    align: "center",
    title: (
        <Typography style={{textAlign:'right'}}>
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
    align: "center",
    title: (
        <Typography style={{textAlign:'right'}}>
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
        features: (<Text style={{fontSize: '20px', color: '#1985A1'}}> خصائص المتجر الأساسية </Text>)
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
    },
    {
      key: '7',
      features: 'عدد المستخدمين فريق العمل',
      advanced: '2',
      silver: '5',
      gold: 'غير محدود'
  },
  {
    key: '8',
    features: 'كوبونات الخصم',
    advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
    silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
    gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '9',
  features: 'تقارير المتجر',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '10',
  features: 'إدارة المخزون',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '11',
  features: 'عدد الفروع او المخازن',
  advanced: '4',
  silver: '12',
  gold: 'غير محدود'
},
{
  key: '12',
  features: ' ربط المتجر بالدومين الخاص بك',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '13',
  features: 'شهادة SSL مجانية (Https)',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '14',
  features: 'قائمة المنتجات المفضلة لحفظ المنتجات المختارة',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '15',
  features: 'إدارة تقييمات المنتج والمراجعات',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '16',
  features: 'تعديل التصميم / استخدام أكثر من قالب',
  advanced: '4',
  silver: '12',
  gold: 'غير محدود'
},
{
  key: '17',
  features: 'طباعة فاتورة الطلب',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '18',
  colSpan: '4',
  features: (<Text style={{fontSize: '20px', color: '#1985A1'}}> خصائص المتجر المتقدمة </Text>)
},
{
  key: '19',
  features: 'تصنيفات المنتجات الاساسية )الفرعية و الثانوية (',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '20',
  features: 'تخصيص مهام المستخدم )فريق العمل(',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '21',
  features: 'تخصيص سير الطلب',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '22',
  features: ' تصدير واستيراد المنتجات بملف إكسيل',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '23',
  features: ' دعم الخيارات المتعدده للمنتج',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '24',
  features: 'فلاتر المنتجات المتقدمة',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '25',
  features: 'الشات والدردشة المباشرة مع العملاء ',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '26',
  features: 'المدونة',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '27',
  features: 'مجموعات العملاء',
  advanced: '5 مجموعات',
  silver: '10 مجموعات',
  gold: 'غير محدود'
},
{
  key: '28',
  features: 'إنشاء صفحات اضافية',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '29',
  features: ' تهيئة المتجر لمحركات البحث وعناوين URL صديقة ',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '30',
  features: 'قبول الطلبات حسب منطقة الشحن ',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '31',
  features: 'امكانية الشراء كضيف بدون تسجيل',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '32',
  colSpan: '4',
  features: (<Text style={{fontSize: '20px', color: '#1985A1'}}>  أدوات التسويق </Text>)
},
{
  key: '33',
  features: 'ربط المتجر بفيسبوك بيكسل Facebook Pixel',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '34',
  features: 'بط المتجر بتحليلات جوجل Google Analytics',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '35',
  features: ' البيع على فيسبوك وانستجرام Facebook Shop',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '36',
  features: ' نظام استرداد سلة التسوق المتروكة',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '37',
  features: ' الرسائل الإخبارية وحملات البريد الإلكتروني',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '38',
  features: 'تطبيق الرسائل القصيرة SMS',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '39',
  features: 'قسائم الهدايا',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '40',
  features: 'ربط المتجر بــ Google Tag Manager',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '41',
  features: 'كوبونات الخصم المتقدمة',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '42',
  features: 'التسويق بإستخدام تطبيق النوافذ المنبثقة',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '43',
  features: 'تقسيم العملاء لمجموعات متقدمة',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '44',
  colSpan: '4',
  features: (<Text style={{fontSize: '20px', color: '#1985A1'}}>الخدمات</Text>)
},
{
  key: '45',
  features: 'مساعدة شخصية في التسويق ',
  advanced: 'عند الطلب',
  silver: 'عند الطلب',
  gold: 'عند الطلب'
},
{
  key: '46',
  features: ' إدارة الحملات التسويقية',
  advanced: 'عند الطلب',
  silver: 'عند الطلب',
  gold: 'عند الطلب'
},
{
  key: '47',
  features: 'إدارة وسائل التواصل الإجتماعي',
  advanced: 'عند الطلب',
  silver: 'عند الطلب',
  gold: 'عند الطلب'
},
{
  key: '48',
  colSpan: '4',
  features: (<Text style={{fontSize: '20px', color: '#1985A1'}}> الدعم</Text>)
},
{
  key: '49',
  features: 'الدعم من خلال الشات / الدردشة او الواتساب',
  advanced: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '50',
  features: ' الدعم من خلال التيلفون',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '51',
  features: ' أولوية الدعم ',
  advanced: (<LineOutlined  style={{color: '#828282', fontSize:'16px'}} />),
  silver: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />),
  gold: (<CheckOutlined style={{color: 'green', fontSize:'20px'}} />)
},
{
  key: '52',
  features: ' جاهز للاشتراك؟',
  advanced: (<a> ابدا تجربتك المجانيه </a>),
  silver: (<a> اشترك الان</a>),
  gold: (<a> اشترك الان</a>)
},
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
