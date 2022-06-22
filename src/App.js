import { Provider } from "react-redux";
// import { ConnectedRouter } from "connected-react-router";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import store from "./configure-store";
import "./App.css";

import MainAppRoute from "./features/main-page/index";
import "antd/dist/antd.css";
import routes from "./routes";
import BtcThb from "./features/market/btcThb/index";
import history from './utils/history';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes>
          <Route path="/" element={<MainAppRoute />}>
            {/* <Route path="*" element={<Navigate to={"/"} />} />
            <Route path="BTC_THB" element={<BtcThb />} /> */}
          </Route>
        </Routes>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
