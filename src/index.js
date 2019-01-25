//假设：main.js还是我们的入口文件
// console.log('ok')
//1.这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'   //把创建好的，组件和虚拟DOM 放到页面上展示的


// 2.创建虚拟DOM元素
//参数1：创建的元素的类型，字符串，表示元素的名称
// 参数2：是一个对象或null，表示当前这个DOM元素的属性
// 参数3：子节点（包括其它虚拟DOM获取文本子节点）
// 参数N ： 其它子节点
// const myH1 = React.createElement('h1',null,'这是一个大大的h1')
const myH1 = React.createElement('h1',{id:'myh2',title:'这是一个大大的h1'},'这是一个大大的h1')




// 3.使用ReactDOM把虚拟DOM，渲染到页面上
//  参数1：要渲染的那个虚拟DOM
//  参数2：指定页面上的一个容器 要真实的容器 DOM元素

ReactDOM.render(myH1,document.getElementById('app'))