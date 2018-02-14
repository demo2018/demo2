import { List } from 'antd-mobile';
import styles from './index.less';
import SearchBar from './SearchBar';

const ListItem = List.Item;
const Brief = ListItem.Brief;

class CustomerBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '患者账单',
    };
    document.title = this.state.title;
  }
  renderList() {
    const { dataSoure = [1, 2, 3] } = this.state;
    const { toBillDetail } = this.props;
    return dataSoure.map((id) => {
      return (<ListItem
        align="middle"
        multipleLine
        onClick={() => { toBillDetail(id); }}
      >
        <div className="myBillContent">
          <div>
            <div className="billhead">
              <span className="customer-name">李四</span>
              <span className="check-pro">洗牙</span>
              <span className="check-pro">补牙</span>
            </div>
            {/* <div className="pay">
              <span className="bepaid">待支付</span>
              <span className="price">￥449.00</span>
            </div> */}
            <div className="pay paid">
              <span className="bepaid">已支付</span>
              <span className="price">￥449.00</span>
              <span className="evaluation">查看评价</span>
            </div>
            <Brief><span className="complete-date">2018-2-05</span><span className="complete-time">11:50</span></Brief>
          </div>
        </div>
      </ListItem>);
    });
  }
  render() {
    const { toBillDetail } = this.props;
    return (
      <div className={styles.customerBill}>
        <SearchBar />
        <List>
          {this.renderList()}
        </List>
      </div>
    );
  }
}

export default CustomerBill;
