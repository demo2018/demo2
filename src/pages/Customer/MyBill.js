
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import MyBill from 'components/Customer/MyBill';

function mapStateToProps({ myBill }) {
  return {
    ...myBill,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toBillDetail() {
      dispatch(routerRedux.push('/user/mybilldetail/1'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBill);
