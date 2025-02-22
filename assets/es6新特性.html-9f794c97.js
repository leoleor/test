import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,f as i}from"./app-cda9265d.js";const s={},h=i('<h2 id="变量声明-let、const" tabindex="-1"><a class="header-anchor" href="#变量声明-let、const" aria-hidden="true">#</a> 变量声明 let、const</h2><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数 =&gt;</h2><ul><li>自身不绑定this，this指向当前上下文</li><li>不能作为构造函数</li><li>没有arguments，用rest</li></ul><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串 ${}</h2><h2 id="函数参数默认值" tabindex="-1"><a class="header-anchor" href="#函数参数默认值" aria-hidden="true">#</a> 函数参数默认值</h2><h2 id="对象结构" tabindex="-1"><a class="header-anchor" href="#对象结构" aria-hidden="true">#</a> 对象结构</h2><h2 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符 ...</h2><h2 id="对象属性简写" tabindex="-1"><a class="header-anchor" href="#对象属性简写" aria-hidden="true">#</a> 对象属性简写</h2><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><ul><li><p>概念</p><p>Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject的时候, 此时是异步操作，会先执行then/catch等，当主栈完成后， 才会去调用 resolve/reject 中存放的方法执行。</p></li><li><p>async/await</p><p>async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。</p><p>Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个 promise 对象.</p></li><li><p>静态方法</p><ul><li>Promise.all 所有成功才执行then，有一个失败后面都会被忽略并执法catch</li><li>Promise.race 拿到最快的看是then还是catch</li><li>Promise.allSettled 所有执行完毕，返回包含了每个promise结果的对象数组 [{ status: &quot;fulfilled&quot;, value: 3 }, { status: &quot;rejected&quot;, reason: &quot;foo&quot; }]</li><li>Promise.any 有成功就执行then，输出第一个成功的，所有失败才执行catch ES2021</li></ul></li></ul><h2 id="类-class" tabindex="-1"><a class="header-anchor" href="#类-class" aria-hidden="true">#</a> 类 Class</h2><h2 id="模块化-module" tabindex="-1"><a class="header-anchor" href="#模块化-module" aria-hidden="true">#</a> 模块化 module</h2><h2 id="for-value-of-arr-for-key-in-arr-es5" tabindex="-1"><a class="header-anchor" href="#for-value-of-arr-for-key-in-arr-es5" aria-hidden="true">#</a> for value of arr / for key in arr(es5)</h2><h2 id="可选链操作符" tabindex="-1"><a class="header-anchor" href="#可选链操作符" aria-hidden="true">#</a> 可选链操作符 ?.</h2><ul><li><p>概念</p><p>MDN: 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。 ?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。</p></li><li><p>用法</p><p><code>if (res &amp;&amp; res.data &amp;&amp; res.data.success)</code> ​等同于 <code>if (res?.data?.success)</code></p></li></ul>',15),t=[h];function d(l,n){return a(),r("div",null,t)}const u=e(s,[["render",d],["__file","es6新特性.html.vue"]]);export{u as default};
