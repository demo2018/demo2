import { List } from 'antd-mobile';

const ListItem = List.Item;

class UserFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toMyAppoint, toMyBill, toMyRec, toMyImage, toMyCoupons, toFeedback, toSet } = this.props;
    return (
      <div className="UserFun">
        <List className="acrossList">
          <ListItem onClick={() => { toMyAppoint(); }}>
            <img src={require('images/my-appoint.jpg')} alt="图标" />我的预约
          </ListItem>
          <ListItem onClick={() => { toMyBill(); }}>
            <img src={require('images/my-bill.jpg')} alt="图标" />我的账单
          </ListItem>
          <ListItem onClick={() => { toMyRec(); }}>
            <img src={require('images/my-med-rec.png')} alt="图标" />我的病历
          </ListItem>
          <ListItem onClick={() => { toMyImage(); }}>
            <img src={require('images/my-image.png')} alt="图标" />我的影像
          </ListItem>
        </List>
        <List>
          <ListItem onClick={() => { toMyCoupons(); }}>
            <img src={require('images/my-coupons.jpg')} alt="图标" />我的优惠券
          </ListItem>
          <ListItem onClick={() => { toFeedback(); }}>
            <img src={require('images/feedback.jpg')} alt="图标" />意见反馈
          </ListItem>
          <ListItem onClick={() => { toSet(); }}>
            <img src={require('images/set.jpg')} alt="图标" />设置
          </ListItem>
        </List>
      </div>
    );
  }
}

export default UserFunction;
