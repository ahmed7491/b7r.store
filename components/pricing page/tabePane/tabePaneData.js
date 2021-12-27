import { Typography } from "antd";
import { CheckOutlined, LineOutlined } from "@ant-design/icons/lib/icons";

const { Title, Text } = Typography;
const RightCheck = (
    <CheckOutlined style={{ color: "green", fontSize: "20px" }} />
  );

const FeatureTitle ={ fontSize: "18px", color: "#4F4F4F", fontWeight: '400',lineHeight:'24px' };
const TypeTitle = { fontSize: "18px", color: "#163663", fontWeight: '400',lineHeight:'24px' };

export const TabsName = {
    advanced: (
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
    silver: (
        <Typography style={{ textAlign: "right" }}>
              <Text style={{fontSize: "18px", color: '#4F4F4F' }}>الفضية</Text>
              <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                <Title
                  level={4}
                  style={{
                    fontWeight: "700",
                    lineHeight: "28px",
                    fontSize: "18px",
                    color: "#163663",
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
    gold: (
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
    )  
}