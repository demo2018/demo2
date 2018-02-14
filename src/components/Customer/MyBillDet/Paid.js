import { Button } from 'antd-mobile';


class Paid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toEvaluate } = this.props;
    return (
      <div className="pay">
        <div className="payMent">
          <Button size="large" onClick={toEvaluate}>去评价</Button>
        </div>
      </div>
    );
  }
}


export default Paid;
