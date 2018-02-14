import { TextareaItem } from 'antd-mobile';
import styles from './index.less';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';

class DoctorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '个人信息',
    };
    document.title = this.state.title;
  }
  render() {
    const { toDoctorName } = this.props;
    return (
      <div className={styles.doctorInfo}>
        {/* 个人资料 */}
        <PersonalInfo toDoctorName={toDoctorName} />

        {/* 执业信息 */}
        <ProfessionalInfo />

        {/* 简介 */}
        <div className="moreInfo">
          <p className="doctor-intro">简介</p>
          <TextareaItem
            rows={5}
            count={200}
            placeholder="请输入内容"
          />
        </div>
      </div>
    );
  }
}

export default DoctorInfo;
