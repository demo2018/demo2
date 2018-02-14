import { List, Switch } from 'antd-mobile';


class VisitAgain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="visitAgain">
        <List>
          <List.Item extra={<Switch checked />}>
          复诊
          </List.Item>
        </List>
      </div>
    );
  }
}

export default VisitAgain;
