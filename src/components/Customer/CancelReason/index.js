import { List, Radio, Button } from 'antd-mobile';
import styles from './index.less';

const RadioItem = Radio.RadioItem;

class CancelReason extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '取消原因',
      value: 0,
    };
    document.title = this.state.title;
  }
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };
  render() {
    const data = [
      { value: 0, label: '有其他安排' },
      { value: 1, label: '改约其他天' },
      { value: 2, label: '改约其他医生' },
      { value: 3, label: '其他原因' },
    ];
    return (
      <div className={styles.cancelReason}>
        <List renderHeader={() => '您取消预约的原因？'}>
          {data.map(i => (
            <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
        <Button size="large" onClick={this.onSubmit}>确定取消</Button>
      </div>
    );
  }
}

export default CancelReason;
