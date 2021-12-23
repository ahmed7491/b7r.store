import React from 'react'

import { SectionsViewContainer } from './sectionsView.styles' 
import { Row, Col, Space, Image, Typography } from "antd";


const { Title } = Typography;


const SectionsViewComponent = () => {
    return (
        <SectionsViewContainer>
            <Title level={3} style={{color: '#163663'}}>منظم الأقسام</Title>
            <p className='description'>قم بتخصيص متجرك ليناسب احتياجاتك في بضع دقائق ..بكل سهولة يمكنك اعادة ترتيب أقسام المتجر حسب رغبتك وحسب مايناسب نشاطك التجاري واختيار الاقسام المهمه والأكثر أهمية .. يوفر خيار منظم الاقسام تنقلًا بسيطًا ووصولاً سريعًا وتجربة عملاء أفضل</p>
        </SectionsViewContainer>
    )
}

export default SectionsViewComponent
