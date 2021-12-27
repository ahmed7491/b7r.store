import React from "react";
import { Tabs, Table, Typography, Row, Col, Space } from "antd";
import { columns, data } from "../table/TableData";
import { TabPaneContainer } from "./tabe.styles";
import { TabsName } from "./tabePaneData";

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
      <Tabs defaultActiveKey="1" direction="rtl" tabBarGutter={135} centered={true}>
        <TabPane
          tab={TabsName.advanced}
          key="1"
        >
          <Row align="middle" >
              <Space size={20} direction="vertical" className="inner-Table">
                {
                    data.map((index)=> (
                    <Space key={index.key} size={15} direction="horizontal" >

                        <Col>
                            {index.advanced}
                        </Col>
                        <Col>
                        {index.features}
                        </Col>
                    </Space>
                    ))
                }
                </Space>
            </Row>
        </TabPane>
        <TabPane
          tab={TabsName.silver}
          key="2"
        >
          <Row align="middle" >
              <Space size={20} direction="vertical" className="inner-Table">
                {
                    data.map((index)=> (
                    <Space key={index.key} size={15} direction="horizontal" >

                        <Col>
                            {index.silver}
                        </Col>
                        <Col>
                        {index.features}
                        </Col>
                    </Space>
                    ))
                }
                </Space>
            </Row>

        </TabPane>
        <TabPane
          tab={TabsName.gold}
          key="3"
        >
          <Row align="middle" >
              <Space size={20} direction="vertical" className="inner-Table">
                {
                    data.map((index)=> (
                    <Space key={index.key} size={15} direction="horizontal" >

                        <Col>
                            {index.gold}
                        </Col>
                        <Col>
                        {index.features}
                        </Col>
                    </Space>
                    ))
                }
                </Space>
            </Row>
        </TabPane>
      </Tabs>
    </TabPaneContainer>
  );
};

export default TabePaneComponent;
