import { Typography } from "antd";
import { CheckOutlined, LineOutlined } from "@ant-design/icons/lib/icons";
import { PRICE_DATA } from "../../../locales/ar/price";
import { renderData } from "../switchRenderData";



const { Title, Text } = Typography;
const RightCheck = (
    <CheckOutlined style={{ color: "green", fontSize: "20px" }} />
  );

const FeatureTitle ={ fontSize: "18px", color: "#4F4F4F", fontWeight: '400',lineHeight:'24px' };
const TypeTitle = { fontSize: "18px", color: "#163663", fontWeight: '400',lineHeight:'24px'}

export const columns = [
  {
    align: "right",
    className: "init-Row",
    title: <></>,
    children: [
      {
        align: "right",
        className: "feature-Row",
        title: <Title level={3}>مقارنة خطط الأسعار</Title>,
        dataIndex: "features",
        key: "features",
        width: "48%",
      },
    ],
  },
  {
    align: "center",
    className: "init-Row",
    title: <></>,
    children: [
      {
        align: "center",
        className: "advanced-Row",
        title: (
          <Typography style={{ textAlign: "right" }}>
            <Text
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "28px",
              }}
            >
              البرونزية
            </Text>
            <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Title
                level={4}
                style={{
                  fontWeight: "700",
                  lineHeight: "28px",
                  fontSize: "18px",
                  color: "#37474F",
                }}
              >
                249 جنيه
              </Title>
              <span
                style={{
                  fontWeight: "400",
                  lineHeight: "28px",
                  fontSize: "14px",
                  color: "#BDBDBD",
                }}
              >
                /شهريا
              </span>
            </p>
          </Typography>
        ),
        dataIndex: "advanced",
        key: "advanced",
      },
    ],
  },
  {
    align: "center",
    className: "bestSeller-Row",
    title: (
      <Text
        style={{
          fontSize: "13px",
          fontWeight: "700",
          color: "#fff",
          backgroundColor: "#2CB87A",
        }}
      >
        الأكثر طلباً
      </Text>
    ),
    children: [
      {
        align: "center",
        className: "silver-Row",
        title: (
          <Typography style={{ textAlign: "right" }}>
            <Text>الفضية</Text>
            <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Title
                level={4}
                style={{
                  fontWeight: "700",
                  lineHeight: "28px",
                  fontSize: "18px",
                  color: "#37474F",
                }}
              >
                499 جنيه
              </Title>
              <span
                style={{
                  fontWeight: "400",
                  lineHeight: "28px",
                  fontSize: "14px",
                  color: "#BDBDBD",
                }}
              >
                /شهريا
              </span>
            </p>
          </Typography>
        ),
        dataIndex: "silver",
        key: "silver",
      },
    ],
  },
  {
    align: "center",
    className: "init-Row",
    title: <></>,
    children: [
      {
        align: "center",
        className: "gold-Row",
        title: (
          <Typography style={{ textAlign: "right" }}>
            <Text>الذهبية</Text>
            <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Title
                level={4}
                style={{
                  fontWeight: "700",
                  lineHeight: "28px",
                  fontSize: "18px",
                  color: "#37474F",
                }}
              >
                1299 جنيه
              </Title>
              <span
                style={{
                  fontWeight: "400",
                  lineHeight: "28px",
                  fontSize: "14px",
                  color: "#BDBDBD",
                }}
              >
                /شهريا
              </span>
            </p>
          </Typography>
        ),
        dataIndex: "gold",
        key: "gold",
      },
    ],
  },
];

export const data = [
  {
    key: "1",
    colSpan: 4,
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}> {PRICE_DATA.shopFeature} </Text>
    ),
  },
  {
    key: "2",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.proWebsite}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "3",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.multiLang}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "4",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.multiCurrency}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "5",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.compeletPayment}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "6",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.unlimetedProducts}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "7",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.crowNumber}</Text>
      ),
    advanced: renderData("text","2"),
    silver: renderData("text","5"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "8",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.discount}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "9",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.shopReports}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "10",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.storeManegment}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "11",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.storeNumber}</Text>
      ),
    advanced: renderData("text","4"),
    silver: renderData("text","12"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "12",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.linkWithDomain}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "13",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.SSLCertify}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "14",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.FavList}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "15",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.reviewManagement}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "16",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.changeDesign}</Text>
      ),
    advanced: renderData("text","4"),
    silver: renderData("text","12"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "17",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.printBills}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "18",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>{PRICE_DATA.advancedOption}</Text>
    ),
  },
  {
    key: "19",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.specifyProducts}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "20",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.specifyUsers}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "21",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.specifyOrder}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "22",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.importAndExportProducts}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "23",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.multiChoicesSupport}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "24",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.productsFiltering}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "25",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.customersChatting}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "26",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.enclobidia}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "27",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.customersGroup}</Text>
      ),
    advanced: renderData("text","5 مجموعات"),
    silver:  renderData("text","10 مجموعات"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "28",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.additionalPages}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "29",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.friendlyURL}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "30",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.acceptOrders}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "31",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.buyWithoutLogin}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "32",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>{PRICE_DATA.shoppingTools}</Text>
    ),
  },
  {
    key: "33",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.facebookPixel}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "34",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.googleAnalystic}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "35",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.facebookShopping}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "36",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.getBackShopBin}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "37",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.emailsAndNewsReports}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "38",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.SMSApp}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "39",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.giftsSection}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "40",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.googleTagManager}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "41",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.specialDiscountCOBON}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "42",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.shoppingWithTargetPages}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "43",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.slicingCustomers}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "44",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>{PRICE_DATA.services}</Text>
    ),
  },
  {
    key: "45",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.shoppingSupport}</Text>
      ),
    advanced: renderData("text",PRICE_DATA.INORDER),
    silver: renderData("text",PRICE_DATA.INORDER),
    gold: renderData("text",PRICE_DATA.INORDER),
  },
  {
    key: "46",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.marketingManagment}</Text>
      ),
    advanced: renderData("text",PRICE_DATA.INORDER),
    silver: renderData("text",PRICE_DATA.INORDER),
    gold: renderData("text",PRICE_DATA.INORDER),
  },
  {
    key: "47",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.socialMediaManagment}</Text>
      ),
    advanced: renderData("text",PRICE_DATA.INORDER),
    silver: renderData("text",PRICE_DATA.INORDER),
    gold: renderData("text",PRICE_DATA.INORDER),
  },
  {
    key: "48",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>{PRICE_DATA.support}</Text>
    ),
  },
  {
    key: "49",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.chattingAndWhatsAppSupport}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "50",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.phoneSupport}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "51",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.supportPeriority}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "52",
    features: (
        <Text style={FeatureTitle}>{PRICE_DATA.readyToEnroll}</Text>
      ),
    advanced: <a>{PRICE_DATA.startExpriment}</a>,
    silver: <a>{PRICE_DATA.enrollNow}</a>,
    gold: <a>{PRICE_DATA.enrollNow}</a>,
  },
];
