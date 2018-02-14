
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import CancelReason from 'components/Customer/CancelReason';

function mapStateToProps({ cancelReason }) {
  return {
    ...cancelReason,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toUserCenter() {
      dispatch(routerRedux.push('/user/usercenter'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelReason);
