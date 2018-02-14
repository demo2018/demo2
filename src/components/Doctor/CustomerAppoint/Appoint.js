import { List } from 'antd-mobile';

const ListItem = List.Item;

class Appoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList() {
    const { dataSoure = [1, 2, 3] } = this.state;
    const { toDet } = this.props;
    return dataSoure.map((id) => {
      return (<ListItem
        align="middle"
        multipleLine
        onClick={() => { toDet(id); }}
      >
        <div className="patientAppoint">
          <div>
            <div>
              <p><span className="customer-name">李四</span>( <span className="customer-phone">18632273417</span> )</p>
              <p className="check-project">慢性牙龈炎</p>
              <p className="note">备注：想咨询正畸</p>
              <p className="timeInfo">
                <span className="check-date">2018-1-30</span>
                <span className="check-time">10:30</span>
              </p>
            </div>
          </div>
        </div>
      </ListItem>);
    })
      ;
  }
  render() {
    return (
      <List>
        {this.renderList()}
      </List>
    );
  }
}

export default Appoint;
