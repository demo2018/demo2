
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorBasic from 'components/Doctor/DoctorBasic';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toProfessional() {
      dispatch(routerRedux.push('/doctor/professional'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorBasic);
