---
slug: /leaves/migration
---

# 迁移到 Leaves 或从 Leaves 迁出

按照以下步骤，你可以很容易的迁移到 Leaves 或从 Leaves 迁出。

:::caution 别忘了备份你的数据!

在你开始前，别忘了将你的服务器进行完全备份。

:::

:::tip

如果你遇到了什么问题，你可以到 [我们的 Discord 服务器](https://discord.gg/5hgtU72w33)（中的 `#support` 频道）寻求帮助.

:::

## 迁移到 Leaves

### 从 CraftBukkit/Spigot/Paper

从 CraftBukkit/Spigot/Paper 迁移到 Leaves 是十分简单快捷的，你只需要按照以下步骤即可。

1. 关闭你的服务器然后备份服务器。
2. 从 [GitHub Releases](https://github.com/LeavesMC/Leaves/releases) 下载最新的 Leaves。
3. 用最新下载的 Jar 文件替换旧的 Jar 文件。
4. 编辑你的启动脚本（比如 `start.bat` 或 `start.sh`），将其中的 Jar 名替换为最新的 Jar 名（比如 `leaves-1.20.1.jar`）。
5. 启动服务器。

Leaves 完全支持所有 Paper 和 Spigot 插件（如果插件作者没有特殊标记）。

:::info

无需删除之前的配置文件，Leaves 也会读取 `bukkit.yml`, `spigot.yml`, `config/paper-global.yml` 和 Paper 世界配置，所有的新增配置都只会在 `leaves.yml` 里存放。

:::

### 从原版 {#from-vanilla}

世界格式会在从原版迁移到 Leaves 的过程中自动更改。如果你想重新使用原版端，你需要按照 [原版迁移指南](#to-vanilla) 进行操作。

1. 关闭你的服务器然后备份服务器。
2. 从 [GitHub Releases](https://github.com/LeavesMC/Leaves/releases) 下载最新的 Leaves。
3. 用最新下载的 Jar 文件替换旧的 Jar 文件。
4. 编辑你的启动脚本（比如 `start.bat` 或 `start.sh`），将其中的 Jar 名替换为最新的 Jar 名（比如 `leaves-1.20.1.jar`）。
5. 启动服务器。

### 从 Forge/Fabric

因为 Forge 和 Fabric 都使用了原版的世界目录结构，所以你可以直接参考 [原版迁移指南](#from-vanilla)。
但要注意的是，如果你之前使用 mod 向游戏中添加了新的方块/物品/数据，那么 Leaves 将不能加载这些功能。

请注意，Leaves 是 **不支持** 任何 Forge 或 Fabric 的 mod 的。同时任何尝试混合插件和 mod 的服务端都有根本性的缺陷，我们不建议你使用这些服务端。

:::info

如果你必须使用可同时使用插件和 mod 的服务器，我们有一些推荐。
我们不为使用这些服务器造成的任何损失负责！

- 1.12.2 [SpongeForge](https://github.com/SpongePowered/SpongeForge)
- 1.20.x/1.19.x/1.18.x/1.16.x [Arclight](https://github.com/IzzelAliz/Arclight)

:::

## 从 Leaves 迁出

### 迁移到原版 {#to-vanilla}

Leaves 的世界储存的格局是大不相同的，因此你需要手动更改一下数据位置。如果你不进行这样的操作，你的末地和下界地图可能像是被重置了。
不过无需担心，你的数据没有丢失，只是原版服务器找不到它们了。

下表展示了 Leaves 的世界存储和原版世界存储的区别。

:::info

事实上，所有 Bukkit 下游的服务器都使用了这样的存储（比如 Paper 或者 PurPur）。

:::

| 服务器   | 主世界    | 下界（地狱）                   | 末地                  |
| ------- | -------- | --------------------- | --------------------- |
| 原版     | `/world` | `/world/DIM-1`        | `/world/DIM1`         |
| Leaves  | `/world` | `/world_nether/DIM-1` | `/world_the_end/DIM1` |

你需要按照以下步骤来从 Leaves 迁移到原版:

:::note

我们假设你的 `level-name` (在 `server.properties` 里) 是 `world`。如果不是，请自行替换其中的内容。

:::

1. 关闭的服务器。
2. 如果你已经用原版服启动过了服务器，请打开 `world` 并删除其中的 `DIM-1` 和 `DIM1` 两个文件夹。
3. 将 `/world_nether/DIM-1` 文件夹复制到 `/world` 内。
4. 将 `/world_the_end/DIM1` 文件夹复制到 `/world` 内。
5. 删除 `/world_nether` 和 `/world_the_end` 文件夹（不必要）。
6. 用原版服 Jar 文件替换掉 Leaves 的 Jar 文件。
7. 启动服务器。

### 迁移到 CraftBukkit/Spigot/Paper

Leaves **不支持** 迁移到 CraftBukkit 和 Spigot，同时 **可能** 可以安全迁移到 Paper。
由于 CraftBukkit/Spigot/Paper 全部使用一样的文件结构，所以你的迁移是可能成功的。但是如果发生任何错误，我们 **不接受** 此类的报告。

### 迁移到 Forge 或 Fabric

Forge 和 Fabric 使用了和原版一致的世界存储结构，因此只需要参考 [原版迁移指南](#to-vanilla) 即可。
同时，它们均不支持 Leaves 插件，你可能需要寻找类似功能的 mod。
