import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,f as a}from"./app-cda9265d.js";const o="/Lion_Blog/images/react/component_function.jpg",t="/Lion_Blog/images/react/component_class.jpg",r="/Lion_Blog/images/react/attributes_state.jpg",c="/Lion_Blog/images/react/react_life_old.jpg",d="/Lion_Blog/images/react/react_life_new.jpg",n={},p=a('<h2 id="与vue相比" tabindex="-1"><a class="header-anchor" href="#与vue相比" aria-hidden="true">#</a> 与vue相比</h2><ul><li><p>相同点</p><ol><li>虚拟DOM</li></ol></li><li><p>不同的</p><ol><li><code>语法</code> vue-原生语法、react-JSX语法</li><li><code>数据绑定</code> vue-v-model双向绑定、react-setState单向流动</li><li><code>props</code> vue-props直接写、react-需要引入prop-types</li><li><code>DOM更新策略</code> react自顶向下重新渲染render树</li><li><code>条件渲染</code> vue-v-if、react-借助三元运算符，逻辑性更强</li><li><code>兄弟组件通信</code> vue-eventBus-on/emit、react-subscribe/publish</li><li><code>路由信息</code> vue-组件里获取this.$route、react-路由组件里获取this.props.history/location/match，一般组件没有</li><li><code>css作用域</code> vue-scoped、react-module(仅选择器，原生标签不行)</li></ol></li></ul><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ul><li>组件化模式、声明式编码，提高开发效率及组件复用率</li><li>rn进行移动端开发</li><li>使用虚拟DOM+优秀的diff算法，减少与真实DOM的交互</li></ul><h2 id="jsx语法" tabindex="-1"><a class="header-anchor" href="#jsx语法" aria-hidden="true">#</a> JSX语法</h2><ul><li>定义虚拟DOM，<code>不要写引号</code></li><li>标签中<code>混入JS表达式时要用{}</code></li><li><code>样式的类名</code>不要用class，用<code>className</code></li><li>内联样式，要用 <code>style={{key: value}}</code> 的形式</li><li>只有<code>一个根节点</code></li><li><code>标签必须闭合</code></li><li>标签首字母 <ul><li>小写开头：找相应的html标签，没有则警告</li><li>大写开头：组件，没有则报错</li></ul></li></ul><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><ul><li>函数式组件</li></ul><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>类组件</li></ul><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="组件实例的三大属性" tabindex="-1"><a class="header-anchor" href="#组件实例的三大属性" aria-hidden="true">#</a> 组件实例的三大属性</h2><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h3 id="旧版" tabindex="-1"><a class="header-anchor" href="#旧版" aria-hidden="true">#</a> 旧版</h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>初始化阶段: 由ReactDOM.render()触发---初次渲染</p><ul><li><p>constructor()</p></li><li><p>componentWillMount()</p></li><li><p>render()</p></li><li><p>componentDidMount() =====&gt; <code>常用</code></p><p>一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息 ​</p></li></ul></li><li><p>更新阶段: 由组件内部this.setSate()或父组件render触发</p><ul><li><p>shouldComponentUpdate()</p></li><li><p>componentWillUpdate()</p></li><li><p>render() =====&gt; <code>必须使用的一个</code></p></li><li><p>componentDidUpdate() ​</p></li></ul></li><li><p>卸载组件: 由ReactDOM.unmountComponentAtNode()触发</p><ul><li><p>componentWillUnmount() =====&gt; <code>常用</code></p><p>一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息</p></li></ul></li></ul><h3 id="新版" tabindex="-1"><a class="header-anchor" href="#新版" aria-hidden="true">#</a> 新版</h3><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>初始化阶段: 由ReactDOM.render()触发---初次渲染</p><ul><li><p>constructor()</p></li><li><p>getDerivedStateFromProps</p></li><li><p>render()</p></li><li><p>componentDidMount() =====&gt; <code>常用</code></p><p>一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息</p></li></ul></li><li><p>更新阶段: 由组件内部this.setSate()或父组件重新render触发</p><ul><li><p>getDerivedStateFromProps</p></li><li><p>shouldComponentUpdate()</p></li><li><p>render()</p></li><li><p>getSnapshotBeforeUpdate</p></li><li><p>componentDidUpdate() ​</p></li></ul></li><li><p>卸载组件: 由ReactDOM.unmountComponentAtNode()触发</p><ul><li><p>componentWillUnmount() =====&gt; <code>常用</code></p><p>一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息</p></li></ul></li></ul>',23),s=[p];function u(h,g){return i(),l("div",null,s)}const _=e(n,[["render",u],["__file","react.html.vue"]]);export{_ as default};
