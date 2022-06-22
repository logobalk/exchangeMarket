import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import {
  Routes,
  Route,
  //   BrowserRouter,
  Navigate,
  BrowserRouter as HistoryRouter,
} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import routes from "../../routes";
import BtcThb from "./btcThb";
import history from "../../utils/history";
import View from "../../core/components/view";
export default function MainPage(props) {
  console.log("MainPage====>", props);
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div>
      <div>test234</div>
      <View>
        {/* <HistoryRouter history={history}> */}
        {/* <ConnectedRouter history={history}>
          <Routes>
            <Route index path="market" element={<Navigate to={routes.home} />}>
              <Route path="BTC_THB" element={<BtcThb />} />
            </Route>
          </Routes>
        </ConnectedRouter> */}
        {/* </HistoryRouter> */}
      </View>
    </div>
  );
}
