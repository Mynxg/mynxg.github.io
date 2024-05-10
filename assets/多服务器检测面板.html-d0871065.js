import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c,b as s,d as e,a,f as t}from"./app-b652ea8e.js";const o="/assets/image-20230626014338353-714e0957.png",d="/assets/image-20230626020256880-d85ee64f.png",p="/assets/2023-06-26_00-13-46-42a2f3f4.png",v="/assets/2023-06-26_01-14-51-15949339.png",u="/assets/image-20230626012319564-8df4bd99.png",m="/assets/image-20230626012950615-cf88f0e1.png",b="/assets/image-20230626013208676-c201bcad.png",_="/assets/2023-06-26_00-38-59-ff52aacb.png",g="/assets/2023-06-26_00-44-00-b14eac84.png",h="/assets/image-20230626014148113-bc0f9384.png",k="/assets/2023-06-26_01-04-35-d2245694.png",f={},S=s("p",null,"✨ Rust 版 ServerStatus 探针、威力加强版",-1),x={href:"https://github.com/zdz/ServerStatus-Rust",target:"_blank",rel:"noopener noreferrer"},y={href:"https://doc.ssr.rs/deploy/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://ssr.rs/",target:"_blank",rel:"noopener noreferrer"},z=s("p",null,"这是一个多服务器监测工具",-1),R=t('<p>效果如下：</p><figure><img src="'+o+'" alt="image-20230626014338353" tabindex="0" loading="lazy"><figcaption>image-20230626014338353</figcaption></figure><h2 id="_1-准备工作" tabindex="-1"><a class="header-anchor" href="#_1-准备工作" aria-hidden="true">#</a> 1 准备工作</h2><p>环境：centos7服务器两台 （建议使用香港服务器）</p><blockquote><p>建议使用国外的，国内的服务器拉取仓库代码比较慢，可感人了。</p></blockquote><p>比如：你的服务器环境不支持国外环境，脚本执行拉取远程仓库代码就出现超时，无法完成情况。<br> 我这里使用手动一步安装，也是大致根据脚本来完成的。</p><blockquote><p>注：在这之前需要了解服务端和客户端是什么，如何将客户端和服务端关联起来</p><p>服务端（Server）通常是指提供某种服务或资源的计算机或设备</p><p>客户端（Client）是指使用服务端提供的服务或资源的计算机或设备。</p><p>服务端和客户端是计算机网络中的两个角色，服务端提供服务或资源，客户端使用服务或获取资源。它们通过网络进行通信，实现数据的传输和交互。</p></blockquote><blockquote><p>在典型的客户端-服务端模型中，通常会存在多个客户端和一个服务端之间的通信。这是因为服务端的目标是为多个客户端提供服务或资源。</p><p>客户端和服务端的数量不仅限于一个对多的关系，也可以存在多个服务端。</p><p>客户端和服务端通常不只有一个，而是可以存在多个客户端和一个或多个服务端之间的通信。这种多对一或多对多的关系是为了满足大规模应用或系统的需求，并提供更好的性能、可靠性和可扩展性。</p><p>例如：</p><p>在搭建frp时，将Frp作为中转服务器，连接远程桌面。</p><p>这ServerStatus_Rust跟frp搭建有异曲同工之妙，也是一个服务端一个客户端</p><p>大致流程：外网连接服务器，通过frp配置的服务器中转连接本地Windows桌面</p><p>这里的配置的frp服务端是服务器，客户端是本地Windows桌面</p></blockquote><p>来一张图更为贴切：</p><figure><img src="'+d+`" alt="image-20230626020256880" tabindex="0" loading="lazy"><figcaption>image-20230626020256880</figcaption></figure><blockquote><p>其中服务端也可以作为客户端，自己给自己实时发送数据，来检测自身数据变化（不限于负载、流量、内存等）</p></blockquote><p>检测服务器架构：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),w={href:"https://github.com/zdz/ServerStatus-Rust/releases/tag/v1.7.2",target:"_blank",rel:"noopener noreferrer"},O=t('<blockquote><p>如果你的服务器是x86 64，就选择如下图安装包。</p></blockquote><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>将其上传到服务器 <code>/opt/ServerStatus/</code> 目录下，服务端需要将客户端和服务端都上传</p></blockquote><p>创建目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/ServerStatus <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /opt/ServerStatus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-服务端搭建" tabindex="-1"><a class="header-anchor" href="#_2-服务端搭建" aria-hidden="true">#</a> 2 服务端搭建</h2><blockquote><p>需要安装服务端和客户端</p></blockquote>`,7),$={href:"http://server.sh",target:"_blank",rel:"noopener noreferrer"},C=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-ex</span>

<span class="token assign-left variable">WORKSPACE</span><span class="token operator">=</span>/opt/ServerStatus
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${WORKSPACE}</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${WORKSPACE}</span>

