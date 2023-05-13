# nacos安装指南

### 安装JDK1.8

```shell
sudo apt-get update && sudo apt install openjdk-8-jdk
#查看版本号
java -version
#输出如下内容为成功
openjdk version "1.8.0_312"
OpenJDK Runtime Environment (build 1.8.0_312-8u312-b07-0ubuntu1~18.04-b07)
OpenJDK 64-Bit Server VM (build 25.312-b07, mixed mode)
```

```bash
#从github下载nacos-servr tar包
https://github.com/alibaba/nacos/releases/download/1.4.3/nacos-server-1.4.3.tar.gz
```

```bash
#cd nacos/bin下
./startup.sh -m standalone   #启动单机模式
```

