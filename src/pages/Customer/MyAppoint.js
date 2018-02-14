
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import MyAppoint from 'components/Customer/MyAppoint';

function mapStateToProps({ myAppoint }) {
  return {
    ...myAppoint,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toCancel() {
      dispatch(routerRedux.push('/user/cancelreason'));
    },
    toAppoint() {
      dispatch(routerRedux.push('/common/doctors/list'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAppoint);
