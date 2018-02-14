class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 'auto',
    };
  }

  render() {
    return (<div className="description part">
      <p className="title">简介与擅长</p>
      <div className="content">
        <p>
          北京口腔医院  |  主治医世界正畸联盟专科会员，中华口腔医学
          会正畸专业委员会专科会员。2002年-2010年就读于北京大学
          口腔医学院（八年本博连读），获得口腔医学正畸专业博士学位
        </p>
        <span className="icon iconfont icon-xiangxiajiantou" onClick={this.clickOpen}></span>
      </div>
      <div className="tags">
        <div className="tagItem">综合矫正</div>
        <div className="tagItem">隐形矫治</div>
      </div>
    </div>);
  }
}

export default Description;
