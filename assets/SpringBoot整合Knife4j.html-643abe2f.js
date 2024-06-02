import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,b as n,d as s,a as t,e as i}from"./app-4191c28c.js";const l={},u=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),r=n("p",null,[s("Knife4j 是 "),n("strong",null,"springfox 3.0.0"),s(" 和 "),n("strong",null,"springdoc-openapi"),s(" 的增强。")],-1),k=n("p",null,"knife4j是一个集Swagger2 和 OpenAPI3为一体的增强解决方案，帮助开发者快速聚合使用OpenAPI规范，快速生成API文档，并且提供一些额外的功能.",-1),d={href:"https://doc.xiaominfo.com/docs/quick-start",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="spring-boot-集成-knife4j" tabindex="-1"><a class="header-anchor" href="#spring-boot-集成-knife4j" aria-hidden="true">#</a> Spring Boot 集成 Knife4j</h2><ol><li>添加依赖：引入 Knife4j 包</li></ol><p>在 Spring Boot 项目的<code>pom.xml</code>文件中添加以下依赖:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--  knife4j-openapi3 --&gt;  
&lt;dependency&gt;  
    &lt;groupId&gt;com.github.xiaoymin&lt;/groupId&gt;  
    &lt;artifactId&gt;knife4j-openapi3-spring-boot-starter&lt;/artifactId&gt;  
    &lt;version&gt;4.4.0&lt;/version&gt;  
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置 Knife4j</li></ol><p>在配置包下增加 SwaggerConfig</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>v3<span class="token punctuation">.</span>oas<span class="token punctuation">.</span>models<span class="token punctuation">.</span></span><span class="token class-name">ExternalDocumentation</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>v3<span class="token punctuation">.</span>oas<span class="token punctuation">.</span>models<span class="token punctuation">.</span></span><span class="token class-name">OpenAPI</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>v3<span class="token punctuation">.</span>oas<span class="token punctuation">.</span>models<span class="token punctuation">.</span>info<span class="token punctuation">.</span></span><span class="token class-name">Info</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>v3<span class="token punctuation">.</span>oas<span class="token punctuation">.</span>models<span class="token punctuation">.</span>info<span class="token punctuation">.</span></span><span class="token class-name">License</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>  
  

<span class="token annotation punctuation">@Slf4j</span>  
<span class="token annotation punctuation">@Configuration</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Bean</span>  
    <span class="token keyword">public</span> <span class="token class-name">OpenAPI</span> <span class="token function">springShopOpenAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">OpenAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
                <span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&quot;十六进制说&quot;</span><span class="token punctuation">)</span>  
                        <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;十六进制说API文档&quot;</span><span class="token punctuation">)</span>  
                        <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">)</span>  
                        <span class="token punctuation">.</span><span class="token function">license</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">License</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;Apache 2.0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&quot;http://springdoc.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
                <span class="token punctuation">.</span><span class="token function">externalDocs</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ExternalDocumentation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
                        <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;外部文档&quot;</span><span class="token punctuation">)</span>  
                        <span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&quot;https://springshop.wiki.github.org/docs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在application-dev.yml文件中增加：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># springdoc-openapi项目配置，访问地址：http://127.0.0.1:8080/doc.html  </span>
<span class="token key atrule">springdoc</span><span class="token punctuation">:</span>  
  <span class="token key atrule">swagger-ui</span><span class="token punctuation">:</span>  
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /swagger<span class="token punctuation">-</span>ui.html  
    <span class="token key atrule">tags-sorter</span><span class="token punctuation">:</span> alpha  
    <span class="token key atrule">operations-sorter</span><span class="token punctuation">:</span> alpha  
  <span class="token key atrule">api-docs</span><span class="token punctuation">:</span>  
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /v3/api<span class="token punctuation">-</span>docs  
  <span class="token key atrule">group-configs</span><span class="token punctuation">:</span>  
    <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&#39;default&#39;</span>  
      <span class="token key atrule">paths-to-match</span><span class="token punctuation">:</span> <span class="token string">&#39;/**&#39;</span>  
      <span class="token key atrule">packages-to-scan</span><span class="token punctuation">:</span> com.java.trigger

