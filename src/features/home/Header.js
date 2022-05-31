import React from 'react';
// import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, ReadOutlined } from '@ant-design/icons';
import Connect from "../../requests/connect/connect";

export default function Header() {
  const history = useHistory();
  return (
    <div className="home-header">
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.SubMenu key="SubMenu" title="RSS" icon={<ReadOutlined />}>
          <Menu.Item key="two" icon={<AppstoreOutlined />} onClick={() => history.push('/Page1')}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            Navigation Three
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <div>
        <Connect />
      </div>
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};
