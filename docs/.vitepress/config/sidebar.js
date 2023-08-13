module.exports = {
  '/notebook/': [
    {
      text: '运维笔记',
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: 'Linux服务器运维',
          collapsed: true,
          items: [
            { text: '部署Linux网络安装服务器', link: '/notebook/LinuxServer/部署Linux网络安装服务器.md' },
            { text: 'DHCP服务', link: '/notebook/LinuxServer/DHCP服务.md' },
            { text: 'DNS服务', link: '/notebook/LinuxServer/DNS服务.md' },
            { text: 'FTP文件服务器', link: '/notebook/LinuxServer/FTP文件服务器.md' },
            { text: 'Linux时间服务器', link: '/notebook/LinuxServer/Linux时间服务器.md' },
            { text: 'Linux双机热备', link: '/notebook/LinuxServer/Linux双机热备.md' },
          ]
        },
        {
          text: 'Linux系统管理',
          collapsed: true,
          items: [
            { text: 'CentOS8启动流程', link: '/notebook/LinuxSystem/CentOS8启动流程.md' },
            { text: 'GPT磁盘管理', link: '/notebook/LinuxSystem/GPT磁盘管理.md' },
            { text: 'Linux acl权限', link: '/notebook/LinuxSystem/Linuxacl权限.md' },
            { text: 'linux nmcli命令详解', link: '/notebook/LinuxSystem/linuxnmcli命令详解.md' },
            { text: 'linux shadow文件', link: '/notebook/LinuxSystem/linuxshadow文件.md' },
            { text: 'linux密码管理', link: '/notebook/LinuxSystem/linux密码管理.md' },
            { text: 'linux磁盘分区与格式化', link: '/notebook/LinuxSystem/linux磁盘分区与格式化.md' },
            { text: 'linux组管理', link: '/notebook/LinuxSystem/linux组管理.md' },
            { text: 'linux网络管理', link: '/notebook/LinuxSystem/linux网络管理.md' },
            { text: 'linux聚合链路', link: '/notebook/LinuxSystem/linux聚合链路.md' },
            { text: 'linux计划任务', link: '/notebook/LinuxSystem/linux计划任务.md' },
            { text: 'linux路由管理', link: '/notebook/LinuxSystem/linux路由管理.md' },
            { text: 'linux进程管理', link: '/notebook/LinuxSystem/linux进程管理.md' },
            { text: 'linux隐藏权限', link: '/notebook/LinuxSystem/linux隐藏权限.md' },
            { text: 'linux分区挂载', link: '/notebook/LinuxSystem/linux分区挂载.md' },
            { text: 'linux启动常见问题', link: '/notebook/LinuxSystem/linux启动常见问题.md' },
            { text: 'Linux命令行介绍器', link: '/notebook/LinuxSystem/Linux命令行介绍.md' },
            { text: 'Linux基本优化', link: '/notebook/LinuxSystem/Linux基本优化.md' },
            { text: 'Linux基本命令与常用符号', link: '/notebook/LinuxSystem/Linux基本命令与常用符号.md' },
            { text: 'linux基本权限', link: '/notebook/LinuxSystem/linux基本权限.md' },
            { text: 'linux文件压缩与解压', link: '/notebook/LinuxSystem/linux文件压缩与解压.md' },
            { text: 'linux日志服务器部署', link: '/notebook/LinuxSystem/linux日志服务器部署.md' },
            { text: 'linux日志管理', link: '/notebook/LinuxSystem/linux日志管理.md' },
            { text: 'Linux服务介绍', link: '/notebook/LinuxSystem/Linux服务介绍.md' },
            { text: 'linux服务管理', link: '/notebook/LinuxSystem/linux服务管理.md' },
            { text: 'Linux特殊权限', link: '/notebook/LinuxSystem/Linux特殊权限.md' },
            { text: 'linux用户管理', link: '/notebook/LinuxSystem/linux用户管理.md' },
            { text: 'Linux目录结构和文件属性管理', link: '/notebook/LinuxSystem/Linux目录结构和文件属性管理.md' },
            { text: 'linux磁盘使用实战案例', link: '/notebook/LinuxSystem/linux磁盘使用实战案例.md' },
            { text: 'linux磁盘基本管理', link: '/notebook/LinuxSystem/linux磁盘基本管理.md' },
            { text: 'linux磁盘管理-RAID介绍', link: '/notebook/LinuxSystem/linux磁盘管理-RAID介绍.md' },
            { text: 'Linux系统监控工具-glances', link: '/notebook/LinuxSystem/Linux系统监控工具-glances.md' },
            { text: 'Linux终端的使用', link: '/notebook/LinuxSystem/Linux终端的使用.md' },
            { text: 'linux网络故障排查', link: '/notebook/LinuxSystem/linux网络故障排查.md' },
            { text: 'linux网络相关设置', link: '/notebook/LinuxSystem/linux网络相关设置.md' },
            { text: 'linux软件包管理', link: '/notebook/LinuxSystem/linux软件包管理.md' },
            { text: 'LVM逻辑卷介绍', link: '/notebook/LinuxSystem/LVM逻辑卷介绍.md' },
            { text: 'shell数据处理', link: '/notebook/LinuxSystem/shell数据处理.md' },
            { text: 'VIM文本编辑器', link: '/notebook/LinuxSystem/VIM文本编辑器.md' },
            { text: '创建一个软raid阵列', link: '/notebook/LinuxSystem/创建一个软raid阵列.md' },
            { text: '创建高可用逻辑卷', link: '/notebook/LinuxSystem/创建高可用逻辑卷.md' },
            { text: '构建可视化日志管理服务器', link: '/notebook/LinuxSystem/构建可视化日志管理服务器.md' },
            { text: '深入理解linux文件', link: '/notebook/LinuxSystem/深入理解linux文件.md' },
            { text: '逻辑卷实战案例-swap分区', link: '/notebook/LinuxSystem/逻辑卷实战案例-swap分区.md' },
            { text: '逻辑卷实战案例-其他常见操作', link: '/notebook/LinuxSystem/逻辑卷实战案例-其他常见操作.md' },
            { text: '逻辑卷实战案例-逻辑卷应用', link: '/notebook/LinuxSystem/逻辑卷实战案例-逻辑卷应用.md' },
            { text: '逻辑卷实战案例-逻辑卷扩容', link: '/notebook/LinuxSystem/逻辑卷实战案例-逻辑卷扩容.md' },
            { text: '逻辑卷实战案例-逻辑卷裁剪', link: '/notebook/LinuxSystem/逻辑卷实战案例-逻辑卷裁剪.md' },
            { text: '逻辑卷常用命令', link: '/notebook/LinuxSystem/逻辑卷常用命令.md' },
          ],
        },
        { text: '常用Git命令', link: '/notebook/Git' },
        { text: '常用Docker命令', link: '/notebook/Docker' },
        { text: '常用Linux命令', link: '/notebook/Linux' },
        { text: '常用Nginx命令', link: '/notebook/Nginx' },
        { text: '常用MySQL命令', link: '/notebook/Mysql' },
        { text: '常用Redis命令', link: '/notebook/Redis' },
        { text: '升级OpenSSH', link: '/notebook/openssh' },
        { text: 'PHP常用函数', link: '/notebook/php' },
      ]
    }
  ],
  '/about/': [
    {
      text: '关于',
      collapsed: false,
      collapsible: true,
      items: [
        { text: '关于我', link: '/about/' },
        { text: '我的工作', link: '/about/works' }
      ]
    }
  ]
}




