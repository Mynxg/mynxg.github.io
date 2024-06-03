import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-CkSVD5j1.js";const n="/assets/2023-04-20_19-56-47-DgWYK7WP.png",l="/assets/2023-04-20_20-59-45-BlvhRIup.png",t="/assets/2023-04-20_19-14-24-CO1vFXDn.png",h="/assets/2023-04-20_19-24-00-DvEPnhHk.png",r="/assets/2023-04-20_20-39-41-Bm3kPPIO.png",p="/assets/2023-04-20_19-44-08-CXNTbdnG.png",d="/assets/2023-04-20_19-47-34-CC6f7Jac.png",k="/assets/2023-04-20_20-00-06-Cav0mE_i.png",c="/assets/2023-04-20_20-00-58-D-ugATGx.png",o="/assets/2023-04-20_20-06-06-DDX8xblB.png",g="/assets/2023-04-20_20-08-23-CP70b95F.png",b={},m=e('<blockquote><p>Frp 是一个高性能的反向代理应用程序，它可以帮助您轻松地管理内网中的服务，并且可以将这些服务暴露给公网。Frp 的主要作用是实现内网穿透，使外网用户能够访问内网中的服务。下面是一些 Frp 的应用场景：</p><ol><li>内网穿透：通过 Frp，您可以将内网中的服务暴露到公网上，例如 Web 服务器、FTP 服务器、SSH 服务器等。</li><li>内网远程桌面：Frp 可以让您在外网使用远程桌面连接到内网中的计算机，方便远程管理和维护。</li><li>构建云计算平台：Frp 可以帮助企业构建私有云环境，提供虚拟机、存储和计算资源等服务。</li><li>网络监控：Frp 可以用于搭建网络监控系统，通过端口转发将监控服务暴露到公网上，方便管理员远程查看。 总之，Frp 是一款十分实用的工具，可以帮助企业和个人轻松地管理和访问内网中的服务。</li></ol></blockquote><blockquote><p>官网：<a href="https://github.com/fatedier/frp/releases/tag/v0.48.0" target="_blank" rel="noopener noreferrer">https://github.com/fatedier/frp/releases/tag/v0.48.0</a> 官方文档：<a href="https://gofrp.org/docs/setup/systemd/" target="_blank" rel="noopener noreferrer">https://gofrp.org/docs/setup/systemd/</a></p></blockquote><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景"><span>一、背景</span></a></h2><p>使用todesk个人版(免费)连接远程桌面（win10、win11），在网络环境比较差的情况下，使用起来很不友好，于是就想使用frp这个工具了。</p><h2 id="二、前提" tabindex="-1"><a class="header-anchor" href="#二、前提"><span>二、前提</span></a></h2><p>服务器需要开放安全组规则</p><blockquote><p>例如以我的阿里云服务器为例</p></blockquote><p><img src="'+n+'" alt="" loading="lazy"> 具体如何配置请参考：</p><h3 id="frp实现思路" tabindex="-1"><a class="header-anchor" href="#frp实现思路"><span>frp实现思路：</span></a></h3><p>首先先明确服务端和客户端是什么？</p><blockquote><p>FRP 中服务端（Server）和客户端（Client）是指 FRP 这个工具的两个不同角色。 服务端是 FRP 的远程服务器，它运行在公网上，并且通常被用来提供内网穿透功能。当您需要从外部网络访问内部网络的设备时，可以在公网上部署一个 FRP 服务端，通过配置相应的映射规则，将来自公网的请求转发到内网设备上。 客户端是 FRP 工具的本地组件，它运行在需要被访问的内部网络设备上，并与远程服务端建立连接。客户端会向服务端注册自己的身份信息，并定期向服务端发送心跳包以保持连接。一旦客户端成功连接到服务端，外部网络就可以通过服务端访问客户端所在的内部网络设备。</p></blockquote><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、环境安装" tabindex="-1"><a class="header-anchor" href="#三、环境安装"><span>三、环境安装</span></a></h2><blockquote><p>在 Linux 系统下使用 systemd 控制 frps 及配置开机自启</p></blockquote><p>这里以Linux服务器（centos）为例，</p><h3 id="_2-1-安装-systemd" tabindex="-1"><a class="header-anchor" href="#_2-1-安装-systemd"><span>2.1 安装 <code>systemd</code></span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-创建并编辑-frps-service-文件-使用vim编辑器" tabindex="-1"><a class="header-anchor" href="#_2-2-创建并编辑-frps-service-文件-使用vim编辑器"><span>2.2 创建并编辑 <code>frps.service</code> 文件（使用vim编辑器）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/systemd/system/frps.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-3-写入内容" tabindex="-1"><a class="header-anchor" href="#_2-3-写入内容"><span>2.3 写入内容</span></a></h3><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 服务名称，可自定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> frp server</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">After</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> network.target syslog.target</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Wants</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> simple</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 启动frps的命令，需修改为您的frps的安装路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 例如我解压后的frp安装包在此路径下 /root/frp/frps</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># ExecStart = /root/frp/frps/frps -c /root/frp/frps/frps.ini</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ExecStart</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> /path/to/frps -c /path/to/frps.ini</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WantedBy</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图： <img src="`+t+'" alt="" loading="lazy"> 上面三步可以参考：<a href="https://gofrp.org/docs/setup/systemd/" target="_blank" rel="noopener noreferrer">https://gofrp.org/docs/setup/systemd/</a></p><h3 id="_2-4-下载解压安装包" tabindex="-1"><a class="header-anchor" href="#_2-4-下载解压安装包"><span>2.4 下载解压安装包</span></a></h3><p>方式一： 在已经创建好的 /root/frp目录下，执行下面的命令即可下frp安装包：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://github.com/fatedier/frp/releases/download/v0.48.0/frp_0.48.0_linux_arm64.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>方式二： 下载地址：<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">https://github.com/fatedier/frp/releases</a> Linux版（centos），下载如下图版本： <img src="'+h+`" alt="" loading="lazy"></p><p>将frp的linux包传递Linux服务器的自定义目录下</p><blockquote><p>例如： 放在/root/frp/目录（文件夹）下，然后解压此文件<strong>frp_0.48.0_linux_amd64.tar.gz</strong></p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frp_0.48.0_linux_amd64.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后对其命名： mv 原文件名 修改后的文件名</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frp_0.48.0_linux_amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者直接解压并重新命名</p><h3 id="_2-5-配置服务端-服务器" tabindex="-1"><a class="header-anchor" href="#_2-5-配置服务端-服务器"><span>2.5 配置服务端（服务器）</span></a></h3><p>在解压frp安装包后的文件夹下对文件进行配置：</p><blockquote><p>例如：frp解压在/root/frp/frps/目录下</p></blockquote><p>对frps.ini文件进行配置</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frps.ini</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入内容：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[common]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 服务端端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">bind_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 7000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">binf_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">bind_udp_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 7000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">authentication_method</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> token</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 认证Token的值包含字母大小写数字等</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 自定义token</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 可视化面板</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">dashboard_user</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Dashboard密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">dashboard_pwd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 123456</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">dashboard_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 7500</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存配置并退出 <em>:wq</em></p><p>使用 <code>systemd</code> 命令，管理 frps</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 启动frp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frps</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 停止frp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frps</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 重启frp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frps</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看frp状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 frps 开机自启:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> frps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>贴一张可视化面板图： <img src="`+r+'" alt="" loading="lazy"></p><h3 id="_2-6-配置客户端frp" tabindex="-1"><a class="header-anchor" href="#_2-6-配置客户端frp"><span>2.6 配置客户端frp</span></a></h3><blockquote><p>下载地址：<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">https://github.com/fatedier/frp/releases</a></p></blockquote><p><img src="'+p+'" alt="" loading="lazy"> 自定义一个文件夹解压</p><h3 id="_2-6-配置客户端-win10本机" tabindex="-1"><a class="header-anchor" href="#_2-6-配置客户端-win10本机"><span>2.6 配置客户端（win10本机）</span></a></h3><p>在解压frp安装包后，进入找到frpc.ini配置文件并使用文本编辑器打开 <img src="'+d+`" alt="" loading="lazy"> 配置如下：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 全局配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[common]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 服务端公网ip</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">server_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 你的服务端公网ip地址，自行修改</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 服务端端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">server_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 7000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">authentication_method</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> token</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 自定义token</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 反向代理的名称，可以随意设置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[RDP]</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># RDP 是 TCP 协议的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> tcp</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 本机 IP</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local_ip</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 127.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 远程桌面的默认端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 3389</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 外网访问的端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">remote_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;"> 7001</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：服务端的配置的token与客户端配置的token需要保持一致。 参考：<a href="https://cloud.tencent.com/developer/article/1710141" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1710141</a></p></blockquote><p>在目录下输入cmd回车，然后运行frpc.exe 如图所示： <img src="`+k+'" alt="" loading="lazy"><img src="'+c+'" alt="" loading="lazy"> 就此配置完成</p><p>接下来就连接远程桌面了</p><h3 id="_2-7-连接远程桌面" tabindex="-1"><a class="header-anchor" href="#_2-7-连接远程桌面"><span>2.7 连接远程桌面</span></a></h3><p>如下图所示： 计算机为你服务端的ip地址加端口</p><blockquote><p>例如：139.224.12.12:7000 <img src="'+o+'" alt="" loading="lazy"></p></blockquote><p>由于我电脑使用的微软邮箱，用户名就为 123@outlook.com，密码对应微软邮箱密码 <img src="'+g+'" alt="" loading="lazy"> 如果你使用的是本地账号登录，那用户名就是你本地的那个用户名，密码就是开机密码。</p><blockquote><p>如果不想使用ip地址，可以将ip地址绑到域名上，或不想输入端口，可以进行反向代理</p></blockquote><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>总之，frp不仅仅只是玩远程桌面，还可以玩内网穿透、渗透等。</p><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件"><span>附件</span></a></h2><p>参考1：<a href="https://cloud.tencent.com/developer/article/1710141" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1710141</a> 参考2：<a href="https://www.cnblogs.com/zhanggaoxing/p/9221705.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/zhanggaoxing/p/9221705.html</a> 阿里云官方地址：<a href="https://account.aliyun.com/login/login.htm" target="_blank" rel="noopener noreferrer">https://account.aliyun.com/login/login.htm</a></p>',63),u=[m];function y(v,f){return a(),s("div",null,u)}const E=i(b,[["render",y],["__file","frp实现远程桌面连接.html.vue"]]),D=JSON.parse('{"path":"/questionskills/softguide/frp%E5%AE%9E%E7%8E%B0%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2%E8%BF%9E%E6%8E%A5.html","title":"frp实现远程桌面连接","lang":"zh-CN","frontmatter":{"title":"frp实现远程桌面连接","icon":"sliders","category":["frp"],"tag":["frps","远程桌面"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2023-04-20T21:00:00.000Z","description":"Frp 是一个高性能的反向代理应用程序，它可以帮助您轻松地管理内网中的服务，并且可以将这些服务暴露给公网。Frp 的主要作用是实现内网穿透，使外网用户能够访问内网中的服务。下面是一些 Frp 的应用场景： 内网穿透：通过 Frp，您可以将内网中的服务暴露到公网上，例如 Web 服务器、FTP 服务器、SSH 服务器等。 内网远程桌面：Frp 可以让您在...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://blog.lxip.top/questionskills/softguide/frp%E5%AE%9E%E7%8E%B0%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2%E8%BF%9E%E6%8E%A5.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"frp实现远程桌面连接"}],["meta",{"property":"og:description","content":"Frp 是一个高性能的反向代理应用程序，它可以帮助您轻松地管理内网中的服务，并且可以将这些服务暴露给公网。Frp 的主要作用是实现内网穿透，使外网用户能够访问内网中的服务。下面是一些 Frp 的应用场景： 内网穿透：通过 Frp，您可以将内网中的服务暴露到公网上，例如 Web 服务器、FTP 服务器、SSH 服务器等。 内网远程桌面：Frp 可以让您在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.keney"}],["meta",{"property":"article:tag","content":"frps"}],["meta",{"property":"article:tag","content":"远程桌面"}],["meta",{"property":"article:published_time","content":"2023-04-20T21:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"frp实现远程桌面连接\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-20T21:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"一、背景","slug":"一、背景","link":"#一、背景","children":[]},{"level":2,"title":"二、前提","slug":"二、前提","link":"#二、前提","children":[{"level":3,"title":"frp实现思路：","slug":"frp实现思路","link":"#frp实现思路","children":[]}]},{"level":2,"title":"三、环境安装","slug":"三、环境安装","link":"#三、环境安装","children":[{"level":3,"title":"2.1 安装 systemd","slug":"_2-1-安装-systemd","link":"#_2-1-安装-systemd","children":[]},{"level":3,"title":"2.2 创建并编辑 frps.service 文件（使用vim编辑器）","slug":"_2-2-创建并编辑-frps-service-文件-使用vim编辑器","link":"#_2-2-创建并编辑-frps-service-文件-使用vim编辑器","children":[]},{"level":3,"title":"2.3 写入内容","slug":"_2-3-写入内容","link":"#_2-3-写入内容","children":[]},{"level":3,"title":"2.4 下载解压安装包","slug":"_2-4-下载解压安装包","link":"#_2-4-下载解压安装包","children":[]},{"level":3,"title":"2.5 配置服务端（服务器）","slug":"_2-5-配置服务端-服务器","link":"#_2-5-配置服务端-服务器","children":[]},{"level":3,"title":"2.6 配置客户端frp","slug":"_2-6-配置客户端frp","link":"#_2-6-配置客户端frp","children":[]},{"level":3,"title":"2.6 配置客户端（win10本机）","slug":"_2-6-配置客户端-win10本机","link":"#_2-6-配置客户端-win10本机","children":[]},{"level":3,"title":"2.7 连接远程桌面","slug":"_2-7-连接远程桌面","link":"#_2-7-连接远程桌面","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"附件","slug":"附件","link":"#附件","children":[]}],"readingTime":{"minutes":5.5,"words":1649},"filePathRelative":"questionskills/softguide/frp实现远程桌面连接.md","localizedDate":"2023年4月20日","excerpt":"","autoDesc":true}');export{E as comp,D as data};
