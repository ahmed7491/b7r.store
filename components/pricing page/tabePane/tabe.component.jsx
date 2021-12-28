import React from "react";
import { Tabs, Table, Typography, Row, Col, Space, Affix } from "antd";
import { columns, data } from "../table/TableData";
import { TabPaneContainer } from "./tabe.styles";
import { TabsData, TabsName } from "./tabePaneData";
import { StickyContainer, Sticky } from 'react-sticky';

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
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
      )}
    </Sticky>
  );
  return (
    <TabPaneContainer>
   <StickyContainer>
      <Tabs defaultActiveKey="1" direction="rtl"  renderTabBar={renderTabBar} centered={true} animated={true}>
        <TabPane
          tab={ TabsName.advanced}
          key="1"
          
        >
          <Row align="middle" >
              <Space size={20} direction="vertical" className="inner-Table">
                {
                    TabsData.map((index)=> (
                    <Space key={index.key} size={15} direction="horizontal"  >

                        <Col>
                            {index.advanced}
                        </Col>
                        <Col style={{marginRight:'15px'}}>
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
                        <Col style={{marginRight:'15px'}}> 
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
                        <Col style={{marginRight:'15px'}}>
                        {index.features}
                        </Col>
                    </Space>
                    ))
                }
                </Space>
            </Row>
        </TabPane>
      </Tabs>
      </StickyContainer>
    </TabPaneContainer>
  );
};

export default TabePaneComponent;