import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as i,b as n,d as s,a as e,f as l}from"./app-b18543a5.js";const t={},c=n("h2",{id:"背景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#背景","aria-hidden":"true"},"#"),s(" 背景")],-1),d=n("p",null,"国内服务器贵，并且宽带越高越贵。在连接一个远程桌面的时候就可能很卡了。而且你想使用国外vps时，连接的时候延迟太高，连接也很卡。想节省服务器带宽或者服务器带宽不理想，由此frp 使用 p2p 模式，点对点穿透，可节约服务器带宽。",-1),u=n("blockquote",null,[n("p",null,[n("strong",null,"对等式网络"),s("（peer-to-peer， 简称P2P），又称点对点技术，是无中心服务器、依靠用户群（peers）交换信息的互联网体系，它的作用在于，减低以往网路传输中的节点，以降低资料遗失的风险。")]),n("p",null,"优点：仅少量占用服务器带宽，占用的带宽可忽略不计，传输大文件利器！")],-1),b=n("h2",{id:"准备工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),s(" 准备工作")],-1),v={href:"https://blog.nnxx.me/posts/e7d9824f.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<blockquote><p>注意：上面的操作能实现，下面的配置操作就基本简单了。</p><p>下载frp安装包(frp_0.51.2_windows_386)、一台有公网ip的服务器</p></blockquote><pre><code>实现p2p远程连接，需要两台电脑都安装和配置好客户端
</code></pre><figure><img src="https://s2.ax1x.com/2019/01/12/FjUW0x.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><blockquote><p>先了解 被访问端、访问端、服务端</p><p>被访问端：win10用户a</p><p>访问端：win10用户b</p><p>服务端：服务器（这里使用的是centos7）</p><p>为了兼顾安全和兼容，所以这里使用stcp代理windows电脑的远程桌面（RDP，端口号3389）</p></blockquote><h3 id="被访问端-客户端a-配置" tabindex="-1"><a class="header-anchor" href="#被访问端-客户端a-配置" aria-hidden="true">#</a> 被访问端（客户端a）配置</h3><p>frpc.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
server_addr <span class="token operator">=</span> 服务器ip地址（公网ip地址）
server_port <span class="token operator">=</span> <span class="token number">7000</span>
authentication_method <span class="token operator">=</span> token
token <span class="token operator">=</span> abc123123

<span class="token comment"># mstsc直接输入公网的IP和端口就能远程       </span>
<span class="token punctuation">[</span>rdp<span class="token punctuation">]</span> 
<span class="token builtin class-name">type</span> <span class="token operator">=</span> tcp
local_ip <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
local_port <span class="token operator">=</span> <span class="token number">3389</span>
remote_port <span class="token operator">=</span> <span class="token number">7002</span>

<span class="token punctuation">[</span>p2p_rdp<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> stcp
sk <span class="token operator">=</span> cue121212
local_ip <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
local_port <span class="token operator">=</span> <span class="token number">3389</span>
use_encryption <span class="token operator">=</span> <span class="token boolean">false</span>
use_compression <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token punctuation">[</span>p2p_rdp_xtcp<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> xtcp
sk <span class="token operator">=</span> cue121212
local_ip <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
local_port <span class="token operator">=</span> <span class="token number">3389</span>
use_encryption <span class="token operator">=</span> <span class="token boolean">false</span>
use_compression <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务端配置" tabindex="-1"><a class="header-anchor" href="#服务端配置" aria-hidden="true">#</a> 服务端配置</h3><p>frps.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
<span class="token comment"># 服务端端口</span>
bind_port <span class="token operator">=</span> <span class="token number">7000</span>
binf_addr <span class="token operator">=</span> <span class="token number">0.0</span>.0.0
bind_udp_port <span class="token operator">=</span> <span class="token number">7000</span>

authentication_method <span class="token operator">=</span> token
<span class="token comment"># 认证Token的值包含字母大小写数字等</span>
token <span class="token operator">=</span> abc123123

<span class="token comment"># 可视化面板</span>
dashboard_user <span class="token operator">=</span> admin
<span class="token comment"># Dashboard密码</span>
dashboard_pwd <span class="token operator">=</span> <span class="token number">123456</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问端-客户端b-配置" tabindex="-1"><a class="header-anchor" href="#访问端-客户端b-配置" aria-hidden="true">#</a> 访问端（客户端b）配置</h3><p>frpc.ini</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
server_addr <span class="token operator">=</span> 服务器ip地址（公网ip地址）
server_port <span class="token operator">=</span> <span class="token number">7000</span>
authentication_method <span class="token operator">=</span> token
token <span class="token operator">=</span> abc123123

<span class="token punctuation">[</span>p2p_rdp_visitor<span class="token punctuation">]</span>
role <span class="token operator">=</span> visitor
<span class="token builtin class-name">type</span> <span class="token operator">=</span> stcp
server_name <span class="token operator">=</span> p2p_rdp
sk <span class="token operator">=</span> cue121212
bind_addr <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
bind_port <span class="token operator">=</span> <span class="token number">9090</span>
use_encryption <span class="token operator">=</span> <span class="token boolean">false</span>
use_compression <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token punctuation">[</span>p2p_rdp_visitor2<span class="token punctuation">]</span>
role <span class="token operator">=</span> visitor
<span class="token builtin class-name">type</span> <span class="token operator">=</span> xtcp
server_name <span class="token operator">=</span> p2p_rdp_xtcp
sk <span class="token operator">=</span> cue121212
bind_addr <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
bind_port <span class="token operator">=</span> <span class="token number">9091</span>
use_encryption <span class="token operator">=</span> <span class="token boolean">false</span>
use_compression <span class="token operator">=</span> <span class="token boolean">false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="win客户端后台运行及开机自启" tabindex="-1"><a class="header-anchor" href="#win客户端后台运行及开机自启" aria-hidden="true">#</a> win客户端后台运行及开机自启</h2><blockquote><p>frpc运行时始终有一个命令行窗口运行在前台，影响美观，我们可以使用一个批处理文件来将其运行在后台，而且可以双击执行，每次打开frpc不用再自己输命令了。<br> 在任何一个目录下新建一个文本文件并将其重命名为“frp.bat”，编辑，粘贴如下内容并保存。</p></blockquote><p>frp.bat</p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off 
if &quot;%1&quot; == &quot;h&quot; goto begin 
mshta vbscript:createobject(&quot;wscript.shell&quot;).run(&quot;&quot;&quot;%~nx0&quot;&quot; h&quot;,0)(window.close)&amp;
:begin 
REM 
cd C:\\frp 
frpc -c frpc.ini 
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将cd后的路径更改为你的frpc实际存放的目录</p></blockquote><p>win10开机自启frp<br> 简单操作：win+R 输入 &quot;shell:startup&quot; , 进入到开机自启的位置，然后将上述配置好的 frp.bat 文件的快捷方式复制到开机自启的位置。</p><blockquote><p>注意：之后直接运行这个 .bat 文件即可启动frpc并隐藏窗口（可在任务管理器中退出）。<br> 至于开机启动，把这个 .bat 文件直接扔进Windows的开机启动文件夹就好了 )<br> 客户端配置完成，之后就是你自己根据需要在frpc.ini后追加规则即可。</p><p>强烈建议你在使用frp直接测试内网穿透前，先在局域网内测试好相关功能的正常使用，并配置好可能会影响的Windows防火墙等内容，在内网调试通过后再使用frp进行内网穿透测试。</p></blockquote><h2 id="连接远程桌面" tabindex="-1"><a class="header-anchor" href="#连接远程桌面" aria-hidden="true">#</a> 连接远程桌面</h2><p>通过 远程桌面连接（mstsc远程程序），输入127.0.0.1:9091 并输入账号和密码进行远程登录。这种不受限于服务器的网络限制，可以进行大文件传输。</p><blockquote><p>远程桌面连接怎么打开？直接win+Q，输入远程桌面连接，点击即可打开，然后输入地址、账号、密码。</p></blockquote><p>效果：<br><img src="https://img.nnxx.me/file/d96263d8a494ba3a00aed.png" alt="" loading="lazy"></p><figure><img src="https://img.nnxx.me/file/99b239d563a82414830e9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://img.nnxx.me/file/f275bbd5eb71225f9b0d3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明" aria-hidden="true">#</a> 配置说明</h2>`,28),k={href:"https://gofrp.org/zh-cn/docs/features/xtcp/",target:"_blank",rel:"noopener noreferrer"},h=n("blockquote",null,[n("p",null,"XTCP 的配置方式和 STCP 很类似。但是会采用 P2P 的方式进行打洞穿透，如果成功，后续的流量将不会经过 frps，而是直接通信，不再受到 frps 所在服务器的带宽限制。"),n("p",null,"由于打洞成功率取决于所处网络的 NAT 类型，所以 XTCP 的可用性和稳定性无法保证。在需要可靠连接的情况下，建议使用 STCP 替代。"),n("p",null,[s("当 visitor 配置了 "),n("code",null,"keep_tunnel_open = true"),s(" 时，frpc 会定期检测隧道是否打开，如果没有，则会尝试打洞建立隧道，这样可以始终保持隧道打开，在需要连接对端服务时，可以避免延迟。")]),n("p",null,"默认情况下，visitor 会在接收到用户连接后尝试打洞，如果打洞失败，可以尝试多次建立连接，程序会尝试其他的打洞策略，有可能在多次重试后成功打洞。一旦打洞成功，后续新增连接不必重复打洞，而是可以复用隧道。")],-1),_={href:"https://gofrp.org/zh-cn/docs/reference/server-configures/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.nnxx.me/posts/e1d1124g.html",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"附件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#附件","aria-hidden":"true"},"#"),s(" 附件")],-1),x=n("p",null,"扩展资料：",-1),w=n("br",null,null,-1),q={href:"https://imold.wang/technology/computer/420.html/2/",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),P={href:"https://www.2280129.xyz/article/000040/frp.html",target:"_blank",rel:"noopener noreferrer"},z=n("br",null,null,-1),T={href:"https://blog.csdn.net/Asachen/article/details/120845923",target:"_blank",rel:"noopener noreferrer"};function C(N,V){const a=p("ExternalLinkIcon");return r(),i("div",null,[c,d,u,b,n("p",null,[s("安装教程参考我的另外一篇教程："),n("a",v,[s("frp实现远程桌面连接"),e(a)])]),m,n("p",null,[s("参考："),n("a",k,[s("XTCP | frp (gofrp.org)"),e(a)])]),h,n("p",null,[s("自定义配置："),n("a",_,[s("服务端配置 | frp (gofrp.org)"),e(a)])]),n("p",null,[s("个人具体配置："),n("a",f,[s("frp-p2p配置说明"),e(a)])]),g,x,n("p",null,[s("frp udp p2p打洞内网穿透net，xtcp点对点直连win远程桌面，速度超快的高性能内网穿透"),w,n("a",q,[s("https://imold.wang/technology/computer/420.html/2/"),e(a)])]),n("p",null,[s("frp实现p2p远程连接桌面："),y,n("a",P,[s("https://www.2280129.xyz/article/000040/frp.html"),e(a)])]),n("p",null,[s("frp实现p2p远程连接桌面，非服务器中转："),z,n("a",T,[s("https://blog.csdn.net/Asachen/article/details/120845923"),e(a)])])])}const A=o(t,[["render",C],["__file","frp实现p2p远程连接桌面.html.vue"]]);export{A as default};
