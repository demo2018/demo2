
class BaseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div className="baseInfo part">
      <div className="headInfo">
        <p className="headImg"><img src={require('../../../assets/head.png')} alt="" /></p>
        <p>刘晓默</p>
      </div>
      <div className="doctorKeywords">北大口腔医院  |  口腔医学博士  |  从业12年</div>
      <div className="doctorTags">
        <div className="tagItem down">
          <span className="icon iconfont icon-shenfenzheng1"></span>
          <p>身份认证</p>
        </div>
        <div className="tagItem down">
          <span className="icon iconfont icon-cnlonghubang"></span>
          <p>执业资格认证</p>
        </div>
        <div className="tagItem down">
          <span className="icon iconfont icon-yisheng"></span>
          <p>医师资格认证</p>
        </div>
      </div>
    </div>);
  }
}

export default BaseInfo;
