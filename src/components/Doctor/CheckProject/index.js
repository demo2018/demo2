import { Tabs, Button, Stepper, List, Checkbox } from 'antd-mobile';
import styles from './index.less';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const tabs = [
  { title: '内科' },
  { title: '外科' },
  { title: '修复' },
  { title: '正畸' },
  { title: '种植' },
  { title: '口腔检查' },
  { title: '儿童口腔' },
];
const data = [
  { value: 0, label: '冷光美白', extra: '￥3500.00' },
  { value: 1, label: '充填（补牙）', extra: '￥3500.00' },
  { value: 2, label: '喷砂', extra: '￥3500.00' },
  { value: 3, label: '充填（补牙）', extra: '￥3500.00' },
  { value: 4, label: '喷砂', extra: '￥3500.00' },
  { value: 5, label: '充填（补牙）', extra: '￥3500.00' },
  { value: 6, label: '刮治  翻瓣后根面平整 术', extra: '￥3500.00' },
];

class CheckProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '价格表',
      height: document.documentElement.clientHeight * 0.86
    };
    document.title = this.state.title;
  }
  render() {
    const { toBill } = this.props;
    return (
      <div className={styles.checkProject}>
        <div className="tab" style={{ height: this.state.height }}>
          <Tabs
            tabs={tabs}
            tabBarPosition="left"
            tabDirection="vertical"
          >
            <div style={{ backgroundColor: '#fff' }}>
              <List>
                {data.map(i => (
                  <CheckboxItem
                    key={i.value}
                    onChange={() => this.onChange(i.value)}
                    extra={
                      <Stepper
                        style={{ width: '20%', minWidth: '100px', transform: 'scale(.8)' }}
                        showNumber
                        max={10}
                        min={0}
                        value={0}
                        onChange={this.onChange}
                      />
                    }
                  >
                    {i.label}
                    <List.Item.Brief>{i.extra}</List.Item.Brief>
                  </CheckboxItem>
                ))}
              </List>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
        </div>
        <div className="total">
          <p>合计（人名币）：<span>￥3500.00</span></p>
          <Button onClick={toBill}>下一步</Button>
        </div>
      </div>
    );
  }
}

export default CheckProject;
