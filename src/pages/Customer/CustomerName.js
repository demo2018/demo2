
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import CustomerName from 'components/Customer/CustomerName';

function mapStateToProps({ evaluate }) {
  return {
    ...evaluate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toMyBillDet(id) {
      dispatch(routerRedux.push(`/user/myimagedetail/${id}`));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerName);
