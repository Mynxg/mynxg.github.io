import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as r,e as l}from"./app-CkSVD5j1.js";const a={},p=l('<blockquote><p>2024-05-20</p></blockquote><h2 id="eclipse卡顿问题" tabindex="-1"><a class="header-anchor" href="#eclipse卡顿问题"><span>Eclipse卡顿问题</span></a></h2><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>在<a href="https://www.baidu.com/s?wd=Eclipse&amp;usm=1&amp;ie=utf-8&amp;rsv_pq=b8c9b742000302ef&amp;oq=eclipse%E5%A4%8D%E5%88%B6%E7%B2%98%E8%B4%B4%E5%BE%88%E5%8D%A1&amp;rsv_t=03a5ayTzLZ46aOK7eaNHCtNe4vUdlw%2BmlxyWgkhliKPoqNxtk0epCAhg8TM&amp;sa=re_dqa_zy&amp;icon=1" target="_blank" rel="noopener noreferrer">Eclipse__</a>中，使用快捷键<a href="https://www.baidu.com/s?wd=Ctrl%2BC&amp;usm=1&amp;ie=utf-8&amp;rsv_pq=b8c9b742000302ef&amp;oq=eclipse%E5%A4%8D%E5%88%B6%E7%B2%98%E8%B4%B4%E5%BE%88%E5%8D%A1&amp;rsv_t=03a5ayTzLZ46aOK7eaNHCtNe4vUdlw%2BmlxyWgkhliKPoqNxtk0epCAhg8TM&amp;sa=re_dqa_zy&amp;icon=1" target="_blank" rel="noopener noreferrer">Ctrl+C__</a>进行复制时，可能会遇到编辑器卡顿或者无响应的问题。这主要是因为Eclipse在按下Ctrl键时，会自动切换到与当前代码相关联的文件，如果这些文件较大或者无法找到，就会导致卡顿甚至假死状态。为了解决这个问题，可以将自动进入关联文件的快捷键改为其他键，例如<a href="https://www.baidu.com/s?wd=Alt&amp;usm=1&amp;ie=utf-8&amp;rsv_pq=b8c9b742000302ef&amp;oq=eclipse%E5%A4%8D%E5%88%B6%E7%B2%98%E8%B4%B4%E5%BE%88%E5%8D%A1&amp;rsv_t=03a5ayTzLZ46aOK7eaNHCtNe4vUdlw%2BmlxyWgkhliKPoqNxtk0epCAhg8TM&amp;sa=re_dqa_zy&amp;icon=1" target="_blank" rel="noopener noreferrer">Alt__</a>。</p><blockquote><p><strong>在Eclipse中编辑代码时，使用快捷键进行复制粘贴，经常会导致编辑器短暂的停顿，光标不跟随，居然反应不过来，就一直卡在那，很是浪费时间,让人抓耳挠腮..</strong></p></blockquote><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法：</span></a></h2><p>Window -&gt; Preferences -&gt; General -&gt; Editors -&gt; Text Editors -&gt;Hyperlinking</p><p><strong>把超链的快捷键改为其他键比如Alt（不能改为shift）</strong></p><p>具体的解决办法如下：</p><ol><li>进入Eclipse的Preferences设置，路径为Window -&gt; Preferences。</li><li>在Preferences窗口中，选择General -&gt; Editors -&gt; Text Editors -&gt; Hyperlinking。</li><li>在Hyperlinking设置页面，将“Default modifier key”从Ctrl改为Alt，或者选择其他你喜欢的键。例如，可以设置为当按下Alt键时，Eclipse不会自动切换到代码超链接。</li><li>保存设置。</li></ol><p>此外，如果更改快捷键后仍然出现卡顿，可以尝试进一步禁用某些超链接导航功能。在Hyperlinking页中，取消勾选“Enable on demand hyperlink style navigation”，这样可以减少Eclipse在编辑时的负担，从而可能避免卡顿。</p><p>请注意，虽然更改快捷键可以解决复制粘贴时的卡顿问题，但这样做可能会影响到其他依赖于Ctrl+鼠标单击导航的操作。因此，根据个人需求选择是否进行此更改。</p><p>其他方法： 取消 Validate 校验</p><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件"><span>附件</span></a></h2><p>参考：<a href="https://www.cnblogs.com/abministrator/p/17881905.html" target="_blank" rel="noopener noreferrer">Eclipse复制（Ctrl+C）粘贴（Ctrl+V）会卡顿</a></p><p><a href="https://blog.csdn.net/qq_37022150/article/details/78193294" target="_blank" rel="noopener noreferrer">Ecilpse复制粘贴很慢，出现卡死现象及解决方法</a></p><p><a href="https://blog.csdn.net/qq_44695727/article/details/104092148" target="_blank" rel="noopener noreferrer">eclipse经常卡死、反应慢、内存溢出的解决方案</a></p><p>eclipse优化技巧：</p><p><a href="https://blog.csdn.net/yangniceyangyang/article/details/96309283" target="_blank" rel="noopener noreferrer">eclipse经常卡死、反应慢、内存溢出的解决方案</a></p><p><a href="https://blog.csdn.net/ArtemisC/article/details/87954568" target="_blank" rel="noopener noreferrer">Eclipse频繁卡顿的解决办法</a></p>',20),i=[p];function s(n,o){return r(),t("div",null,i)}const h=e(a,[["render",s],["__file","eclipse-卡顿问题.html.vue"]]),m=JSON.parse('{"path":"/questionskills/workquestions/eclipse-%E5%8D%A1%E9%A1%BF%E9%97%AE%E9%A2%98.html","title":"eclipse-卡顿问题","lang":"zh-CN","frontmatter":{"title":"eclipse-卡顿问题","icon":"sliders","category":["项目"],"tag":["eclipse","卡顿"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2024-05-20T10:13:17.000Z","description":"2024-05-20 Eclipse卡顿问题 背景 在Eclipse__中，使用快捷键Ctrl+C__进行复制时，可能会遇到编辑器卡顿或者无响应的问题。这主要是因为Eclipse在按下Ctrl键时，会自动切换到与当前代码相关联的文件，如果这些文件较大或者无法找到，就会导致卡顿甚至假死状态。为了解决这个问题，可以将自动进入关联文件的快捷键改为其他键，...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://blog.lxip.top/questionskills/workquestions/eclipse-%E5%8D%A1%E9%A1%BF%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"eclipse-卡顿问题"}],["meta",{"property":"og:description","content":"2024-05-20 Eclipse卡顿问题 背景 在Eclipse__中，使用快捷键Ctrl+C__进行复制时，可能会遇到编辑器卡顿或者无响应的问题。这主要是因为Eclipse在按下Ctrl键时，会自动切换到与当前代码相关联的文件，如果这些文件较大或者无法找到，就会导致卡顿甚至假死状态。为了解决这个问题，可以将自动进入关联文件的快捷键改为其他键，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.keney"}],["meta",{"property":"article:tag","content":"eclipse"}],["meta",{"property":"article:tag","content":"卡顿"}],["meta",{"property":"article:published_time","content":"2024-05-20T10:13:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"eclipse-卡顿问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-20T10:13:17.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"Eclipse卡顿问题","slug":"eclipse卡顿问题","link":"#eclipse卡顿问题","children":[]},{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"解决方法：","slug":"解决方法","link":"#解决方法","children":[]},{"level":2,"title":"附件","slug":"附件","link":"#附件","children":[]}],"readingTime":{"minutes":2.59,"words":778},"filePathRelative":"questionskills/workquestions/eclipse-卡顿问题.md","localizedDate":"2024年5月20日","excerpt":"","autoDesc":true}');export{h as comp,m as data};
