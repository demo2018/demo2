import { List, InputItem, Picker, ActionSheet } from 'antd-mobile';
import styles from './index.less';

class VisitTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showActionSheet = () => {
    const BUTTONS = ['一周后', '两周后', '一个月后', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      maskClosable: true,
      'data-seed': 'logId',
    },
      (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      });
  }
  render() {
    return (
      <div className="AgainTime">
        <div className="again">
          <List>
            <List.Item arrow="horizontal" onClick={this.showActionSheet}>复诊时间</List.Item>
            <InputItem
              placeholder="请输入"
            >备注信息</InputItem>
          </List>
        </div>
      </div>
    );
  }
}

export default VisitTime;
