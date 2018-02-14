import Http from './Http';
import { Toast } from 'antd-mobile';
import cookie from 'js-cookie';
import { getServer } from 'utils/common';

let hasErrorModal = false;
const defaultFn = function () { };

export default Http.create({
  servers: getServer(),
  contentType: 'form',
  contentKey: 'content',
  authorityFailureCodes: ['120001', '120010', '120002', '120008', 'error'],
  query() {
    return { sid: cookie.get('sid'), st: cookie.get('st') };
  },
  dataTransform(data, options) {
    Object.assign(data, { sid: cookie.get('sid'), st: cookie.get('st') });
    return { data, options };
  },
  responseErrorHandler(_responseError, _request) {
    if (!_request.options.ignoreErrorModal && !hasErrorModal) {
      const title = _responseError.errorMsg || '网络连接错误……';
      Toast.info(title, 3, defaultFn, true);
      hasErrorModal = true;
    }
  }
});
