import moment from 'moment';
import serverConfigs from 'configs/servers';

// 获取当前环境
export function getDeployEnv(deployEnv) {
  if (arguments.length) {
    window.$$cachedEnv = window.DEPLOY_ENV || deployEnv || localStorage.getItem('DEPLOY_ENV') || 'proxy';
  }
  return window.$$cachedEnv;
}
// 获取当前服务
export function getServer(servers = serverConfigs) {
  return servers[getDeployEnv(process.env.DEPLOY_ENV)];
}

// 格式化日期
export const formatDate = (date, type = 'YYYY-MM-DD') => {
  return date ? moment(date).format(type) : '';
};

// 获取对象深层值
export const getValueFromObject = (datas = {}, keyStr) => {
  if (!keyStr) {
    return '';
  }
  const keys = keyStr.split('.');
  return keys.reduce((findDatas = {}, key) => {
    return findDatas[key];
  }, datas);
};
