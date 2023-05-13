(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{289:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一键安装Docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSL")]),s._v(" https://get.daocloud.io/docker "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])])]),t("h2",{attrs:{id:"docker-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[s._v("#")]),s._v(" Docker 安装")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#卸载旧版Docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker-engine "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker.io\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" apt-transport-https ca-certificates "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("  software-properties-common\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加官方密钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://download.docker.com/linux/ubuntu/gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# error：gpg: can't connect to the agent: IPC connect call failed")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" remove gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gnupg1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#换阿里镜像源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\\n  '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/docker.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] \t\t      \t\t\t\thttps://download.docker.com/linux/ubuntu \\\n   '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/docker.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置稳定的存储库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装docker引擎")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" docker-ce docker-ce-cli containerd.io\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开机自启")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"docker-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-使用"}},[s._v("#")]),s._v(" Docker 使用")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#建立 docker 组:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aG")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将当前用户加入 docker 组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" hello-world  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n\n")])])]),t("h2",{attrs:{id:"拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[s._v("#")]),s._v(" 拉取镜像")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Docker Registry 地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":端口号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("仓库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":标签"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull ubuntu:18.04\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" ubuntu:18.04 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-it：这是两个参数，一个是 -i：交互式操作，一个是 -t 终端。我们这里打算进入 bash 执行一些命令并查看返回结果，因此我们需要交互式终端")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/os-release\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ubuntu"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18.04.5 LTS (Bionic Beaver)"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ID_LIKE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("debian\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRETTY_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ubuntu 18.04.5 LTS"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18.04"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HOME_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.ubuntu.com/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUPPORT_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://help.ubuntu.com/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BUG_REPORT_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://bugs.launchpad.net/ubuntu/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRIVACY_POLICY_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION_CODENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bionic\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UBUNTU_CODENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bionic\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n$\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" system "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#命令来便捷的查看镜像、容器、数据卷所占用的空间")]),s._v("\n$\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image prune "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#虚悬镜像已经失去了存在的价值，是可以随意删除的，可以用下面的命令删除")]),s._v("\n")])])]),t("h2",{attrs:{id:"删除镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[s._v("#")]),s._v(" 删除镜像")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("镜像"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("镜像"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker image ls 默认列出的就已经是短 ID 了，一般取前3个字符以上，只要足够区分于别的镜像就可以")]),s._v("\n$\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" ***  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#也可以使用<仓库名>:<标签>")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" trusting_newton\ntrusting_newton\n")])])]),t("h2",{attrs:{id:"使用容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用容器"}},[s._v("#")]),s._v(" 使用容器")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" webserver "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#命令进入容器，修改其内容")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看差异")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器ID或容器名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将容器保存为镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看历史")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker container ls 命令来查看容器信息")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container start\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container restart\n\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#命令交互式的输入用户名及密码来完成在命令行界面登录 Docker Hub")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("logout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出")]),s._v("\n")])])]),t("h2",{attrs:{id:"导入和导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入和导出"}},[s._v("#")]),s._v(" 导入和导出")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker import 从容器快照文件中再导入为镜像，")]),s._v("\n$\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ubuntu.tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - test/ubuntu:v1.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或URL导入")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" http://example.com/exampleimage.tgz example/imagerepo\n")])])]),t("p",[t("a",{attrs:{href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("DockerHub"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"推送-dockerhub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送-dockerhub"}},[s._v("#")]),s._v(" 推送 DockerHub")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker push 命令来将自己的镜像推送到 Docker Hub")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag ubuntu:18.04 username/ubuntu:18.04\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" load "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" XXX.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always 容器名\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);