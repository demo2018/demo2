import { Toast } from 'antd-mobile';
import styles from './index.less';

class ContactService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Toast.loading('正在为您匹配牙医助理...', 30, () => {
      console.log('Load complete !!!');
    });

    setTimeout(() => {
      Toast.hide();
    }, 1000);
  }
  render() {
    return (
      <div className={styles.contactService}>

      </div>
    );
  }
}

export default ContactService;
