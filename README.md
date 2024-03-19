# 米哈游祈愿记录导出工具

中文 | [English](https://github.com/Dongyifengs/mihoyo-wish-export/blob/main/docs/README_EN.md)

一个使用 Electron 制作的小工具，需要在 Windows 64位操作系统上运行。

通过读取游戏日志或者代理模式获取访问游戏祈愿记录 API 所需的 authKey，然后再使用获取到的 authKey 来读取游戏祈愿记录。

工具会在当前目录下的 `userData` 文件夹里保存数据，获取到新的祈愿记录时，会与本地数据合并后保存。

需要更详细的数据分析，可以在导出 Excel 文件后使用这个项目的网页：[链接](https://github.com/voderl/genshin-gacha-analyzer)

## 开发

```
# 安装模块
yarn install

# 开发模式
yarn dev

# 构建一个可以运行的程序
yarn build
```

## 许可证

[MIT](https://github.com/Dongyifengs/mihoyo-wish-export/blob/main/LICENSE)