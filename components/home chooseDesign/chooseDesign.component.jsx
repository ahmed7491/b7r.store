import React from 'react'

import { ChooseDesignContainer } from './chooseDesign.styles'
import { Carousel, Image, Typography } from "antd";

const { Title } = Typography;


const ChooseDesignComponent = () => {
    return (
        <ChooseDesignContainer>
            <Title className='header-1'>إختر تصميم متجرك الاحترافي من بين العديد من القوالب الإحترافية</Title>
            <Title level={2} className='header-2'>تصاميم متنوعة لتخدم تجارتك</Title>
            <p className='description'>لتجربة أكثر سهولة وأكثر رضاءا لعملائك إختر تصميم متجرك الإلكتروني وابدأ في عرض منتجاتك . قم باختيار ما يناسب منتجاتك وتجارتك من بين مجموعة من  التصميمات المتنوعة لواجهة المتجر عند إنشاء متجرك وتطبيق المتجر الالكتروني الخاص بك</p>

            <Carousel></Carousel>
        </ChooseDesignContainer>
    )
}

export default ChooseDesignComponent
