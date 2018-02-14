import { Carousel } from 'antd-mobile';

class Doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderBannar(val) {
    return (<a className="bannerWrapper" key={val}>
      <img
        className="bannerImg"
        src={require('assets/banner.png')}
      />
    </a>);
  }
  render() {
    const { dataSourse = [1, 2, 3, 4, 5] } = this.props;
    const carouselProps = {
      autoplay: true,
      infinite: true,
      selectedIndex: 1,
    };
    return (
      <Carousel {...carouselProps}>
        {dataSourse.map(this.renderBannar)}
      </Carousel>
    );
  }
}

export default Doctors;
