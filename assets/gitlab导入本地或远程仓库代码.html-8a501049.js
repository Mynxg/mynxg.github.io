import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,b as e,d as i,a as n,e as a}from"./app-4191c28c.js";const o={},c=a('<blockquote><p>gitee仓库项目迁移到gitlab仓库</p></blockquote><p>背景</p><blockquote><p>之前一直使用gitee代码仓库提交代码，现在需要将gitee仓库中的代码迁移到gitlab中，并保留原有的提交记录。</p></blockquote><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2><p>配置好了本地git，并本地与gitlab仓库已连接。</p><blockquote><p>我这里使用 ssh方式拉去代码，因此需要配置ssh密钥</p></blockquote><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2>',7),u=e("br",null,null,-1),g={href:"http://gitee.com",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>1、将gitee上的仓库代码 git clone至本地</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone  git@gitee.com:xiaoming/test.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在gitlab 上创建空项目，并复制克隆地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git@gitlab.com:xiaoming/project-test.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：需要配置好gitlab与本地关联的ssh密钥</p></blockquote><p>3、 cd至项目内部，查看git remote是否是origin</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> git branch -r
 
#  origin/HEAD -&gt; origin/main
# origin/main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、是origin则直接修改origin的url，url为刚才复制的新建项目的url</p><blockquote><p>这里也可以手动替换 url地址，具体位置：在项目 test\\.git\\config 文件中</p></blockquote><p>命令方式替换：</p><blockquote><p>在test项目目录下执行下方命令</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote set-url origin git@gitlab.com:xiaoming/project-test.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、查看test项目是否已修改为新项目地址的url<br> 在test项目目录下使用此命令查看：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat .git\\config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如下：</p><blockquote><p>文件位置：test\\.git\\config</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote &quot;origin&quot;]
#	   url = git@gitee.com:xiaoming/test.git   # 修改前的url
	url = git@gitlab.com:xiaoming/project-test.git   # 修改后的url
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch &quot;main&quot;]
	remote = origin
	merge = refs/heads/main
[user]
	name = xiaominga # 用户名
	email = xiaoming@qq.com  # 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、推送代码至新仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>默认也可以使用git push</p><p>mater表示是master分支名的代码提交到project-test仓库</p></blockquote><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2>`,21),v={href:"https://blog.nnxx.me/posts/e238cc11.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/weixin_44549646/article/details/127494340",target:"_blank",rel:"noopener noreferrer"};function p(h,x){const t=s("ExternalLinkIcon");return r(),d("div",null,[c,e("blockquote",null,[e("p",null,[i("也可以直接使用gitee仓库中url地址直接导入整个仓库到gitlab中，"),u,i(" 例如："),e("a",g,[i("http://gitee.com"),n(t)]),i(":xiaoming/test.git")])]),m,e("p",null,[i("参考："),e("a",v,[i("git账号多配置"),n(t)])]),e("p",null,[e("a",b,[i("https://blog.csdn.net/weixin_44549646/article/details/127494340"),n(t)])])])}const k=l(o,[["render",p],["__file","gitlab导入本地或远程仓库代码.html.vue"]]);export{k as default};
