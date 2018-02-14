
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import MyCard from 'components/Doctor/MyCard';

function mapStateToProps({ userCenter }) {
  return {
    ...userCenter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toGenerateBill() {
      dispatch(routerRedux.push('/doctor/billprice'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
