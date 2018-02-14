
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import UserInfo from 'components/Customer/UserInfo';

function mapStateToProps({ userInfo }) {
  return {
    ...userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toAddRelation() {
      dispatch(routerRedux.push('/user/addrelation'));
    },
    toUserName() {
      dispatch(routerRedux.push('/user/name'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
