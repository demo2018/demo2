import { Tabs } from 'antd-mobile';
import styles from './index.less';
import SearchBar from './SearchBar';
import Appoint from './Appoint';
import Complete from './Complete';
import Cancel from './Cancel';

const tabs = [
  { title: '预约中', },
  { title: '已完成', },
  { title: '已取消', },
];

class CustomerAppoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '患者预约',
    };
    document.title = this.state.title;
  }
  render() {
    const { toDet, toCompleteDet } = this.props;
    return (
      <div className={styles.customerAppoint}>
        <SearchBar />
        <Tabs
          tabs={tabs}
          initialPage={0}
        >
          <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Appoint toDet={toDet} />
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Complete toCompleteDet={toCompleteDet} />
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Cancel />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default CustomerAppoint;
