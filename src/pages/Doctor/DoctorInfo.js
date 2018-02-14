
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorInfo from 'components/Doctor/DoctorInfo';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toDoctorName() {
      dispatch(routerRedux.push('/doctor/name'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfo);
