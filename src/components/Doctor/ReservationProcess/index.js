import { Steps } from 'antd-mobile';
import styles from './index.less';
import StepHead from './StepHead';

const Step = Steps.Step;


class ReservationProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '详情',
    };
    document.title = this.state.title;
  }
  render() {
    return (
      <div className={styles.reservationProcess}>
        <StepHead />
        <Steps size="small">
          <Step status="finish" title="已预约南哲医生，2017年10月23日  18：20 治疗拔牙项目  " description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>} />
          <Step status="wait" title="转诊成功  +1200.00 " description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>} />
          <Step status="wait" title="已预约南哲医生，2017年3月23日  18：20治 疗拔牙项目" description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>} />
          <Step status="wait" title="注册" description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>} />
          <Step status="wait" title="咨询中" description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>} />
          <Step status="wait" title="已关注薄荷牙医微信公众号" description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>} />
          <Step status="wait" title="扫码完成" description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>} />
        </Steps>
        <p className="contactService">联系客服维护患者</p>
      </div>
    );
  }
}

export default ReservationProcess;
