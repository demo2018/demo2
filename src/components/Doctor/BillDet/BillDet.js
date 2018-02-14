import { ActionSheet } from 'antd-mobile';


class BillDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showActionSheet = () => {
    const BUTTONS = ['9.9折', '9.5折', '9.0折', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      maskClosable: true,
      'data-seed': 'logId',
    },
      (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      });
  }
  render() {
    return (
      <div className="myBillDetContent">
        <div className="bill-det">
          <p className="bill-dethead">账单明细</p>
          <div className="tableWrapper">
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th>项目</th>
                  <th>数量</th>
                  <th>价格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="patient-project">洗牙</span>
                    <p className="patient-pro-discount">折扣：
                      <span className="pro-discount-det" onClick={this.showActionSheet}>7折</span>
                    </p>
                  </td>
                  <td className="patient-pronum">1</td>
                  <td>
                    <span className="patient-proprice">149.00</span>
                    <p className="original-price">
                      299.00
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="patient-project">洗牙</span>
                    <p className="patient-pro-discount">折扣：
                      <span className="pro-discount-det" onClick={this.showActionSheet}>7折</span>
                    </p>
                  </td>
                  <td className="patient-pronum">1</td>
                  <td>
                    <span className="patient-proprice">149.00</span>
                    <p className="original-price">
                      299.00
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="patient-project">洗牙</span>
                    <p className="patient-pro-discount">折扣：
                      <span className="pro-discount-det" onClick={this.showActionSheet}>7折</span>
                    </p>
                  </td>
                  <td className="patient-pronum">1</td>
                  <td>
                    <span className="patient-proprice">149.00</span>
                    <p className="original-price">
                      299.00
                    </p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="combined">
                  <td>
                    <span className="combined-price">合计</span>
                    <p>折扣：
                      <span className="combined-discount" onClick={this.showActionSheet}>7折</span>
                    </p>
                  </td>
                  <td></td>
                  <td>
                    <span className="combined-discount-price">149.00</span>
                    <p className="original-price">
                      299.00
                    </p>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

    );
  }
}

export default BillDetail;
