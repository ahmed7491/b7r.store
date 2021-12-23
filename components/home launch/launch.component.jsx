import React from 'react'

import { LaunchContainer } from './launch.styles'
import { Row, Col, Space, Image, Typography } from "antd";


const LaunchComponent = () => {
    return (
        <LaunchContainer>
            <Typography className='title'>أطلق متجرك الإلكتروني الآن، وضاعف مبيعاتك من الإنترنت </Typography>
            <Row style={{marginTop: '60px'}}>
                <Col md={8}>
                <Space direction='vertical' align='center'>
                <Image preview={false} height={90} src='/static/homePage/shoe-shop 1.svg'/>
                <span className='step-num'>01</span>
                <h3 className='step-title'>أنشئ متجرك</h3>
                <p className='step-description'>في خلال 30 ثانية فقط ستتمكن من إنشاء متجر الكتروني متكامل وتبدأ تجربة البيع عبر الإنترنت مثل ملايين التجار </p>
                </Space>
                </Col>
                <Col md={8}>
                <Space direction='vertical' align='center'>
                <Image preview={false} height={90} src='/static/homePage/shopping-cart 1.svg'/>
                <span className='step-num'>02</span>
                <h3 className='step-title'>أضف منتجاتك</h3>
                <p className='step-description'>ستتمكن من إضافة منتجاتك بكل سهولة من خلال لوحة تحكم مرنة لا تحتاج إلي خبرة فنية أو تدريب </p>
                </Space>
                </Col>
                <Col md={8}>
                <Space direction='vertical' align='center'>
                <Image preview={false} height={90} src='/static/homePage/megaphone (1) 1.svg'/>
                <span className='step-num'>03</span>
                <h3 className='step-title'>سوق لمتجرك</h3>
                <p className='step-description'>قم بالتسويق لمتجرك باستخدام أفضل الأساليب التسويقية الحديثه وزود مبيعاتك وأرباحك  </p>
                </Space>
                </Col>
            </Row>
        </LaunchContainer>
    )
}

export default LaunchComponent
