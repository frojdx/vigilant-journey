import React from 'react';
import { SLayout, SMain } from "./styled";
import DSidebar from "../Sidebar/DSidebar";


const Layout = (children) => {
    return
    <SLayout>
        <DSidebar />
        <SMain>{children}</SMain>
    </SLayout>


};

export default Layout;