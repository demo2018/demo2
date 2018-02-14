import { Tabs, Button, Checkbox, Toast, Tag } from 'antd-mobile';
import styles from './index.less';
import PaidSuccess from './PaidSuccess';

const CheckboxItem = Checkbox.CheckboxItem;

const tabs = [
  { title: '表扬一下' },
  { title: '吐槽一下' }
];

function successToast() {
  Toast.success('评价成功', 1);
}

class Evaluate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '支付成功',
    };
    document.title = this.state.title;
  }
  render() {
    return (
      <div className={styles.Evaluate}>
        <PaidSuccess />
        <div className="evaluate">
          <p className="evaluate-head">您此次就诊体验：</p>
          <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>
              <div className="evaluate-tag">
                <Tag selected>靠谱</Tag>
                <Tag>客户经理nice</Tag>
                <Tag>好看牙，看好牙</Tag>
                <Tag>医生很专业，有耐心</Tag>
                <Tag>极致体验，完美经历</Tag>
                <Tag>诊所高端大气上档次</Tag>
              </div>
              <div className="write-evaluate">
                <textarea name="evaluate-word" rows="5" placeholder="给与表扬！"></textarea>
              </div>
              <div className="evaluate-submit">
                <Button onClick={successToast}>确定</Button>
                <CheckboxItem
                  checked
                  size="small"
                >
                  告诉身边的朋友
                </CheckboxItem>
              </div>
            </div>
            <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>
              <div className="evaluate-tag">
                <Tag>就诊体验差</Tag>
                <Tag>没有看好牙</Tag>
                <Tag>等待时间长</Tag>
                <Tag>医生态度不好，不专业</Tag>
                <Tag selected>收费项目不清晰</Tag>
              </div>
              <div className="write-evaluate">
                <textarea name="evaluate-word" rows="5" placeholder="给与批评！"></textarea>
              </div>
              <div className="evaluate-submit">
                <Button onClick={successToast}>确定</Button>
                <CheckboxItem
                  checked
                  size="small"
                >
                  发给薄荷改进
                </CheckboxItem>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Evaluate;
