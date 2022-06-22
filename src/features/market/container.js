import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadRepos } from "./actions";

import MarketMain from "./MarketMain";

const mapStateToProps = (state) => ({
    currentUser: state.market.currentUser,
//   currentPath: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadRepos,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MarketMain);
