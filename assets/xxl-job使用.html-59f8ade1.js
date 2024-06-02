import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as i,b as a,d as n,a as r,e as o}from"./app-4191c28c.js";const p="/assets/2023-10-19_11-00-43-21732f61.png",c="/assets/2023-10-19_11-02-22-a226ad71.png",u="/assets/2023-10-19_11-03-38-1e666347.png",d="/assets/2023-10-19_11-04-31-57377114.png",m="/assets/2023-10-19_11-07-25-ab8c46e1.png",v="/assets/2023-10-19_11-16-26-203dcf89.png",k="/assets/2023-10-19_11-18-58-bd1999a3.png",b="/assets/2023-10-19_11-19-18-66a2b3e4.png",x="/assets/2023-10-19_11-19-54-0af9975f.png",g="/assets/2023-10-19_11-21-35-297f902f.png",h={},y=a("blockquote",null,[a("p",null,"这里使用xxl-job-admin 2.3.1版本做演示")],-1),f={href:"http://127.0.0.1:8098/xxl-job-admin",target:"_blank",rel:"noopener noreferrer"},_=o(`<blockquote><p>端口跟application.properties 配置对应上，默认的用户名：admin<br> 密码：123456</p></blockquote><h2 id="导入数据库" tabindex="-1"><a class="header-anchor" href="#导入数据库" aria-hidden="true">#</a> 导入数据库</h2><blockquote><p>xxl-job使用的是mysql数据库，版本是mysql5.7或者使用mysql8都可以</p></blockquote><p>将xxl-job项目中的对应版本的对应数据库，导入到mysql数据库中。</p><h2 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h2><p>如：数据库名为：xxl_job<br> 则application.properties配置中连接的url为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai  
spring.datasource.username=root  
spring.datasource.password=root  
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>与自己的数据库的用户名对应上</p></blockquote><h2 id="启动xxl-job项目" tabindex="-1"><a class="header-anchor" href="#启动xxl-job项目" aria-hidden="true">#</a> 启动xxl-job项目</h2><p>xxl-job-admin项目中的application.properties<br> 关键配置修改：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">### web  </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：目前只需要修改端口、数据库连接地址（用户名、密码）、accessToken</p></blockquote><h2 id="配置任务调度" tabindex="-1"><a class="header-anchor" href="#配置任务调度" aria-hidden="true">#</a> 配置任务调度</h2><p>找到执行器：<br> 添加xxl.job.executor.appname配置对应的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xxl.job.executor.appname=xxl-job-executor-sample  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>配置好，点击保存：<br><img src="'+u+'" alt="" loading="lazy"></p><p>效果：<br><img src="'+d+'" alt="" loading="lazy"></p><p>在任务管理中新增任务，配置如下：</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="运行案例" tabindex="-1"><a class="header-anchor" href="#运行案例" aria-hidden="true">#</a> 运行案例</h2><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>记得修改对应配置</p></blockquote><p>案例配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># web port  
server.port=8079  
# no web  
#spring.main.web-environment=false  
  
# log config  
logging.config=classpath:logback.xml  
  
  
### xxl-job admin address list, such as &quot;http://address&quot; or &quot;http://address01,http://address02&quot;  
xxl.job.admin.addresses=http://127.0.0.1:8098/xxl-job-admin  
  
### xxl-job, access token  
xxl.job.accessToken=default_token  
  
### xxl-job executor appname  
xxl.job.executor.appname=xxl-job-executor-sample  
### xxl-job executor registry-address: default use address to registry , otherwise use ip:port if address is null  
xxl.job.executor.address=  
### xxl-job executor server-info  
xxl.job.executor.ip=  
xxl.job.executor.port=9999  
### xxl-job executor log-path  
xxl.job.executor.logpath=/data/applogs/xxl-job/jobhandler  
### xxl-job executor log-retention-days  
xxl.job.executor.logretentiondays=30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后自动注册到执行器管理对应的配置中：<br><img src="`+k+'" alt="" loading="lazy"></p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在任务管理中执行该任务：<br> 点击执行一次，测试是否调度成功<br><img src="'+x+'" alt="" loading="lazy"></p><p>在调度日志中查看当前的记录：<br><img src="'+g+'" alt="" loading="lazy"></p>',30);function j(q,z){const s=t("ExternalLinkIcon");return l(),i("div",null,[y,a("p",null,[n("xxl-job访问地址："),a("a",f,[n("http://127.0.0.1:8098/xxl-job-admin"),r(s)])]),_])}const S=e(h,[["render",j],["__file","xxl-job使用.html.vue"]]);export{S as default};
