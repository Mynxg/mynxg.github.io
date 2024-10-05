import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as n,o as e}from"./app-BHYK4whg.js";const l={};function t(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>目前需要使用自建的内网穿透工具，就选择了frp，frp也分很多版本，我之前使用的是frp_0.51.2_windows_386版本，现在升级版本为frp_0.59.0_windows_amd64，主要使用这个frp功能有，点对点内网穿透（p2p）、安全地暴露内网服务 和 服务端作为代理进行穿透的三种方式。准备使用点对点或安全的暴露服务方式，之前使用的一直是服务器代理的方式进行内网穿透，这样直接将自己的机器暴露在公网上，非常不安全，有一次我检查服务器日志，发现很多请求我服务器暴露的这个端口，意识到可能被盯上了，就改换了其他端口。现在加强安全意识，就换用点对点或者安全的暴露方式，攻击者的扫描和入侵。建议不使用服务提供的默认端口，自行进行修改。</p><blockquote><p>目前使用的用途有：远程连接window电脑、web服务暴露在公网上。</p></blockquote><h2 id="一、准备工作" tabindex="-1"><a class="header-anchor" href="#一、准备工作"><span>一、准备工作</span></a></h2><blockquote><p>官方下载地址：<a href="https://github.com/fatedier/frp/releases/tag/v0.59.0" target="_blank" rel="noopener noreferrer">https://github.com/fatedier/frp/releases/tag/v0.59.0</a></p><p>这里我提供两个下载地址：</p></blockquote><p>123网盘：<a href="https://www.123pan.com/s/tB5A-psnYd.html?" target="_blank" rel="noopener noreferrer">https://www.123pan.com/s/tB5A-psnYd.html?</a> 提取码: <a href="TA7T">TA7T</a></p><blockquote><p>蓝奏网盘：<a href="https://nxg.lanzoul.com/b03ivhzl1i" target="_blank" rel="noopener noreferrer">https://nxg.lanzoul.com/b03ivhzl1i</a> 密码:7ijd</p></blockquote><p>frp_0.59.0_linux_amd64.tar.gz ====》用于上传到linux服务器上</p><p>frp_0.59.0_windows_amd64.zip ====》 用于在window本地启动的</p><blockquote><p>注意：下载linux版的会window系统会报毒，自行在设置中放行(排除)下载目录即可下载，并上传到服务器上。 在官网下载同样是会报毒的，可以自行验证。</p></blockquote><h2 id="二、配置服务端" tabindex="-1"><a class="header-anchor" href="#二、配置服务端"><span>二、配置服务端</span></a></h2><h3 id="_2-1-上传frp和配置frp" tabindex="-1"><a class="header-anchor" href="#_2-1-上传frp和配置frp"><span>2.1 上传frp和配置frp</span></a></h3><p>先上传frp_0.59.0_linux_amd64.tar.gz压缩包到自定义目录下，这里我以 /root/frp 目录为例：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frp_0.59.0_linux_amd64.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>位置：/root/frp/frp_0.59.0_linux_amd64</p><p>frps.toml修改配置端口:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>bindPort = 7002</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>至此服务配置就配置好了</p></blockquote><h3 id="_2-2-安装-systemd" tabindex="-1"><a class="header-anchor" href="#_2-2-安装-systemd"><span>2.2 安装 <code>systemd</code></span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-3-创建并编辑-frps-service-文件-使用vim编辑器" tabindex="-1"><a class="header-anchor" href="#_2-3-创建并编辑-frps-service-文件-使用vim编辑器"><span>2.3 创建并编辑 <code>frps.service</code> 文件（使用vim编辑器）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/systemd/system/frps-59.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-4-写入内容" tabindex="-1"><a class="header-anchor" href="#_2-4-写入内容"><span>2.4 写入内容</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 服务名称，可自定义</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Description</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frp_0.59.0_linux_amd64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">After</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> network.target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> syslog.target</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Wants</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> simple</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动frps的命令，需修改为您的frps的安装路径</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ExecStart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =/root/frp/frp_0.59.0_linux_amd64/frps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /root/frp/frp_0.59.0_linux_amd64/frps.toml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WantedBy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：/root/frp/frp_0.59.0_linux_amd64/frps 对应的frps 文件，也就是你上传到服务器后，并解压后的一个文件。</p></blockquote><p>上面三步可以参考：<a href="https://gofrp.org/docs/setup/systemd/" target="_blank" rel="noopener noreferrer">https://gofrp.org/docs/setup/systemd/</a></p><p>然后刷新一下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果上面的命令没有生效，就使用下面的命令试一试</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reexec</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-启动和关闭命令" tabindex="-1"><a class="header-anchor" href="#_2-5-启动和关闭命令"><span>2.5 启动和关闭命令</span></a></h3><blockquote><p>不是root管理员权限时，需要使用到sudo，如你是管理员权限，就可以不是sudo命令，直接 systemctl start frps-59</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动frp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frps-59</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 停止frp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frps-59</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 重启frp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frps-59</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看frp状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frps-59</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置开机自启：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frps-59</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="三、配置客户端" tabindex="-1"><a class="header-anchor" href="#三、配置客户端"><span>三、配置客户端</span></a></h2><h3 id="安全暴露服务" tabindex="-1"><a class="header-anchor" href="#安全暴露服务"><span>安全暴露服务</span></a></h3><p>1、被访问者机器（目标机器）</p><p>解压 frp_0.59.0_windows_amd64.zip 文件：</p><p>位置：D:\\programTool\\frp\\frp_0.59.0_windows_amd64</p><p>frpc.toml 修改配置：</p><div class="language-toml line-numbers-mode" data-highlighter="shiki" data-ext="toml" data-title="toml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">serverAddr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;服务器公网ip地址&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">serverPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7002</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  安全暴露服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">proxies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;rdp_stcp_test&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stcp&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 只有与此处设置的 secretKey 一致的用户才能访问此服务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">secretKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;7G5Y2QW9X312PYWQWE67&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">localIP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">localPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3389</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 点对点访问服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">proxies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;p2p_rdp_test&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;xtcp&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 只有共享密钥 (secretKey) 与服务器端一致的用户才能访问该服务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">secretKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;AAAA5Y2QW9X312PYWQWE67&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">localIP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">localPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3389</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这是要<strong>被访问的机器</strong>，即 目标机器</p></blockquote><p>cmd启动命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.\\frpc.exe -c .\\frpc.toml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、访问者机器</p><p>解压 frp_0.59.0_windows_amd64.zip 文件：</p><blockquote><p>位置：D:\\tool\\technology\\frp\\frp_0.59.0_windows_amd64</p></blockquote><p>修改frpc.toml 配置：</p><div class="language-toml line-numbers-mode" data-highlighter="shiki" data-ext="toml" data-title="toml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">serverAddr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;101.133.238.75&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">serverPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7002</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安全暴露服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">visitors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;rdp_tcp_visitor&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stcp&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 要访问的 stcp 代理的名字</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">serverName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;rdp_stcp_test&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 只有与此处设置的 secretKey 一致的用户才能访问此服务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">secretKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;7G5Y2QW9X312PYWQWE67&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bindAddr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bindPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7003</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 点对点访问服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">visitors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;p2p_rdp_visitor&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;xtcp&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 要访问的 P2P 代理的名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">serverName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;p2p_rdp_test&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">secretKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;AAAA5Y2QW9X312PYWQWE67&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 绑定本地端口以访问 SSH 服务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bindAddr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bindPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7004</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果需要自动保持隧道打开，将其设置为 true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">keepTunnelOpen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这是<strong>访问者的机器</strong>，即，从这台机器去访问上一台配置好的机器。</p></blockquote><p>cmd启动命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.\\frpc.exe -c .\\frpc.toml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>访问者机器 连接 被访问者</p><p>安全暴露服务：</p><p>使用window自带的远程连接工具：127.0.0.1:7003 输入电脑用户名和密码，即可访问目标机器</p><p>点对点访问服务:</p><p>使用window自带的远程连接工具：127.0.0.1:7004 输入电脑用户名和密码，即可访问目标机器</p>`,56)]))}const k=i(l,[["render",t],["__file","frp-0.59-点对点和安全暴露服务-二合一配置案例：.html.vue"]]),d=JSON.parse('{"path":"/questionskills/softguide/frp-0.59-%E7%82%B9%E5%AF%B9%E7%82%B9%E5%92%8C%E5%AE%89%E5%85%A8%E6%9A%B4%E9%9C%B2%E6%9C%8D%E5%8A%A1-%E4%BA%8C%E5%90%88%E4%B8%80%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B%EF%BC%9A.html","title":"frp-0.59-点对点和安全暴露服务-二合一配置案例：","lang":"zh-CN","frontmatter":{"title":"frp-0.59-点对点和安全暴露服务-二合一配置案例：","toc":true,"icon":"feather-pointed","category":["frp"],"tag":["frps","远程桌面","p2p","安全暴露服务"],"sticky":true,"star":true,"article":true,"timeline":true,"date":"2024-08-04T19:49:00.000Z","description":"背景 目前需要使用自建的内网穿透工具，就选择了frp，frp也分很多版本，我之前使用的是frp_0.51.2_windows_386版本，现在升级版本为frp_0.59.0_windows_amd64，主要使用这个frp功能有，点对点内网穿透（p2p）、安全地暴露内网服务 和 服务端作为代理进行穿透的三种方式。准备使用点对点或安全的暴露服务方式，之前使...","gitInclude":[],"head":[["link",{"rel":"canonical","href":"https://blogs.lxip.top/questionskills/softguide/frp-0.59-%E7%82%B9%E5%AF%B9%E7%82%B9%E5%92%8C%E5%AE%89%E5%85%A8%E6%9A%B4%E9%9C%B2%E6%9C%8D%E5%8A%A1-%E4%BA%8C%E5%90%88%E4%B8%80%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B%EF%BC%9A.html"}],["meta",{"property":"og:url","content":"https://blog.lxip.top/questionskills/softguide/frp-0.59-%E7%82%B9%E5%AF%B9%E7%82%B9%E5%92%8C%E5%AE%89%E5%85%A8%E6%9A%B4%E9%9C%B2%E6%9C%8D%E5%8A%A1-%E4%BA%8C%E5%90%88%E4%B8%80%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B%EF%BC%9A.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"frp-0.59-点对点和安全暴露服务-二合一配置案例："}],["meta",{"property":"og:description","content":"背景 目前需要使用自建的内网穿透工具，就选择了frp，frp也分很多版本，我之前使用的是frp_0.51.2_windows_386版本，现在升级版本为frp_0.59.0_windows_amd64，主要使用这个frp功能有，点对点内网穿透（p2p）、安全地暴露内网服务 和 服务端作为代理进行穿透的三种方式。准备使用点对点或安全的暴露服务方式，之前使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"frps"}],["meta",{"property":"article:tag","content":"远程桌面"}],["meta",{"property":"article:tag","content":"p2p"}],["meta",{"property":"article:tag","content":"安全暴露服务"}],["meta",{"property":"article:published_time","content":"2024-08-04T19:49:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"frp-0.59-点对点和安全暴露服务-二合一配置案例：\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-04T19:49:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"一、准备工作","slug":"一、准备工作","link":"#一、准备工作","children":[]},{"level":2,"title":"二、配置服务端","slug":"二、配置服务端","link":"#二、配置服务端","children":[{"level":3,"title":"2.1 上传frp和配置frp","slug":"_2-1-上传frp和配置frp","link":"#_2-1-上传frp和配置frp","children":[]},{"level":3,"title":"2.2 安装 systemd","slug":"_2-2-安装-systemd","link":"#_2-2-安装-systemd","children":[]},{"level":3,"title":"2.3 创建并编辑 frps.service 文件（使用vim编辑器）","slug":"_2-3-创建并编辑-frps-service-文件-使用vim编辑器","link":"#_2-3-创建并编辑-frps-service-文件-使用vim编辑器","children":[]},{"level":3,"title":"2.4 写入内容","slug":"_2-4-写入内容","link":"#_2-4-写入内容","children":[]},{"level":3,"title":"2.5 启动和关闭命令","slug":"_2-5-启动和关闭命令","link":"#_2-5-启动和关闭命令","children":[]}]},{"level":2,"title":"三、配置客户端","slug":"三、配置客户端","link":"#三、配置客户端","children":[{"level":3,"title":"安全暴露服务","slug":"安全暴露服务","link":"#安全暴露服务","children":[]}]}],"readingTime":{"minutes":4.15,"words":1246},"filePathRelative":"questionskills/softguide/frp-0.59-点对点和安全暴露服务-二合一配置案例：.md","localizedDate":"2024年8月4日","excerpt":"","autoDesc":true}');export{k as comp,d as data};
