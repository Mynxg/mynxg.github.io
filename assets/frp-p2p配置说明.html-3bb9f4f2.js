import{aP as i,Q as l,S as r,U as n,ac as s,ae as a,aQ as o,E as p}from"./framework-1a3f7ddc.js";const c={},t=o(`<h2 id="标准的配置文件" tabindex="-1"><a class="header-anchor" href="#标准的配置文件" aria-hidden="true">#</a> 标准的配置文件</h2><p>访问者、被访问者都修改frpc.ini,中间的媒婆服务器修改frps.ini，其中的c就是client客户端，s指server服务器。</p><p>被访问者：frpc.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
<span class="token comment"># 这里是客户端配置，server_addr后写本客户端要连接的服务器的IP地址,默认是0.0.0.0</span>
server_addr <span class="token operator">=</span> 服务器IP
server_port <span class="token operator">=</span> <span class="token number">7000</span>
<span class="token comment"># 鉴权使用的 token 值，可以自定义</span>
token <span class="token operator">=</span> abc123123
<span class="token comment">#  启用 TLS 协议加密连接</span>
tls_enable <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token punctuation">[</span>rdp<span class="token punctuation">]</span> 
<span class="token builtin class-name">type</span> <span class="token operator">=</span> stcp
<span class="token comment">#  这部分是代理配置，将type改为stcp类型的代理</span>
<span class="token comment"># sk是密钥，可以自定义。服务端和访问端的密钥需要一致，访问端才能访问到服务端</span>
sk <span class="token operator">=</span> abcd1234
<span class="token comment">#  不需要写远端端口(remote_port)，因为代理的是本地的3389端口</span>
local_ip <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
local_port <span class="token operator">=</span> <span class="token number">3389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器：frps.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
<span class="token comment">#  服务端监听地址,0.0.0.0代表此时服务器监听所有发来请求的客户端的IP</span>
bind_addr <span class="token operator">=</span> <span class="token number">0.0</span>.0.0
bind_port <span class="token operator">=</span> <span class="token number">7000</span>
dashboard_port <span class="token operator">=</span> <span class="token number">7500</span>
dashboard_user <span class="token operator">=</span> admin
dashboard_pwd <span class="token operator">=</span> 这里写自己的仪表板admin账户的密码
token <span class="token operator">=</span> <span class="token number">123456</span>

tcp_mux <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">#  日志文件地址</span>
log_file <span class="token operator">=</span> /root/frp/log/frps.log
<span class="token comment"># 日志等级,分为trace, debug, info, warn, error</span>
log_level <span class="token operator">=</span> info
<span class="token comment"># 日志文件保留天数,我保留5天</span>
log_max_days <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问者：frpc.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
server_addr <span class="token operator">=</span> 服务器的公网IP地址
server_port <span class="token operator">=</span> 服务器暴露给公网的端口，建议数值尽量大些的非知名端口
<span class="token comment">#  token需要和服务端设置一样的值才能鉴权通过</span>
token <span class="token operator">=</span> abc123123
<span class="token comment">#  启用 TLS 协议加密连接</span>
tls_enable <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token punctuation">[</span>rdp_visitor<span class="token punctuation">]</span> 
<span class="token builtin class-name">type</span> <span class="token operator">=</span> stcp
<span class="token comment">#  角色，server是服务端，visitor表示访问端。默认值是server,所以前面的服务器配置可没这一行</span>
role <span class="token operator">=</span> visitor
<span class="token comment">#  要访问的 stcp 代理的名字</span>
server_name <span class="token operator">=</span> rdp
sk <span class="token operator">=</span> abcd1234
<span class="token comment">#  注意sk 要一致，访问者和被访问者的密钥一致，访问者才能和被访问者建立连接</span>
<span class="token comment">#  绑定本地端口用于访问 远程桌面 服务，这里理解为访问者作为客户端，访问被访问者（目的服务器，不是中间的代理服务器）</span>
bind_addr <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
bind_port <span class="token operator">=</span> <span class="token number">9090</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="个人配置文件" tabindex="-1"><a class="header-anchor" href="#个人配置文件" aria-hidden="true">#</a> 个人配置文件</h2><p>被访问者：frpc.ini</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
# 这里是客户端配置，server_addr后写本客户端要连接的服务器(服务端)的IP地址,默认是0.0.0.0
server_addr = 服务器ip地址（公网ip地址）
server_port = 7000
authentication_method = token
# 鉴权使用的 token 值，可以自定义
token = abc123123

# mstsc直接输入公网的IP和端口就能远程       
[rdp] 
type = tcp
local_ip = 127.0.0.1
local_port = 3389
# 远程端口
remote_port = 7002

[p2p_rdp]
#  这部分是代理配置，将type改为stcp类型的代理
type = stcp
# sk是密钥，可以自定义。服务端和访问端的密钥需要一致，访问端才能访问到服务端
sk = cue121212
#  不需要写远端端口(remote_port)，因为代理的是本地的3389端口
local_ip = 127.0.0.1
local_port = 3389
# 启用后该代理和服务端之间的通信内容都会被加密传输
use_encryption = false
use_compression = false

[p2p_rdp_xtcp]
type = xtcp
sk = cue121212
local_ip = 127.0.0.1
local_port = 3389
# 启用后该代理和服务端之间的通信内容都会被加密传输
use_encryption = false
use_compression = false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mstsc表示远程桌面的命令行指令_mstsc_，原来它的意思是Microsoft Terminal Server Connection微软终端服务器连接的缩写。</p></blockquote><p>服务器：frps.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
<span class="token comment">#  服务端监听地址,0.0.0.0代表此时服务器监听所有发来请求的客户端的IP</span>
<span class="token comment"># 还可以写127.0.0.1</span>
binf_addr <span class="token operator">=</span> <span class="token number">0.0</span>.0.0
<span class="token comment"># 服务端端口</span>
bind_port <span class="token operator">=</span> <span class="token number">7000</span>
bind_udp_port <span class="token operator">=</span> <span class="token number">7000</span>

authentication_method <span class="token operator">=</span> token
<span class="token comment"># 认证Token的值包含字母大小写数字等</span>
token <span class="token operator">=</span> abc123123

<span class="token comment"># 可视化面板</span>
<span class="token comment"># 面板用户名</span>
dashboard_user <span class="token operator">=</span> admin
<span class="token comment"># 这里写自己的面板板admin账户的密码</span>
dashboard_pwd <span class="token operator">=</span> <span class="token number">123456</span>
<span class="token comment"># 面板端口</span>
dashboard_port <span class="token operator">=</span> <span class="token number">7500</span>

<span class="token comment"># 超时时间为秒，如果没有报错，可以不设置</span>
heartbeat_timeout <span class="token operator">=</span> <span class="token number">90</span>

user_conn_timeout <span class="token operator">=</span> <span class="token number">60</span>

vhost_http_timeout <span class="token operator">=</span> <span class="token number">90</span>

tcp_mux <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment"># 日志文件地址</span>
log_file <span class="token operator">=</span> /root/frp/log/frps.log
<span class="token comment">#  日志等级,分为trace, debug, info, warn, error</span>
log_level <span class="token operator">=</span> info
<span class="token comment"># 日志文件保留天数,我保留5天</span>
log_max_days <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问者：frpc.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
<span class="token comment"># 服务器的公网IP地址</span>
server_addr <span class="token operator">=</span> 服务器ip地址（公网ip地址）
<span class="token comment"># 服务器暴露给公网的端口，建议数值尽量大些的非知名端口</span>
server_port <span class="token operator">=</span> <span class="token number">7000</span>
authentication_method <span class="token operator">=</span> token
<span class="token comment">#  token需要和服务端设置一样的值才能鉴权通过</span>
token <span class="token operator">=</span> abc123123

<span class="token punctuation">[</span>p2p_rdp_visitor<span class="token punctuation">]</span>
<span class="token comment">#  角色：server是服务端，visitor表示访问端。默认值是server，所以前面的服务器配置可没这一行</span>
role <span class="token operator">=</span> visitor
<span class="token builtin class-name">type</span> <span class="token operator">=</span> stcp
<span class="token comment">#  要访问的 stcp 代理的名字</span>
server_name <span class="token operator">=</span> p2p_rdp
<span class="token comment">#  注意sk 要一致，访问者和被访问者的密钥一致，访问者才能和被访问者建立连接</span>
sk <span class="token operator">=</span> cue121212
<span class="token comment">#  绑定本地端口用于访问 远程桌面 服务，这里理解为访问者作为客户端，访问被访问者（目的服务器，不是中间的代理服务器）</span>
bind_addr <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
bind_port <span class="token operator">=</span> <span class="token number">9090</span>
<span class="token comment"># 启用后该代理和服务端之间的通信内容都会被加密传输</span>
use_encryption <span class="token operator">=</span> <span class="token boolean">false</span>
use_compression <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token punctuation">[</span>p2p_rdp_visitor2<span class="token punctuation">]</span>
<span class="token comment">#  角色：server是服务端，visitor表示访问端。默认值是server，所以前面的服务器配置可没这一行</span>
role <span class="token operator">=</span> visitor
<span class="token builtin class-name">type</span> <span class="token operator">=</span> xtcp
<span class="token comment">#  要访问的 stcp 代理的名字</span>
server_name <span class="token operator">=</span> p2p_rdp_xtcp
<span class="token comment">#  注意sk 要一致，访问者和被访问者的密钥一致，访问者才能和被访问者建立连接</span>
sk <span class="token operator">=</span> cue121212
<span class="token comment">#  绑定本地端口用于访问 远程桌面 服务，这里理解为访问者作为客户端，访问被访问者（目的服务器，不是中间的代理服务器）</span>
bind_addr <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
bind_port <span class="token operator">=</span> <span class="token number">9091</span>
<span class="token comment"># 启用后该代理和服务端之间的通信内容都会被加密传输</span>
use_encryption <span class="token operator">=</span> <span class="token boolean">false</span>
use_compression <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="win客户端后台运行及开机自启" tabindex="-1"><a class="header-anchor" href="#win客户端后台运行及开机自启" aria-hidden="true">#</a> win客户端后台运行及开机自启</h2><blockquote><p>frpc运行时始终有一个命令行窗口运行在前台，影响美观，我们可以使用一个批处理文件来将其运行在后台，而且可以双击执行，每次打开frpc不用再自己输命令了。<br> 在任何一个目录下新建一个文本文件并将其重命名为“frpc.bat”，编辑，粘贴如下内容并保存。</p></blockquote><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off 
if &quot;%1&quot; == &quot;h&quot; goto begin 
mshta vbscript:createobject(&quot;wscript.shell&quot;).run(&quot;&quot;&quot;%~nx0&quot;&quot; h&quot;,0)(window.close)&amp;
:begin 
REM 
cd C:\\frp 
frpc -c frpc.ini 
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将cd后的路径更改为你的frpc实际存放的目录。</p></blockquote><blockquote><p>之后直接运行这个 .bat 文件即可启动frpc并隐藏窗口（可在任务管理器中退出）。<br> 至于开机启动，把这个 .bat 文件直接扔进Windows的开机启动文件夹就好了 😃<br> 至此，客户端配置完成，之后就是你自己根据需要在frpc.ini后追加规则即可。<br> 强烈建议你在使用frp直接测试内网穿透前，先在局域网内测试好相关功能的正常使用，并配置好可能会影响的Windows防火墙等内容，在内网调试通过后再使用frp进行内网穿透测试。</p></blockquote>`,21),d={href:"https://www.cnblogs.com/shengruxiahuaya/p/17150459.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.vuar.cn/index.php/archives/74/",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"附件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#附件","aria-hidden":"true"},"#"),s(" 附件")],-1),u={href:"https://zhuanlan.zhihu.com/p/575316935",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gofrp.org/docs/features/xtcp/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://doc.natfrp.com/app/xtcp.html",target:"_blank",rel:"noopener noreferrer"};function _(h,f){const e=p("ExternalLinkIcon");return l(),r("div",null,[t,n("p",null,[s("windows开机自启动bat文件： "),n("a",d,[s("https://www.cnblogs.com/shengruxiahuaya/p/17150459.html"),a(e)])]),n("p",null,[s("开机自启可以参考："),n("a",v,[s("https://www.vuar.cn/index.php/archives/74/"),a(e)])]),m,n("p",null,[s("参考："),n("a",u,[s("https://zhuanlan.zhihu.com/p/575316935"),a(e)])]),n("p",null,[s("xtcp使用解释："),n("a",b,[s("https://gofrp.org/docs/features/xtcp/"),a(e)])]),n("p",null,[s("xtcp参考："),n("a",k,[s("https://doc.natfrp.com/app/xtcp.html"),a(e)])])])}const x=i(c,[["render",_],["__file","frp-p2p配置说明.html.vue"]]);export{x as default};
