
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import Set from 'components/Customer/Set';

function mapStateToProps({ set }) {
  return {
    ...set,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toChangePhone() {
      dispatch(routerRedux.push('/common/changephone'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Set);
