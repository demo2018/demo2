import { Button, List, TextareaItem } from 'antd-mobile';
import styles from './index.less';


class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '意见反馈',
    };
    document.title = this.state.title;
  }
  render() {
    const { toFeedbackResult } = this.props;
    return (
      <div className={styles.feedback}>
        <div className="write-feedback">
          <List>
            <TextareaItem
              rows={5}
              count={500}
              placeholder="请留下您的宝贵意见"
            />
          </List>
        </div>
        <Button onClick={toFeedbackResult}>提交反馈</Button>
      </div>
    );
  }
}

export default Feedback;
