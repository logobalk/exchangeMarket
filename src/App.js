import { Provider } from 'react-redux';
// import { ConnectedRouter } from "connected-react-router";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import store from './configure-store';
import './App.css';
import MainAppRoute from './features/main-page/index';
import routes from './routes';
import BtcThb from './features/market/right-side/index';
import history from './utils/history';
import 'antd/dist/antd.min.css';
function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element={<MainAppRoute />}>
            <Route path={routes.home}>
              <Route path='*' element={<MainAppRoute />} />
              <Route path={routes.BTC_THB} element={<BtcThb />} />
            </Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  );
}

export default App;
