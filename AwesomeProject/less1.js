import React, { Component } from 'react';
import { Text, View } from 'react-native';
//上面的代码定义了一个名为HelloWorldApp的新的组件（Component）。
//你在编写 React Native 应用时，肯定会写出很多新的组件。而一个 App 的最终界面，其实也就是各式各样的组件的组合。
//组件本身结构可以非常简单——唯一必须的就是在render方法中返回一些用于渲染结构的 JSX 语句。
export default class HelloWorldApp extends Component {
  render() {
    return (
        <View>
          <Text>Hello world!</Text>
        </View>
    );
  }
}
