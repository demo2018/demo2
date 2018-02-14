class DoctorHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toCertification, toDoctorInfo, toAuthenticationFailed } = this.props;
    return (
      <div className="doctorHead">
        <div className="headInfo">
          <img className="headImg" src={require('assets/head.png')} alt="头像加载失败" onClick={toDoctorInfo} />
          <p className="doctorName">柴杰秀</p>
          {/* <p className="go-certification" onClick={toCertification}><a>去认证</a></p>
          <p className="certification-tip">完善资料，上传证书，加入薄荷</p> */}
          {/* <p className="already-certification"><a>已认证</a></p>
          <p className="doctor-title">北京口腔医院 | 口腔医学博士</p> */}
          <p className="certification-defeat" onClick={toAuthenticationFailed}><a>认证失败</a></p>
          {/* <p className="review"><a>审核中</a></p> */}
        </div>
      </div>);
  }
}

export default DoctorHead;
