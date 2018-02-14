import { Button } from 'antd-mobile';
import styles from './index.less';
import DetailHead from './DetailHead';

class MyBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '预约详情',
    };
    document.title = this.state.title;
  }
  render() {
    const { toGenerateBill } = this.props;
    return (
      <div className={styles.myBillDetail}>
        <DetailHead />
        <Button type="primary" onClick={toGenerateBill}>生成账单</Button>
      </div>
    );
  }
}

export default MyBill;