<span class="token comment"># 下载, arm 机器替换 x86_64 为 aarch64</span>
<span class="token assign-left variable">OS_ARCH</span><span class="token operator">=</span><span class="token string">&quot;x86_64&quot;</span>
<span class="token assign-left variable">latest_version</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-m</span> <span class="token number">10</span> <span class="token parameter variable">-sL</span> <span class="token string">&quot;https://api.github.com/repos/zdz/ServerStatus-Rust/releases/latest&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;tag_name&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token variable">)</span></span>

<span class="token function">wget</span> --no-check-certificate <span class="token parameter variable">-qO</span> <span class="token string">&quot;server-<span class="token variable">\${OS_ARCH}</span>-unknown-linux-musl.zip&quot;</span>  <span class="token string">&quot;https://github.com/zdz/ServerStatus-Rust/releases/download/<span class="token variable">\${latest_version}</span>/server-<span class="token variable">\${OS_ARCH}</span>-unknown-linux-musl.zip&quot;</span>
<span class="token function">wget</span> --no-check-certificate <span class="token parameter variable">-qO</span> <span class="token string">&quot;client-<span class="token variable">\${OS_ARCH}</span>-unknown-linux-musl.zip&quot;</span>  <span class="token string">&quot;https://github.com/zdz/ServerStatus-Rust/releases/download/<span class="token variable">\${latest_version}</span>/client-<span class="token variable">\${OS_ARCH}</span>-unknown-linux-musl.zip&quot;</span>

<span class="token function">unzip</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;server-<span class="token variable">\${OS_ARCH}</span>-unknown-linux-musl.zip&quot;</span>
<span class="token function">unzip</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;client-<span class="token variable">\${OS_ARCH}</span>-unknown-linux-musl.zip&quot;</span>

<span class="token comment"># systemd service</span>
<span class="token function">mv</span> <span class="token parameter variable">-v</span> stat_server.service /etc/systemd/system/stat_server.service
<span class="token function">mv</span> <span class="token parameter variable">-v</span> stat_client.service /etc/systemd/system/stat_client.service

systemctl daemon-reload

<span class="token comment"># 启动</span>
systemctl start stat_server
systemctl start stat_client

<span class="token comment"># 状态查看</span>
systemctl status stat_server
systemctl status stat_client

<span class="token comment"># 使用以下命令开机自启</span>
<span class="token comment"># systemctl enable stat_server</span>
<span class="token comment"># systemctl enable stat_client</span>

<span class="token comment"># 停止</span>
<span class="token comment"># systemctl stop stat_server</span>
<span class="token comment"># systemctl stop stat_client</span>

<span class="token comment"># https://fedoraproject.org/wiki/Systemd/zh-cn</span>
<span class="token comment"># https://docs.fedoraproject.org/en-US/quick-docs/understanding-and-administering-systemd/index.html</span>

<span class="token comment"># 修改 /etc/systemd/system/stat_client.service 文件，将IP改为你服务器的IP或你的域名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token parameter variable">-ex</span> server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>不能执行，就换用手动方式，一步一步执行。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/ServerStatus <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /opt/ServerStatus
//上传服务端和客户端压缩包至/opt/ServerStatus目录下
//解压
<span class="token function">unzip</span> <span class="token parameter variable">-o</span> server-x86_64-unknown-linux-musl.zip
<span class="token function">unzip</span> <span class="token parameter variable">-o</span> client-x86_64-unknown-linux-musl.zip
//通过ll命令查看是否解压成功是否有 stat_client.service 文件
//将改文件移动到 /etc/systemd/system/stat_client.service
<span class="token function">mv</span> <span class="token parameter variable">-v</span> stat_client.service /etc/systemd/system/stat_client.service

<span class="token comment"># systemd service</span>
<span class="token function">mv</span> <span class="token parameter variable">-v</span> stat_server.service /etc/systemd/system/stat_server.service
<span class="token function">mv</span> <span class="token parameter variable">-v</span> stat_client.service /etc/systemd/system/stat_client.service

systemctl daemon-reload

<span class="token comment"># 启动</span>
systemctl start stat_server
systemctl start stat_client

<span class="token comment"># 状态查看</span>
systemctl status stat_server
systemctl status stat_client

<span class="token comment"># 使用以下命令开机自启</span>
<span class="token comment"># systemctl enable stat_server</span>
<span class="token comment"># systemctl enable stat_client</span>

