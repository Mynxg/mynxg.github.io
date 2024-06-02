import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,b as n,d as s,a as t,e as l}from"./app-4191c28c.js";const i={},u=l(`<h2 id="springboot整合xxl-job" tabindex="-1"><a class="header-anchor" href="#springboot整合xxl-job" aria-hidden="true">#</a> SpringBoot整合xxl-job</h2><blockquote><p>前提是本地或者远程启动了xxl-job服务</p></blockquote><ol><li>引入依赖</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--  xxl-job --&gt;  
&lt;dependency&gt;  
    &lt;groupId&gt;com.xuxueli&lt;/groupId&gt;  
    &lt;artifactId&gt;xxl-job-core&lt;/artifactId&gt;  
    &lt;version&gt;2.4.1&lt;/version&gt;  
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.增加配置</p><p>在application-dev.yml中增加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># xxl-job配置  
xxl:  
  job:  
    accessToken: default_token  
    admin:  
      # 调度中心部署跟地址 [选填]：如调度中心集群部署存在多个地址则用逗号分隔。执行器将会使用该地址进行&quot;执行器心跳注册&quot;和&quot;任务结果回调&quot;；为空则关闭自动注册；  
      addresses: http://127.0.0.1:30020/xxl-job-admin  
    executor:  
      # 执行器注册 [选填]：优先使用该配置作为注册地址，为空时使用内嵌服务 ”IP:PORT“ 作为注册地址。从而更灵活的支持容器类型执行器动态IP和动态映射端口问题。  
      address:  
      # 执行器AppName [选填]：执行器心跳注册分组依据；为空则关闭自动注册  
      appname: xxl-job-test  
      # 执行器IP [选填]：默认为空表示自动获取IP，多网卡时可手动设置指定IP，该IP不会绑定Host仅作为通讯实用；地址信息用于 &quot;执行器注册&quot; 和 &quot;调度中心请求并触发任务&quot;；  
      ip:  
      # 执行器端口号 [选填]：小于等于0则自动获取；默认端口为9999，单机部署多个执行器时，注意要配置不同执行器端口；  
      port: 9999  
      # 执行器运行日志文件存储磁盘路径 [选填] ：需要对该路径拥有读写权限；为空则使用默认路径；  
      logpath:  
      # 执行器日志文件保存天数 [选填] ： 过期日志自动清理, 限制值大于等于3时生效; 否则, 如-1, 关闭自动清理功能；  
      logretentiondays: 15  
      # 执行器通讯TOKEN [选填]：非空时启用；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加XxlJobConfig配置：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>executor<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">XxlJobSpringExecutor</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">IpUtil</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>  
  
<span class="token annotation punctuation">@Slf4j</span>  
<span class="token annotation punctuation">@Configuration</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XxlJobConfig</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.admin.addresses}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> adminAddresses<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.accessToken}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> accessToken<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.executor.appname}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> appname<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.executor.address}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.executor.ip}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> ip<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.executor.port}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.executor.logpath}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> logPath<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${xxl.job.executor.logretentiondays}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token keyword">int</span> logRetentionDays<span class="token punctuation">;</span>  
  
  
    <span class="token annotation punctuation">@Bean</span>  
    <span class="token keyword">public</span> <span class="token class-name">XxlJobSpringExecutor</span> <span class="token function">xxlJobExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; xxl-job config init.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">XxlJobSpringExecutor</span> xxlJobSpringExecutor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XxlJobSpringExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setAdminAddresses</span><span class="token punctuation">(</span>adminAddresses<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setAppname</span><span class="token punctuation">(</span>appname<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setIp</span><span class="token punctuation">(</span><span class="token class-name">IpUtil</span><span class="token punctuation">.</span><span class="token function">getIp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setAccessToken</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setLogPath</span><span class="token punctuation">(</span>logPath<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setLogRetentionDays</span><span class="token punctuation">(</span>logRetentionDays<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
        <span class="token keyword">return</span> xxlJobSpringExecutor<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token doc-comment comment">/**  
     * 针对多网卡、容器内部署等情况，可借助 &quot;spring-cloud-commons&quot; 提供的 &quot;InetUtils&quot; 组件灵活定制注册IP；  
     *  
     *      1、引入依赖：  
     *          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
     *             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
     *             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
     *             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>$<span class="token punctuation">{</span>version<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>  
     *         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>  
     *  
     *      2、配置文件，或者容器启动变量  
     *          spring.cloud.inetutils.preferred-networks: &#39;xxx.xxx.xxx.&#39;  
     *     *      3、获取IP  
     *          String ip_ = inetUtils.findFirstNonLoopbackHostInfo().getIpAddress();     */</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.增加任务调用方法<br> SampleXxlJob类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">XxlJobHelper</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>handler<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">XxlJob</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedInputStream</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedReader</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">DataOutputStream</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStreamReader</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">HttpURLConnection</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URL</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>  
  
<span class="token doc-comment comment">/**  
 * XxlJob开发示例（Bean模式）  
 *  
 * 开发步骤：  
 *      1、任务开发：在Spring Bean实例中，开发Job方法；  
 *      2、注解配置：为Job方法添加注解 &quot;@XxlJob(value=&quot;自定义jobhandler名称&quot;, init = &quot;JobHandler初始化方法&quot;, destroy = &quot;JobHandler销毁方法&quot;)&quot;，注解value值对应的是调度中心新建任务的JobHandler属性的值。  
 *      3、执行日志：需要通过 &quot;XxlJobHelper.log&quot; 打印执行日志；  
 *      4、任务结果：默认任务结果为 &quot;成功&quot; 状态，不需要主动设置；如有诉求，比如设置任务结果为失败，可以通过 &quot;XxlJobHelper.handleFail/handleSuccess&quot; 自主设置任务结果；  
 *  
 * <span class="token keyword">@author</span> xuxueli 2019-12-11 21:52:51  
 */</span><span class="token annotation punctuation">@Component</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SampleXxlJob</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">SampleXxlJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  
    <span class="token doc-comment comment">/**  
     * 1、简单任务示例（Bean模式）  
     */</span>  
    <span class="token annotation punctuation">@XxlJob</span><span class="token punctuation">(</span><span class="token string">&quot;demoJobHandler&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">demoJobHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>  
        <span class="token class-name">XxlJobHelper</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;XXL-JOB, Hello World.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token class-name">XxlJobHelper</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beat at:&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token comment">// default success  </span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：<a href="./xxl-job%E4%BD%BF%E7%94%A8">xxl-job使用</a></p><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2>`,13),r=n("br",null,null,-1),k={href:"https://www.cnblogs.com/sowler/p/17350403.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/qq_20957669/article/details/128845865",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("参考："),r,n("a",k,[s("https://www.cnblogs.com/sowler/p/17350403.html"),t(a)])]),n("p",null,[n("a",d,[s("https://blog.csdn.net/qq_20957669/article/details/128845865"),t(a)])])])}const f=p(i,[["render",v],["__file","SpringBoot整合xxx-job.html.vue"]]);export{f as default};