<span class="token comment"># knife4j的增强配置，不需要增强可以不配  </span>
<span class="token comment"># 参考：https://doc.xiaominfo.com/docs/quick-start  </span>
<span class="token comment">#参考：https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-springdoc-openapi-demo  </span>
<span class="token key atrule">knife4j</span><span class="token punctuation">:</span>  
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  
  <span class="token key atrule">setting</span><span class="token punctuation">:</span>  
    <span class="token key atrule">language</span><span class="token punctuation">:</span> zh_cn  
    <span class="token key atrule">swagger-model-name</span><span class="token punctuation">:</span> 实体类列表  
    <span class="token key atrule">home-custom-path</span><span class="token punctuation">:</span>  
  <span class="token key atrule">documents</span><span class="token punctuation">:</span>  
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题1  
      <span class="token key atrule">locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>markdown/*  
      <span class="token key atrule">group</span><span class="token punctuation">:</span> default  
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题2  
      <span class="token key atrule">locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>markdown1/*  
      <span class="token key atrule">group</span><span class="token punctuation">:</span> 用户模块  
  <span class="token key atrule">basic</span><span class="token punctuation">:</span>  
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  
    <span class="token key atrule">username</span><span class="token punctuation">:</span> catcat  
    <span class="token key atrule">password</span><span class="token punctuation">:</span> lisi  
  <span class="token comment"># 自动上传OpenAPI数据源到Knife4jInsight平台中  </span>
  <span class="token comment"># 参考文档：http://knife4j.net  </span>
  <span class="token key atrule">insight</span><span class="token punctuation">:</span>  
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> knife4j<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>openapi3  
    <span class="token key atrule">server</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">10086</span>  
    <span class="token key atrule">secret</span><span class="token punctuation">:</span> BudeU0urM30JTQ+YPZu1GddkG8h0fMgWuYeViSO4Y7Q=  
    <span class="token key atrule">service-name</span><span class="token punctuation">:</span> knife4j<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>openapi3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v={href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/blob/master/knife4j-springdoc-openapi-demo/src/main/java/com/xiaominfo/knife4j/demo/config/SwaggerConfig.java",target:"_blank",rel:"noopener noreferrer"},g=n("ol",{start:"3"},[n("li",null,"运行项目")],-1),b=n("p",null,[s("在浏览器中访问"),n("code",null,"http://localhost:8080/doc.html"),s("，你就能看到 Knife4j 生成的 API 文档啦！")],-1),f=n("p",null,[s("并且你访问："),n("code",null,"http://localhost:8080/swagger-ui.html"),s("，也能查看springdoc接口文档")],-1),h=n("h2",{id:"附件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#附件","aria-hidden":"true"},"#"),s(" 附件")],-1),y=n("p",null,"参考：",-1),_={href:"https://doc.xiaominfo.com/docs/features/enhance",target:"_blank",rel:"noopener noreferrer"},w={href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/blob/master/knife4j-springdoc-openapi-demo/src/main/java/com/xiaominfo/knife4j/demo/config/SwaggerConfig.java",target:"_blank",rel:"noopener noreferrer"},j={href:"https://zhuanlan.zhihu.com/p/637810792",target:"_blank",rel:"noopener noreferrer"};function x(I,q){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,r,n("blockquote",null,[k,n("p",null,[s("参考："),n("a",d,[s("https://doc.xiaominfo.com/docs/quick-start"),t(a)])])]),m,n("p",null,[s("参考："),n("a",v,[s("https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/blob/master/knife4j-springdoc-openapi-demo/src/main/java/com/xiaominfo/knife4j/demo/config/SwaggerConfig.java"),t(a)])]),g,b,f,h,y,n("p",null,[s("官方文档："),n("a",_,[s("https://doc.xiaominfo.com/docs/features/enhance"),t(a)])]),n("p",null,[s("案例参考："),n("a",w,[s("https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/blob/master/knife4j-springdoc-openapi-demo/src/main/java/com/xiaominfo/knife4j/demo/config/SwaggerConfig.java"),t(a)])]),n("p",null,[s("参考："),n("a",j,[s("https://zhuanlan.zhihu.com/p/637810792"),t(a)])])])}const P=e(l,[["render",x],["__file","SpringBoot整合Knife4j.html.vue"]]);export{P as default};
