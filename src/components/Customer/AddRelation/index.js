import { List, Button, InputItem, Picker } from 'antd-mobile';
import styles from './index.less';


class AddRelation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '添加关系成员',
      relation: [
        {
          label: '夫妻',
          value: '夫妻',
        },
        {
          label: '母女',
          value: '母女',
        },
        {
          label: '父女',
          value: '父女',
        },
        {
          label: '母子',
          value: '母子',
        },
        {
          label: '父子',
          value: '父子',
        },
        {
          label: '兄弟姐妹',
          value: '兄弟姐妹',
        },
        {
          label: '朋友',
          value: '朋友',
        },
        {
          label: '同事',
          value: '同事',
        },
        {
          label: '亲戚',
          value: '亲戚',
        },
        {
          label: '其他',
          value: '其他',
        }
      ],
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
      asyncReValue: []
    };
    document.title = this.state.title;
  }
  // 选择关系
  onPickerRelation = (val) => {
    const d = [...this.state.relation];
    const asyncReValue = [...val];
    this.setState({
      data: d,
      asyncReValue,
    });
  };
  // 选择性别
  onPickerChange = (val) => {
    const f = [...this.state.gender];
    const asyncValue = [...val];
    this.setState({
      data: f,
      asyncValue,
    });
  };
  render() {
    return (
      <form className={styles.addRelation}>
        <List>
          <InputItem placeholder="为方便就诊，请输入真实姓名">姓名</InputItem>
          <Picker
            data={this.state.relation}
            cols={this.state.cols}
            value={this.state.asyncReValue}
            onChange={this.onPickerRelation}
          >
            <List.Item onClick={this.onClick}>关系</List.Item>
          </Picker>
          <Picker
            data={this.state.gender}
            cols={this.state.cols}
            value={this.state.asyncValue}
            onChange={this.onPickerChange}
          >
            <List.Item onClick={this.onClick}>性别</List.Item>
          </Picker>
          <InputItem placeholder="请输入数字">年龄</InputItem>
          <InputItem placeholder="（非必填项）">手机号码</InputItem>
        </List>

        <Button size="large" onClick={this.onSubmit}>确定</Button>
      </form>);
  }
}

export default AddRelation;
