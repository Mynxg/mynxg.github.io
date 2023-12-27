import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,b as e,d as n,a as t,f as l}from"./app-b18543a5.js";const o={},c=l(`<h2 id="问题1-提示1251-client-does-not-support-authentication-protocol-requested-by-server" tabindex="-1"><a class="header-anchor" href="#问题1-提示1251-client-does-not-support-authentication-protocol-requested-by-server" aria-hidden="true">#</a> 问题1-提示1251- Client does not support authentication protocol requested by server</h2><p>原因：mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password,</p><p>解决办法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方法1.升级navicat驱动；

方法2.把mysql用户登录密码加密规则还原成mysql_native_password. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令方式解决：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方法1：
# 更新user为root，host为% 的密码为123456
ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;

 # 更新user为root，host为localhost 的密码为123456
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;

# 方法2：
# 修改加密规则 （这行我没有写，不过貌似也可以）
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;password&#39; PASSWORD EXPIRE NEVER; 
# 更新一下用户的密码 
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;password&#39;; 
 #刷新权限
FLUSH PRIVILEGES; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2>`,7),v={href:"https://blog.csdn.net/pengfeng111833/article/details/124399404",target:"_blank",rel:"noopener noreferrer"},u={href:"https://huaweicloud.csdn.net/63355d9ed3efff3090b54464.html",target:"_blank",rel:"noopener noreferrer"};function p(m,h){const s=i("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[n("参考："),e("a",v,[n("https://blog.csdn.net/pengfeng111833/article/details/124399404"),t(s)])]),e("p",null,[n("参考2："),e("a",u,[n("https://huaweicloud.csdn.net/63355d9ed3efff3090b54464.html"),t(s)])])])}const E=a(o,[["render",p],["__file","question.html.vue"]]);export{E as default};
