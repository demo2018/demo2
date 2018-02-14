
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorSeniority from 'components/Doctor/DoctorSeniority';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toResult() {
      dispatch(routerRedux.push('/doctor/certificationresult'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSeniority);
