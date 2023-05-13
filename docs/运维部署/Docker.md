# Docker

```shell
#一键安装Docker
curl -sSL https://get.daocloud.io/docker | sh
```

## Docker 安装

```shell
sudo apt-get update && apt-get upgrade

#卸载旧版Docker
sudo apt-get remove docker \
               docker-engine \
               docker.io
#安装依赖
sudo apt-get install -y apt-transport-https ca-certificates curl  software-properties-common

#添加官方密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# error：gpg: can't connect to the agent: IPC connect call failed
sudo apt remove gpg && sudo apt install gnupg1
#换阿里镜像源
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 官方源
echo \
   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] 		      				https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

#设置稳定的存储库
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

#安装docker引擎
sudo  apt-get install -y docker-ce docker-ce-cli containerd.io
#开机自启
systemctl enable docker

```

## Docker 使用

```shell
#建立 docker 组:
sudo groupadd docker
sudo usermod -aG docker $USER #将当前用户加入 docker 组
docker run --rm hello-world  #测试环境
#查看镜像
docker images

```

## 拉取镜像

```shell
$ docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
$ docker pull ubuntu:18.04
$ docker run -it --rm ubuntu:18.04 bash  #运行
#-it：这是两个参数，一个是 -i：交互式操作，一个是 -t 终端。我们这里打算进入 bash 执行一些命令并查看返回结果，因此我们需要交互式终端
docker image ls #列出镜像
cat /etc/os-release
'''
NAME="Ubuntu"
VERSION="18.04.5 LTS (Bionic Beaver)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 18.04.5 LTS"
VERSION_ID="18.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=bionic
UBUNTU_CODENAME=bionic
'''
$	docker system df #命令来便捷的查看镜像、容器、数据卷所占用的空间
$	docker image prune #虚悬镜像已经失去了存在的价值，是可以随意删除的，可以用下面的命令删除
```

## 删除镜像

```shell
$ docker image rm [选项] <镜像1> [<镜像2> ...]
$ docker image ls
#docker image ls 默认列出的就已经是短 ID 了，一般取前3个字符以上，只要足够区分于别的镜像就可以
$	docker image rm ***  #也可以使用<仓库名>:<标签>
$ docker container rm trusting_newton
trusting_newton
```

## 使用容器

```shell
$	docker exec -it webserver bash #命令进入容器，修改其内容
$ docker diff  #查看差异
$ docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]] #将容器保存为镜像
$ docker history  #查看历史
$ docker container ls  #docker container ls 命令来查看容器信息
$ docker container start
$ docker container restart


$ docker login #命令交互式的输入用户名及密码来完成在命令行界面登录 Docker Hub
$ docker logout #退出
```

## 导入和导出

```shell
#docker import 从容器快照文件中再导入为镜像，
$	cat ubuntu.tar | docker import - test/ubuntu:v1.0
#或URL导入
$ docker import http://example.com/exampleimage.tgz example/imagerepo
```

[DockerHub](https://hub.docker.com)

## 推送 DockerHub

```shell
#docker push 命令来将自己的镜像推送到 Docker Hub
$ docker tag ubuntu:18.04 username/ubuntu:18.04
$ docker load -i XXX.tar.gz
$ docker image ls

```

```shell
docker update --restart=always 容器名
```
