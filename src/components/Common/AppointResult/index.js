import { Result, Icon } from 'antd-mobile';
import styles from './index.less';

// const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;

class AppointResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.appointResult}>
        <Result
          img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
          title="预约失败"
          message="预约失败，请您重新预约！"
        />
      </div>
    );
  }
}

export default AppointResult;

