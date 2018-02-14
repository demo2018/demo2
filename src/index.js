import dva from 'dva';
import './index.html';
import './styles/common.less'; // 全局样式

const FastClick = require('fastclick'); // h5点击事件
FastClick.attach(document.body);

// 1. Initialize
const app = dva({
  onError(e) {
    console.log(e);
  }
});

// 3. Model
app.model(require('./models/layout'));
// app.model(require('./models/doctor'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
