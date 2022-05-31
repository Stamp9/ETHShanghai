import React, {useEffect, useState} from 'react';

import { useHistory } from 'react-router-dom';

import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, ReadOutlined } from '@ant-design/icons';
import Connect from "../../requests/connect/connect";
import GetBalance from "../../requests/GetBalance";
import getBalance from "../../requests/GetBalance";



export default function Header(props) {

  const [tokenList, setTokenList] = useState({})
  const [connect, setConnect] = useState(false)

  useEffect(() => {
    const getBalanceInner = async () => {
      setTokenList(await getBalance())
    };

    getBalanceInner();
  })

  const getConnectStatus = (val) => {
    setConnect(val);
  };

  const history = useHistory();
  return (
    <div className="home-header">
      <Menu mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => history.push('/welcome-page')}>
          Home
        </Menu.Item>
        <Menu.SubMenu key="SubMenu" title="Token" icon={<ReadOutlined />}>
          {
            Object.keys(tokenList).map((token) => {
              if (tokenList[token]) {
                return (
                  <Menu.Item icon={<AppstoreOutlined />} onClick={() => history.push(`/Rss?name=${token}`)}>
                    {token}
                  </Menu.Item>
                )
              }
            })}
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
