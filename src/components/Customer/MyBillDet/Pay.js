import { List, Radio, Button } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  onChange = (value) => {
    this.setState({
      value,
    });
  };
  render() {
    const { value } = this.state;
    const { toEvaluate } = this.props;
    const data = [
      { value: 0, label: '微信支付', icon: './wechat.png' },
      { value: 1, label: '其他支付', icon: './other.png' },
    ];
    return (
      <div className="pay">
        <List>
          {data.map(i => (
            <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
              <img src={require(i.icon)} alt="" />{i.label}
            </RadioItem>
          ))}
        </List>
        <Button size="large" onClick={toEvaluate}>确定</Button>
      </div>
    );
  }
}


export default Pay;
