
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorSet from 'components/Doctor/DoctorSet';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toChangePhone() {
      dispatch(routerRedux.push('/common/changephone'));
    },
    toNotice() {
      dispatch(routerRedux.push('/doctor/notice'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSet);
