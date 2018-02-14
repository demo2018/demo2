
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorProfessional from 'components/Doctor/DoctorProfessional';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toSeniority() {
      dispatch(routerRedux.push('/doctor/seniority'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfessional);
