
class UserHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toUserInfo } = this.props;
    return (
      < div className="userHead" style={{ background: `url(${require('../../../images/user-bg.png')}) no-repeat center center` }}>
        <div className="headInfo" onClick={() => { toUserInfo(); }}>
          <img className="headImg" src={require('assets/head.png')} alt="头像加载失败" />
          <p className="userName">VSCO</p>
        </div>
      </div>);
  }
}

export default UserHead;
