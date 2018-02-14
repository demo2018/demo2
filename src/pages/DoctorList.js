
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import DoctorList from 'components/Common/DoctorList';

function mapStateToProps({ layout }) {
  return {
    ...layout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toDoctorDetail(id) {
      dispatch(routerRedux.push(`/common/doctors/detail/${id}`));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
