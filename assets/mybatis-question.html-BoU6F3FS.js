import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as s,o as a}from"./app-LQOk8z_J.js";const r={};function n(l,t){return a(),i("div",null,t[0]||(t[0]=[s('<p>mybatis传数值问题：</p><blockquote><p>当传 0时，mybatis默认会处理为空串</p></blockquote><p><a href="https://blog.csdn.net/programmer_sir/article/details/45896431" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/programmer_sir/article/details/45896431</a></p><p>示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;if test=&quot;sampleBatchNo != null and sampleBatchNo != &#39;&#39;&quot; &gt; SAMPLE_BATCH_NO = #{sampleBatchNo,jdbcType=VARCHAR}, &lt;/if&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果不空null并且不是空字符串才去修改这个值，但这样写只能针对字符串(String)类型，如果是Integer类型的话就会有问题了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int i = 0; i!=&#39;&#39;。 mybatis中会返回true。也就是说，mybatis将i==0的值也认定为空字符串。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>，0不为空也不是空字符串。所以，针对这个问题，我的解决办法是：如果类型为Integer类型，我就去掉 ！= ”的判断，只判断!=null即可。</p></blockquote><p>参考：<a href="https://blog.csdn.net/liquisong/article/details/50156067" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liquisong/article/details/50156067</a></p>',9)]))}const c=e(r,[["render",n],["__file","mybatis-question.html.vue"]]),d=JSON.parse('{"path":"/questionskills/workquestions/mybatis-question.html","title":"mybatis传数值问题","lang":"zh-CN","frontmatter":{"title":"mybatis传数值问题","icon":"sliders","category":["Mybatis"],"tag":["Mybatis"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2023-10-13T10:13:17.000Z","description":"mybatis传数值问题： 当传 0时，mybatis默认会处理为空串 https://blog.csdn.net/programmer_sir/article/details/45896431 示例： 如果不空null并且不是空字符串才去修改这个值，但这样写只能针对字符串(String)类型，如果是Integer类型的话就会有问题了。 ，0不为空也不...","gitInclude":[],"head":[["link",{"rel":"canonical","href":"https://blogs.lxip.top/questionskills/workquestions/mybatis-question.html"}],["meta",{"property":"og:url","content":"https://blog.lxip.top/questionskills/workquestions/mybatis-question.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"mybatis传数值问题"}],["meta",{"property":"og:description","content":"mybatis传数值问题： 当传 0时，mybatis默认会处理为空串 https://blog.csdn.net/programmer_sir/article/details/45896431 示例： 如果不空null并且不是空字符串才去修改这个值，但这样写只能针对字符串(String)类型，如果是Integer类型的话就会有问题了。 ，0不为空也不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Mybatis"}],["meta",{"property":"article:published_time","content":"2023-10-13T10:13:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mybatis传数值问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-13T10:13:17.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"questionskills/workquestions/mybatis-question.md","localizedDate":"2023年10月13日","excerpt":"","autoDesc":true}');export{c as comp,d as data};
