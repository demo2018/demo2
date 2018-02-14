
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorAppoint from 'components/Common/DoctorAppoint';

function mapStateToProps({ layout }) {
  return {
    ...layout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toAppointOther() {
      dispatch(routerRedux.push('/user/addrelation'));
    },
    toUserName() {
      dispatch(routerRedux.push('/user/name'));
    },
    toResult() {
      dispatch(routerRedux.push('/common/doctors/appointresult'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorAppoint);
