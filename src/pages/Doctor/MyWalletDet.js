
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import MyWalletDet from 'components/Doctor/MyWalletDet';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toWallet() {
      dispatch(routerRedux.push('/doctor/walletdetail'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWalletDet);
