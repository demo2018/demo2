
import { Modal } from 'antd-mobile';
import Calendar from 'components/Common/Calendar';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toDoctorAppoint } = this.props;

    const calendarProps = {
      ableDates: [new Date('2018-02-15'), new Date('2018-02-16'), new Date('2018-02-17')],
      disableDates: [new Date('2018-02-19'), new Date('2018-02-20'), new Date('2018-02-21')],
      // 可预约触发函数
      onSelectUsable(date) {
        console.log('可预约触发函数', date);
        toDoctorAppoint(date);
      },
      // 约满触发函数
      onSelectWarning(date) {
        console.log('约满触发函数', date);
        Modal.alert('提示', '当天已经约满，请改约其他时间', [
          { text: '确定' },
        ]);
      },
    };

    return (<div className="schedule">
      <div className="head"><p className="title">出诊安排</p></div>
      <div className="content">
        <Calendar {...calendarProps} />
        {/* <Calendar
          visible
          type={'one'}
          initalMonths={2}
          renderHeader={() => { return ''; }}
          minDate={minDate}
          maxDate={maxDate}
        /> */}
      </div>
    </div>);
  }
}

export default Schedule;
