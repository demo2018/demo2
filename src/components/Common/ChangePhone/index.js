import { InputItem, Button, Toast, List } from 'antd-mobile';
import styles from './index.less';

const SECOND = 60;

class ChangePhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '更换手机号',
      isCaptchaSend: false,
      second: SECOND,
      phone: '',
      code: '',
    };
    this.handleGetCode = this.handleGetCode.bind(this);
    document.title = this.state.title;
  }
  componentWillUnmount() {
    clearInterval(this.codeTimer);
  }
  startCodeTimer() {
    this.setState({
      isCaptchaSend: true,
      second: SECOND
    });
    this.codeTimer = setInterval(() => {
      let { second } = this.state;
      let isCaptchaSend = false;
      second -= 1;
      if (second < 1) {
        clearInterval(this.codeTimer);
        second = SECOND;
        isCaptchaSend = false;
      } else {
        isCaptchaSend = true;
      }
      this.setState({
        isCaptchaSend,
        second
      });
    }, 1000);
  }
  handleGetCode() {
    const { phone } = this.state;
    const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if (!phone) {
      Toast.info('手机号不能为空', 1.5);
    // } else if (!reg.test(phone)) {
    //   Toast.info('手机号格式有误', 1.5);
    } else {
      console.log(phone);
      Toast.info('验证码已发送', 1.5);
      this.startCodeTimer();
    }
  }
  handleChange(key) {
    return (value) => {
      if (value.target) {
        value = value.target.value;
      }
      this.setState({ [key]: value });
    };
  }
  renderCodeBtn() {
    const { isCaptchaSend, second } = this.state;
    return !isCaptchaSend
      ? <a onClick={this.handleGetCode}>发送验证码</a>
      : <span>{second}秒后再次获取</span>;
  }
  render() {
    const formData = this.state;
    return (
      <div className={styles.changePhone}>
        <p className="changeTips">提示：更换新手机号后，老手机号码将不能用于登录和接收预约信息。当前手机号：<span className="phoneNow">18632273417</span></p>
        <List>
          <InputItem
            type="phone"
            placeholder="请输入"
            value={formData.phone}
            onChange={this.handleChange('phone')}
          >新手机号：</InputItem>
          <InputItem
            type="digit"
            placeholder="请输入"
            value={formData.code}
            onChange={this.handleChange('code')}
            extra={this.renderCodeBtn()}
          >验证码：</InputItem>
        </List>
        <div className="changeSubmit">
          <Button onClick={() => showToast()}>确定</Button>
        </div>
      </div>
    );
  }
}

export default ChangePhone;
