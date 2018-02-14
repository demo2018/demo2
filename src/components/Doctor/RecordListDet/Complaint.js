import { Card } from 'antd-mobile';

class Complaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card full className="complaint">
          <Card.Header
            title="主诉"
          />
          <Card.Body>
            <div>牙龈出血半年</div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Complaint;
