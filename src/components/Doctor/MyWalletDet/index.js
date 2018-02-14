import { List, Picker } from 'antd-mobile';
import styles from './index.less';

const ListItem = List.Item;
const Brief = ListItem.Brief;
const month = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '10月',
      value: '10月',
    },
    {
      label: '11月',
      value: '11月',
    },
  ],
];

class MyWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '收入明细',
      cols: 1,
      asyncValue: [],
    };
    document.title = this.state.title;
  }

  // 选择性别
  onPickerChange = (val) => {
    const a = [...this.state.gender];
    const asyncValue = [...val];
    this.setState({
      data: a,
      asyncValue,
    });
  };
  renderList() {
    const { dataSoure = [1, 2, 3] } = this.state;
    return dataSoure.map(() => {
      return (<ListItem
        align="middle"
        multipleLine
        extra={<span className="detailMoney">￥249.00</span>}
      >
        <div className="income-detail">
          <div>
            <div>
              <p><span className="income-project">洗牙</span></p>
              <Brief>
                <span className="income-date">2018-01-14</span>
                <span className="income-time">10:30</span>
              </Brief>
            </div>
          </div>
        </div>
      </ListItem>);
    })
      ;
  }
  render() {
    return (
      <div className={styles.myWalletDet}>
        <div>
          <div className="detailHead">
            <p className="nowMonth">2018年1月</p>
            <p className="income">收入: ￥<span>12,800</span></p>
            <p className="calendar"><span className="icon iconfont icon-rili"></span></p>
            <Picker
              data={month}
            >
            </Picker>
          </div>
          <List>
            {this.renderList()}
          </List>
        </div>
        {/* <div className="noIncome">
          <img src={require('images/noRec.png')} alt="" />
        </div> */}
      </div>
    );
  }
}

export default MyWallet;
