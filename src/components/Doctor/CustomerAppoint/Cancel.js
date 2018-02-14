import { List } from 'antd-mobile';

const ListItem = List.Item;

class Appoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList() {
    const { dataSoure = [1, 2, 3] } = this.state;
    return dataSoure.map(() => {
      return (<ListItem
        align="middle"
        multipleLine
      >
        <div className="patientAppoint">
          <div>
            <div>
              <p><span className="customer-name">李四</span>( <span className="customer-phone">18632273417</span> )</p>
              <del className="check-project">慢性牙龈炎</del>
              <p className="cancel-reason">取消原因：改约</p>
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
