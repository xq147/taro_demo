import Taro from '@tarojs/taro';
import {baseUrl, noConsole} from '../config';
import interceptors from './interceptors';

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

interface OptionsType {
  // method?: 'get' | 'post' | 'put' | 'delete' | 'options'| 'head'| 'connect' | 'trace' | undefined;
  method: any;
  // method: any;
  data: any;
  dataType: string;
  url: string;
  noLoading?: boolean;
}

export default (options: OptionsType = {method: 'get', data: {}, dataType: '', url: '', noLoading: false}) => {
  let ContentType: string = '';
  if (options.dataType === 'form') {
    ContentType = 'application/x-www-form-urlencoded';
  } else if (options.dataType === 'file') {
    ContentType = 'multipart/form-data';
  } else {
    ContentType = 'application/json';
  }
  if (!options.noLoading) {
    Taro.showLoading({
      title: '加载中'
    });
  }
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 URL=${options.url} 】PARAM=${JSON.stringify(options.data)}`);
  }
  for (const key in options.data) {
    if (options.data.hasOwnProperty(key) && (options.data[key] === undefined || options.data[key] == null)) {
      delete options.data[key];
    }
  }
  // @ts-ignore
  return Taro.request({
    url: baseUrl + options.url,
    data: options.data,
    header: {
      'X-Token': Taro.getStorageSync('token'),
      'Content-Type': ContentType
    },
    method: options.method
  }).then((res) => {
    setTimeout(() => {
      Taro.hideLoading();
    }, 100);
    if (!noConsole) {
      console.log(`${new Date().toLocaleString('zh', {hour12: false})}【${options.url} 】【返回】`, res.data);
    }
  });
};
