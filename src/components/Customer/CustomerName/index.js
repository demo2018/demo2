import { List, InputItem } from 'antd-mobile';
import styles from './index.less';
class CustomerName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '姓名',
    };
    document.title = this.state.title;
  }
  render() {
    return (
      <div className={styles.customerName}>
        <List>
          <InputItem placeholder="输入姓名" clear />
        </List>
        <p>为方便就诊，请输入真实姓名</p>
      </div>
    );
  }
}

export default CustomerName;
