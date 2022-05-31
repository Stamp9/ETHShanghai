import React, {useState} from 'react'
import { Button } from 'antd'
import { injected } from './connectors'

import { Web3ReactProvider, useWeb3React, } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useInactiveListener } from './hook'
import './Connect.css';

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 5000
  return library
}

export default function Connect(props) {
  return (
    <Web3ReactProvider getLibrary={getLibrary} getConnect={props}>
      <ConnectChain getConnect={props}/>
    </Web3ReactProvider>
  );
}

function ConnectChain(props) {
  const [loadings, setLoadings] = useState();
  const context = useWeb3React()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  const [activatingConnector, setActivatingConnector] = React.useState()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  const activating = injected === activatingConnector
  const connected = injected === connector
  const disabled = !!activatingConnector || !!error

  useInactiveListener(!!activatingConnector)

  let isDisconnect = !error && chainId
  const buttonText = isDisconnect ? 'Disconnect' : (activating ? 'Connecting' : 'Connect' )

  // if (connected) {
  //   console.log('Chain ID: ' + chainId)
  //   console.log('Account: ' + account)
  //   GetTokenIdList(account).then(res => {
  //     Subscription(res)
  //   })
  // }
  props.getConnect.getConnect(connected)

  return (
    <Button
      type='primary'
      disabled={disabled}
      size='large'
      onClick={() => {
        if (!isDisconnect) {
          setActivatingConnector(injected)
          activate(injected)
        } else {
          deactivate()
        }
      }}
    >
      { buttonText }
    </Button>
  );
}