
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorName from 'components/Doctor/DoctorName';

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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorName);
