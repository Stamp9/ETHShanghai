import './css/App.css';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import Connect, {ConnectChain} from "./requests/connect/connect";
import {useEagerConnect} from "./requests/connect/hook";
import {ChainId} from "./requests/connect/connect";

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 5000
  return library
}

function App() {
  const triedEager = useEagerConnect()

  return (
    <div className="App">
      <header className="App-header">
        This is Header.
      </header>
      <div>
        This is Content.
      </div>
      <div>
        <Connect />
      </div>
    </div>
  );
}

export default App;
