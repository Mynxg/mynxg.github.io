import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,e as p,o}from"./app-CsNQNVEa.js";const a={};function s(t,e){return o(),l("div",null,e[0]||(e[0]=[p('<h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题"><span>遇到的问题</span></a></h2><p>在eclipse中使用lombok，省get/set方法，但是在新的环境中引入lombok.jar包并不生效，代码中有get方法就会飘红。</p><p>原因：lombok在项目中没有生效，get/set也就没有。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><blockquote><p>在D:\\programTool\\eclipse2019\\eclipse.ini 最后一行添加你lombok.jar所在的路径</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-javaagent:D:\\jar\\lombok.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>最后，保存并关闭 eclipse.ini 文件，重新启动 Eclipse 即可。</p><blockquote><p>请注意，在使用 Lombok 之前，还需要确保已经将 Lombok JAR 文件添加到项目的 Classpath 中。这通常可以通过 Maven 或 Gradle 等构建工具来完成。如果你需要在 Eclipse 中手动添加 Lombok JAR 文件，可以按照以下步骤进行操作：</p><ol><li>右键单击项目，选择“Properties”；</li><li>在“Java Build Path”选项卡中，选择“Libraries”；</li><li>点击“Add JARs...”或“Add External JARs...”按钮，选择 Lombok JAR 文件并添加到项目中。</li></ol></blockquote><p>题外话：若感觉Eclipse挺卡的，就把Eclipse 所有的校验都关闭；</p><p>若eclipse使用起来还是卡，就看看eclipse.ini 中内存分配了多少，进行适当调整。</p><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件"><span>附件</span></a></h2><p>参考：<a href="https://www.caogenjava.com/detail/127.html" target="_blank" rel="noopener noreferrer">https://www.caogenjava.com/detail/127.html</a></p><p>lombok eclipse.ini：<br><a href="https://juejin.cn/s/lombok%20eclipse.ini" target="_blank" rel="noopener noreferrer">https://juejin.cn/s/lombok%20eclipse.ini</a></p><p>eclipse.ini配置介绍：<br><a href="https://wjw465150.github.io/blog/java/my_data/Eclipse/eclipse%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.htm" target="_blank" rel="noopener noreferrer">https://wjw465150.github.io/blog/java/my_data/Eclipse/eclipse%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.htm</a></p><p>直接右键eclipse的快捷方式，在&quot;目标&quot;中填入下行</p><p>D:\\eclipse\\eclipse.exe -debug options -vm javaw.exe -nl en_US -clean -vmargs -Xverify:none -XX:+UseParallelGC -XX:PermSize=20M -XX:MaxNewSize=32M -XX:NewSize=32M -Xms128m -Xmx256m</p><p>参数注解：</p><p>【-debug options -vm javaw.exe】显示JVM当前内存使用量（注：详见下方《让你的eclipse也能显示JVM当前内存使用量》）</p><p>【-nl】后面跟的是语言：英语 en_US 简体中文 zh_CN</p><p>【-clean 】是当启动Eclipse IDE时清空缓冲，一般来说在没有更新插件的情况下，去掉这个参数启动速度更快。</p><p>【-vmargs】使用JRE的参数，后面就是JRE的参数了：</p><p>【-Xverify:none】去掉JAR包数据验证，一般来说只有在网络环境下才需要验证JAR包数据的有效性。本地的话可以不用验证。</p><p>【-XX:+UseParallelGC】使用并行垃圾收集机制，据说这个GC算法比较快。具体不清楚。</p><p>【-XX:PermSize=20M -XX:MaxNewSize=32M -XX:NewSize=32M】这三个就是设置详细的缓冲数据了。详情看Java官方网站的介绍吧。</p><p>【-Xms128m】Java虚拟机初始化内存容量。</p><p>【-Xmx256m】Java虚拟机最大使用内存容量，根据你所使用机器的内容大小设置，只要不超过最大内存容量就好。</p><p>-arch [processor architecture]<br> 描述：指定所使用的处理器的类别<br> 举例：eclipse -arch x86或eclipse -arch sparc</p><p>-application [id]<br> 描述：指定要运行的应用，id为扩展org.eclipse.core.applications扩展点的插件id加扩展id<br> 举例：例如有个插件id为edu.sdu.app，扩展id为myapp，则eclipse -application edu.sdu.app.myapp，就会执行你的扩展应用</p><p>-clean<br> 描述：清空插件缓存内容<br> 举例：eclipse -clean，有时插件显示不出来是因为Eclipse将插件进行了缓存以加速启动过程，若指定此参数则会清空缓存，从头加载</p><p>-configuration [cofigfile location]<br> 描述：指定配置文件的位置，在启动时使用此目录下的配置文件config.ini来启动<br> 举例：eclipse -configuration d:/eclipse/configuration</p><p>-data [workspace location]<br> 描述：指定启动时的Workspace位置<br> 举例：例如Workspace位置设在D:/myworkspace，则eclipse -data D:/myworkspace</p><p>-debug [option file]<br> 描述：以Debug状态启动Eclipse，所有的Debug开关在.options文件中指定<br> 举例：eclipse -debug d:/eclipse/.options</p><p>-dev [classpath entry]<br> 描述：以开发状态启动Eclipse，这会添加所有指定的路径作为每个插件的Classpath<br> 举例：例如eclipse -dev bin，会将产生在bin目录下的所有类加载到类路径中，这在开发插件时非常有用</p><p>-nosplash<br> 描述：指定启动时不显示闪屏<br> 举例：eclipse -nosplash</p><p>-vm [jre path]<br> 描述：指定启动时所使用的Java虚拟机<br> 举 例：例如要使用自己的Java虚拟机，则eclipse -vmD:/j2sdk1.4.2_04/jre/bin/java.exe，这样还有一个好处，就是可以开启一个Console，能够显示控制台信息， 当然若使用eclipse -vm D:/j2sdk1.4.2_04/jre/bin/javaw.exe则不会再显示控制台</p><p>-vmargs [Java VM arguments]<br> 描述：指定启动时要使用的Java虚拟机参数<br> 举例：例如要指定使用的内存容量，则eclipse -vmargs &quot;-Xms256m -Xmx1024m&quot;<br> 注：此参数一定要放在所有参数变量的最后面</p><p>如果你觉得你的Eclipse在启动的时候很慢（比如说超过20秒钟），也许你要调整一下你的Eclipse启动参数了，以下是一些``小贴士&#39;&#39;:</p><ol><li>检查启动Eclipse的JVM设置。 在Help\\About Eclipse SDK\\Configuration Detail里面，你可以看到启动Eclipse的JVM。 这个JVM和你在Eclipse中设置的Installed JDK是两回事情。 如果启动Eclipse的JVM还是JDK 1.4的话，那最好改为JDK 5，因为JDK 5的性能比1.4更好。</li></ol><p><code>C:\\eclipse\\eclipse.exe -vm &quot;C:\\Program Files\\Java\\jdk1.5.0_08\\ bin\\javaw.exe&quot;</code></p><ol start="2"><li>检查Eclipse所使用的heap的大小。 在C:\\eclipse目录下有一个配置文件eclipse.ini，其中配置了Eclipse启动的默认heap大小</li></ol><p><code>-vmargs -Xms40M -Xmx256M</code></p><p>所以你可以把默认值改为:</p><p><code>-vmargs -Xms256M -Xmx512M</code></p><p>当然，也可以这样做，把堆的大小改为256 - 512。</p><p><code>C:\\eclipse\\eclipse.exe -vm &quot;C:\\Program Files\\Java\\jdk1.5.0_08\\ bin\\javaw.exe&quot; -vmargs -Xms256M -Xmx512M</code></p><ol start="3"><li>其他的启动参数。 如果你有一个双核的CPU，也许可以尝试这个参数:</li></ol><p><code>-XX:+UseParallelGC</code></p><p>让GC可以更快的执行。（只是JDK 5里对GC新增加的参数）</p>',48)]))}const n=i(a,[["render",s],["__file","eclipse引入lombok不生效问题.html.vue"]]),m=JSON.parse('{"path":"/questionskills/workquestions/eclipse%E5%BC%95%E5%85%A5lombok%E4%B8%8D%E7%94%9F%E6%95%88%E9%97%AE%E9%A2%98.html","title":"eclipse引入lombok不生效问题","lang":"zh-CN","frontmatter":{"title":"eclipse引入lombok不生效问题","icon":"sliders","category":["项目"],"tag":["eclipse","lombok"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2024-05-07T15:20:17.000Z","gitInclude":[],"description":"遇到的问题 在eclipse中使用lombok，省get/set方法，但是在新的环境中引入lombok.jar包并不生效，代码中有get方法就会飘红。 原因：lombok在项目中没有生效，get/set也就没有。 解决方法 在D:\\\\programTool\\\\eclipse2019\\\\eclipse.ini 最后一行添加你lombok.jar所在的路径 最后...","head":[["link",{"rel":"canonical","href":"https://blogs.lxip.top/questionskills/workquestions/eclipse%E5%BC%95%E5%85%A5lombok%E4%B8%8D%E7%94%9F%E6%95%88%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:url","content":"https://blog.lxip.top/questionskills/workquestions/eclipse%E5%BC%95%E5%85%A5lombok%E4%B8%8D%E7%94%9F%E6%95%88%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"eclipse引入lombok不生效问题"}],["meta",{"property":"og:description","content":"遇到的问题 在eclipse中使用lombok，省get/set方法，但是在新的环境中引入lombok.jar包并不生效，代码中有get方法就会飘红。 原因：lombok在项目中没有生效，get/set也就没有。 解决方法 在D:\\\\programTool\\\\eclipse2019\\\\eclipse.ini 最后一行添加你lombok.jar所在的路径 最后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"eclipse"}],["meta",{"property":"article:tag","content":"lombok"}],["meta",{"property":"article:published_time","content":"2024-05-07T15:20:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"eclipse引入lombok不生效问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-07T15:20:17.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"遇到的问题","slug":"遇到的问题","link":"#遇到的问题","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":2,"title":"附件","slug":"附件","link":"#附件","children":[]}],"readingTime":{"minutes":4.96,"words":1488},"filePathRelative":"questionskills/workquestions/eclipse引入lombok不生效问题.md","localizedDate":"2024年5月7日","excerpt":"","autoDesc":true}');export{n as comp,m as data};
