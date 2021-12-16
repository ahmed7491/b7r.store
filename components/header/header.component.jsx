import React from 'react'

import { Row, Col, Space } from 'antd';
import { HeaderContainer} from './header.styles'
import { Row_Container } from '../../styles/parents.styles'

const HeaderComponent = () => {
    // const menu = document.querySelector(".page-header");
    // const body = document.body;
    // const scrollUp = "scroll-up";
    // const scrollDown = "scroll-down";
    // let lastScroll = 0;
    // window.addEventListener("scroll", () => {
    //     const currentScroll = window.pageYOffset;
    //     if ( currentScroll <= 0 ){
    //         body.classList.remove(scrollUp);
    //         return;
    //     }
    //     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)){
    //         body.classList.remove(scrollUp);
    //         body.classList.add(scrollDown);
    //     } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)){
    //         body.classList.remove(scrollDown);
    //         body.classList.add(scrollUp);
    //     }
    //     lastScroll = currentScroll;
    // })
    
    return (
        <HeaderContainer>
            <div className='page-header'>
                <Row_Container>
                    <Row>
                        <Col>
                        <Row>
                            <Space>
                                <Col></Col>
                                <Col>
                                <Space></Space>
                                </Col>
                            </Space>
                        </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                </Row_Container>
            </div>
        </HeaderContainer>
    )
}

export default HeaderComponent