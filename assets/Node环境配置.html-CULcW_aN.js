import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,h as a,o as i}from"./app-tMjQf_mi.js";const t={};function l(r,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h2 id="node安装" tabindex="-1"><a class="header-anchor" href="#node安装"><span>Node安装</span></a></h2><blockquote><p>使用nvm安装，跳过</p></blockquote><p>《node安装》 密码：fkka</p><p><a href="https://www.yuque.com/hisnxg/web/mckyq80a8yegwg4a?singleDoc#" target="_blank" rel="noopener noreferrer">https://www.yuque.com/hisnxg/web/mckyq80a8yegwg4a?singleDoc# </a></p><h2 id="nvm安装" tabindex="-1"><a class="header-anchor" href="#nvm安装"><span>nvm安装</span></a></h2><blockquote><p>nvm安装基本上下一步下一步</p></blockquote><p>配置位置：</p><blockquote><p>D:\\software\\nvm\\settings.txt</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 配置node镜像：</span></span>
<span class="line"><span>node_mirror: https://npmmirror.com/mirrors/node/</span></span>
<span class="line"><span># 配置npm镜像：</span></span>
<span class="line"><span>npm_mirror: https://npmmirror.com/mirrors/npm/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 历史版本已经弃用</span></span>
<span class="line"><span>node_mirror: https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span>npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 查看版本</span></span>
<span class="line"><span>nvm -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看已安装的node</span></span>
<span class="line"><span>nvm list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装node</span></span>
<span class="line"><span>nvm install 版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#切换</span></span>
<span class="line"><span>nvm use 版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像源" tabindex="-1"><a class="header-anchor" href="#镜像源"><span>镜像源</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm config set registry https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可用的所有镜像源：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm ---------- https://registry.npmjs.org/</span></span>
<span class="line"><span>yarn --------- https://registry.yarnpkg.com/ </span></span>
<span class="line"><span>tencent ------ https://mirrors.cloud.tencent.com/npm/ </span></span>
<span class="line"><span>cnpm --------- https://r.cnpmjs.org/ </span></span>
<span class="line"><span>taobao ------- https://registry.npmmirror.com/ </span></span>
<span class="line"><span>npmMirror ---- https://skimdb.npmjs.com/registry/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以使用nrm来快速修改镜像源</p><p>安装nrm命令：npm install -g nrm</p><p>切换镜像源：nrm use taobao</p></blockquote><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件"><span>附件</span></a></h2><p><a href="https://blog.fassr.com/src/npm/NPM%20%E5%9B%BD%E5%86%85%E5%8A%A0%E9%80%9F%EF%BC%8C%E4%BF%AE%E6%94%B9%E9%95%9C%E5%83%8F%E6%BA%90.html" target="_blank" rel="noopener noreferrer">NPM 国内加速，修改镜像源</a></p>`,18)]))}const d=e(t,[["render",l],["__file","Node环境配置.html.vue"]]),c=JSON.parse('{"path":"/web/node/Node%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html","title":"Node环境配置","lang":"zh-CN","frontmatter":{"title":"Node环境配置","icon":"feather-pointed","category":["archlinux","hyprland"],"tags":["教程","node"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2024-09-18T00:00:00.000Z","gitInclude":[],"description":"Node安装 使用nvm安装，跳过 《node安装》 密码：fkka https://www.yuque.com/hisnxg/web/mckyq80a8yegwg4a?singleDoc# nvm安装 nvm安装基本上下一步下一步 配置位置： D:\\\\software\\\\nvm\\\\settings.txt 常用命令： 镜像源 可用的所有镜像源： 可以使用n...","head":[["meta",{"property":"og:url","content":"https://blog.lxip.top/web/node/Node%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"Node环境配置"}],["meta",{"property":"og:description","content":"Node安装 使用nvm安装，跳过 《node安装》 密码：fkka https://www.yuque.com/hisnxg/web/mckyq80a8yegwg4a?singleDoc# nvm安装 nvm安装基本上下一步下一步 配置位置： D:\\\\software\\\\nvm\\\\settings.txt 常用命令： 镜像源 可用的所有镜像源： 可以使用n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:published_time","content":"2024-09-18T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node环境配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-18T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"Node安装","slug":"node安装","link":"#node安装","children":[]},{"level":2,"title":"nvm安装","slug":"nvm安装","link":"#nvm安装","children":[]},{"level":2,"title":"镜像源","slug":"镜像源","link":"#镜像源","children":[]},{"level":2,"title":"附件","slug":"附件","link":"#附件","children":[]}],"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"web/node/Node环境配置.md","localizedDate":"2024年9月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
