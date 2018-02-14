
import { connect } from 'dva';
// import { routerRedux } from 'dva/router';

import AddRelation from 'components/Customer/AddRelation';

function mapStateToProps({ addRelation }) {
  return {
    ...addRelation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRelation);
