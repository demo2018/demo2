
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import CheckProject from 'components/Doctor/CheckProject';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toBill() {
      dispatch(routerRedux.push('/doctor/billdetail'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckProject);
