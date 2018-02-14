import styles from './index.less';
import { Button } from 'antd-mobile';


class AuthenticationFailed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '失败原因',
    };
    document.title = this.state.title;
  }
  render() {
    const { toCertification, toContactService } = this.props;
    return (
      <div className={styles.defeat}>
        <div className="defeatReason">
          <div>
            <span>认证失败原因</span>
            <p>
              <span className="certificationDate">2017-12-03</span>
              <span className="certificationTime">10:30</span>
            </p>
          </div>
          <ul>
            <li>医生信息填写不全/错误；</li>
            <li>执业证、资格照片不清晰；</li>
            <li>填写的信息和照片信息不符。</li>
          </ul>
        </div>
        <Button onClick={toCertification}>重新认证</Button>
        <div className="contactSrevice" onClick={toContactService}>
           联系客服
        </div>
      </div>
    );
  }
}

export default AuthenticationFailed;
