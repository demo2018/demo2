
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import Evaluate from 'components/Customer/Evaluate';

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

export default connect(mapStateToProps, mapDispatchToProps)(Evaluate);
