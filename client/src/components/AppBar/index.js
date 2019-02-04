import React, { Fragment, useState } from 'react';

import ToolBar from '../ToolBar';
import Drawer from '../Drawer';
import DarkBg from '../DarkBg';
import Dropdown from '../Dropdown';

const AppBar = ({ user, onLogin, onLogout }) => {
  const [visibleDrawer, changeDrawer] = useState(false);
  const [visibleDropdown, changeDropdown] = useState(false);

  return (
    <Fragment>
      <ToolBar
        changeDrawer={changeDrawer}
        visibleDropdown={visibleDropdown}
        changeDropdown={changeDropdown}
        user={user}
      />
      <Drawer
        visible={visibleDrawer}
        close={() => changeDrawer(false)}
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <Dropdown
        visible={visibleDropdown}
        close={() => changeDropdown(false)}
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <DarkBg visible={visibleDrawer} changeVisibility={changeDrawer} />
    </Fragment>
  );
};

export default AppBar;
