import React, {useEffect, useState} from 'react';

import { useHistory } from 'react-router-dom';

import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, ReadOutlined } from '@ant-design/icons';
import Connect from "../../requests/connect/connect";
import GetBalance from "../../requests/GetBalance";



export default function Header() {
  const [connect, setConnect] = useState(false)
  const getConnectStatus = (val) => {
    setConnect(val);
  };

  useEffect(() => {
    if (connect) {
      GetBalance()
    }
  })

  const history = useHistory();
  return (
    <div className="home-header">
      <Menu mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => history.push('/welcome-page')}>
          Home
        </Menu.Item>
        <Menu.SubMenu key="SubMenu" title="RSS" icon={<ReadOutlined />}>
          <Menu.Item key="two" icon={<AppstoreOutlined />} onClick={() => history.push('/Rss')}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            Navigation Three
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <div>
        <Connect getConnect={getConnectStatus}/>
      </div>
      <div>{connect}</div>
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};
