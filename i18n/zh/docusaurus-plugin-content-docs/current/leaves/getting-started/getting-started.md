---
slug: /leaves/getting-started
---

# 开始使用

## 环境要求

| Leaves版本 | 所需Java版本 |
| --------- | ----------- |
| 1.18.2+   | Java 17     |


## 迁移到Leaves

### 从原版迁移

Leaves会像Paper一样自动处理好一切，无需任何额外操作。

### 从 CraftBukkit/Spigot/Paper 迁移

Leaves是CraftBukkit/Spigot/Paper的下游替代品，所以你无需任何操作。

## 下载Leaves

Leaves在 [github releases](https://github.com/LeavesMC/Leaves/releases) 上提供可直接运行的Jar，你可以直接下载。

:::caution

在Minecraft版本更新后，我们只会保留旧版本的最后一次构建。

:::

## 运行服务器

你只需像运行其他Java程序一样运行Leaves即可。

打开你的终端（cmd或者powershell）然后输入 `java -Xms2G -Xmx2G -jar leaves.jar nogui` 。
别忘了把 `leaves.jar` 改为你所下载的Jar文件的名称。

你可以通过修改 `-Xms` 和 `-Xmx` 后的数字来控制服务器使用的内存数量。而 `nogui` 参数则可以禁用原版的Gui（它十分不好用）。

如果你想获得更多的Java高级参数，可以访问 [Aikar's Flags](https://docs.papermc.io/paper/aikars-flags) 来获得更多信息。

你可能还需要访问 [Leaves配置](../configuration.md) 来更改你的服务器配置。

因为Leaves是Paper的下游服务端，因此你可能还需要修改Paper的配置文件。你可以查看以下页面以参考。

- [Paper Global Configuration](https://docs.papermc.io/paper/reference/global-configuration)
- [Paper Per World Configuration](https://docs.papermc.io/paper/reference/world-configuration)

## 升级服务器

:::tip

如果你使用托管服务商（我们一般称它为面板服），你可能需要查看服务商的文档或者向他们寻求帮助。

:::

升级Leaves是十分容易的。

1. 从 [github releases](https://github.com/LeavesMC/Leaves/releases) 上下载最新的Jar文件。
2. 关闭你的服务器，在服务器运行时替换Jar文件肯定导致未知的问题。
3. 用新Jar文件替换掉你的旧Jar文件。
4. 重新启动你的服务器并且观察它是否按计划运行，如果出现了一些错误（这通常在Minecraft版本更新时发生），那么你可能需要向插件作者求助。
