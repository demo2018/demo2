import { List, InputItem, Button, Picker, TextareaItem } from 'antd-mobile';
import styles from './index.less';

class DoctorProfessional extends React.Component {
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
      cols: 1,
      asyncValue: [],
      asyncDeValue: []
    };
  }
  // 选择科室
  onPickerdepartment = (val) => {
    const d = [...this.state.department];
    const asyncDeValue = [...val];
    this.setState({
      data: d,
      asyncDeValue,
    });
  };
  // 选择职称
  onPickerChange = (val) => {
    const f = [...this.state.title];
    const asyncValue = [...val];
    this.setState({
      data: f,
      asyncValue,
    });
  };
  render() {
    const { toSeniority } = this.props;
    return (
      <div className={styles.doctorProfessional}>
        <div className="head">
          <img src={require('../../../images/professional.png')} alt="" />
        </div>
        <div className="basicInfo">
          <p>执业信息</p>
          <List>
            <InputItem
              placeholder="请输入"
            >执业地点</InputItem>
            <Picker
              data={this.state.department}
              cols={this.state.cols}
              value={this.state.asyncDeValue}
              onChange={this.onPickerdepartment}
            >
              <List.Item onClick={this.onClick}>科室</List.Item>
            </Picker>
            <Picker
              data={this.state.title}
              cols={this.state.cols}
              value={this.state.asyncValue}
              onChange={this.onPickerChange}
            >
              <List.Item onClick={this.onClick}>职称</List.Item>
            </Picker>
            <InputItem
              placeholder="请输入"
            >擅长</InputItem>
            <InputItem
              placeholder="请输入数字"
              extra="年"
            >执业年限</InputItem>
          </List>
        </div>
        <div className="moreInfo">
          <p className="doctor-intro">简介</p>
          <TextareaItem
            rows={5}
            count={200}
            placeholder="请输入内容"
          />
        </div>

        <Button onClick={toSeniority}>下一步</Button>
      </div>
    );
  }
}

export default DoctorProfessional;
