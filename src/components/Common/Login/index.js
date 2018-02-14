import { NoticeBar, Tabs, Checkbox, InputItem, Button, Toast } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
import styles from './index.less';
import logoPng from '../../../images/loginLogo.png';

const SECOND = 60;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.codeTimer = null;
    this.state = {
      title: '登录',
      activeTab: 0,
      btnStatus: false,
      isCaptchaSend: false,
      second: SECOND,
      phone: '',
      code: '',
      height: document.documentElement.clientHeight,
    };
    this.handleLogin = this.handleLogin.bind(this);
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
  handleLogin() {
    const formData = this.state;
    console.log(formData);
    if (formData.activeTab == 0) {
      this.props.onLogin(formData);
    }
    if (formData.activeTab == 1) {
      this.props.onLoginDoctor(formData);
    }
  }
  handleGetCode() {
    const { phone } = this.state;
    const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if (!phone) {
      Toast.info('手机号不能为空', 1.5);
    } else if (!reg.test(phone)) {
      Toast.info('手机号格式有误', 1.5);
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
  handleCheckBoxChange(key) {
    return (value) => {
      if (value.target) {
        value = value.target.checked;
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
    const tabsProps = {
      activeTab: formData.activeTab,
      tabs: [
        { key: 'user', title: '我是患者' },
        { key: 'doctor', title: '我是三甲医生' },
      ],
      onTabClick: (tab, index) => {
        this.setState({ activeTab: index });
      },
    };
    return (
      <div className={styles.loginPage} style={{ height: this.state.height, backgroundColor: '#fff' }}>
        <NoticeBar
          mode="closable"
          marqueeProps={{ loop: true, leading: 0, trailing: 1000, fps: 60 }}
        >薄荷牙医目前只接受三甲医院的医生入驻哦 !
        </NoticeBar>

        <div className="logoWrapper">
          <img src={logoPng} alt="图片加载失败" />
        </div>

        <div className="formWrapper">
          <Tabs {...tabsProps} />

          <InputItem
            type="phone"
            placeholder="请输入"
            value={formData.phone}
            onChange={this.handleChange('phone')}
            extra={this.renderCodeBtn()}
          >手机号码</InputItem>
          <InputItem
            type="digit"
            placeholder="请输入"
            value={formData.code}
            onChange={this.handleChange('code')}
          >验证码</InputItem>

          <Button
            className="loginBtn"
            type="primary"
            onClick={this.handleLogin}
            disabled={!formData.btnStatus}
          >登录</Button>

          <CheckboxItem
            size="small"
            onChange={this.handleCheckBoxChange('btnStatus')}
          >
            阅读并同意<a className="agreement"> 隐私服务条款</a>
          </CheckboxItem>
        </div>

      </div >
    );
  }
}

export default Login;
