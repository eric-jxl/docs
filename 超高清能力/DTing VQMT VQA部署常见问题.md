# DTing VQMT VQA部署常见问题

### 获取vmd_tools

```shell
sudo apt-get install ocl-icd-libopencl1 -y #依赖项
git clone -b vmd_tool_v1.0.0 http://gitlab.cmvideo.cn/video_platform/vmd/vmd_tools.git
```



### 依赖ffmpeg 安装解决：

```shell
sudo add-apt-repository ppa:jonathonf/ffmpeg-4  #添加ffmpge-4 仓库
sudo add-apt-repository -r ppa:savoury1/ffmpeg4 #失败删除仓库地址
sudo apt-get install ffmpeg
sudo apt --fix-broken install ffmpeg

#安装成功测试
ffmpeg version
```

### 安装VMQT问题

```shell
sudo dpkg -i vqmt-13.1~.pro-12728.deb
#安装结果如下：
Selecting previously unselected package vqmt.
(Reading database ... 146831 files and directories currently installed.)
Preparing to unpack vqmt-13.1~.pro-12728.deb ...
Unpacking vqmt (13.1~.pro-12728) ...
Setting up vqmt (13.1~.pro-12728) ...
```



```shell
sudo vqmt -gui #报错如下
16:30:49 : [ERROR] Metric not specified
16:30:49 : [ERROR] Nesessary files or metrics were not opened, nothing to process

#卸载vqmt原版本
sudo apt-get --purge remove vqmt

# vqmt软件新版本（14.0）安装到系统路径
sudo dpkg -i vqmt-14.0_beta.pro-12796.deb
# 测试成功,生成MG-JS1_Src_MG-JS2_Weier_delta-ictcp.json
vqmt -orig /data/video_test/MG-JS1_Src.ts -in /data/video_test/MG-JS2_Weier.ts -json-default-file -csv-dir /data/video_test/ -metr delta-ictcp
```

成功实例

![image-20220302162454133](https://s2.loli.net/2022/03/02/9bzOEVsi7ZCBQUR.png)

Dting 测试VMAF结果

![image-20220301170259391](https://s2.loli.net/2022/03/01/xeJdUkYomgyun24.png)

test_vmaf.log, ==frameNum==为当前帧数,==vmaf==第frameNum帧，==vmaf==数值为27.565540

<img src="https://s2.loli.net/2022/03/01/BtCFuJj6GHM2rs4.png" alt="image-20220301170448654"  style="zoom:50%;float:left" />

总数据字段==mean==代表最终输出为16.627912

<img src="https://s2.loli.net/2022/03/01/r1Fu78WLUf4sxRh.png" alt="image-20220301171240687" style="zoom: 67%;float:left" />
