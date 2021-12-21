import React from "react";

import { BannerContainer } from "./banner.styles";
import { Row_Container } from "../../styles/parents.styles";
import { Row, Col, Space, Button, Image, Typography } from "antd";

const BannerSection = () => {
  return (
    <BannerContainer>
      <Row_Container>
        <Row>
          <Col xl={12}>
            <Space direction="vertical" size={40}>
              <Space direction="vertical" size={12}>
                <Typography className="banner-header">
                  أنشيء متجرك الإلكتروني بسهولة فى دقائق، كل ما تحتاجه لبيع
                  منتجاتك اليوم
                </Typography>
                <Typography className="banner-description">
                  إنقل نشاطك التجاري إلي متجر إلكتروني أسهل وأسرع مما تعتقد، زود
                  وحافظ علي عملائك الحاليين من خلال متجر احترافي . بدون الحاجة
                  إلي مبرمج أو مصمم ، كل ماعليك هو أن تسجل وسنقوم بمساعدتك في
                  تطوير تجارتك وزيادة مبيعاتك.
                </Typography>
              </Space>
              <Button type="primary" className="btn-1">
                ابنى متجؤك الان
              </Button>
            </Space>
          </Col>
          <Col xl={12}>
            <Image
            preview={false}
              src="https://www.b7r.store/static/images/banner.svg"
              sizes="294"
            />
          </Col>
        </Row>
      </Row_Container>
    </BannerContainer>
  );
};

export default BannerSection;
