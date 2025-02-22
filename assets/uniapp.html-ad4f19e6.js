import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-cda9265d.js";const e="/Lion_Blog/images/uniapp/mergeVirtualHostAttributes-代码.png",p="/Lion_Blog/images/uniapp/mergeVirtualHostAttributes-配置前.png",o="/Lion_Blog/images/uniapp/mergeVirtualHostAttributes-配置后.png",i={},l=t('<h2 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序" aria-hidden="true">#</a> 小程序</h2><h3 id="编译到微信小程序u-icon上的class无效" tabindex="-1"><a class="header-anchor" href="#编译到微信小程序u-icon上的class无效" aria-hidden="true">#</a> 编译到微信小程序u-icon上的class无效</h3><ul><li>问题：编译到微信小程序上后，组件如<code>&lt;u-icon /&gt;</code>上的class、style无效</li></ul><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>解决：在manifest.json的mp-weixin中配置<code>mergeVirtualHostAttributes</code></li></ul><p><code>mergeVirtualHostAttributes:</code> 合并组件虚拟节点外层属性（目前仅支持 style、class 属性）</p><p>配置后可以看到style和class都编译出来了</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="textarea在微信小程序安卓真机上会超出maxlength的长度限制" tabindex="-1"><a class="header-anchor" href="#textarea在微信小程序安卓真机上会超出maxlength的长度限制" aria-hidden="true">#</a> textarea在微信小程序安卓真机上会超出maxlength的长度限制</h3><ul><li><p>问题：textarea在微信小程序<code>安卓真机上</code>会超出maxlength的长度限制</p></li><li><p>解决：input监听输入，截取字符<code>slice</code>后重新赋值</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>textarea
        type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
        v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;form.description&quot;</span>
        maxlength<span class="token operator">=</span><span class="token string">&quot;60&quot;</span>
        @input<span class="token operator">=</span><span class="token string">&quot;(e: Event) =&gt; listenInput(e, &#39;description&#39;)&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">const</span> <span class="token function-variable function">listenInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> Event<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLInputElement
  <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    form<span class="token punctuation">.</span>value<span class="token punctuation">.</span>description <span class="token operator">=</span> target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    form<span class="token punctuation">.</span>value<span class="token punctuation">.</span>description <span class="token operator">=</span> target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function r(u,d){return s(),a("div",null,c)}const m=n(i,[["render",r],["__file","uniapp.html.vue"]]);export{m as default};
