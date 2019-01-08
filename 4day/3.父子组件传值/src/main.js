import Vue from 'vue'

import App from './App'


new Vue({
  render: h => h(App),
}).$mount('#app')


/*
组件间的关系分为两种：
1.父子组件
2.非父子组件


传值方式：
1.父组件传值给子组件
在父组件调用子组件时，给子组件绑定自定义的属性。
  <List :city="selectCity"/>
在子组件中使用props进行接收。在子组件中当成属性使用。
  props: ['city']


2.子组件传值给父组件：
方式1：
在父组件调用子组件时，给子组件绑定自定义事件。
  <Add @add="handleAddAction"/>
在子组件内部，需要给父组件传值时，触发该自定义事件。
  this.$emit('add', this.text);

方式2：
在父组件调用子组件时，给子组件绑定自定义的属性，但是自定义属性值是函数。
  <Add :add="handleAddAction"/>
在子组件内部，使用props接收属性，需要给父组件传值时，调用属性对应的函数，进行传值。
    props: {
        add: Function
    },
  this.add(this.text);
  

*/