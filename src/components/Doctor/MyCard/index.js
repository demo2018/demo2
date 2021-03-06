
import styles from './index.less';

class DoctorSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '我的名片',
    };
    document.title = this.state.title;
  }
  render() {
    return (
      <div className={styles.myCard}>
        <div className="cardHead">
          <p className="myImg"><img src={require('assets/head.png')} alt="" /></p>
          <p className="myName">南哲</p>
          <p className="myTitle"><span>北京口腔医院</span><span>主治医师</span></p>
          <p className="myIntro">简介：
            <span className="intro">擅长口腔外科治疗，临床治疗20年，有丰富的经验，专治各种疑难杂症，有丰富的经验，有丰富的经验，有丰富的经验。</span>
          </p>
          <p className="already"><img src={require('images/already.png')} alt="" /></p>
        </div>
        <div className="add">
          <img src={require('assets/QR-code.png')} alt="" />
          <p>添加医生助理为好友，预约好牙医</p>
        </div>
      </div>
    );
  }
}

export default DoctorSet;
