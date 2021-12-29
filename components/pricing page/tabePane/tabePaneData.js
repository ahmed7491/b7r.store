import { Typography } from "antd";

const { Title, Text } = Typography;

export const TabsName = {
    advanced: (
        <Typography style={{ textAlign: "right" }}>
          <Text className="tabName-type">
            البرونزية
          </Text>
          <p className="tabName-description">
            <Title level={4} className="price">
              249 جنيه
            </Title>
            <span className="monthly">
              /شهريا
            </span>
          </p>
        </Typography>
    ),
    silver: (
        <Typography style={{ textAlign: "right" }}>
              <Text className="tabName-type">الفضية</Text>
              <p className="tabName-description">
                <Title level={4} className="price">
                  499 جنيه
                </Title>
                <span className="monthly">
                  /شهريا
                </span>
              </p>
            </Typography>
    ),
    gold: (
        <Typography style={{ textAlign: "right" }}>
              <Text className="tabName-type">الذهبية</Text>
              <p className="tabName-description">
                <Title level={4} className="price">
                  1299 جنيه
                </Title>
                <span className="monthly">
                  /شهريا
                </span>
              </p>
            </Typography>
    )  
}