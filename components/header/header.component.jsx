import React, { useState } from "react";
import Link from "next/link";
import Headroom from "react-headroom";

import { Row, Col, Space, Button, Image, Popover, Typography, Menu } from "antd";
import { HeaderContainer } from "./header.styles";
import { Row_Container } from "../../styles/parents.styles";
import { DownOutlined } from "@ant-design/icons/lib/icons";

const selling = [
  {
    title: "متجر الكترونى",
    Url: "",
  },
  {
    title: "تطبيق متجر الكترونى ",
    Url: "",
  },
  {
    title: "نقاط البيع",
    Url: "",
  },
];


const HeaderComponent = () => {
  const menu = (
    <Menu>
      <Menu.Item  className="popover-item" onClick={()=>{
        push(menuUrl.designWeb)
        onClose()
      }}>
        متجر الكترونى
      </Menu.Item>
      <Menu.Item className="popover-item" onClick={()=>{
        push(menuUrl.E_Commerce)
        onClose()
      }}>
        تطبيق متجر الكترونى
      </Menu.Item>
      <Menu.Item className="popover-item" onClick={()=>{
        push(menuUrl.mobilDesign)
        onClose()
      }}>
        نقاط البيع
      </Menu.Item>
      
    </Menu>
  );
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <HeaderContainer>
      <div className="page-header">
        <Row_Container>
            <Row justify="space-between" align="middle">
              <Col span={12}>
                <Row>
                  <Space >
                    <Col>
                      <div>
                        <Link href="/" passHref>
                          <Image
                          preview={false}
                            width={70}
                            height={31}
                            src="https://www.b7r.store/static/images/NewUpdatedLogo.svg"
                          />
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <Space size="large" style={{margin: "0px 15px", direction:'rtl'}}>
                        <Popover
                          placement="bottomRight"
                          content={menu}
                          trigger="click"
                        >
                          <Typography>
                            البيع <DownOutlined style={{fontSize:'8px'}} />
                          </Typography>
                        </Popover>
                          <Typography>
                            الاسعار
                          </Typography>
                          <Popover
                          placement="bottomRight"
                          content={selling.map((target) => target.title)}
                          trigger="click"
                        >
                          <Typography>
                            تعلم <DownOutlined style={{fontSize:'8px'}} />
                          </Typography>
                        </Popover>
                          <Typography style={{marginRight: '15px'}}>
                            عن يحر
                          </Typography>
                      </Space>
                    </Col>
                  </Space>
                </Row>
              </Col>
              <Col>
                <Space>
                  <Button type="ghost" className="btn-1">
                    دخول
                  </Button>
                  <Button type="primary" block className="btn-2" >
                    ابدا التجرية المجانية
                  </Button>
                </Space>
              </Col>
            </Row>
        </Row_Container>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
