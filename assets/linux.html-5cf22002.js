import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as r,e as c,b as e,d as i,a as n,f as s}from"./app-b652ea8e.js";const o="/assets/image-20221116231427095-c0ca3675.png",v="/assets/image-20221117002336127-825dce9e.png",u="/assets/image-20221117193843478-1f6e0878.png",m="/assets/image-20221117193946995-52502b66.png",p="/assets/image-20221117194250515-5b46f958.png",b="/assets/image-20221117200311623-dfe1910d.png",g={},x=e("p",null,[e("code",null,"more"),i(" 注释之前的内容被视为文章摘要。")],-1),h=s(`<h2 id="一、环境安装" tabindex="-1"><a class="header-anchor" href="#一、环境安装" aria-hidden="true">#</a> 一、环境安装</h2><h3 id="_1-jdk安装" tabindex="-1"><a class="header-anchor" href="#_1-jdk安装" aria-hidden="true">#</a> 1.JDK安装</h3><p>这里安装JDK版本jdk-8u11-linux-x64.tar.gz</p><p>注：在登录centos服务器之后切换到根（root）目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.在root权限下，在根目录下创建文件夹</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> mkdir -p /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换到/usr/local/java目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将该jdk-8u11-linux-x64.tar.gz压缩包上传到当前位置</p><p>2.解压jdk-8u11-linux-x64.tar.gz压缩包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf ./jdk-8u11-linux-x64.tar.gz -C /usr/local/java/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后切换到根目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.编辑Linux系统中环境变量所在文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.在文件最后加入环境变量设置，加入后保存文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export JAVA_HOME=/usr/local/java/jdk1.8.0_11 #这是自己的jdk所在位置
export
CLASSPATH=.:$JAVA_HOME/jre/lib/dt.jar:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/jre/lib/tools.jar
export PATH=$PATH:$JAVA_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.让环境变量生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.测试JDK是否已经配置好</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#执行命令
java -version
#显示如下
java version &quot;1.8.0_11&quot;
Java(TM) SE Runtime Environment (build 1.8.0_11-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.11-b03, mixed mode)

#执行命令
javac-version
#显示如下
javac 1.8.0_11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-docker安装" tabindex="-1"><a class="header-anchor" href="#_2-docker安装" aria-hidden="true">#</a> 2 .Docker安装</h2><p>在拉去之前，先配置镜像加速器</p>`,24),k={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors%EF%BC%8C%E7%99%BB%E9%99%86%E5%90%8E%EF%BC%8C%E5%B7%A6%E4%BE%A7%E8%8F%9C%E5%8D%95%E9%80%89%E4%B8%AD%E9%95%9C%E5%83%8F%E5%8A%A0%E9%80%9F%E5%99%A8%E5%B0%B1%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E4%BD%A0%E7%9A%84%E4%B8%93%E5%B1%9E%E5%9C%B0%E5%9D%80%E4%BA%86%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},f=s('<figure><img src="'+o+`" alt="image-20221116231427095" tabindex="0" loading="lazy"><figcaption>image-20221116231427095</figcaption></figure><p>因为工作的需要,需要把docker 启动后的路径改成/data,所以就会用到:<em>/etc/docker/daemon.json</em> 是docker 的配置<em>文件</em>,默认是没有的,需要我们手动创建,可配置项<em>如下:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在根目录下
cd /
#创建docker目录
mkdir -p /etc/docker
# 切换到docker目录下
cd /etc/docker
# 创建daemon.json
touch daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后打开下面的配置文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在根目录下打开该配置文件
vi /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在/etc/docker/daemon.json文件末尾增加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;registry-mirrors&quot;: [&quot;https://你的ID.mirror.aliyuncs.com&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修改完daemon.json文件后，需要让这个文件生效</p><p>a.修改完成后reload配置文件</p><p>sudo systemctl daemon-reload</p><p>b.重启docker服务</p><p>sudo systemctl restart docker.service</p><p>c.查看状态</p><p>sudo systemctl status docker -l</p><p>d.查看服务</p><p>sudo docker info</p></blockquote><p><em><strong>为什么配置这个呢？原因是docker下载镜像速度慢，需要配置国内镜像加速。</strong></em></p><p>Docker可以运行在MAC、Windows、CentOS、UBUNTU等操作系统上，本课程基于CentOS7安装Docker</p>`,10),_={href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"},q=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#1、yum包更新到最新
yum update
#2、安装需要的软件包，yum-util提供yum-config-manager功能，另外两个是devicemapper驱动依赖的
yum install -y yum-utils device-mapper-persistent-data lvm2
#3、设置yum源
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
#4、安装docker，出现输入的界面都按 y
yum install -y docker-ce
#5、查看docker版本，验证是否验证成功
docker -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1docker命令" tabindex="-1"><a class="header-anchor" href="#_2-1docker命令" aria-hidden="true">#</a> 2.1docker命令</h4><p>1.进程相关命令</p><p>启动docker服务:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止docker服务:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启docker服务:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看docker服务状态:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置开机启动docker服务:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.镜像相关命令</p><p>镜像命令包括如下内容：查看镜像、搜索镜像、拉取镜像、删除镜像</p><p>查看镜像:查看本地所有的镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
docker images –q #查看所用镜像的id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索镜像:从网络中查找需要的镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search 镜像名称
docker search redis #查找redis镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>拉取镜像:从Docker仓库下载镜像到本地，镜像名称格式为名称:版本号，如果版本号不指定则是最新的版本lastest。</p><p>如果不知道镜像版本，可以去dockerhub搜索对应镜像查看。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull 镜像名称
docker pull redis #下载最新版本redis
docker pull redis:5.0 #下载5.0版本redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除镜像:删除本地镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi 镜像id #删除指定本地镜像
docker images -q #查看所有的镜像列表
dockerrmi \`docker images -q\` #删除所有本地镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.容器相关命令</p><p>查看容器、创建容器、进入容器、启动容器、停止容器、删除容器、查看容器信息</p><p>查看容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps #查看正在运行的容器
docker ps –a #查看所有容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建并启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run 参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：</p><p>-i：保持容器运行。通常与-t同时使用。加入it这两个参数后，容器创建后自动进入容器中，退出容器后，容器自动关闭。</p><p>-t：为容器重新分配一个伪输入终端，通常与-i同时使用。</p><p>-d：以守护（后台）模式运行容器。创建一个容器在后台运行，需要使用dockerexec进入容器。退出后，容器不会关闭。</p><p>-it创建的容器一般称为交互式容器，-id创建的容器一般称为守护式容器</p><p>--name：为创建的容器命名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --name=c1 centos:7 /bin/bash #创建交互式容器
docker run -id --name=c2 centos:7 #创建守护式容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：交互式容器，exit后容器自动关闭，守护式容器会在后台执行</p><p>进入容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it c2 /bin/bash #进入容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dockerstart容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除容器：如果容器是运行状态则删除失败，需要停止容器才能删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看容器信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker inspect 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.Docker容器的数据卷</p><p>....</p><h2 id="_3-docker应用部署" tabindex="-1"><a class="header-anchor" href="#_3-docker应用部署" aria-hidden="true">#</a> 3.Docker应用部署</h2><p>3.1MySQL部署</p><p>分析</p><p>容器内的网络服务和外部机器不能直接通信</p><p>外部机器和宿主机可以直接通信宿主机和容器可以直接通信</p><p>当容器中的网络服务需要被外部机器访问时，可以将容器中提供服务的端口映射到宿主机的端口上。外部机器访问宿主机的端口，从而间接访问容器的服务。</p><p>这种操作称为：<strong>端口映射</strong></p><figure><img src="`+v+`" alt="image-20221117002336127" tabindex="0" loading="lazy"><figcaption>image-20221117002336127</figcaption></figure><p>1.搜索mysql镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.拉取mysql镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:5.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.创建容器，设置端口映射、目录映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在/root目录下创建mysql目录用于存储mysql数据信息
mkdir ~/mysql
cd ~/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -id \\
-p 3307:3306 \\
--name=c_mysql \\
-v $PWD/conf:/etc/mysql/conf.d \\
-v $PWD/logs:/logs \\
-v $PWD/data:/var/lib/mysql \\
-e MYSQL_ROOT_PASSWORD=123456 \\
mysql:5.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><p>-p 3307:3306：将容器的3306端口映射到宿主机的3307端口。</p><p>-v $PWD/conf:/etc/mysql/conf.d：将主机当前目录下的conf/my.cnf挂载到容器的 /etc/mysql/my.cnf 。配置目录</p><p>-v $PWD/logs:/logs：将主机当前目录下的logs目录挂载到容器的/logs。日志目录</p><p>-v $PWD/data:/var/lib/mysql：将主机当前目录下的data目录挂载到容器的/var/lib/mysql。数据目录</p><p>-e MYSQL_ROOT_PASSWORD=123456：初始化root用户的密码。</p><p>4.进入容器，操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it c_mysql /bin/bash
mysql -u root -p123456
show databases;
create database db1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2.Tomcat部署</p><p>1.搜索tomcat镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.拉取tomcat镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.创建容器，设置端口映射、目录映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在/root目录下创建tomcat目录用于存储tomcat数据信息
mkdir ~/tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行下面的命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -id --name=c_tomcat \\
-p 8080:8080 \\
-v $PWD:/usr/local/tomcat/webapps \\
tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><p>-p 8080:8080：将容器的8080端口映射到主机的8080端口</p><p>-v $PWD:/usr/local/tomcat/webapps：将主机中当前目录挂载到容器的webapps</p><p>4.使用外部机器访问tomcat</p><p>3.3.Nginx部署</p><p>1.搜索nginx镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.拉取nginx镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.创建容器，设置端口映射、目录映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在root目录下创建nginx目录用于存储nginx数据信息
mkdir ~/nginx
cd ~/nginx
mkdir conf
cd conf
#在~/nginx/conf/下创建nginx.conf文件,粘贴下面内容
vim nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行下面的命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user nginx;
worker_processes 1;

error_log 	/var/log/nginx/error.log warn;
pid 		/var/run/nginx.pid;

events{
	worker_connections 1024;
}

http{
    include 	/etc/nginx/mime.types;
    default_type application/octet-stream;
    log_format	main &#39;$remote_addr-$remote_user[$time_local]&quot;$request&quot;&#39;
                    &#39;$status$body_bytes_sent&quot;$http_referer&quot;&#39;
                    &#39;&quot;$http_user_agent&quot;&quot;$http_x_forwarded_for&quot;&#39;;
    access_log	/var/log/nginx/access.log main;

    sendfile	on;
    #tcp_nopush	on;

    keepalive_timeout 65;

    #gzip on;
    include /etc/nginx/conf.d/*.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行下面的命令启动nginx容器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -id --name=c_nginx \\
-p 80:80 \\
-v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf \\
-v $PWD/logs:/var/log/nginx \\
-v $PWD/html:/usr/share/nginx/html \\
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4.Redis部署</p><p>1.搜索redis镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.拉取redis镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull redis:5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.创建容器，设置端口映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -id --name=c_redis -p 6379:6379 redis:5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.使用外部机器连接redis</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./redis-cli.exe -h 192.168.220.12 -p 6379
keys *
set name keney
get name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-dockerfile" tabindex="-1"><a class="header-anchor" href="#_4-dockerfile" aria-hidden="true">#</a> 4.Dockerfile</h2><p>4.1docker镜像原理：</p><p>思考：</p><p>Docker 镜像本质是什么？</p><p>Docker 中一个centos镜像为什么只有200MB，而一个centos操作系统的iso文件要几个个G？</p><p>Docker 中一个tomcat镜像为什么有600MB，而一个tomcat安装包只有70多MB？</p><p>操作系统组成部分：</p><p>进程调度子系统</p><p>进程通信子系统</p><p>内存管理子系统</p><p>设备管理子系统</p><p>文件管理子系统</p><p>网络通信子系统</p><p>作业控制子系统</p><p>Linux文件系统由bootfs和rootfs两部分组成</p><p>bootfs：包含bootloader（引导加载程序）和 kernel（内核） rootfs： root文件系统，包含的就是典型 Linux 系统中的/dev，/proc，/bin，/etc等标准目录和文件</p><p>不同的linux发行版，bootfs基本一样，而rootfs不同，如ubuntu，centos等</p><figure><img src="`+u+'" alt="image-20221117193843478" tabindex="0" loading="lazy"><figcaption>image-20221117193843478</figcaption></figure><p>docker镜像原理</p><p>Docker镜像是由特殊的文件系统叠加而成</p><p>最底端是 bootfs，并使用宿主机的bootfs</p><p>第二层是 root文件系统rootfs,称为base image 然后再往上可以叠加其他的镜像文件</p><p>统一文件系统（Union File System）技术能够将不同的层整合成一个文件系统，为这些层提供了一个统一的 视角，这样就隐藏了多层的存在，在用户的角度看来，只存在一个文件系统。</p><p>一个镜像可以放在另一个镜像的上面。位于下面的镜像称为父镜像，最底部的镜像成为基础镜像。</p><p>当从一个镜像启动容器时，Docker会在最顶层加载一个读写文件系统作为容器</p><figure><img src="'+m+`" alt="image-20221117193946995" tabindex="0" loading="lazy"><figcaption>image-20221117193946995</figcaption></figure><p>回答问题</p><p>1.Docker 镜像本质是什么？ 是一个分层文件系统</p><p>2.Docker 中一个centos镜像为什么只有200MB，而一个centos操作系统的iso文件要几个个G？</p><p>Centos的iso镜像文件包含bootfs和rootfs，而docker的centos镜像复用操作系统的bootfs，只有rootfs和其 他镜像层</p><p>3.Docker 中一个tomcat镜像为什么有600MB，而一个tomcat安装包只有70多MB？ 由于docker中镜像是分层的，tomcat虽然只有70多MB，但他需要依赖于父镜像和基础镜像，所有整个对外 暴露的tomcat镜像大小600多MB</p><p>4.2镜像制作</p><p>容器转换镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit 容器id 镜像名称:版本号
docker save -o 压缩文件名称 镜像名称:版本号
docker load –i 压缩文件名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="image-20221117194250515" tabindex="0" loading="lazy"><figcaption>image-20221117194250515</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建tomcat镜像
docker run -id --name=c_tomcat \\
-p 8080:8080 \\
-v $PWD:/usr/local/tomcat/webapps \\
tomcat
# 进入tomcat镜像
docker exec -it c_tomcat /bin/bash
#创建a.txt b.txt
cd ~
touch a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#容器转镜像
docker commit 28b8d4dc9744 lxs_tomcat:1.0
#压缩镜像
docker save -o lxs_tomcat.tar lxs_tomcat:1.0
#删除原来镜像
docker rmi lxs_tomcat:1.0
#从压缩文件加载镜像
docker load -i lxs_tomcat.tar
#产生镜像
docker run -it --name=new_tomcat lxs_tomcat:1.0 /bin/bash
#进入查看内容
docker exec -it c_tomcat /bin/bash
#可以看到a.txt b.txt存在，而webapps/test不存在
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dockerfile</p><p>概念</p><p>Dockerfile 是一个文本文件</p><p>包含了一条条的指令</p><p>每一条指令构建一层，基于基础镜像，最终构建出一个新的镜像</p><p>对于开发人员：可以为开发团队提供一个完全一致的开发环境</p><p>对于测试人员：可以直接拿开发时所构建的镜像或者通过Dockerfile文件构建一个新的镜像开始工作了</p><p>对于运维人员：在部署时，可以实现应用的无缝移植</p>`,152),y={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},D=s(`<table><thead><tr><th>关键字</th><th>作用</th><th>备注</th></tr></thead><tbody><tr><td>FROM</td><td>指定父镜像</td><td>指定dockerfile基于那个image构建</td></tr><tr><td>MAINTAINER</td><td>作者信息 用</td><td>用来标明这个dockerfile谁写的</td></tr><tr><td>LABEL</td><td>标签</td><td>用来标明dockerfile的标签 可以使用Label代替Maintainer 最终都是在 docker image基本信息中可以查看</td></tr><tr><td>RUN</td><td>容器启动命 令</td><td>执行一段命令 默认是/bin/sh 格式: RUN command 或者 RUN [&quot;command&quot; , &quot;param1&quot;,&quot;param2&quot;]</td></tr><tr><td>CMD</td><td>容器启动命 令</td><td>提供启动容器时候的默认命令 和ENTRYPOINT配合使用.格式 CMD command param1 param2 或者 CMD [&quot;command&quot; , &quot;param1&quot;,&quot;param2&quot;]</td></tr><tr><td>ENTRYPOINT</td><td>入口</td><td>一般在制作一些执行就关闭的容器中会使用</td></tr><tr><td>COPY</td><td>复制文件</td><td>build的时候复制文件到image中</td></tr><tr><td>ADD</td><td>添加文件</td><td>build的时候添加文件到image中 不仅仅局限于当前build上下文 可以来 源于远程服务</td></tr><tr><td>ENV</td><td>环境变量</td><td>指定build时候的环境变量 可以在启动的容器的时候 通过-e覆盖 格式 ENV name=value</td></tr><tr><td>ARG</td><td>构建参数</td><td>构建参数 只在构建的时候使用的参数 如果有ENV 那么ENV的相同名字 的值始终覆盖arg的参数</td></tr><tr><td>VOLUME</td><td>定义外部可 以挂载的数 据卷</td><td>指定build的image那些目录可以启动的时候挂载到文件系统中 启动容 器的时候使用 -v 绑定 格式 VOLUME [&quot;目录&quot;]</td></tr><tr><td>EXPOSE</td><td>暴露端口</td><td>定义容器运行的时候监听的端口 启动容器的使用-p来绑定暴露端口 格 式: EXPOSE 8080 或者 EXPOSE 8080/udp</td></tr><tr><td>WORKDIR</td><td>工作目录</td><td>指定容器内部的工作目录 如果没有创建则自动创建 如果指定/ 使用的是 绝对地址 如果不是/开头那么是在上一条workdir的路径的相对路径</td></tr><tr><td>USER</td><td>指定执行用 户</td><td>指定build或者启动的时候 用户 在RUN CMD ENTRYPONT执行的时候 的用户</td></tr><tr><td>HEALTHCHECK</td><td>健康检查</td><td>指定监测当前容器的健康监测的命令 基本上没用 因为很多时候 应用本 身有健康监测机制</td></tr><tr><td>ONBUILD</td><td>触发器</td><td>当存在ONBUILD关键字的镜像作为基础镜像的时候 当执行FROM完成 之后 会执行 ONBUILD的命令 但是不影响当前镜像 用处也不怎么大</td></tr><tr><td>STOPSIGNAL</td><td>发送信号量 到宿主机</td><td>该STOPSIGNAL指令设置将发送到容器的系统调用信号以退出。</td></tr><tr><td>SHELL</td><td>指定执行脚 本的shell</td><td>指定RUN CMD ENTRYPOINT 执行命令的时候 使用的shell</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><hr><p>案例一：</p><p>自定义centos7镜像。</p><p>要求：</p><ol><li>默认登录路径为 /usr</li><li>可以使用vim</li></ol><p>实现步骤</p><p>定义父镜像：FROM centos:7</p><p>定义作者信息：MAINTAINER lxs <a href="mailto:lxs@lxs.cn">lxs@lxs.cn</a></p><p>执行安装vim命令： RUN yum install -y vim</p><p>定义默认的工作目录：WORKDIR /usr</p><p>定义容器启动执行的命令：CMD /bin/bash</p><p>通过dockerfile构建镜像：docker bulid –f dockerfile文件路径 –t 镜像名称:版本 .</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#具体代码
mkdir ~/docker-files
cd ~/docker-files
vim centos_dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dockerfile具体内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM centos:7
MAINTAINER lxs &lt;lxs@lxs.cn&gt;
RUN yum install -y vim
WORKDIR /usr
CMD /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>build</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -f ./centos_dockerfile -t lxs_centos:1 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-f：镜像文件</p><p>-t：新镜像名</p><p>. 寻址路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#进入看效果
docker run -it --name=c2 lxs_centos:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>案例二：发布springboot项目</p><p>定义父镜像：FROM java:8</p><p>定义作者信息：MAINTAINER lxs <a href="mailto:lxs@163.com">lxs@163.com</a></p><p>将jar包添加到容器： ADD springboot.jar app.jar</p><p>定义容器启动执行的命令：CMD [&quot;java&quot;,&quot;-jar&quot;,&quot;app.jar&quot;]</p><p>通过dockerfile构建镜像：docker bulid –f dockerfile文件路径 –t 镜像名称:版本 .</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM java:8
MAINTAINER lxs &lt;lxs@163.com&gt;
ADD springboot.jar app.jar
CMD [&quot;java&quot;,&quot;-jar&quot;,&quot;app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>build</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker bulid –f ./springboot_dockerfile –t app .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -id -p 9000:8080 app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-服务编排" tabindex="-1"><a class="header-anchor" href="#_5-服务编排" aria-hidden="true">#</a> 5.服务编排</h2><p>5.1. 概念</p><p>微服务架构的应用系统中一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启 动停止，维护的工作量会很大。来看下我们日常工作：</p><p>要从Dockerfile build image 或者去dockerhub拉取image</p><p>要创建多个container</p><p>要管理这些container（启动停止删除）</p><p>通过服务编排可以大量简化上面的工作服务编排：按照一定的业务规则批量管理容器</p><p>5.2 Docker Compose</p><p>Docker Compose是一个编排多容器分布式部署的工具，提供命令集中管理容器化应用的完整开发周期，包括服务 构建，启动和停止。使用步骤：</p><ol><li>利用 Dockerfile 定义运行环境镜像</li><li>使用 docker-compose.yml 定义组成应用的各服务</li><li>运行 docker-compose up 启动应用</li></ol><figure><img src="`+b+`" alt="image-20221117200311623" tabindex="0" loading="lazy"><figcaption>image-20221117200311623</figcaption></figure><p>安装Docker Compose</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Compose目前已经完全支持Linux、Mac OS和Windows，在我们安装Compose之前，需要先安装Docker。下面我 们以
编译好的二进制包方式安装在Linux系统中。
curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-\`uname -s\`-
\`uname -m\` -o /usr/local/bin/docker-compose
# 设置文件可执行权限
chmod +x /usr/local/bin/docker-compose
# 查看版本信息
docker-compose -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载Docker Compose</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 二进制包方式安装的，删除二进制文件即可
rm /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编排nginx+springboot</p><p>需求：使用nginx反向代理到springboo应用</p><ol><li>创建docker-compose目录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir ~/docker-compose
cd ~/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.编写 docker-compose.yml 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
services:
nginx:
image: nginx
ports:
- 80:80
links:
- app
volumes:
- ./nginx/conf.d:/etc/nginx/conf.d
app:
image: app
expose:
- &quot;8080&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.创建./nginx/conf.d目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p ./nginx/conf.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.在./nginx/conf.d目录下 编写app.conf文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    access_log off;
    
    location / {
  	  proxy_pass http://app:8080/hello;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.在~/docker-compose 目录下 使用docker-compose 启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose up -d # -d表示已守护模式启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>测试访问</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://192.168.220.12/hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-docker私有仓库" tabindex="-1"><a class="header-anchor" href="#_6-docker私有仓库" aria-hidden="true">#</a> 6.Docker私有仓库</h2>`,63),E={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},A=s(`<p>6.1. 私有仓库搭建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1、拉取私有仓库镜像
docker pull registry
# 2、启动私有仓库容器
docker run -id --name=registry -p 5000:5000 registry
# 3、打开浏览器 输入地址http://私有仓库服务器ip:5000/v2/_catalog，看到{&quot;repositories&quot;:[]} 表示私有仓
库 搭建成功
# 4、修改daemon.json
vim /etc/docker/daemon.json
# 在上述文件中添加一个key，保存退出。此步用于让 docker 信任私有仓库地址；注意将私有仓库服务器ip修改为自
己私有仓库服务器真实ip
{&quot;insecure-registries&quot;:[&quot;私有仓库服务器ip:5000&quot;]}
{&quot;insecure-registries&quot;:[&quot;192.168.220.12:5000&quot;]}
# 5、重启docker 服务
systemctl restart docker
docker start registry

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.2将镜像上传至私有仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1、标记镜像为私有仓库的镜像
docker tag centos:7 192.168.220.12:5000/centos:7
# 2、上传标记的镜像
docker push 192.168.220.12:5000/centos:7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从私有仓库拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#拉取镜像
docker pull 192.168.220.12:5000/centos:7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2>`,7),M={href:"https://www.cnblogs.com/yakniu/p/16329611.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.leixue.com/qa/how-does-centos-check-port-occupancy",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"参考mysql数据库问题：",-1),O=e("p",null,"【MySql】Navicat 连接数据库出现1251 - Client does not support authentication protocol ...... 问题的解决方法：",-1),w={href:"https://blog.csdn.net/pengfeng111833/article/details/124399404",target:"_blank",rel:"noopener noreferrer"},B={href:"https://blog.csdn.net/piupiu78/article/details/122468163",target:"_blank",rel:"noopener noreferrer"};function C(R,P){const d=t("ExternalLinkIcon");return l(),r("div",null,[x,c(" more "),h,e("p",null,[i("阿里云镜像获取地址："),e("a",k,[i("https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors，登陆后，左侧菜单选中镜像加速器就可以看到你的专属地址了："),n(d)])]),f,e("p",null,[i("官网："),e("a",_,[i("https://www.docker.com"),n(d)])]),q,e("p",null,[i("参考Dochub网址："),e("a",y,[i("https://hub.docker.com"),n(d)]),i(" ，比如centos和nginx镜像")]),D,e("blockquote",null,[e("p",null,[i("Docker官方的Docker hub（"),e("a",E,[i("https://hub.docker.com"),n(d)]),i("）是一个用于管理公共镜像的仓库，我们可以从上面拉 取镜像 到本地，也可以把我们自己的镜像推送上去。但是，有时候我们不希望将自己的镜 像放到公网当中， 那么这时我们就需要搭建自己的私有仓库来存储和管理自己的镜像")])]),A,e("p",null,[i("参考："),e("a",M,[i("https://www.cnblogs.com/yakniu/p/16329611.html"),n(d)])]),e("p",null,[i("参考：服务端口占用情况："),e("a",j,[i("https://www.leixue.com/qa/how-does-centos-check-port-occupancy"),n(d)])]),N,O,e("p",null,[e("a",w,[i("https://blog.csdn.net/pengfeng111833/article/details/124399404"),n(d)])]),e("p",null,[e("a",B,[i("https://blog.csdn.net/piupiu78/article/details/122468163"),n(d)])])])}const $=a(g,[["render",C],["__file","linux.html.vue"]]);export{$ as default};
