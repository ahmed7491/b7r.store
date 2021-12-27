import { Typography } from "antd";
import { CheckOutlined, LineOutlined } from "@ant-design/icons/lib/icons";

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
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>خصائص المتجر الأساسية</Text>
    ),
  },
  {
    key: "2",
    features: (
        <Text style={FeatureTitle}>متجر إلكتروني احترافي</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "3",
    features: (
        <Text style={FeatureTitle}>تعدد لغات المتجر</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "4",
    features: (
        <Text style={FeatureTitle}>تعدد العملات بالمتجر</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "5",
    features: (
        <Text style={FeatureTitle}>تكامل الدفع والشحن</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "6",
    features: (
        <Text style={FeatureTitle}>عدد المنتجات غير محدود</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "7",
    features: (
        <Text style={FeatureTitle}>عدد المستخدمين فريق العمل</Text>
      ),
    advanced: (<Text style={TypeTitle}>2</Text>),
    silver: (<Text style={TypeTitle}>5</Text>),
    gold: (<Text style={TypeTitle}>غير محدود</Text>),
  },
  {
    key: "8",
    features: (
        <Text style={FeatureTitle}>كوبونات الخصم</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "9",
    features: (
        <Text style={FeatureTitle}>تقارير المتجر</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "10",
    features: (
        <Text style={FeatureTitle}>إدارة المخزون</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "11",
    features: (
        <Text style={FeatureTitle}>عدد الفروع او المخازن</Text>
      ),
    advanced: (<Text style={TypeTitle}>4</Text>),
    silver: (<Text style={TypeTitle}>12</Text>),
    gold: (<Text style={TypeTitle}>غير محدود</Text>),
  },
  {
    key: "12",
    features: (
        <Text style={FeatureTitle}>ربط المتجر بالدومين الخاص بك</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "13",
    features: (
        <Text style={FeatureTitle}>شهادة SSL مجانية (Https)</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "14",
    features: (
        <Text style={FeatureTitle}>قائمة المنتجات المفضلة لحفظ المنتجات المختارة</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "15",
    features: (
        <Text style={FeatureTitle}>إدارة تقييمات المنتج والمراجعات</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "16",
    features: (
        <Text style={FeatureTitle}>تعديل التصميم / استخدام أكثر من قالب</Text>
      ),
    advanced: (<Text style={TypeTitle}>4</Text>),
    silver: (<Text style={TypeTitle}>12</Text>),
    gold: (<Text style={TypeTitle}>غير محدود</Text>),
  },
  {
    key: "17",
    features: (
        <Text style={FeatureTitle}>طباعة فاتورة الطلب</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "18",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>خصائص المتجر المتقدمة</Text>
    ),
  },
  {
    key: "19",
    features: (
        <Text style={FeatureTitle}>تصنيفات المنتجات الاساسية(الفرعية و الثانوية)</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "20",
    features: (
        <Text style={FeatureTitle}>تخصيص مهام المستخدم (فريق العمل)</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "21",
    features: (
        <Text style={FeatureTitle}>تخصيص سير الطلب</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "22",
    features: (
        <Text style={FeatureTitle}>تصدير واستيراد المنتجات بملف إكسيل</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "23",
    features: (
        <Text style={FeatureTitle}>دعم الخيارات المتعدده للمنتج</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "24",
    features: (
        <Text style={FeatureTitle}>فلاتر المنتجات المتقدمة</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "25",
    features: (
        <Text style={FeatureTitle}>الشات والدردشة المباشرة مع العملاء</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "26",
    features: (
        <Text style={FeatureTitle}>المدونة</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "27",
    features: (
        <Text style={FeatureTitle}>مجموعات العملاء</Text>
      ),
    advanced: (<Text style={TypeTitle}>5 مجموعات</Text>),
    silver: (<Text style={TypeTitle}>10 مجموعات</Text>),
    gold: (<Text style={TypeTitle}>غير محدود</Text>),
  },
  {
    key: "28",
    features: (
        <Text style={FeatureTitle}>إنشاء صفحات اضافية</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "29",
    features: (
        <Text style={FeatureTitle}>تهيئة المتجر لمحركات البحث وعناوين URL صديقة</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "30",
    features: (
        <Text style={FeatureTitle}>قبول الطلبات حسب منطقة الشحن</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "31",
    features: (
        <Text style={FeatureTitle}>امكانية الشراء كضيف بدون تسجيل</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "32",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>أدوات التسويق</Text>
    ),
  },
  {
    key: "33",
    features: (
        <Text style={FeatureTitle}>ربط المتجر بفيسبوك بيكسل Facebook Pixel</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "34",
    features: (
        <Text style={FeatureTitle}>بط المتجر بتحليلات جوجل Google Analytics</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "35",
    features: (
        <Text style={FeatureTitle}>البيع على فيسبوك وانستجرام Facebook Shop</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "36",
    features: (
        <Text style={FeatureTitle}>نظام استرداد سلة التسوق المتروكة</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "37",
    features: (
        <Text style={FeatureTitle}>الرسائل الإخبارية وحملات البريد الإلكتروني</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "38",
    features: (
        <Text style={FeatureTitle}>تطبيق الرسائل القصيرة SMS</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "39",
    features: (
        <Text style={FeatureTitle}>قسائم الهدايا</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "40",
    features: (
        <Text style={FeatureTitle}>ربط المتجر بــ Google Tag Manager</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    gold: RightCheck,
  },
  {
    key: "41",
    features: (
        <Text style={FeatureTitle}>كوبونات الخصم المتقدمة</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    gold: RightCheck,
  },
  {
    key: "42",
    features: (
        <Text style={FeatureTitle}>التسويق بإستخدام تطبيق النوافذ المنبثقة</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    gold: RightCheck,
  },
  {
    key: "43",
    features: (
        <Text style={FeatureTitle}>تقسيم العملاء لمجموعات متقدمة</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    gold: RightCheck,
  },
  {
    key: "44",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>الخدمات</Text>
    ),
  },
  {
    key: "45",
    features: (
        <Text style={FeatureTitle}>مساعدة شخصية في التسويق</Text>
      ),
    advanced: (<Text style={TypeTitle}>عند الطلب</Text>),
    silver: (<Text style={TypeTitle}>عند الطلب</Text>),
    gold: (<Text style={TypeTitle}>عند الطلب</Text>),
  },
  {
    key: "46",
    features: (
        <Text style={FeatureTitle}>إدارة الحملات التسويقية</Text>
      ),
    advanced: (<Text style={TypeTitle}>عند الطلب</Text>),
    silver: (<Text style={TypeTitle}>عند الطلب</Text>),
    gold: (<Text style={TypeTitle}>عند الطلب</Text>),
  },
  {
    key: "47",
    features: (
        <Text style={FeatureTitle}>إدارة وسائل التواصل الإجتماعي</Text>
      ),
    advanced: (<Text style={TypeTitle}>عند الطلب</Text>),
    silver: (<Text style={TypeTitle}>عند الطلب</Text>),
    gold: (<Text style={TypeTitle}>عند الطلب</Text>),
  },
  {
    key: "48",
    colSpan: "4",
    features: (
      <Text style={{ fontSize: "20px", color: "#1985A1" }}>الدعم</Text>
    ),
  },
  {
    key: "49",
    features: (
        <Text style={FeatureTitle}>الدعم من خلال الشات / الدردشة او الواتساب</Text>
      ),
    advanced: RightCheck,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "50",
    features: (
        <Text style={FeatureTitle}>الدعم من خلال التيلفون</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "51",
    features: (
        <Text style={FeatureTitle}>أولوية الدعم</Text>
      ),
    advanced: <LineOutlined style={{ color: "#828282", fontSize: "16px" }} />,
    silver: RightCheck,
    gold: RightCheck,
  },
  {
    key: "52",
    features: (
        <Text style={FeatureTitle}>جاهز للاشتراك؟</Text>
      ),
    advanced: <a> ابدا تجربتك المجانيه </a>,
    silver: <a> اشترك الان</a>,
    gold: <a> اشترك الان</a>,
  },
];
