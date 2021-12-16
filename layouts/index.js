import React from 'react';
import HeaderComponent from '../components/header/header.component';

const Layout = ({ children }) => {
    return (
        <div>
            <HeaderComponent/>
        {children}
        </div>
    )
}

export default Layout
