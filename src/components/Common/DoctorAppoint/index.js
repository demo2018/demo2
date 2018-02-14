import { Button, List, Tag, Picker } from 'antd-mobile';
import styles from './index.less';

const ListItem = List.Item;
const Brief = ListItem.Brief;

class DoctorAppoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '预约信息',
      time: [
        {
          label: '2018/2/08 周六',
          value: '2018/2/08 周六',
        },
        {
          label: '2018/2/08 周六',
          value: '2018/2/08 周六',
        },
      ],
      cols: 1,
      asyncValue: [],
    };
    document.title = this.state.title;
  }
  onPicker = (val) => {
    const d = [...this.state.time];
    const asyncValue = [...val];
    this.setState({
      data: d,
      asyncValue,
    });
  };
  render() {
    const { toAppointOther, toUserName, toResult } = this.props;
    return (
      <div className={styles.doctorAppoint}>
        <List>
          <ListItem
            align="middle"
            multipleLine
          >
            <div className="appointContent">
              <img src={require('assets/head.png')} />
              <div>
                <div className="doctor-name">南哲</div>
                <Brief>北大口腔医院  |  口腔医学博士</Brief>
              </div>
            </div>
          </ListItem>
          <Picker
            data={this.state.time}
            cols={this.state.cols}
            value={this.state.asyncValue}
            onChange={this.onPicker}
          >
            <List.Item
              onClick={this.onClick}
              className="chooseTime"
            >就诊时间</List.Item>
          </Picker>
          <ListItem
            align="middle"
            multipleLine
          >
            <div className="tag-container">
              <span className="ofPeriod">时间段</span>
              <Tag selected>上午</Tag>
              <Tag>下午</Tag>
            </div>
          </ListItem>
          <ListItem
            align="middle"
            multipleLine
          >
            <div className="tag-container">
              <span className="ofProject">预约项目</span>
              <div className="projectWrap">
                <Tag selected>美白</Tag>
                <Tag>洗牙</Tag>
                <Tag>拔牙</Tag>
                <Tag>正畸</Tag>
                <Tag>儿童牙科</Tag>
              </div>
            </div>
          </ListItem>
          <ListItem
            align="middle"
            multipleLine
          >
            <div className="tag-container">
              <span className="ofPatient">就诊人</span>
              <Tag selected>柴杰秀</Tag>
              <Tag>柴杰秀</Tag>
            </div>
          </ListItem>
          {/* <ListItem
            extra={<span className="customerName">真实姓名</span>}
            onClick={toUserName}
            className="inputName"
          >
          就诊人
          </ListItem> */}
          <ListItem className="forOther">
            <a onClick={toAppointOther}>为他人预约>></a>
          </ListItem>
        </List>
        <Button size="large" onClick={toResult}>确认预约</Button>
      </div>
    );
  }
}

export default DoctorAppoint;
