import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as i,o as s}from"./app-CsNQNVEa.js";const l={};function o(r,e){return s(),a("div",null,e[0]||(e[0]=[i('<h2 id="启动超时问题" tabindex="-1"><a class="header-anchor" href="#启动超时问题"><span>启动超时问题</span></a></h2><p>对tomcat启动项目，将超时时间（timeouts）延迟</p><h2 id="tomcat6内存问题" tabindex="-1"><a class="header-anchor" href="#tomcat6内存问题"><span>tomcat6内存问题</span></a></h2><p>eclipse使用tomcat6运行项目<br> eclipse版本是2019-06（4.12.0）</p><p>遇到的问题：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> java.lang.OutOfMemoryError: PermGen space</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>原因：<br> 提示内存溢出，电脑内存不够，运行起来卡顿</p><p>解决方法<br> 在双击tomcat server at localhost 配置之后，找到open lannch configuration，点击进入后，找到Arguments ，再找到 VM arguments输入框，在最后一行加上一下配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-Xms256m -Xmx1024m -XX:PermSize=256m -XX:MaxPermSize=256M</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>参数的解释</p><p>-Xms256m : 表示虚拟机占用系统的最小内存为256M。</p><p>-Xmx1024m :表示虚拟机占用系统的最大内存为1024M.</p><p>-XX:PermSize：最小堆大小。一般报内存不足时,都是说这个太小,堆空间剩余容量小于5%就会警告,建议把这个稍微设大一点,视自己机器内存大小来设置</p><p>-XX:MaxPermSize：最大堆大小。这个也适当大些</p></blockquote><p>eclipse版本不一样，布局可能也不同，自行探究。</p><p>参考：<a href="https://www.cnblogs.com/jepson6669/p/9040438.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/jepson6669/p/9040438.html</a></p><p><a href="https://blog.csdn.net/leo187/article/details/83866774" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/leo187/article/details/83866774</a></p>',13)]))}const p=t(l,[["render",o],["__file","eclipse-内存问题.html.vue"]]),m=JSON.parse('{"path":"/questionskills/workquestions/eclipse-%E5%86%85%E5%AD%98%E9%97%AE%E9%A2%98.html","title":"eclipse-内存问题","lang":"zh-CN","frontmatter":{"title":"eclipse-内存问题","icon":"sliders","category":["项目"],"tag":["eclipse","tomcat","内存溢出"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2024-01-17T08:13:17.000Z","gitInclude":[],"description":"启动超时问题 对tomcat启动项目，将超时时间（timeouts）延迟 tomcat6内存问题 eclipse使用tomcat6运行项目 eclipse版本是2019-06（4.12.0） 遇到的问题： 原因： 提示内存溢出，电脑内存不够，运行起来卡顿 解决方法 在双击tomcat server at localhost 配置之后，找到open la...","head":[["link",{"rel":"canonical","href":"https://blogs.lxip.top/questionskills/workquestions/eclipse-%E5%86%85%E5%AD%98%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:url","content":"https://blog.lxip.top/questionskills/workquestions/eclipse-%E5%86%85%E5%AD%98%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"eclipse-内存问题"}],["meta",{"property":"og:description","content":"启动超时问题 对tomcat启动项目，将超时时间（timeouts）延迟 tomcat6内存问题 eclipse使用tomcat6运行项目 eclipse版本是2019-06（4.12.0） 遇到的问题： 原因： 提示内存溢出，电脑内存不够，运行起来卡顿 解决方法 在双击tomcat server at localhost 配置之后，找到open la..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"eclipse"}],["meta",{"property":"article:tag","content":"tomcat"}],["meta",{"property":"article:tag","content":"内存溢出"}],["meta",{"property":"article:published_time","content":"2024-01-17T08:13:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"eclipse-内存问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-17T08:13:17.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"启动超时问题","slug":"启动超时问题","link":"#启动超时问题","children":[]},{"level":2,"title":"tomcat6内存问题","slug":"tomcat6内存问题","link":"#tomcat6内存问题","children":[]}],"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"questionskills/workquestions/eclipse-内存问题.md","localizedDate":"2024年1月17日","excerpt":"","autoDesc":true}');export{p as comp,m as data};
