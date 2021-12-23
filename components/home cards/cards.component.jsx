import React from 'react'

import { CardsContainer } from './cards.styles'
import { Row_Container } from '../../styles/parents.styles';
import { Row, Col, Image, Typography } from "antd";

const { Title } = Typography;


const CardsComponent = () => {
    return (
        <CardsContainer>
            <Title className='header-title'>عملیات بیع أسهل وأكثر بشراكات أكبر</Title>
            <Row_Container>
                <Row gutter={12}>
                    <Col md={8}>
                    <div className='card'>
                        <Image preview={false} height={64} src='/static/homePage/cashless-payment 1.svg'/> 
                        <Title level={4} style={{marginBottom: '20px'}}>خيارات دفع متكاملة </Title>
                        <p className='description'>تستطيع الآن تقديم تجربة دفع أكثر أمانا  للعملاء في متجرك. من خلال ربط المتجربطرق دفع آمنه وموثوقة دوليًا ومحليًا. مثل باي موب وغيرها</p>
                    </div>
                    </Col>
                    <Col md={8}>
                    <div className='card' style={{backgroundColor:'#1985a1'}}>
                        <Image preview={false} height={64} src='/static/homePage/Group 7358.svg'/> 
                        <Title level={4} style={{marginBottom: '20px', color: '#fff'}}>الربط بين متجرك ومتاجر منصات التواصل الإجتماعي وجوجل </Title>
                        <p className='description' style={{color: '#fff'}}>تستطيع الآن بكل سهولة من خلال متجرك الالكتروني أن تربط بين منتجاتك في متجرك وبين فيسبوك شوب وانستجرام شوب وجوجل شوبينج بكل سهولة .. كما تستطيع القيام بتعديلات في متاجر كل من فيسبوك وانستجرام وجوجل شوبينج  من خلال متجرك الالكتروني .</p>
                    </div>
                    </Col>
                    <Col md={8}>
                    <div className='card'>
                        <Image preview={false} height={64} src='/static/homePage/box (3) 1.svg'/> 
                        <Title level={4} style={{marginBottom: '20px'}}>طرق شحن آمنه وسريعة </Title>
                        <p className='description'>حيث نوفر لك دمج كامل بمتجرك مع شركات شحن إحترافية محلية لتصل لعملائك حيثما كانوا ...يمكنك إختيار الشركة المناسبة لاحتياجات مشروعك من مجموعة الشركات التي نوفرها وقم بترك باقي الأمر لنا.</p>
                    </div>
                    </Col>
                </Row>
            </Row_Container>
        </CardsContainer>
    )
}

export default CardsComponent
