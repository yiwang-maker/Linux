# Jayden's Linux常用命令库 🚀

*Created for daily development work - 工作中最高频的命令合集*

## 📁 文件和目录操作 (File & Directory Operations)

```bash
# 查看当前目录内容
ls -la                    # 显示所有文件（包括隐藏文件）的详细信息
ls -lh                    # 以人类可读格式显示文件大小（KB, MB, GB）

# 目录导航
pwd                       # 显示当前工作目录的完整路径
cd /home/jayden/Downloads # 切换到指定目录
cd ..                     # 返回上级目录
cd ~                      # 回到用户主目录
cd -                      # 返回上一次访问的目录

# 创建和删除
mkdir -p project/src/components  # 递归创建多级目录
rmdir empty_folder              # 删除空目录
rm -rf unwanted_folder          # 强制删除目录及其所有内容（危险命令！）
rm file.txt                     # 删除单个文件
```

## 📄 文件查看和编辑 (File Viewing & Editing)

```bash
# 查看文件内容
cat README.md             # 显示整个文件内容
less package.json         # 分页查看大文件（按q退出）
head -n 10 log.txt        # 显示文件前10行
tail -n 20 error.log      # 显示文件后20行
tail -f server.log        # 实时监控文件变化（常用于查看日志）

# 文件操作
cp source.js backup.js    # 复制文件
cp -r src/ backup/        # 递归复制整个目录
mv old_name.js new_name.js # 重命名文件
mv file.txt /tmp/         # 移动文件到其他目录
```

## 🔍 搜索和查找 (Search & Find)

```bash
# 查找文件
find . -name "*.js"       # 在当前目录及子目录中查找所有.js文件
find /home -type f -name "config*"  # 查找以config开头的文件
locate filename           # 快速定位文件（需要updatedb）

# 文本搜索
grep -r "function" src/   # 在src目录中递归搜索包含"function"的文件
grep -n "error" log.txt   # 显示包含"error"的行及行号
grep -i "TODO" *.js       # 不区分大小写搜索TODO（在所有js文件中）
```

## 📊 系统监控 (System Monitoring)

```bash
# 进程管理
ps aux                    # 显示所有运行中的进程
ps aux | grep node        # 查找特定进程（如node进程）
top                       # 实时显示系统进程（类似Windows任务管理器）
htop                      # 更友好的进程监控工具
kill 1234                 # 终止进程ID为1234的进程
killall node              # 终止所有名为node的进程

# 系统资源
df -h                     # 显示磁盘使用情况（人类可读格式）
du -sh *                  # 显示当前目录下各文件/文件夹大小
free -h                   # 显示内存使用情况
```

## 🌐 网络和连接 (Network & Connectivity)

```bash
# 网络诊断
ping google.com           # 测试网络连接
wget https://example.com/file.zip  # 下载文件到当前目录
curl -I https://api.github.com     # 获取HTTP头信息
netstat -tulpn            # 显示网络连接和端口使用情况

# SSH连接
ssh user@server.com       # 连接到远程服务器
scp file.txt user@server:/path/  # 通过SSH复制文件到远程服务器
```

## 🔐 权限和用户 (Permissions & Users)

```bash
# 文件权限
chmod +x script.sh        # 给文件添加执行权限
chmod 755 file.txt        # 设置文件权限（rwxr-xr-x）
chown jayden:jayden file.txt  # 更改文件所有者和组

# 用户操作
sudo command              # 以管理员权限执行命令
su - username            # 切换到其他用户
whoami                   # 显示当前用户名
```

## 📦 包管理和开发 (Package Management & Development)

```bash
# Ubuntu包管理
sudo apt update           # 更新包列表
sudo apt upgrade          # 升级已安装的包
sudo apt install package-name  # 安装新软件包
sudo apt remove package-name   # 卸载软件包

# Git常用命令
git status               # 查看仓库状态
git add .                # 添加所有更改到暂存区
git commit -m "message"  # 提交更改
git push origin main     # 推送到远程仓库
git pull                 # 拉取远程更新
```

## 🔧 实用工具 (Utility Commands)

```bash
# 文本处理
echo "Hello, Jayden!"     # 输出文本（你最熟悉的命令！）
wc -l file.txt           # 统计文件行数
sort file.txt            # 对文件内容排序
uniq sorted_file.txt     # 去除重复行

# 系统信息
uname -a                 # 显示系统信息
date                     # 显示当前日期时间
uptime                   # 显示系统运行时间
which node               # 显示命令的完整路径
```

## 🚀 组合命令示例 (Command Combinations)

```bash
# 实用的管道组合
ps aux | grep node | grep -v grep  # 查找node进程（排除grep自身）
ls -la | grep "^d"                 # 只显示目录
find . -name "*.log" | xargs rm    # 查找并删除所有log文件
history | grep git                 # 查看git命令历史

# 后台运行
nohup npm start &                  # 后台运行npm start，即使关闭终端也继续运行
jobs                               # 查看后台任务
fg %1                              # 将后台任务调到前台
```

## 💡 Jayden's Pro Tips

1. **使用Tab键自动补全** - 输入命令或文件名时按Tab，Linux会帮你补全
2. **使用history命令** - 查看之前执行过的命令，用`!123`重新执行第123个命令  
3. **善用alias** - 在`~/.bashrc`中设置常用命令的别名，比如`alias ll='ls -la'`
4. **学会使用man** - `man ls`查看ls命令的完整手册

记住：**Practice makes perfect!** 这些命令用多了就像呼吸一样自然了！🌟

*Sources: Kinsta Linux Commands Guide, Hostinger Essential Commands, Medium Developer Commands, DevOps Daily Commands*

---

**Created by Jayden Miller | Last Updated: June 2025**