<span class="token comment"># 停止</span>
<span class="token comment"># systemctl stop stat_server</span>
<span class="token comment"># systemctl stop stat_client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置：</p><p><img src="`+v+'" alt="" loading="lazy"><br> 去掉注释，也就是去掉#号</p><p>后面的地址替换成自己服务端反向代理的域名</p>',8),A={href:"https://w.lxip.top",target:"_blank",rel:"noopener noreferrer"},H={href:"https://w.lxip.top/report",target:"_blank",rel:"noopener noreferrer"},P=s("p",null,"如果不想反向代理，或者觉得麻烦，那就直接使用服务器公网ip地址+端口号",-1),E={href:"http://139.212.12.120:8080",target:"_blank",rel:"noopener noreferrer"},W=s("p",null,"服务端与客户端的关联关系：",-1),I=s("figure",null,[s("img",{src:u,alt:"image-20230626012319564",tabindex:"0",loading:"lazy"}),s("figcaption",null,"image-20230626012319564")],-1),K=s("figure",null,[s("img",{src:m,alt:"image-20230626012950615",tabindex:"0",loading:"lazy"}),s("figcaption",null,"image-20230626012950615")],-1),j=s("blockquote",null,[s("p",null,"config.toml文件对应服务端")],-1),L=s("p",null,"完成配置如下：",-1),N=s("figure",null,[s("img",{src:b,alt:"image-20230626013208676",tabindex:"0",loading:"lazy"}),s("figcaption",null,"image-20230626013208676")],-1),V=s("p",null,"服务端也可以使用第三方平台搭建，如 Railway 部署",-1),B={href:"https://github.com/zdz/ServerStatus-Rust/wiki/Railway",target:"_blank",rel:"noopener noreferrer"},F=s("h2",{id:"_3-客户端搭建",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-客户端搭建","aria-hidden":"true"},"#"),e(" 3 客户端搭建")],-1),U={href:"http://client.sh",target:"_blank",rel:"noopener noreferrer"},T=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
set -ex

WORKSPACE=/opt/ServerStatus
mkdir -p \${WORKSPACE}
cd \${WORKSPACE}

