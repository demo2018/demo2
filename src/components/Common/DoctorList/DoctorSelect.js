import DropDownPicker from 'components/Common/DropDownPicker';

class DoctorSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const doctorPickerProps = {
      multiple: false, // 新增参数，是否多选
      value: [1],
      title: '就诊医生',
      menus: [
        { label: '全部医生', value: 1 },
        { label: '推荐医生', value: 2 },
      ],
      onSelect: (item) => {
        console.log(item);
      }
    };
    const projectPickerProps = {
      multiple: false,
      value: [1],
      title: '就诊项目',
      menus: [
        { label: '不限项目', value: 1 },
        { label: '洗牙', value: 2 },
        { label: '美白', value: 3 },
        { label: '拔牙', value: 4 },
        { label: '补牙', value: 5 },
        { label: '种牙', value: 6 },
        { label: '正畸', value: 7 },
        { label: '镶牙', value: 8 },
        { label: '儿童口腔', value: 9 },
        { label: '口腔检查', value: 10 },
      ],
      onSelect: (item) => {
        console.log(item);
      }
    };
    const datePickerProps = {
      multiple: true,
      value: [1],
      title: '就诊时间',
      menus: [
        { label: '全部时间', value: 1 },
        { label: '周一', value: 2 },
        { label: '周二', value: 3 },
        { label: '周三', value: 4 },
        { label: '周四', value: 5 },
        { label: '周五', value: 6 },
        { label: '周六', value: 7 },
        { label: '周日', value: 8 },
      ],
      onSelect: (item) => {
        console.log(item);
      }
    };
    return (
      <div className="select" style={{ display: 'flex', margin: '0 0 -1px 0 ' }}>
        <DropDownPicker {...doctorPickerProps} />
        <DropDownPicker {...projectPickerProps} />
        <DropDownPicker {...datePickerProps} />
      </div>
    );
  }
}


export default DoctorSelect;

