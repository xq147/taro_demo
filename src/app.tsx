/**
 * @author xq
 * @date 2019/12/27
 * @Description:  入口
*/
// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro';
// @ts-ignore
import { Provider } from '@tarojs/mobx';
import '@tarojs/async-await';
import Index from '@pages/Home/index';
import counterStore from './store/counter';
import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config: Config = {
    pages: [
      'pages/Home/index',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          text: "首页",
          pagePath: "pages/Home/index",
          selectedIconPath: "./assets/images/icons/tab-cate-current.png",
          iconPath: "./assets/images/icons/tab-cate.png"
        },
        {
          text: "我的",
          pagePath: "pages/index/index",
          selectedIconPath: "./assets/images/icons/tab-cate-current.png",
          iconPath: "./assets/images/icons/tab-cate.png"
        },
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
