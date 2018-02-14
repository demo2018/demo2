import { List, Picker, DatePicker, InputItem, Toast, ActionSheet } from 'antd-mobile';
import head from 'assets/head.png';


const ListItem = List.Item;
const minDate = new Date(1980, 0, 1);
const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}];
const myImg = src => <img src={src} alt="" />;

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  showActionSheet = () => {
    const BUTTONS = ['从相册选择图片', '拍照', '取消'];
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
    const { toDoctorName } = this.props;
    return (
      <div className="personalInfo">
        {/* 个人资料 */}
        <List className="my-list">
          <ListItem className="my-listhead">个人资料</ListItem>
          {/* 头像选择 */}
          <ListItem arrow="horizontal" extra={myImg(head)}
            className="headImg" onClick={this.showActionSheet}>头像</ListItem>
          <ListItem extra="请输入" arrow="horizontal" onClick={toDoctorName}>姓名</ListItem>
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
            value={this.state.value}
            placeholder="183 2840 2115"
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
      </div>
    );
  }
}

export default PersonalInfo;
