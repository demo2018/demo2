
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import ChangePhone from 'components/Common/ChangePhone';

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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePhone);
