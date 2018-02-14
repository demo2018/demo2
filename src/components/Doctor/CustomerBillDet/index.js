import styles from './index.less';
import BillDetHead from './BillDetHead';
import BillDetail from './BillDetail';
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
    return (
      <div className={styles.billDetail}>
        <BillDetHead />
        <BillDetail />
        <Evaluation />
      </div>
    );
  }
}

export default MyBill;
