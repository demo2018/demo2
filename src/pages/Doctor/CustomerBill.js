
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import CustomerBill from 'components/Doctor/CustomerBill';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toBillDetail(id) {
      dispatch(routerRedux.push(`/doctor/customerbilldetail/${id}`));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerBill);
