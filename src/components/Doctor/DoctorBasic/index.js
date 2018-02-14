import { List, InputItem, DatePicker, Button } from 'antd-mobile';
import styles from './index.less';


class DoctorBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '医生认证',
    };
    document.title = this.state.title;
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  // 获取图片本地路径
  showPreview(source, way) {
    const file = source.files[0];
    if (window.FileReader) {
      const fr = new FileReader();
      fr.onloadend = function (e) {
        document.getElementById(way).src = e.target.result;
      };
      fr.readAsDataURL(file);
    }
  }
  render() {
    const { toProfessional } = this.props;
    return (
      <div className={styles.doctorCertification}>
        <div className="head">
          <img src={require('../../../images/basichead.png')} alt="" />
        </div>
        <div className="uploadImg">
          <p>头像</p>
          <div className="photohere">
            <input type="file" name="uploadphoto1" id="uploadphoto1" accept="image/*" capture style="display: none;" onChange='showPreview(this,"First")' />
              <img src={require('images/img.png')} id="First" onClick="document.getElementById('uploadphoto1').click()" />
            <span>请上传清晰、正面、人像照片</span>
					</div>
        </div>

        <div className="basicInfo">
          <p>基本信息</p>
          <List>
            <InputItem
              placeholder="请输入"
            >真实姓名</InputItem>
            {/* 单选 */}
            <div className="gender-choose">
              <em>性别</em>
              <span><input type="radio" name="appoint" id="first" checked className="check" /><label htmlFor="first">男</label></span>
              <span><input type="radio" name="appoint" id="second" /><label htmlFor="second">女</label></span>
            </div>
            <DatePicker
              mode="date"
              placeholder="请选择"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item>出生日期</List.Item>
            </DatePicker>
          </List>
        </div>

        <Button onClick={toProfessional}>下一步</Button>
      </div>
    );
  }
}

export default DoctorBasic;
