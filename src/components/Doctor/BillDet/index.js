import { Button, Toast } from 'antd-mobile';
import styles from './index.less';
import BillDetHead from './BillDetHead';
import BillDet from './BillDet';
import VisitAgain from './VisitAgain';
import VisitTime from './VisitTime';

function success() {
  Toast.success('发送成功', 1);
}
function loadingToast() {
  Toast.loading('账单发送中', 1, () => {
    console.log('Load complete !!!');
  });
}

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
      <div className={styles.myBillDetail}>
        <BillDetHead />
        <BillDet />
        <VisitAgain />
        <VisitTime />
        <Button onClick={loadingToast}>发送给客户</Button>
      </div>
    );
  }
}

export default MyBill;
