import React, { useState, useEffect } from "react";
import { Tabs, Table, Typography, Row, Col, Space, Affix } from "antd";
import { colHeadersNumbers, data } from "../table/TableData";
import { TabPaneContainer } from "./tabe.styles";
import { TabsName } from "./tabePaneData";
import { StickyContainer, Sticky } from "react-sticky";

const { TabPane } = Tabs;
const newData = [...data];
const lastElement = newData.pop();

const TabePaneComponent = () => {
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          className="site-custom-tab-bar"
          style={{ ...style }}
        />
      )}
    </Sticky>
  );
  return (
    <TabPaneContainer>
      <StickyContainer>
        <Tabs
          defaultActiveKey="1"
          direction="rtl"
          renderTabBar={renderTabBar}
          centered={true}
          animated={true}
        >
          <TabPane tab={TabsName.advanced} key="1">
            <Row align="middle">
              <Space size={20} direction="vertical" className="inner-Table">
                {newData.map((index,i) => (
                  <Space key={index.key} style={colHeadersNumbers.includes(i)&& {backgroundColor:"#E1F5FA",width:"100%",padding:"15px 0px"}} size={15} direction="horizontal">
                    <Col>
                      { index.advancedTab || index.advanced}
                    </Col>
                    <Col style={{ marginRight: "15px " }}>
                      { index.featuresTab || index.features}
                    </Col>
                  </Space>
                ))}
                <div className="tab-tail">
                  {lastElement.features}
                  {lastElement.advanced}
                </div>
              </Space>
            </Row>
          </TabPane>
          <TabPane tab={TabsName.silver} key="2">
            <Row align="middle">
              <Space size={20} direction="vertical" className="inner-Table">
                {data.map((index) => (
                  <Space key={index.key} size={15} direction="horizontal">
                    <Col>
                      { index.silverTab || index.silver}
                    </Col>
                    <Col style={{ marginRight: "15px" }}>
                      { index.featuresTab || index.features}
                    </Col>
                  </Space>
                ))}
                <div className="tab-tail">
                  {lastElement.features}
                  {lastElement.silver}
                </div>
              </Space>
            </Row>
          </TabPane>
          <TabPane tab={TabsName.gold} key="3">
            <Row align="middle">
              <Space size={20} direction="vertical" className="inner-Table">
                {data.map((index) => (
                  <Space key={index.key} size={15} direction="horizontal">
                    <Col>{ index.goldTab || index.gold}</Col>
                    <Col style={{ marginRight: "15px" }}>
                      { index.featuresTab || index.features}
                    </Col>
                  </Space>
                ))}
                <div className="tab-tail">
                  {lastElement.features}
                  {lastElement.gold}
                </div>
              </Space>
            </Row>
          </TabPane>
        </Tabs>
      </StickyContainer>
    </TabPaneContainer>
  );
};

export default TabePaneComponent;
