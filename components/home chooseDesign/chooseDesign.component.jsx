import React from 'react'

import { ChooseDesignContainer } from './chooseDesign.styles'
import { Carousel, Image, Typography } from "antd";

const { Title } = Typography;

const designImages = [
    {
        src: "/static/b7r-website/Property 1=Frame 7234.png",
        alt: "b7r-website"
    },
    {
        src: "/static/b7r-website/Property 1=Frame 7233.png",
        alt: "b7r-website"
    },
    {
        src: "/static/b7r-website/Property 1=Frame 7232.jpg",
        alt: "b7r-website"
    },
    {
        src: "/static/b7r-website/Property 1=Frame 7231.jpg",
        alt: "b7r-website"
    },
    {
        src: "/static/b7r-website/Group 7245.png",
        alt: "b7r-website"
    },
]

const ChooseDesignComponent = () => {
    return (
        <ChooseDesignContainer>
            <Title className='header-1'>إختر تصميم متجرك الاحترافي من بين العديد من القوالب الإحترافية</Title>
            <Title level={2} className='header-2'>تصاميم متنوعة لتخدم تجارتك</Title>
            <p className='description'>لتجربة أكثر سهولة وأكثر رضاءا لعملائك إختر تصميم متجرك الإلكتروني وابدأ في عرض منتجاتك . قم باختيار ما يناسب منتجاتك وتجارتك من بين مجموعة من  التصميمات المتنوعة لواجهة المتجر عند إنشاء متجرك وتطبيق المتجر الالكتروني الخاص بك</p>

            <Carousel autoplay slidesToShow={3.5}>
                {
                    designImages.map( (target, i) => 
                    <Image preview={false} key={i} src={target.src} alt={target.alt} width={370} height={300}/> 
                    )
                }
            </Carousel>
        </ChooseDesignContainer>
    )
}

export default ChooseDesignComponent
