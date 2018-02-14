import { List, Picker, DatePicker, InputItem, Toast, ActionSheet } from 'antd-mobile';
import styles from './index.less';

const ListItem = List.Item;
const minDate = new Date(1980, 0, 1);
const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}];

class ProfessionalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: [
        {
          label: '牙科',
          value: '牙科',
        },
        {
          label: '牙科',
          value: '牙科',
        },
        {
          label: '牙科',
          value: '牙科',
        },
        {
          label: '牙科',
          value: '牙科',
        }
      ],
      title: [
        {
          label: '医师',
          value: '医师',
        },
        {
          label: '医师',
          value: '医师',
        },
      ],
      good: [
        {
          label: '擅长',
          value: '擅长',
        },
        {
          label: '擅长',
          value: '擅长',
        },
      ],
      cols: 1,
      asyncValue: [],
      asyncDeValue: [],
      asyncGoodValue: []
    };
  }

  // 选择职称
  onPickerChange = (val) => {
    const d = [...this.state.title];
    const asyncValue = [...val];
    this.setState({
      data: d,
      asyncValue,
    });
  };
  // 选择科室
  onPickerDeChange = (val) => {
    const f = [...this.state.department];
    const asyncDeValue = [...val];
    this.setState({
      data: f,
      asyncDeValue,
    });
  };
  // 选择擅长
  onPickerGoodChange = (val) => {
    const b = [...this.state.good];
    const asyncGoodValue = [...val];
    this.setState({
      data: b,
      asyncGoodValue,
    });
  };


  render() {
    return (
      <div className="professionalInfo">
        {/* 执业信息 */}
        <List className="my-list">
          <ListItem className="my-listhead">执业信息</ListItem>
          {/* 输入执业地点 */}
          <InputItem
            type="text"
            placeholder="请输入"
          >执业地点</InputItem>
          {/* 科室 */}
          <Picker
            data={this.state.department}
            cols={this.state.cols}
            value={this.state.asyncDeValue}
            onChange={this.onPickerDeChange}
          >
            <List.Item arrow="horizontal">科室</List.Item>
          </Picker>
          {/* 职称 */}
          <Picker
            data={this.state.title}
            cols={this.state.cols}
            value={this.state.asyncValue}
            onChange={this.onPickerChange}
          >
            <List.Item arrow="horizontal">职称</List.Item>
          </Picker>
          {/* 擅长 */}
          <Picker
            data={this.state.good}
            cols={this.state.cols}
            value={this.state.asyncGoodValue}
            onChange={this.onPickerGoodChange}
          >
            <List.Item arrow="horizontal">擅长</List.Item>
          </Picker>
          {/* 执业年限 */}
          <InputItem
            className="year"
            placeholder="请输入数字"
            extra="年"
          >执业年限</InputItem>
        </List>
      </div>
    );
  }
}

export default ProfessionalInfo;
