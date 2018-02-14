import { List } from 'antd-mobile';
import styles from './index.less';

const ListItem = List.Item;
const Brief = ListItem.Brief;

class ReferralReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '转诊报告',
    };
    document.title = this.state.title;
  }
  renderList() {
    const { dataSoure = [1, 2, 3] } = this.state;
    return dataSoure.map(() => {
      return (<ListItem
        thumb={require('assets/head.png')}
        multipleLine
        extra={<span className="state">已扫码</span>}
      >
        <span className="customerName">柴杰秀</span>
        <Brief>
          <span className="date">2017-10-20</span>
          <span className="time">9:30</span></Brief>
      </ListItem>);
    })
      ;
  }
  renderSuccessList() {
    const { dataSoure = [1, 2, 3] } = this.state;
    return dataSoure.map(() => {
      return (<ListItem
        thumb={require('assets/head.png')}
        multipleLine
        extra={<span className="finalIn">+1299.00</span>}
      >
        <span className="customerName">柴杰秀</span>
        <Brief>
          <span className="date">2017-10-20</span>
          <span className="time">9:30</span></Brief>
      </ListItem>);
    })
      ;
  }
  render() {
    return (
      <div className={styles.referralReport}>
        <div className="reportHead">
          <p>报告时间：2017/10/02-2017/10/08</p>
        </div>
        <div className="referralContent">
          <List>
            <p>转诊中（<span>3</span>）</p>
            {this.renderList()}
          </List>
          <List>
            <p>转诊成功（<span>3</span>）<span className="totalIn">共收入：3333.00</span></p>
            {this.renderSuccessList()}
          </List>
        </div>
      </div>
    );
  }
}

export default ReferralReport;
