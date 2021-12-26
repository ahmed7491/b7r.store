import React from "react";
import { Tabs, Table, Typography, Row, Col, Space } from "antd";
import { columns, data } from "../table/TableData";
import { TabPaneContainer } from "./tabe.styles";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const subHeader = data.filter((idx) => idx.colSpan == "4");

const tabsName = columns.map((tb) => tb.children[0].title);
console.log(tabsName);

subHeader.map((index) => index.features);

// console.log(data.map(idx=> idx.silver))

// subHeader.map((index)=>

// index.features.props.children)

const TabePaneComponent = () => {
  return (
    <TabPaneContainer>
      <Tabs defaultActiveKey="1" direction="rtl" centered={true}>
        <TabPane
          tab={
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
          }
          key="1"
        >
            {
                
            }
            <Row >
                {
                    data.map((index)=> (
                    <Space key={index.key} size={"large"} direction="vertical" className="inner-Table">

                        <Col md={6}>
                            {index.silver}
                        </Col>
                        <Col md={28}>
                        {index.features}
                        </Col>
                    </Space>
                    ))
                }
            </Row>
        </TabPane>
        <TabPane
          tab={
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
          }
          key="1"
        >

        </TabPane>
        <TabPane
          tab={
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
          }
          key="1"
        >

        </TabPane>
      </Tabs>
    </TabPaneContainer>
  );
};

export default TabePaneComponent;
