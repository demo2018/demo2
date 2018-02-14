import { Button } from 'antd-mobile';
import styles from './index.less';
import Question from './Question';
import More from './More';

class MyAppoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '我的预约',
    };
    document.title = this.state.title;
  }
  render() {
    const { toCancel, toAppoint } = this.props;
    return (
      <div className={styles.myAppoint}>
        <ul className="appointWarp">
          <li>
            <div className="myAppointdet">
              <img src={require('assets/head.png')} alt="头像加载失败" />
              <div className="appointRight">
                <ul>
                  <li>
                    <More toCancel={toCancel} />
                    <span>已取消</span>
                  </li>
                  <li className="userName">VSCO</li>
                  <li className="appointPro">预约项目：<span>正畸</span></li>
                  <li className="clinic-time">就诊时间：
                    <span className="clinic-date">2018-01-21</span>
                    <span className="clinic-period ">下午</span>
                    <Question />
                  </li>
                  <li className="clinic-place">就诊地点：<span>联合丽格诊所（北京市朝阳区广渠路36号）</span></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        {/* <p className="noAppoint">对不起，您还没有预约医生哦！</p> */}
        <Button size="large" onClick={toAppoint}>我要预约</Button>
      </div>
    );
  }
}

export default MyAppoint;
