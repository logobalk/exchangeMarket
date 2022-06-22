import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Layout, Row, Col, Card } from 'antd';
import {
  Routes,
  Route,
  //   BrowserRouter,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
  Outlet,
} from 'react-router-dom';
import routes from './routes';
import BtcThb from './right-side';
import history from '../../utils/history';
import View from '../../core/components/view';
import LeftSide from './left-side';
export default function MarketPage(props) {
  const { state } = props;

  return (
    <div style={{ height: '100vh', padding: '1em' }}>
      <Row>
        <Col span={12}>
          <View>
            <LeftSide
              setTickerPriceValue={(value, title) =>
                props.setTickerPriceValue(value, title)
              }
            />
          </View>
        </Col>
        <Col span={12}>
          <div>
            <Card style={{ width: '50%' }}>
              <View>
                <Routes>
                  <Route path={routes.root}>
                    <Route
                      path={routes.BTC_THB}
                      element={<BtcThb state={state} />}
                    />
                    <Route
                      path={routes.BUSD_THB}
                      element={<BtcThb state={state} />}
                    />
                    <Route
                      path={routes.USDT_THB}
                      element={<BtcThb state={state} />}
                    />
                  </Route>
                </Routes>
              </View>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}
