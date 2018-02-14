import { List, Switch } from 'antd-mobile';
import styles from './index.less';

const Item = List.Item;


class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '通知设置',
    };
    document.title = this.state.title;
  }
  render() {
    // const { getFieldProps } = this.props.form;
    return (
      <div className={styles.notice}>
        <List className="my-list">
          <Item
            extra={<Switch />}
          >患者扫码通知</Item>
          <Item
            extra={<Switch />}
          >患者登录通知</Item>
          <Item
            extra={<Switch />}
          >患者预约通知</Item>
          <Item
            extra={<Switch />}
          >患者取消预约通知</Item>
          <Item
            extra={<Switch />}
          >患者支付通知</Item>
          <Item
            extra={<Switch />}
          >医生注册通知</Item>
          <Item
            extra={<Switch />}
          >医生认证通知</Item>
        </List>
      </div>
    );
  }
}

export default Notice;
