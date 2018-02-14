import { List, InputItem } from 'antd-mobile';
import styles from './index.less';
class DoctorName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '姓名',
    };
    document.title = this.state.title;
  }
  render() {
    return (
      <div className={styles.doctorName}>
        <List>
          <InputItem placeholder="输入姓名" clear />
        </List>
      </div>
    );
  }
}

export default DoctorName;
