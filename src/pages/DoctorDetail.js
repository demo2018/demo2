
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorDetail from 'components/Common/DoctorDetail';

function mapStateToProps({ layout }) {
  return {
    ...layout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toDoctorAppoint() {
      dispatch(routerRedux.push('/common/doctors/appoint'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetail);
