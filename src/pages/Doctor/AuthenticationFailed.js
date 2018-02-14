
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import AuthenticationFailed from 'components/Doctor/AuthenticationFailed';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toCertification() {
      dispatch(routerRedux.push('/doctor/basic'));
    },
    toContactService() {
      dispatch(routerRedux.push('/common/contactservice'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationFailed);