# 下载, arm 机器替换 x86_64 为 aarch64
OS_ARCH=&quot;x86_64&quot;
latest_version=$(curl -m 10 -sL &quot;https://api.github.com/repos/zdz/ServerStatus-Rust/releases/latest&quot; | grep &quot;tag_name&quot; | head -n 1 | awk -F &quot;:&quot; &#39;{print $2}&#39; | sed &#39;s/\\&quot;//g;s/,//g;s/ //g&#39;)

wget --no-check-certificate -qO &quot;client-\${OS_ARCH}-unknown-linux-musl.zip&quot;  &quot;https://github.com/zdz/ServerStatus-Rust/releases/download/\${latest_version}/client-\${OS_ARCH}-unknown-linux-musl.zip&quot;

unzip -o &quot;client-\${OS_ARCH}-unknown-linux-musl.zip&quot;

# systemd service
mv -v stat_client.service /etc/systemd/system/stat_client.service

systemctl daemon-reload

# 启动
systemctl start stat_client

# 状态查看
systemctl status stat_client

# 使用以下命令开机自启
systemctl enable stat_client

# 停止
# systemctl stop stat_client

# https://fedoraproject.org/wiki/Systemd/zh-cn
# https://docs.fedoraproject.org/en-US/quick-docs/understanding-and-administering-systemd/index.html

# 修改 /etc/systemd/system/stat_client.service 文件，将IP改为你服务器的IP或你的域名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token parameter variable">-ex</span> client.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>不能执行，就换用手动方式，一步一步执行。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//递归创建目录
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/ServerStatus <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /opt/ServerStatus
//上传客户端压缩包至/opt/ServerStatus目录下
//解压
<span class="token function">unzip</span> <span class="token parameter variable">-o</span> client-x86_64-unknown-linux-musl.zip
//通过ll命令查看是否解压成功是否有 stat_client.service 文件
//将改文件移动到 /etc/systemd/system/stat_client.service
<span class="token function">mv</span> <span class="token parameter variable">-v</span> stat_client.service /etc/systemd/system/stat_client.service

//重启加载一下
systemctl daemon-reload

<span class="token comment"># 启动</span>
systemctl start stat_client

<span class="token comment"># 状态查看</span>
systemctl status stat_client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都安装完成后如图所示：<br><img src="`+_+`" alt="" loading="lazy"></p><p>将客户端注册到服务端上：</p><p>打开 stat_client.service 文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/systemd/system/stat_client.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改如下图所示：</p><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>配置修改如下：</p><figure><img src="'+h+'" alt="image-20230626014148113" tabindex="0" loading="lazy"><figcaption>image-20230626014148113</figcaption></figure><h2 id="搭建nginx反向代理" tabindex="-1"><a class="header-anchor" href="#搭建nginx反向代理" aria-hidden="true">#</a> 搭建nginx反向代理</h2>',14),D=s("p",null,"主要是用于将带有端口号的地址反向代理为一个域名（二级域名）",-1),G=s("p",null,"如果你使用ip地址+端口号的形式访问就不需要反向代理了，也就省下这一步骤。",-1),J={href:"https://iocky.com/archives/13",target:"_blank",rel:"noopener noreferrer"},M={href:"https://blog.laoda.de/archives/ward-serverstatus-install",target:"_blank",rel:"noopener noreferrer"},Q=t(`<h2 id="卸载服务端和客户端" tabindex="-1"><a class="header-anchor" href="#卸载服务端和客户端" aria-hidden="true">#</a> 卸载服务端和客户端：</h2><ol><li>先停掉 之前开启的服务<br> 查看服务状态：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status stat_server
systemctl status stat_client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果服务状态是active（激活）就需要先停止，使用下面的命令</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop stat_server
systemctl stop stat_client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再执行简单粗暴的方式删除文件夹的文件<br> 在/opt/文件下删除ServerStatus文件夹（包括ServerStatus文件夹所有内容）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf ServerStatus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：别使用 /* 来删除所文件，小心一不小心就删库了，对于第一次使用删除命令来删除文件夹下所有内容，是很容易犯这样的问题的。<br> 原因：大致是习惯性使用可视化界面，把那种思维方式带到linux下，以为linux跟可视化界面删除方式删除方式相同，这就容易误操作，删库了。禁止这么操作，这是很严重的问题。</p></blockquote><p>删除完成后使用 ll命令，查看一下是否删除完成</p><p>然后还需要删除残余文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rf -rf /etc/systemd/system/stat_server.service
rf -rf /etc/systemd/system/stat_client.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不确定是否有这个两个文件，可以切换到 /etc/systemd/system/目录下检查是否有这个两文件，再做删除操作。</p><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="扩展功能" tabindex="-1"><a class="header-anchor" href="#扩展功能" aria-hidden="true">#</a> 扩展功能</h2><p>服务器挂了，tg机器人发通知或微信通知</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>恕我太愚钝，花了一天多的时间搭建这，尝试了多种方式终于知道怎么看对应的脚步和文档了，小有收获。终于弄明白了severstatus_rust不同服务器之间如何相关联，也对脚本有了更好的认识。</p><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2>',18),X={href:"https://blog.laoda.de/archives/ward-serverstatus-install",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://iocky.com/archives/13",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://doc.ssr.rs/deploy/",target:"_blank",rel:"noopener noreferrer"};function ss(es,ns){const n=l("ExternalLinkIcon");return r(),c("div",null,[S,s("blockquote",null,[s("p",null,[e("项目地址："),s("a",x,[e("zdz/ServerStatus-Rust: ✨ Rust 版 ServerStatus 探针、威力加强版 (github.com)"),a(n)])]),s("p",null,[e("官方教程："),s("a",y,[e("安装部署 - Rust 版 ServerStatus 云探针 (ssr.rs)"),a(n)])]),s("p",null,[e("在线地址："),s("a",q,[e("ServerStatus (ssr.rs)"),a(n)])]),z]),R,s("p",null,[e("下载："),s("a",w,[e("Release v1.7.2 · zdz/ServerStatus-Rust (github.com)"),a(n)])]),O,s("p",null,[s("a",$,[e("server.sh"),a(n)]),e(" 配置：")]),C,s("p",null,[e("例如你的域名是："),s("a",A,[e("https://w.lxip.top"),a(n)])]),s("p",null,[e("则替换后就是"),s("a",H,[e("https://w.lxip.top/report"),a(n)])]),s("blockquote",null,[P,s("p",null,[e("例如地址："),s("a",E,[e("http://139.212.12.120:8080"),a(n)]),e(" （服务端上的），直接替换也行")])]),W,I,K,j,L,N,s("blockquote",null,[V,s("p",null,[s("a",B,[e("Railway部署教程"),a(n)])])]),F,s("p",null,[s("a",U,[e("client.sh"),a(n)]),e(" 配置")]),T,s("blockquote",null,[D,G,s("p",null,[e("参考："),s("a",J,[e("ServerStatus-Rust 搭建反向代理部分"),a(n)])]),s("p",null,[s("a",M,[e("ServerStatus 搭建反向代理部分"),a(n)])])]),Q,s("p",null,[e("参考1："),s("a",X,[e("搭建两个专属自己的服务器监控——Ward && ServerStatus"),a(n)])]),s("p",null,[e("参考2："),s("a",Y,[e("ServerStatus-Rust 服务器探针搭建使用"),a(n)])]),s("p",null,[e("参考3："),s("a",Z,[e("安装部署 - Rust 版 ServerStatus 云探针 (ssr.rs)"),a(n)])])])}const is=i(f,[["render",ss],["__file","多服务器检测面板.html.vue"]]);export{is as default};
