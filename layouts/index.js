import { ConfigProvider } from 'antd';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import HeaderComponent from '../components/header/header.component';
import { theme } from './theme/style';

const Layout = ({ children }) => {

    return (
        <ThemeProvider theme={theme()}>
            <ConfigProvider direction='rtl'>
                <HeaderComponent/>
                {children}
            </ConfigProvider>
        </ThemeProvider>
    )
}

export default Layout
