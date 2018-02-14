import { Tag } from 'antd-mobile';

class Evaluation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="evaluation">
        <div className="evaluation-head">
          <span className="evaluation-left">患者评价</span>
          <span className="evaluation-date">2018-1-31</span>
          <span className="evaluation-time">08:30</span>
        </div>
        <div className="evaluation-tag">
          <Tag selected>医生很专业，有耐心</Tag>
          <Tag selected>靠谱</Tag>
        </div>
        <div className="evaluation-word">
          很愉快的就诊经历！
        </div>
      </div>
    );
  }
}


export default Evaluation;
