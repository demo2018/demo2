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
          <Step
            status="finish"
            title={<p>本单收入：<span className="finialIncome">￥207.45</span>已到账，可在我的钱包中提现</p>}
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
          <Step
            status="wait"
            title="已支付账单金额￥2074.50"
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
          <Step
            status="wait"
            title={<p>已完成拔牙、洗牙项目，账单金额￥2074.50， 点击 <span className="checkDetail">查看详情</span></p>}
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
          <Step
            status="wait"
            title="已预约南哲医生，2017年3月17日治疗洗牙项 目"
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
          <Step
            status="wait"
            title="注册"
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
          <Step
            status="wait"
            title="咨询中"
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
          <Step
            status="wait"
            title="已关注薄荷牙医微信公众号"
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
          <Step
            status="wait"
            title="扫码完成"
            description={<p><span className="date">2017/03/09</span><span className="time">10:25</span></p>}
          />
        </Steps>
        <p className="contactService">这一单有问题？联系客服（400）</p>
      </div>
    );
  }
}

export default ReservationProcess;
