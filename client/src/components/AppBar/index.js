import React, { Fragment, useState } from 'react';

import ToolBar from '../ToolBar'
import Drawer from '../Drawer'
import DarkBg from '../DarkBg'
import Dropdown from "../Dropdown";

const AppBar = () => {

    const [isDrawer, onDrawer] = useState(false);
    const [isDropdown, onDropdown] = useState(false);

    return (
        <Fragment>
            <ToolBar onDrawer={onDrawer} onDropdown={onDropdown} isDropdown={isDropdown}/>
            <Drawer isDrawer={isDrawer}/>
            <Dropdown isDropdown={isDropdown}/>
            <DarkBg isDrawer={isDrawer} onDrawer={onDrawer}/>
        </Fragment>
    );
};


export default AppBar;