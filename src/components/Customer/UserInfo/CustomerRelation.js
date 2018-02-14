import { List, Button } from 'antd-mobile';
import { Link } from 'react-router';
import styles from './index.less';


const ListItem = List.Item;

class CustomerRelation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toAddRelation } = this.props;
    return (
      <div className={styles.userInfo}>
        <List className="my-list">
          <ListItem className="my-listhead">关系成员
            <Button onClick={toAddRelation}>+添加</Button>
          </ListItem>
          <ListItem extra="母女" arrow="horizontal" onClick={toAddRelation} className="relationName">刘循子墨</ListItem>
        </List>
      </div>
    );
  }
}

export default CustomerRelation;
