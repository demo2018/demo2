import { Checkbox, Button } from 'antd-mobile';
import styles from './index.less';

const CheckboxItem = Checkbox.CheckboxItem;

class DoctorSeniority extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '医生认证',
      btnStatus: false,
    };
    document.title = this.state.title;
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  handleCheckBoxChange(key) {
    return (value) => {
      if (value.target) {
        value = value.target.checked;
      }
      this.setState({ [key]: value });
    };
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
    const { toResult } = this.props;
    return (
      <div className={styles.doctorSeniority}>
        <div className="head">
          <img src={require('../../../images/last.png')} alt="" />
        </div>
        <div className="instructions">
          <p>资格认证说明</p>
          <ul>
            <li>上传的证件仅用于认证，患者和第三方不会看到您的证件信息。</li>
            <li>拍照时，请确保姓名、照片、编号、执业医院等信息清晰可辨认。信息越齐全，越有助于认证。</li>
            <li>未经认证的医生无法使用预约等完整的功能。</li>
          </ul>
        </div>
        <div className="idCard">
          <p>身份证正面照</p>
          <div className="photohere">
            <input type="file" name="uploadphoto1" id="uploadphoto1" accept="image/*" capture style="display: none;" onChange='showPreview(this,"First")' />
            <img src={require('images/img.png')} id="First" onClick="document.getElementById('uploadphoto1').click()" />
            <img src={require('images/ex1.png')} className="exampleImg" alt="" />
            <span>请上传身份证的正面照片</span>
          </div>
        </div>
        <div className="practice">
          <p>医师执业证</p>
          <div className="photohere">
            <input type="file" name="uploadphoto2" id="uploadphoto2" accept="image/*" capture style="display: none;" onChange='showPreview(this,"First")' />
            <img src={require('images/img.png')} id="First" onClick="document.getElementById('uploadphoto2').click()" />
            <img src={require('images/ex2.png')} className="exampleImg" alt="" />
            <span>请上传医师执业证的第1页</span>
          </div>
          <div className="photohere">
            <input type="file" name="uploadphoto3" id="uploadphoto3" accept="image/*" capture style="display: none;" onChange='showPreview(this,"First")' />
            <img src={require('images/img.png')} id="First" onClick="document.getElementById('uploadphoto3').click()" />
            <img src={require('images/ex3.png')} className="exampleImg" alt="" />
            <span>请上传医师执业证的第2页</span>
          </div>
        </div>
        <div className="seniority">
          <p>医师资格证</p>
          <div className="photohere">
            <input type="file" name="uploadphoto4" id="uploadphoto4" accept="image/*" capture style="display: none;" onChange='showPreview(this,"First")' />
            <img src={require('images/img.png')} id="First" onClick="document.getElementById('uploadphoto4').click()" />
            <img src={require('images/ex4.png')} className="exampleImg" alt="" />
            <span>请上传医师资格证的第1页</span>
          </div>
        </div>
        <div className="submit">
          <Button onClick={toResult}>提交审核</Button>
          <CheckboxItem
            checked
            size="small"
            onChange={this.handleCheckBoxChange('btnStatus')}
          >
            提交则表示同意<a className="agreement"> 《薄荷牙医医生服务协议》</a>
          </CheckboxItem>
        </div>
      </div>
    );
  }
}

export default DoctorSeniority;
