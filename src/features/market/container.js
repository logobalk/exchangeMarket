import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setTickerPriceValue } from "./actions";

import MarketMain from "./MarketMain";

const mapStateToProps = (state) => ({
    state: state.market,
//   currentPath: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setTickerPriceValue,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MarketMain);
