import { PullToRefresh } from 'antd-mobile';
import BannerList from './BannerList';
import DoctorList from './DoctorList';
import SearchBar from './SearchBar';
import DoctorSelect from './DoctorSelect';
import styles from './index.less';

class Doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '医生团队',
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
    };
    document.title = this.state.title;
  }
  render() {
    const { height, refreshing } = this.state;
    const { toDoctorDetail } = this.props;
    const doctorListProps = {
      toDoctorDetail
    };
    const pullToRefreshProps = {
      direction: 'up',
      refreshing,
      style: {
        height,
        overflow: 'auto',
      },
      indicator: {
        deactivate: '下拉可以刷新'
      },
      ref: (el) => { this.ptr = el; },
      onRefresh: () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
          this.setState({ refreshing: false });
        }, 1000);
      },
    };

    return (<div className={styles.doctorsPage}>
      <PullToRefresh {...pullToRefreshProps}>
        <BannerList />
        <DoctorSelect />
        <SearchBar />
        <DoctorList {...doctorListProps} />
      </PullToRefresh>
    </div>);
  }
}

export default Doctors;
