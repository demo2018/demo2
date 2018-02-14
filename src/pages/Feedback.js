
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import Feedback from 'components/Common/Feedback';

function mapStateToProps({ layout }) {
  return {
    ...layout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toFeedbackResult() {
      dispatch(routerRedux.push('/common/feedbackresult'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
