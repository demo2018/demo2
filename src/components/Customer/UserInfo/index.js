import { List, Picker, DatePicker, InputItem, Toast, ImagePicker, ActionSheet } from 'antd-mobile';
import styles from './index.less';
import CustomerRelation from './CustomerRelation';
import head from 'assets/head.png';

const ListItem = List.Item;
const minDate = new Date(1980, 0, 1);
const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}];
const myImg = src => <img src={src} alt="" />;

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '个人信息',
      files: data,
      hasError: false,
      value: '',
      gender: [
        {
          label: '女',
          value: '女',
        },
        {
          label: '男',
          value: '男',
        },
      ],
      cols: 1,
      asyncValue: [],
    };
    document.title = this.state.title;
  }

  // 选择性别
  onPickerChange = (val) => {
    const d = [...this.state.gender];
    const asyncValue = [...val];
    this.setState({
      data: d,
      asyncValue,
    });
  };
  handleChange(key) {
    return (value) => {
      if (value.target) {
        value = value.target.value;
      }
      this.setState({ [key]: value });
    };
  }
  showActionSheet = () => {
    const BUTTONS = ['拍照', '我的相册', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      maskClosable: true,
    },
    // 点击按钮回调
      (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      });
  }

  render() {
    const { toAddRelation, toUserName } = this.props;
    const formData = this.state;
    return (
      <div className={styles.userInfo}>
        <List className="my-list">
          <ListItem className="my-listhead">个人资料</ListItem>
          {/* 头像选择 */}
          <ListItem
            arrow="horizontal"
            onClick={this.showActionSheet}
            extra={myImg(head)}
            className="headImg"
          >头像</ListItem>
          <ListItem extra={<span className="customerName">柴杰秀</span>} arrow="horizontal" onClick={toUserName}>姓名</ListItem>
          {/* 性别 */}
          <Picker
            data={this.state.gender}
            cols={this.state.cols}
            value={this.state.asyncValue}
            onChange={this.onPickerChange}
          >
            <List.Item arrow="horizontal" onClick={this.onClick}>性别</List.Item>
          </Picker>
          {/* 输入手机号码 */}
          <InputItem
            type="phone"
            value={formData.phone}
            onChange={this.handleChange('phone')}
            placeholder="183 2840 2105"
            editable={false}
          >手机号码</InputItem>
            {/* 选择出生日期 */}
          <DatePicker
            mode="date"
            extra="请选择出生日期"
            value={this.state.date}
            minDate={minDate}
            onChange={date => this.setState({ date })}
          >
            <List.Item arrow="horizontal">出生日期</List.Item>
          </DatePicker>
        </List>
        <CustomerRelation toAddRelation={toAddRelation} />
      </div>
    );
  }
}

export default UserInfo;
