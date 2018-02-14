import { Card } from 'antd-mobile';

class MyBillDetHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="myBillDetHeadContent">
        <div className="card-header">
          账单号：<span className="billno">3028829</span>
        </div>
        <Card full>
          <Card.Header
            title="李四"
          />
          <Card.Body>
            <ul>
              <li className="diagnosisPro"><img src={require('images/tooth.png')} alt="" />就诊项目：<span>正畸</span></li>
              <li className="clinic-time"><img src={require('images/clock.png')} alt="" />就诊时间：
                <span className="clinic-date">2018-1-21</span>
                <span className="clinic-period ">14:30</span>
              </li>
              <li><img src={require('images/doctor.png')} alt="" />就诊医生：<span className="clinic-doctor">南哲</span></li>
              <li className="clinic-place"><img src={require('images/place.png')} alt="" /><em>就诊地点：</em><span className="clinic-address">联合丽格诊所（北京市朝阳区光驱路37号）</span></li>
            </ul>
          </Card.Body>
        </Card>
      </div>

    );
  }
}

export default MyBillDetHead;
