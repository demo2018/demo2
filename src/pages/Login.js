
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import Login from 'components/Common/Login';

function mapStateToProps({ layout }) {
  return {
    ...layout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin() {
      dispatch(routerRedux.push('/user/center'));
    },
    onLoginDoctor() {
      dispatch(routerRedux.push('/doctor/center'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
