/**
 * @author xq
 * @date 2019/12/27
 * @Description: 首页
 */
// eslint-disable-next-line no-unused-vars
import { ComponentType } from 'react';
// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro';
// @ts-ignore
import {View, Text} from '@tarojs/components';
// @ts-ignore
import {observer} from '@tarojs/mobx';
import Ajax from '../../utils/request';
import './index.scss';

// eslint-disable-next-line import/no-commonjs,no-unused-vars
const regeneratorRuntime = require('../../utils/regenerator/runtime'); // 使用async await

type PageStateProps = {

}

interface Index {
  props: PageStateProps;
}

@observer
class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
  }

  componentWillReact () {
    console.log('componentWillReact 整合登录');
  }

  componentDidMount() {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 整合登录
   */
  async login() {
    const checkLogin = await this.checkLogin();
    if (checkLogin) return;
    const wxLoginRes = await this.wxLogin();
    // const wxUserInfo = await this.wxGetUserInfo();
    const res: any = await Ajax({
      method: 'get',
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${'小程序appid'}&secret=${'小程序密钥'}&js_code=${wxLoginRes.code}&grant_type=authorization_code`,
      data: {},
      dataType: 'from'
    });
    if (res.errno === 0) {
      //存储用户信息
      Taro.setStorageSync('userInfo', res.data.userInfo);
      Taro.setStorageSync('token', res.data.token);
      return res;
    } else {
      Taro.showToast({
        title: '登录失败'
      });
      return;
    }
  };

  /**
   * 微信登录
   */
  wxLogin() {
    return Taro.login();
  };

  /**
   * 检查是否登录
   */
  checkLogin() {
    return Taro.getStorageSync('token');
  };

  /**
   * 获取用户信息
   */
  wxGetUserInfo() {
    return Taro.getUserInfo({
      lang: 'zh_CN',
      withCredentials: true
    });
  };
  render () {
    return (
      <View className='index'>
        <Text>首页</Text>
      </View>
    )
  }
}

export default Index  as ComponentType
