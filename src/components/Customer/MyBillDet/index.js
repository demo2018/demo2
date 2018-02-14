import styles from './index.less';
import MyBillDetHead from './MyBillDetHead';
import BillDetail from './BillDetail';
import Pay from './Pay';
import Paid from './Paid';
import Evaluation from './Evaluation';

class MyBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '账单详情',
    };
    document.title = this.state.title;
  }
  render() {
    const { toEvaluate } = this.props;
    return (
      <div className={styles.myBillDetail}>
        <MyBillDetHead />
        <BillDetail />
        <Pay toEvaluate={toEvaluate} />
        {/* <Paid toEvaluate={toEvaluate} /> */}
        {/* <Evaluation /> */}
      </div>
    );
  }
}

export default MyBill;
