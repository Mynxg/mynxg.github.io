import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as n,o as i}from"./app-CaWai5_9.js";const l={};function r(s,e){return i(),a("div",null,e[0]||(e[0]=[n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>导入eclipse项目，可能就会遇到这样那样的问题</p><p>比如 该项目时jdk1.7版本的老项目</p><h2 id="一、遇到的问题" tabindex="-1"><a class="header-anchor" href="#一、遇到的问题"><span>一、遇到的问题：</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>encode.java 非法字符 \\65279</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>参考点：<a href="https://blog.csdn.net/qq_45988641/article/details/117474148" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_45988641/article/details/117474148</a></p><p><a href="https://blog.csdn.net/netwalk/article/details/52005546" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/netwalk/article/details/52005546</a></p><p><a href="https://blog.csdn.net/dszgf5717/article/details/104284198" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/dszgf5717/article/details/104284198</a><br><a href="https://blog.csdn.net/yuhaibao324/article/details/108187891" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/yuhaibao324/article/details/108187891</a></p><h2 id="二、解决方法" tabindex="-1"><a class="header-anchor" href="#二、解决方法"><span>二、解决方法</span></a></h2><p>解决方法：</p><blockquote><p>IDEA编译完成后报非法字符</p><p>1、网上有很多说是 File &gt; Setting &gt; File Encoding，将IDE Encoding和Project Encoding 都设置为UTF-8就行，可是我试了不行，</p><p>2、上述方法尝试失败之后尝试以下设置，File &gt; Setting &gt;Java Compiler，在 Additional comman line parameters（附加参数）中添加参数 -encoding UTF8</p></blockquote><p>实在不行就换eclipse吧</p>',12)]))}const p=t(l,[["render",r],["__file","项目导入问题.html.vue"]]),d=JSON.parse('{"path":"/java/workquestions/%E9%A1%B9%E7%9B%AE%E5%AF%BC%E5%85%A5%E9%97%AE%E9%A2%98.html","title":"老项目导入问题","lang":"zh-CN","frontmatter":{"title":"老项目导入问题","icon":"feather-pointed","category":["项目","技巧"],"tag":["idea","eclipse","启动项目"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2023-12-21T09:12:13.000Z","gitInclude":[],"description":"背景 导入eclipse项目，可能就会遇到这样那样的问题 比如 该项目时jdk1.7版本的老项目 一、遇到的问题： 参考点：https://blog.csdn.net/qq_45988641/article/details/117474148 https://blog.csdn.net/netwalk/article/details/52005546 ...","head":[["meta",{"property":"og:url","content":"https://blog.lxip.top/java/workquestions/%E9%A1%B9%E7%9B%AE%E5%AF%BC%E5%85%A5%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"老项目导入问题"}],["meta",{"property":"og:description","content":"背景 导入eclipse项目，可能就会遇到这样那样的问题 比如 该项目时jdk1.7版本的老项目 一、遇到的问题： 参考点：https://blog.csdn.net/qq_45988641/article/details/117474148 https://blog.csdn.net/netwalk/article/details/52005546 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"idea"}],["meta",{"property":"article:tag","content":"eclipse"}],["meta",{"property":"article:tag","content":"启动项目"}],["meta",{"property":"article:published_time","content":"2023-12-21T09:12:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"老项目导入问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T09:12:13.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"一、遇到的问题：","slug":"一、遇到的问题","link":"#一、遇到的问题","children":[]},{"level":2,"title":"二、解决方法","slug":"二、解决方法","link":"#二、解决方法","children":[]}],"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"java/workquestions/项目导入问题.md","localizedDate":"2023年12月21日","excerpt":"","autoDesc":true}');export{p as comp,d as data};
