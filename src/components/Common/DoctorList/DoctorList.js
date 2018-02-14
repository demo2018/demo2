import { List } from 'antd-mobile';

const ListItem = List.Item;
const Brief = ListItem.Brief;

class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList() {
    const { dataSoure = [1, 2, 3, 4, 6, 7] } = this.state;
    const { toDoctorDetail } = this.props;
    return dataSoure.map((id) => {
      return (<ListItem
        arrow="horizontal"
        align="middle"
        multipleLine
        onClick={() => { toDoctorDetail(id); }}
      >
        <div className="doctorContent">
          <img src={require('assets/head.png')} />
          <div>
            <div>丁建芬 <span className="tagItem">推荐</span></div>
            <Brief>北大口腔医院  |  口腔医学博士</Brief>
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

export default DoctorList;
