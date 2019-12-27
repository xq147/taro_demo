/**
 * @author xq
 * @date 2019/12/27
 * @Description: 首页
 */
// eslint-disable-next-line no-unused-vars
import { ComponentType } from 'react';
// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
// @ts-ignore
import { observer, inject } from '@tarojs/mobx';

import './index.scss';

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
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

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact');
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  public increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  public decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  public incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };

  render () {
    const { counterStore: { counter } } = this.props;
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Index  as ComponentType
