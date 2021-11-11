# 1、搭建vite项目

https://juejin.cn/post/6949138186886971429

## bug: yarn 报错 文件名、目录名或卷标语法不正确

解决：https://www.jianshu.com/p/576acc489293

```csharp
$ yarn create @vitejs/app my-vite --template vue
yarn create v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "@vitejs/create-app@1.5.1" with binaries:
      - create-app
      - cva
文件名、目录名或卷标语法不正确。
error Command failed.
Exit code: 1
Command: C:\Users\PC\AppData\Local\Yarn\bin\create-app
Arguments: my-vite --template vue
Directory: E:\study\Vite
Output:

info Visit https://yarnpkg.com/en/docs/cli/create for documentation about this command.
```

# yarn 的安装路径和缓存路径

### 查看各种路径命令

- **查看 yarn 全局bin位置**

  

  ```csharp
  yarn global bin
  ```

- **查看 yarn 全局安装位置**

  

  ```csharp
  yarn global dir
  ```

- **查看 yarn 全局cache位置**

  

  ```undefined
  yarn cache dir
  ```

### 修改路径命令

- **改变 yarn 全局bin位置**

  

  ```swift
  yarn config set prefix "D:\software\Yarn\Data"
  ```

- **改变 yarn 全局安装位置**

  

  ```csharp
  yarn config  set global-folder "D:\software\Yarn\Data\global"
  ```

- **改变 yarn 全局cache位置**

  

  ```bash
  yarn config set cache-folder "D:\software\Yarn\Cache"
  ```

- **改变 yarn 全局 link 位置**

  

  ```bash
  yarn config set link-folder "D:\software\Yarn\Data\link"
  ```

 