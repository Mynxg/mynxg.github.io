import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,b as a,d as n,a as t,f as e}from"./app-3b64d3fc.js";const i={},u=e('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>当你的项目中还在使用配置管理定时任务时，为了提高效率，提高可用性，你就需要一个可以可视化的定时任务管理工具来对项目进行管理，而xxl-job就不错的选择。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><h3 id="环境和版本确定" tabindex="-1"><a class="header-anchor" href="#环境和版本确定" aria-hidden="true">#</a> 环境和版本确定</h3><p>这里选择：xxl-job-admin-2.3.1版本、需要用到了jdk1.8</p>',5),r={href:"https://gitee.com/xuxueli0323/xxl-job/tree/2.3.1/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/xuxueli/xxl-job",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.xuxueli.com/xxl-job",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="xxl-job-admin项目配置修改" tabindex="-1"><a class="header-anchor" href="#xxl-job-admin项目配置修改" aria-hidden="true">#</a> xxl-job-admin项目配置修改</h3><p>xxl-job-admin项目中的application.properties<br> 关键配置修改：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">### web  </span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8099  </span>
<span class="token key attr-name">server.servlet.context-path</span><span class="token punctuation">=</span><span class="token value attr-value">/xxl-job-admin  </span>
  
<span class="token comment">### actuator  </span>
<span class="token key attr-name">management.server.servlet.context-path</span><span class="token punctuation">=</span><span class="token value attr-value">/actuator  </span>
<span class="token key attr-name">management.health.mail.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">false  </span>
  
<span class="token comment">### resources  </span>
<span class="token key attr-name">spring.mvc.servlet.load-on-startup</span><span class="token punctuation">=</span><span class="token value attr-value">0  </span>
<span class="token key attr-name">spring.mvc.static-path-pattern</span><span class="token punctuation">=</span><span class="token value attr-value">/static/**  </span>
<span class="token key attr-name">spring.resources.static-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/static/  </span>
  
<span class="token comment">### freemarker  </span>
<span class="token key attr-name">spring.freemarker.templateLoaderPath</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates/  </span>
<span class="token key attr-name">spring.freemarker.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.ftl  </span>
<span class="token key attr-name">spring.freemarker.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8  </span>
<span class="token key attr-name">spring.freemarker.request-context-attribute</span><span class="token punctuation">=</span><span class="token value attr-value">request  </span>
<span class="token key attr-name">spring.freemarker.settings.number_format</span><span class="token punctuation">=</span><span class="token value attr-value">0.##########  </span>
  
<span class="token comment">### mybatis  </span>
<span class="token key attr-name">mybatis.mapper-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/mybatis-mapper/*Mapper.xml  </span>
<span class="token comment">#mybatis.type-aliases-package=com.xxl.job.admin.core.model  </span>
  
<span class="token comment">### xxl-job, datasource  </span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai  </span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root  </span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">root  </span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver  </span>
  
<span class="token comment">### datasource-pool  </span>
<span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.zaxxer.hikari.HikariDataSource  </span>
<span class="token key attr-name">spring.datasource.hikari.minimum-idle</span><span class="token punctuation">=</span><span class="token value attr-value">10  </span>
<span class="token key attr-name">spring.datasource.hikari.maximum-pool-size</span><span class="token punctuation">=</span><span class="token value attr-value">30  </span>
<span class="token key attr-name">spring.datasource.hikari.auto-commit</span><span class="token punctuation">=</span><span class="token value attr-value">true  </span>
<span class="token key attr-name">spring.datasource.hikari.idle-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">30000  </span>
<span class="token key attr-name">spring.datasource.hikari.pool-name</span><span class="token punctuation">=</span><span class="token value attr-value">HikariCP  </span>
<span class="token key attr-name">spring.datasource.hikari.max-lifetime</span><span class="token punctuation">=</span><span class="token value attr-value">900000  </span>
<span class="token key attr-name">spring.datasource.hikari.connection-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">10000  </span>
<span class="token key attr-name">spring.datasource.hikari.connection-test-query</span><span class="token punctuation">=</span><span class="token value attr-value">SELECT 1  </span>
  
<span class="token comment">### xxl-job, email  </span>
<span class="token key attr-name">spring.mail.host</span><span class="token punctuation">=</span><span class="token value attr-value">smtp.qq.com  </span>
<span class="token key attr-name">spring.mail.port</span><span class="token punctuation">=</span><span class="token value attr-value">25  </span>
<span class="token key attr-name">spring.mail.username</span><span class="token punctuation">=</span><span class="token value attr-value">xxx@qq.com  </span>
<span class="token key attr-name">spring.mail.password</span><span class="token punctuation">=</span><span class="token value attr-value">xxx  </span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.auth</span><span class="token punctuation">=</span><span class="token value attr-value">true  </span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.starttls.enable</span><span class="token punctuation">=</span><span class="token value attr-value">true  </span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.starttls.required</span><span class="token punctuation">=</span><span class="token value attr-value">true  </span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.socketFactory.class</span><span class="token punctuation">=</span><span class="token value attr-value">javax.net.ssl.SSLSocketFactory  </span>
  
<span class="token comment">### xxl-job, access token  </span>
<span class="token key attr-name">xxl.job.accessToken</span><span class="token punctuation">=</span><span class="token value attr-value">default_token</span>
  
<span class="token comment">### xxl-job, i18n (default is zh_CN, and you can choose &quot;zh_CN&quot;, &quot;zh_TC&quot; and &quot;en&quot;)  </span>
<span class="token key attr-name">xxl.job.i18n</span><span class="token punctuation">=</span><span class="token value attr-value">zh_CN  </span>
  
<span class="token comment">## xxl-job, triggerpool max size  </span>
<span class="token key attr-name">xxl.job.triggerpool.fast.max</span><span class="token punctuation">=</span><span class="token value attr-value">200  </span>
<span class="token key attr-name">xxl.job.triggerpool.slow.max</span><span class="token punctuation">=</span><span class="token value attr-value">100  </span>
  
<span class="token comment">### xxl-job, log retention days  </span>
<span class="token key attr-name">xxl.job.logretentiondays</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：目前只需要修改端口、数据库连接地址（用户名、密码）、accessToken</p></blockquote><h2 id="项目整合xxl-job" tabindex="-1"><a class="header-anchor" href="#项目整合xxl-job" aria-hidden="true">#</a> 项目整合xxl-job</h2><blockquote><p>项目环境：jdk1.8、idea2022.2.2</p></blockquote><h3 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构" aria-hidden="true">#</a> 项目目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
project      # 项目名称
├── src
│        └── com   # 存放Java源代码
│                   └── example
│                              └── Foo.java
├──  resources   # 存放项目所需的资源（例如配置文件等）
└── webapp   # 存放Web应用程序的文件 （名称可自定义）
│          └── WEB-INF
│                        ├── lib   # 存放jar包的地方
│                        ├── web.xml   # 项目的主配置文件
│                        └── views   # 存放JSP页面和静态资源
├── test  # # 存放测试代码
└── README.md   # 项目的说明文档
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖添加" tabindex="-1"><a class="header-anchor" href="#依赖添加" aria-hidden="true">#</a> 依赖添加</h3><p>记得将xxl-job-core-2.3.1.jar引入到项目lib中。</p><blockquote><p>如你使用的maven，那就添加对应的依赖到pom.xml</p></blockquote><h3 id="配置修改" tabindex="-1"><a class="header-anchor" href="#配置修改" aria-hidden="true">#</a> 配置修改</h3><p>修改对应的配置在resouce目录下可自行修改</p><blockquote><p>如你使用的是springboot项目，那就容易多了，就不需要这么繁琐的配置文件了。</p></blockquote><h4 id="xxl-job-executor-properties" tabindex="-1"><a class="header-anchor" href="#xxl-job-executor-properties" aria-hidden="true">#</a> xxl-job-executor.properties</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">### xxl-job admin address list, such as &quot;http://address&quot; or &quot;http://address01,http://address02&quot;  </span>
<span class="token key attr-name">xxl.job.admin.addresses</span><span class="token punctuation">=</span><span class="token value attr-value">http://127.0.0.1:8099/xxl-job-admin  </span>
  
<span class="token comment">### xxl-job, access token  </span>
<span class="token key attr-name">xxl.job.accessToken</span><span class="token punctuation">=</span><span class="token value attr-value">default_token  </span>
  
<span class="token comment">### xxl-job executor appname  </span>
<span class="token key attr-name">xxl.job.executor.appname</span><span class="token punctuation">=</span><span class="token value attr-value">xxl-job-executor-sample  </span>
<span class="token comment">### xxl-job executor registry-address: default use address to registry , otherwise use ip:port if address is null  </span>
<span class="token key attr-name">xxl.job.executor.address</span><span class="token punctuation">=</span>  
<span class="token comment">### xxl-job executor server-info  </span>
<span class="token key attr-name">xxl.job.executor.ip</span><span class="token punctuation">=</span>  
<span class="token key attr-name">xxl.job.executor.port</span><span class="token punctuation">=</span><span class="token value attr-value">9999  </span>
<span class="token comment">### xxl-job executor log-path  </span>
<span class="token key attr-name">xxl.job.executor.logpath</span><span class="token punctuation">=</span><span class="token value attr-value">/data/applogs/xxl-job/jobhandler  </span>
<span class="token comment">### xxl-job executor log-retention-days  </span>
<span class="token key attr-name">xxl.job.executor.logretentiondays</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>xxl.job.admin.addresses ：与启动xxl-job-admin项目启动运行的地址对应</p><p>xxl.job.accessToken： 与启动xxl-job-admin项目中配置的accessToken对应</p><p>xxl.job.executor.appname：执行器的名称自定义，后面配置xxl-job执行器管理会使用到</p></blockquote><h4 id="applicationcontext-xxl-job-xml" tabindex="-1"><a class="header-anchor" href="#applicationcontext-xxl-job-xml" aria-hidden="true">#</a> applicationcontext-xxl-job.xml</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>  
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>  
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span>  
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans  
           http://www.springframework.org/schema/beans/spring-beans.xsd           http://www.springframework.org/schema/context           http://www.springframework.org/schema/context/spring-context.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
  
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>propertyConfigurer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.context.support.PropertySourcesPlaceholderConfigurer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileEncoding<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locations<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list</span><span class="token punctuation">&gt;</span></span>            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>classpath*:xxl-job-executor.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>  
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list</span><span class="token punctuation">&gt;</span></span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>  
    <span class="token comment">&lt;!-- ********************************* 基础配置 ********************************* --&gt;</span>  
   <span class="token comment">&lt;!-- 配置01、JobHandler 扫描路径，更改为自己新建的SampleXxlJob类所在包的路径 --&gt;</span>  
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.xxl.job.executor.service.jobhandler<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
  
   <span class="token comment">&lt;!-- 配置02、执行器 --&gt;</span>  
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxlJobSpringExecutor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.xxl.job.core.executor.impl.XxlJobSpringExecutor<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>  
      <span class="token comment">&lt;!-- 执行器注册中心地址[选填]，为空则关闭自动注册 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>adminAddresses<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.admin.addresses}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token comment">&lt;!-- 访问令牌[选填]，非空则进行匹配校验 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accessToken<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.accessToken}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token comment">&lt;!-- 执行器AppName[选填]，为空则关闭自动注册 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appname<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.executor.appname}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token comment">&lt;!-- 注册地址[选填]，优先使用该配置作为注册地址，为空时使用内嵌服务 ”IP:PORT“ 作为注册地址 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.executor.address}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token comment">&lt;!-- 执行器IP[选填]，为空则自动获取 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ip<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.executor.ip}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token comment">&lt;!-- 执行器端口号[选填]，小于等于0则自动获取 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>port<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.executor.port}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token comment">&lt;!-- 执行器日志路径[选填]，为空则使用默认路径 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logPath<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.executor.logpath}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
      <span class="token comment">&lt;!-- 日志保存天数[选填]，值大于3时生效 --&gt;</span>  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logRetentionDays<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${xxl.job.executor.logretentiondays}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里只需要修改： &lt;context:component-scan base-package=&quot;com.xxl.job.executor.service.jobhandler&quot; /&gt; 对应的扫描包</p></blockquote><h4 id="xxljob开发示例类" tabindex="-1"><a class="header-anchor" href="#xxljob开发示例类" aria-hidden="true">#</a> XxlJob开发示例类</h4><p>SampleXxlJob</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.xxl.job.executor.service.jobhandler;  
  
import com.xxl.job.core.biz.model.ReturnT;  
import com.xxl.job.core.handler.annotation.XxlJob;  
import org.slf4j.Logger;  
import org.slf4j.LoggerFactory;  
import org.springframework.stereotype.Component;  
  
import java.util.concurrent.TimeUnit;  
  
/**  
 * XxlJob开发示例（Bean模式）  
 *  
 * 开发步骤：  
 * 1、在Spring Bean实例中，开发Job方法，方式格式要求为 &quot;public ReturnT&lt;String&gt; execute(String param)&quot;  
 * 2、为Job方法添加注解 &quot;@XxlJob(value=&quot;自定义jobhandler名称&quot;, init = &quot;JobHandler初始化方法&quot;, destroy = &quot;JobHandler销毁方法&quot;)&quot;，注解value值对应的是调度中心新建任务的JobHandler属性的值。  
 * 3、执行日志：需要通过 &quot;XxlJobLogger.log&quot; 打印执行日志；  
 */  
@Component  
public class SampleXxlJob {  
    private static Logger logger = LoggerFactory.getLogger(SampleXxlJob.class);  
    /**  
     * 1、简单任务示例（Bean模式）  
     */  
    @XxlJob(&quot;demoJobHandler&quot;)  
    public ReturnT&lt;String&gt; demoJobHandler(String param) throws Exception {  
  
        for (int i = 0; i &lt; 5; i++) {  
            logger.info(&quot;test:&quot;+i);  
            TimeUnit.SECONDS.sleep(2);  
        }  
        return ReturnT.SUCCESS;  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>@XxlJob(&quot;demoJobHandler&quot;) ：这里的demoJobHandler会在任务管理器中使用到。<br> 当你执行点执行时，就会触发demoJobHandler方法</p></blockquote><h4 id="web-xml" tabindex="-1"><a class="header-anchor" href="#web-xml" aria-hidden="true">#</a> web.xml</h4><p>原本的web.xml配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;context-param&gt;
	&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
	&lt;param-value&gt;classpath:applicationContext.xml&lt;/param-value&gt;
&lt;/context-param&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>web.xml修改后为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;context-param&gt;
	&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
	&lt;param-value&gt;classpath*:applicationContext-*.xml&lt;/param-value&gt;
&lt;/context-param&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里时匹配applicationContext前缀的xml文件，进行加载对应的配置。</p></blockquote><h2 id="xxl-job使用" tabindex="-1"><a class="header-anchor" href="#xxl-job使用" aria-hidden="true">#</a> xxl-job使用</h2><p>参考我的另外一篇教程。</p><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2><p>最后说明一下项目，本项目是使用eclipse编写的，如使用idea打开，就需要修改相应的环境配置，使用的技术栈有：spring、mybaits、Oracle、mongdb、quartz等。在整合xxl-job时，并不能直接按照项目来配置。</p>`,34);function k(b,x){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,a("p",null,[n("项目地址："),a("a",r,[n("https://gitee.com/xuxueli0323/xxl-job/tree/2.3.1/"),t(s)])]),a("blockquote",null,[a("p",null,[n("项目地址："),a("a",d,[n("xuxueli/xxl-job: A distributed task scheduling framework.（分布式任务调度平台XXL-JOB） (github.com)"),t(s)])]),a("p",null,[n("官方文档："),a("a",m,[n("https://www.xuxueli.com/xxl-job"),t(s)])])]),v])}const q=l(i,[["render",k],["__file","spring项目整合xxl-job.html.vue"]]);export{q as default};
