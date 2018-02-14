import UserHead from './UserHead';
import UserFunction from './UserFunction';
import styles from './index.less';

class UserCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '用户中心',
    };
    document.title = this.state.title;
  }
  render() {
    const { toUserInfo, toMyAppoint, toMyBill, toMyRec, toMyImage, toMyCoupons, toFeedback, toSet } = this.props;

    return (
      <div className={styles.userCenter}>
        <UserHead toUserInfo={toUserInfo} />
        <UserFunction
          toMyAppoint={toMyAppoint}
          toMyBill={toMyBill}
          toMyRec={toMyRec}
          toMyImage={toMyImage}
          toMyCoupons={toMyCoupons}
          toFeedback={toFeedback}
          toSet={toSet}
        />
      </div>
    );
  }
}

export default UserCenter;
