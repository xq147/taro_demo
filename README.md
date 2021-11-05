
#### 介绍
-config 项目配置
- dev.js  开发时配置
- index.js 默认配置
- prod.js  打包时配置
- src 源码目录
- assets 静态文件
- iconfont 图标
- images   图片
- styles   公共样式
- components 公共组件
- pages 页面文件目录
- index index页面目录
- component 私有组件
- index.tsx 页面逻辑
- index.scss 页面样式     
- utils 公共方法库      
- app.jsx 项目入口文件      
- app.scss 项目总通用样式      
- .eslintrc eslint 配置
- package.json 依赖包
- project.config.json 工具配置
- tsconfig.json 配置

#### 功能
> 暂无

#### 使用
> 1.  npm install

#### 更新
> 1. taro update self
> 2. taro update project

#### 使用说明
> MobX 使用参考   https://cn.mobx.js.org/
> project.config 相关配置参考  https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html

###  git部分基础命令
 - $ git init                    #把当前目录变成git可以管理的仓库
 - $ git add readme.txt          #添加一个文件，也可以添加文件夹
 - $ git add -A                  #添加全部文件
 - $ git commit -m "some commit" #提交修改
 - $ git status                  #查看是否还有未提交
 - $ git log                     #查看最近日志
 - $ git reset --hard HEAD^      #版本回退一个版本
 - $ git reset --hard HEAD^^     #版本回退两个版本
 - $ git reset --hard HEAD~100   #版本回退多个版本
 - $ git remote add origin +地址 #远程仓库的提交（第一次链接）
 - $ git push -u origin master   #仓库关联
 - $ git push                    #远程仓库的提交（第二次及之后）
