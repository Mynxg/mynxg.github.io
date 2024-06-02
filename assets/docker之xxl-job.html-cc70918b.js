import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-4191c28c.js";const a="/assets/2023-12-27_10-20-02-6c54189b.png",r="/assets/2023-12-27_10-21-43-b374e7bd.png",l={},d=s(`<h2 id="xxl-job" tabindex="-1"><a class="header-anchor" href="#xxl-job" aria-hidden="true">#</a> xxl-job</h2><p>拉取镜像：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull xuxueli/xxl-job-admin:2.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name=xxl-job-admin \\
-p 8088:8080 \\
-v /root/docker-data/xxl-job/application.properties:/application.properties \\
-v /root/docker-data/xxl-job/applogs:/data/applogs \\
xuxueli/xxl-job-admin:2.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>/root/docker-data/xxl-job/application.properties 其中的application.properties文件需要从xxl-job项目中拿到，并需要要修改数据库连接账号密码，然后就是</p></blockquote><p>application.properties</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### web
server.port=8080
server.servlet.context-path=/xxl-job-admin

### actuator
management.server.servlet.context-path=/actuator
management.health.mail.enabled=false

### resources
spring.mvc.servlet.load-on-startup=0
spring.mvc.static-path-pattern=/static/**
spring.resources.static-locations=classpath:/static/

### freemarker
spring.freemarker.templateLoaderPath=classpath:/templates/
spring.freemarker.suffix=.ftl
spring.freemarker.charset=UTF-8
spring.freemarker.request-context-attribute=request
spring.freemarker.settings.number_format=0.##########

### mybatis
mybatis.mapper-locations=classpath:/mybatis-mapper/*Mapper.xml
#mybatis.type-aliases-package=com.xxl.job.admin.core.model

### xxl-job, datasource
spring.datasource.url=jdbc:mysql://172.17.0.1:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai
spring.datasource.username=root
spring.datasource.password=123456
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

### datasource-pool
spring.datasource.type=com.zaxxer.hikari.HikariDataSource
spring.datasource.hikari.minimum-idle=10
spring.datasource.hikari.maximum-pool-size=30
spring.datasource.hikari.auto-commit=true
spring.datasource.hikari.idle-timeout=30000
spring.datasource.hikari.pool-name=HikariCP
spring.datasource.hikari.max-lifetime=900000
spring.datasource.hikari.connection-timeout=10000
spring.datasource.hikari.connection-test-query=SELECT 1
spring.datasource.hikari.validation-timeout=1000

### xxl-job, email
spring.mail.host=smtp.qq.com
spring.mail.port=25
spring.mail.username=xxx@qq.com
spring.mail.from=xxx@qq.com
spring.mail.password=xxx
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
spring.mail.properties.mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory

### xxl-job, access token
xxl.job.accessToken=default_token

### xxl-job, i18n (default is zh_CN, and you can choose &quot;zh_CN&quot;, &quot;zh_TC&quot; and &quot;en&quot;)
xxl.job.i18n=zh_CN

## xxl-job, triggerpool max size
xxl.job.triggerpool.fast.max=200
xxl.job.triggerpool.slow.max=100

### xxl-job, log retention days
xxl.job.logretentiondays=30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xxl-job连接数据库问题" tabindex="-1"><a class="header-anchor" href="#xxl-job连接数据库问题" aria-hidden="true">#</a> xxl-job连接数据库问题</h3><p>背景：</p><p>在项目中需要定时任务调度，需要在docker容器中安装xxl-job</p><p>遇到的问题</p><p>部署成功后，可以访问xxl-job登录界面，点登录没反应，但过一段时间就弹出数据库拒绝连接，说MyBatis连接用户失败</p><p>原因：</p><p>在docker容器中，不同容器直接是相互隔离互不影响的，如果使用localhost、或者127.0.0.1是无法生效的。</p><p>解决方法：</p><p>思路：</p><p>1、先检查需要连接的数据库用户名和密码是否正确</p><p>2、如果是docker中不同容器之间的连接访问，就需要检查服务器内网地址。</p><p>3、检测映射的端口是否对应</p><p>方法：</p><p>查看服务器内网ip地址：<br><img src="`+a+`" alt="" loading="lazy"></p><p>修改application.properties配置：</p><p>数据库连接地址和密码</p><p>或者使用：容器名加端口号的方式访问，例如我的mysql数据库的容器名是 n_mysql</p><p>则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring.datasource.url=jdbc:mysql://n_mysql:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：这些操作都是在同一服务器上操作的</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在操作这些步骤中，可能有其他原因：</p><p>1、是否在同一服务器中操作的，不同服务器之间就不能直接使用局域网ip地址，需要使用公网ip进行访问连接数据库</p><p>2、在创建容器时，映射地址是否正确（不限于，路径名称）</p><p>3、检测防火墙是否放行相应的端口，不过都能访问后台地址了，不会是防火墙的问题</p><p>扩展：</p><blockquote><p>docker内的应用访问宿主机上的mysql和Redis<br> 背景：宿主机部署MySQL、Redis，docker内部署tomcat、jdk<br> 需求：tomcat内的应用访问宿主机的MySQL和Redis<br> 方法：<br> 一、连接地址切记不能用localhost和127.0.0.1<br> 这些地址代表的都是容器内的系统，根本没有访问到宿主机，会一直报连接mysql/redis异常。<br> 二、用docker的虚拟网卡地址<br> 在宿主机查询网卡情况------ifconfig<br> docker0这块虚拟网卡的 inet 地址就是正确的本地ip(如172.17.0.1)</p></blockquote>',35),t=[d];function c(o,m){return i(),n("div",null,t)}const u=e(l,[["render",c],["__file","docker之xxl-job.html.vue"]]);export{u as default};
