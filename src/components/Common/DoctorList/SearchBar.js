import { SearchBar } from 'antd-mobile';

class Doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SearchBar placeholder="请输入医生姓名" />
    );
  }
}

export default Doctors;
