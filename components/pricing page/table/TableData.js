import { Typography } from "antd";
import { PRICE_DATA } from "../../../locales/ar/price";
import { renderData } from "../switchRenderData";

const { Title, Text } = Typography;

export const colHeadersNumbers=[0,17,31,43,47]

const TypeTitle = { fontSize: "24px", color: "#1985A1", fontWeight:'600' , padding: "12px"};

const sharedOnCell = (_, index) => {
  if (colHeadersNumbers.includes(index)) {
    return { colSpan: 0 };
  }
};

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
        onCell: (_, index) => ({
          colSpan: (index === 0 || index === 17 || index === 31 || index === 43 || index === 47) ? 4 : 1,
        }),
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
        onCell: sharedOnCell,
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
        onCell: sharedOnCell,
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
        onCell: sharedOnCell,
      },
    ],
  },
];

export const data = [
  {
    key: "1",
    featuresTab: (<Text className="featureSection-header"> {PRICE_DATA.shopFeature} </Text>),
    features: (
      <Text className="featureSection-header-table"> {PRICE_DATA.shopFeature} </Text>
    ),
  },
  {
    key: "2",
    features: (
        <Text className="feature-title">{PRICE_DATA.proWebsite}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "3",
    features: (
        <Text className="feature-title">{PRICE_DATA.multiLang}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "4",
    features: (
        <Text className="feature-title">{PRICE_DATA.multiCurrency}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "5",
    features: (
        <Text className="feature-title">{PRICE_DATA.compeletPayment}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "6",
    features: (
        <Text className="feature-title">{PRICE_DATA.unlimetedProducts}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "7",
    features: (
        <Text className="feature-title">{PRICE_DATA.crowNumber}</Text>
      ),
    advanced: renderData("text","2"),
    silver: renderData("text","5"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "8",
    features: (
        <Text className="feature-title">{PRICE_DATA.discount}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "9",
    features: (
        <Text className="feature-title">{PRICE_DATA.shopReports}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "10",
    features: (
        <Text className="feature-title">{PRICE_DATA.storeManegment}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "11",
    features: (
        <Text className="feature-title">{PRICE_DATA.storeNumber}</Text>
      ),
    advanced: renderData("text","4"),
    silver: renderData("text","12"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "12",
    features: (
        <Text className="feature-title">{PRICE_DATA.linkWithDomain}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "13",
    features: (
        <Text className="feature-title">{PRICE_DATA.SSLCertify}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "14",
    features: (
        <Text className="feature-title">{PRICE_DATA.FavList}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "15",
    features: (
        <Text className="feature-title">{PRICE_DATA.reviewManagement}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "16",
    features: (
        <Text className="feature-title">{PRICE_DATA.changeDesign}</Text>
      ),
    advanced: renderData("text","4"),
    silver: renderData("text","12"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "17",
    features: (
        <Text className="feature-title">{PRICE_DATA.printBills}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "18",
    featuresTab: (<Text className="featureSection-header">{PRICE_DATA.advancedOption}</Text>),
    features: (
      <Text className="featureSection-header-table">{PRICE_DATA.advancedOption}</Text>
    ),
  },
  {
    key: "19",
    features: (
        <Text className="feature-title">{PRICE_DATA.specifyProducts}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "20",
    features: (
        <Text className="feature-title">{PRICE_DATA.specifyUsers}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "21",
    features: (
        <Text className="feature-title">{PRICE_DATA.specifyOrder}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "22",
    features: (
        <Text className="feature-title">{PRICE_DATA.importAndExportProducts}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "23",
    features: (
        <Text className="feature-title">{PRICE_DATA.multiChoicesSupport}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "24",
    features: (
        <Text className="feature-title">{PRICE_DATA.productsFiltering}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "25",
    features: (
        <Text className="feature-title">{PRICE_DATA.customersChatting}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "26",
    features: (
        <Text className="feature-title">{PRICE_DATA.enclobidia}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "27",
    features: (
        <Text className="feature-title">{PRICE_DATA.customersGroup}</Text>
      ),
    advancedTab: renderData("text","5"),
    advanced: renderData("text","5 مجموعات"),
    silverTab:  renderData("text","10"),
    silver:  renderData("text","10 مجموعات"),
    gold: renderData("text",PRICE_DATA.UNLIMITED),
  },
  {
    key: "28",
    features: (
        <Text className="feature-title">{PRICE_DATA.additionalPages}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "29",
    features: (
        <Text className="feature-title">{PRICE_DATA.friendlyURL}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "30",
    features: (
        <Text className="feature-title">{PRICE_DATA.acceptOrders}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "31",
    features: (
        <Text className="feature-title">{PRICE_DATA.buyWithoutLogin}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "32",
    featuresTab: (<Text className="featureSection-header">{PRICE_DATA.shoppingTools}</Text>),
    features: (
      <Text className="featureSection-header-table">{PRICE_DATA.shoppingTools}</Text>
    ),
  },
  {
    key: "33",
    features: (
        <Text className="feature-title">{PRICE_DATA.facebookPixel}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "34",
    features: (
        <Text className="feature-title">{PRICE_DATA.googleAnalystic}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "35",
    features: (
        <Text className="feature-title">{PRICE_DATA.facebookShopping}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "36",
    features: (
        <Text className="feature-title">{PRICE_DATA.getBackShopBin}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "37",
    features: (
        <Text className="feature-title">{PRICE_DATA.emailsAndNewsReports}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "38",
    features: (
        <Text className="feature-title">{PRICE_DATA.SMSApp}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "39",
    features: (
        <Text className="feature-title">{PRICE_DATA.giftsSection}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "40",
    features: (
        <Text className="feature-title">{PRICE_DATA.googleTagManager}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "41",
    features: (
        <Text className="feature-title">{PRICE_DATA.specialDiscountCOBON}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "42",
    features: (
        <Text className="feature-title">{PRICE_DATA.shoppingWithTargetPages}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "43",
    features: (
        <Text className="feature-title">{PRICE_DATA.slicingCustomers}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("false"),
    gold: renderData("true"),
  },
  {
    key: "44",
    featuresTab: (<Text className="featureSection-header">{PRICE_DATA.services}</Text>),
    features: (
      <Text className="featureSection-header-table">{PRICE_DATA.services}</Text>
    ),
  },
  {
    key: "45",
    features: (
        <Text className="feature-title">{PRICE_DATA.shoppingSupport}</Text>
      ),
    advancedTab: renderData("true"),
    advanced: renderData("text",PRICE_DATA.INORDER),
    silverTab: renderData("true"),
    silver: renderData("text",PRICE_DATA.INORDER),
    goldTab: renderData("true"),
    gold: renderData("text",PRICE_DATA.INORDER),
  },
  {
    key: "46",
    features: (
        <Text className="feature-title">{PRICE_DATA.marketingManagment}</Text>
      ),
    advancedTab: renderData("true"),
    advanced: renderData("text",PRICE_DATA.INORDER),
    silverTab: renderData("true"),
    silver: renderData("text",PRICE_DATA.INORDER),
    goldTab: renderData("true"),
    gold: renderData("text",PRICE_DATA.INORDER),
  },
  {
    key: "47",
    features: (
        <Text className="feature-title">{PRICE_DATA.socialMediaManagment}</Text>
      ),
    advancedTab: renderData("true"),
    advanced: renderData("text",PRICE_DATA.INORDER),
    silverTab: renderData("true"),
    silver: renderData("text",PRICE_DATA.INORDER),
    goldTab: renderData("true"),
    gold: renderData("text",PRICE_DATA.INORDER),
  },
  {
    key: "48",
    featuresTab: (<Text className="featureSection-header">{PRICE_DATA.support}</Text>),
    features: (
      <Text className="featureSection-header-table">{PRICE_DATA.support}</Text>
    ),
  },
  {
    key: "49",
    features: (
        <Text className="feature-title">{PRICE_DATA.chattingAndWhatsAppSupport}</Text>
      ),
    advanced: renderData("true"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "50",
    features: (
        <Text className="feature-title">{PRICE_DATA.phoneSupport}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "51",
    features: (
        <Text className="feature-title">{PRICE_DATA.supportPeriority}</Text>
      ),
    advanced: renderData("false"),
    silver: renderData("true"),
    gold: renderData("true"),
  },
  {
    key: "52",
    features: (
        <Text className="feature-title">{PRICE_DATA.readyToEnroll}</Text>
      ),
    advanced: <a>{PRICE_DATA.startExpriment}</a>,
    silver: <a>{PRICE_DATA.enrollNow}</a>,
    gold: <a>{PRICE_DATA.enrollNow}</a>,
  },
];
