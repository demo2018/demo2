import { List } from 'antd-mobile';
import styles from './index.less';

const ListItem = List.Item;
const Brief = ListItem.Brief;

class MyBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '我的账单',
    };
    document.title = this.state.title;
  }
  render() {
    const { toBillDetail } = this.props;
    return (
      <div className={styles.myBill}>
        <List>
          <ListItem
            align="middle"
            multipleLine
            onClick={toBillDetail}
          >
            <div className="myBillContent">
              <div>
                <div className="billhead">
                  <span className="customer-name">李四</span>
                  <span className="check-pro">洗牙</span>
                  <span className="check-pro">补牙</span>
                  <span className="pay">未支付</span>
                </div>
                <Brief className="billNums">账单号：<span className="billno">3028829</span></Brief>
                <Brief className="billprice">￥<span className="billno">649.00</span></Brief>
              </div>
            </div>
          </ListItem>
          <ListItem
            align="middle"
            multipleLine
            onClick={toBillDetail}
          >
            <div className="myBillContent">
              <div>
                <div className="billhead">
                  <span className="customer-name">李四</span>
                  <span className="check-pro">洗牙</span>
                  <span className="check-pro">补牙</span>
                  <span className="pay paid">已支付</span>
                </div>
                <div className="billEvaluation">评价</div>
                <Brief className="billNums">账单号：<span className="billno">3028829</span></Brief>
                <Brief className="billprice">￥<span className="billno">649.00</span></Brief>
              </div>
            </div>
          </ListItem>
          <ListItem
            align="middle"
            multipleLine
            onClick={toBillDetail}
          >
            <div className="myBillContent">
              <div>
                <div className="billhead">
                  <span className="customer-name">李四</span>
                  <span className="check-pro">洗牙</span>
                  <span className="check-pro">补牙</span>
                  <span className="pay paid">已支付</span>
                </div>
                <div className="billEvaluation billEvaluated">已评价</div>
                <Brief className="billNums">账单号：<span className="billno">3028829</span></Brief>
                <Brief className="billprice">￥<span className="billno">649.00</span></Brief>
              </div>
            </div>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default MyBill;
