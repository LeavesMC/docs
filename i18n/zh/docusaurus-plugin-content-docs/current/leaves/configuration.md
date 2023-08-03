---
slug: /leaves/configuration
toc_max_heading_level: 4
keywords:
  - leaves.yml
  - leaves.yml settings
---

# Leaves配置

所有Leaves配置都存于 `leaves.yml` 文件内。

:::note

此文档的最后更新版本为 [Leaves-1.20.1-63548e5](https://github.com/LeavesMC/Leaves/releases/tag/1.20.1-63548e5)。
如无特殊说明，本文档中所有的 `是` / `否` 均指代 `true` / `false` 。

:::

:::tip

部分配置可能覆盖上游服务端的配置（比如 paper.yml）。

:::

## settings

:::tip

此节点下的配置会作用于所有世界或更改服务器本身的功能。

:::

### misc

#### dont-respond-ping-before-start-fully

- **默认值**: `true`
- **简介**: 如果此项设置为是，那么服务端在未完全启动之前将不会回复客户端的 ping 请求。

#### extra-yggdrasil-service.enable

- **默认值**: `false`
- **简介**: 是否启用非官方的 [外置登录](https://github.com/yushijinhun/authlib-injector) 支持。

:::caution

这是一个测试功能且为非官方实现，使用此功能可能会导致未知的错误。

:::

#### extra-yggdrasil-service.urls

- **默认值**:
  - '<https://url.with.authlib-injector-yggdrasil>'
- **简介**: 外置登录服务器的连接，链接最后应不加 `/` 。

#### no-chat-sign

- **默认值**: `true`
- **简介**: 是否删除玩家聊天内的签名来保护玩家聊天。如果开启此选项，服务器将会向安装了 NoChatReport 的玩家发送同样受到保护的信息。

#### disable-method-profiler

- **默认值**: `true`
- **简介**: 是否禁用方法检查器。这可能会对测试造成一定影响，但不影响实际的使用，并可以获得一定的性能提升。

#### bstats-privacy-mode

- **默认值**: `false`
- **简介**: 如果为此项目为true，bstats将开启隐私模式，也就是说它将不会收集服务端版本，游玩人数和使用java版本。

### modify

#### return-nether-portal-fix

- **默认值**: `false`
- **简介**: 如果为是，那么服务端将会修复玩家从下界返回主世界时下界传送门串门的问题。这可能会导致原有的下界传送门链接不可用。

:::caution

此功能是一个实验性功能，它不一定可以正常工作。

:::

#### snowball-and-egg-can-knockback-player

- **默认值**: `true`
- **简介**: 如果为是，那么鸡蛋和雪球将可以击退玩家。

#### mc-technical-survival-mode

- **默认值**: `true`
- **简介**: 是否启用生电模式。如果为是，那么以下配置会被强制覆盖来修复各种被影响的生电机制。
  - paper-global.yml unsupported-settings.allow-headless-pistons: true
  - paper-global.yml unsupported-settings.allow-grindstone-overstacking: true
  - paper-global.yml allow-permanent-block-break-exploits: true
  - paper-global.yml allow-piston-duplication: true
  - paper-global.yml packet-limiter.all-packets.max-packet-rate: 5000.0
  - paper-global.yml packet-limiter.overrides: Empty
  - paper-world.yml entities.spawning.count-all-mobs-for-spawning: true
  - paper-world.yml unsupported-settings.fix-invulnerable-end-crystal-exploit: false
  - paper-world.yml fixes.fix-curing-zombie-villager-discount-exploit: false
  - paper-world.yml chunks.delay-chunk-unloads-by: 0
  - spigot.yml world-settings.max-tnt-per-tick: 2000

:::note

如果你发现了更多需要覆盖的配置，欢迎提出 issue。

:::

#### instant-block-updater-reintroduced

- **默认值**: `false`
- **简介**: 是否重新引入 1.19 前的瞬时方块更新机制。如果为是，这会让一些更新抑制重新可用。

#### flatten-triangular-distribution

- **默认值**: `false`
- **简介**: 是否将 Minecraft 中的随机数发生器从三角分布改为平均分布。如果为是，边缘事件更有可能发生。

#### redstone-shears-wrench

- **默认值**: `true`
- **简介**: 是否允许剪刀右键来旋转部分红石元件。（如果你需要旋转更多红石元件，请发 issue 提出）

#### player-operation-limiter

- **默认值**: `false`
- **简介**: 是否限制玩家行为速度。如果为是那么每 gt 每个玩家只能秒破 1 个或放置 2 个方块，这可以对抗自动破基岩 mod，但不会影响正常的无头活塞破基岩。

#### use-vanilla-random

- **默认值**: `false`
- **简介**: 是否使用原版的随机数生成。这可能会丢失一些性能，但会让 RNG 控制可以在服务器内使用。

#### no-feather-falling-trample

- **默认值**: `false`
- **简介**: 如果为是，那么靴子上附魔“摔落缓冲”时在耕地上跳跃不会导致耕地退化为普通泥土。

#### renewable-elytra

- **默认值**: `-1.0`
- **简介**: 当潜影贝杀死幻翼时掉落破损的鞘翅的概率，如值为负则禁用此功能。

#### shears-in-dispenser-can-zero-amount

- **默认值**: `false`
- **简介**: 是否允许剪刀在发射器内可以被使用到负耐久并且不会损坏。如果为是那么发射器内剪刀可以近乎无限使用。

:::note

这是一个旧版本 Minecraft 的 bug。

:::

#### fix-update-suppression-crash

- **默认值**: `true`
- **简介**: 是否修复更新抑制造成的崩溃。与[Carpet TIS Addition](https://github.com/TISUnion/Carpet-TIS-Addition)中的 yeetUpdateSuppressionCrash 项目效果相同。

#### disable-distance-check-for-use-item

- **默认值**: `false`
- **简介**: 是否禁用对方块使用物品的距离检测。如果你无法破基岩，开启此选项可能有一定帮助。

#### spectator-dont-get-advancement

- **默认值**: `false`
- **简介**: 如果为是，那么观察者模式的玩家不会获得进度。

#### budding-amethyst-can-push-by-piston

- **默认值**: `false`
- **简介**: 是否允许活塞 **推动** 紫水晶母岩。

#### stick-change-armorstand-arm-status

- **默认值**: `true`
- **简介**: 是否允许玩家在下蹲时使用木棍右键盔甲架来改变盔甲架手臂的显示状态，即将 NBT 标签 ShowArms 设置为 1b 。这将会与基岩版表现相近。

#### stackable-shulker-boxes

- **默认值**: `false`
- **简介**: 是否启用空潜影盒堆叠功能。此项值必须为一个为 `true` / `false` 的字符串或小于等于 64 的正整数。
 如值为一个整数，则这个数值便为空潜影盒的可堆叠数量。如为 `true` 则默认视为 `2`，如为 `false` 则视为 `1` 。

:::note

空潜影盒会在地上和被玩家捡起时自动堆叠，如果玩家安装了支持的 mod 则也可以在背包内手动堆叠。
但为了不破坏机器，空潜影盒不会在漏斗内被堆叠，并且堆叠的空潜影盒会在漏斗运行时被分开。

:::

#### shared-villager-discounts

- **默认值**: `false`
- **简介**: 是否允许多个玩家玩家共享同一个村民的折扣。如果为是，那么所有玩家都可以享受到打折效果。

#### bedrock-break-list

- **默认值**: `false`
- **简介**: 是否启用破基岩榜。此功能的行为和此 [mod](https://gitee.com/harvey-husky/YH-BBL) 一致。

#### fakeplayer.enable

- **默认值**: `true`
- **简介**: 是否启用假人功能和 `/bot` 指令。

#### fakeplayer.unable-fakeplayer-names

- **默认值**:
  - player-name
- **简介**: 假人禁止使用的名称列表。此项不允许写入带有中文或特殊符号的玩家名称。

#### fakeplayer.limit

- **默认值**: `10`
- **简介**: 假人的数量限制。（同时，假人会计算到玩家数量中。）

#### fakeplayer.always-send-data

- **默认值**: `true`
- **简介**: 是否无视距离始终向同世界的玩家发送假人数据。

#### fakeplayer.resident-fakeplayer

- **默认值**: `false`
- **简介**: 是否在关闭服务器后保存假人数据并在开启服务器后自动重新生成假人。

:::caution

这是一个实验性功能，并且假人的动作暂时不会被保存。

:::

#### fakeplayer.open-fakeplayer-inventory

- **默认值**: `false`
- **简介**: 是否允许玩家空手右键假人来打开假人背包。

:::note

背包里的结构空位是占位符，并不具有特殊功能。

:::

#### fakeplayer.skip-sleep-check

- **默认值**: `false`
- **简介**: 如果为是，那么假人将不计入睡眠计数。

#### fakeplayer.prefix

- **默认值**: `bot_`
- **简介**: 设置假人的前缀。此项不允许写入带有中文或特殊符号。

#### fakeplayer.suffix

- **默认值**: `''`
- **简介**: 设置假人的后缀。此项不允许写入带有中文或特殊符号。

#### redstone-wire-dont-connect-if-on-trapdoor

- **默认值**: `false`
- **简介**: 是否让红石粉不再连接到活板门上，如果为是，这可以恢复 1.20 前的简易更新抑制。

#### disable-check-out-of-order-command

- **默认值**: `false`
- **简介**: 是否禁用聊天信息顺序检查。如果为是，那么可以修复使用 Velocity 作为上游代理时粘贴原理图失败的问题。

#### despawn-enderman-with-block

- **默认值**: `false`
- **简介**: 是否让手持方块的末影人会被刷新。如果为是，那么这可以消除服务器里一堆刷不掉的末影人。

#### creative-no-clip

- **默认值**: `false`
- **简介**: 如果为是，那么玩家在创造飞行时将不会有碰撞箱。

:::note

此功能需要启用 leaves-carpet-support 并且需要玩家安装 carpet 才可正常使用。

:::

#### mending-compatibility-infinity

- **默认值**: `false`
- **简介**: 如果为是，那么“经验修补”和“无限”附魔将可以同时附魔在弓上。

#### shave-snow-layers

- **默认值**: `true`
- **简介**: 如果为是，那么雪片可以被铲子一层层铲掉而不是掉落雪球。

#### ignore-lc

- **默认值**: `false`
- **简介**: 如果为是，那么生物生成可以无视 lc 值进行。

:::caution

此功能是一个实验性功能，它不一定可以正常工作。

:::

#### elytra-aeronautics.no-chunk-load

- **默认值**: `false`
- **简介**: 如果为是，那么玩家在一定高度和一定速度使用鞘翅飞行时不加载区块也不进行世界生成，以此减少服务器负荷。

:::tip

此功能最初是为了配合 [Elytra Aeronautics](https://www.mcmod.cn/class/7844.html)。

:::

:::caution

此功能是一个实验性功能，它不一定可以正常工作。

:::

#### elytra-aeronautics.no-chunk-height

- **默认值**: `500.0`
- **简介**: 玩家进入不加载区块状态时飞行需要的 y 轴高度。

#### elytra-aeronautics.no-chunk-speed

- **默认值**: `-1.0`
- **简介**: 玩家进入不加载区块状态时飞行需要的移动速度。

#### elytra-aeronautics.message

- **默认值**: `true`
- **简介**: 是否在玩家进入和退出不加载区块状态时进行提示。如果为是那么将会在进入和退出时向客户端以 title @s subtitle 的形式提示玩家。

#### elytra-aeronautics.message-start

- **默认值**: `Flight enter cruise mode`
- **简介**: 玩家进入不加载区块状态时的提示。允许中文。

#### elytra-aeronautics.message-end

- **默认值**: `Flight exit cruise mode`
- **简介**: 玩家退出不加载区块状态时的提示。允许中文。

#### disable-packet-limit

- **默认值**: `false`
- **简介**: 是否禁用发包限制。如果为是那么将会关闭 paper 原有的所有发包限制。

:::caution

如果您的服务端装载了如 ViaVersion 这类包含限制发包的插件，请在相应的配置文件中禁用相关项。

:::

#### container-passthrough

- **默认值**: `false`
- **简介**: 如果此项为 **true**，那么玩家可以无视挂在箱子上的告示牌直接打开箱子。此时玩家需要 **主副手** 均不拿物品，按住潜行的同时右键才能编辑告示牌。

#### lava-riptide

- **默认值**: `false`
- **简介**: 如果为是，则允许玩家在岩浆中使用“激流”附魔的三叉戟进行突刺。（需要安装 [Bladeren Mod](https://github.com/LeavesMC/Bladeren) 配合使用。）

#### raider-die-skip-self-raid-check

- **默认值**：`false`
- **简介**: 如果为是，那么服务端将会跳过一部分袭击迁移的检测。

:::caution

这个配置将会通过十分激进的方案尝试修复袭击塔断流。当值为 **true** 时会让袭击塔的效率提高 10%~50%，同时会对服务器的性能造成较大影响，请酌情考虑是否开启。

:::

#### avoid-anvil-too-expensive

- **默认值**：`false`
- **简介**: 如果为是，那么铁砧过于昂贵的设定将会取消

#### bow-infinity-fix

- **默认值**：`false`
- **简介**: 如果为是，那么背包里没有箭的情况下也可以使用带有无限附魔的弓。

#### zero-tick-plants

- **默认值**：`false`
- **简介**: 如果为是，那么0tick催熟植物将重新可用。

### performance

#### cache-climb-check

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将缓存攀爬检查结果。

#### entity-target-find-optimization

- **默认值**: `true`
- **简介**: 如果为是，那么服务端在实体寻找目标时如找不到目标则直接停止寻找。这可以减少一些冗余运算。

#### check-spooky-season-once-an-hour

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会每小时检测一次万圣节（检测那么频繁干什么）（逃。

#### reduce-chuck-load-and-lookup

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会减少不必要的区块查找和加载。

#### optimize-chunk-ticking

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会优化以下的区块 tick，可以提高 5% 到 10% 的性能。
  - 闪电
  - 冰和雪的生成

#### remove.tick-guard-lambda

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会删除 Lambda 表达式来提高性能。

#### remove.get-nearby-players-streams

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会禁止获取附近的玩家数据来提高性能。

#### remove.inventory-contains-iterators

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会删除选择器来提高性能。

#### remove.range-check-streams-and-iterators

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会删除流和选择器来提高性能。

#### performance.remove.damage-lambda

- **默认值**: `true`
- **简介**: 如果为是，那么服务端会删除伤害检测中的 Lambda，可以些微提高性能。

#### reduce-entity-fluid-lookup

- **默认值**: `true`
- **简介**: 当此项为是时，如果实体附近根本没有流体则将不会进行低效率的流体查找。

#### enable-suffocation-optimization

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将每隔 20tick 才检查一次窒息，玩家很难（但不是不可能）注意到这一变化。

#### strip-raytracing-for-entity

- **默认值**: `true`
- **简介**: 旧 rayTrace 方法十分浪费性能的在不需要流体碰撞计算的时候依然计算。当此项为是，那么服务端将会使用特有的方法来计算以提高性能。

#### inactive-goal-selector-disable

- **默认值**: `false`
- **简介**: 如果为是，那么服务端在非活动的实体上将会限制实体目标查找器的运行。这可以提高些许性能并对游戏影响较小。

#### improve-fluid-direction-caching

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会重新实现 FluidTypeFlowing 的缓存系统，并使其执行效率更高。

#### fix.fix-paper-6045

- **默认值**: `true`
- **简介**: 修复了一个 Paper 的 bug 。[Paper-6045](https://github.com/PaperMC/Paper/issues/6045)

#### fix.fix-paper-9372

- **默认值**: `true`
- **简介**: 修复了一个 Paper 的 bug 。[Paper-9372](https://github.com/PaperMC/Paper/issues/9372)

#### dont-send-useless-entity-packets

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会减少根本没用的一些实体包的发送。（这可能会破坏一些利用这些无用实体包的 mod 的表现。）

#### optimize-entity-coordinate-key

- **默认值**: `true`
- **简介**: 当为实体（热路径）执行 getCoordinateKey 时，JVM 需要重复将 double 转换为 long。
 这对性能的影响取决于CPU架构，但通常在 FPU 和 ALU 之间切换会导致严重的性能损失。
 blockPosition 结构中已提供了已转换/舍入的数据，因此当此项为是时，我们将会继续使用该数据而不是重新进行转换。

#### use-more-thread-unsafe-random

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会使用更多线程不安全的随机数发生器，它们虽然 **不安全** ，但是运行更加快。酌情考虑是否开启。

#### skip-poi-find-in-vehicle

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会跳过在载具内村民的 poi 计算，这对密集的村民交易大厅的优化十分明显。

#### simpler-vanilla-shapeless-recipes

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会替换掉过于复杂的无序配方系统。

#### reduce-entity-allocations

- **默认值**: `true`
- **简介**: 如果为是，那么服务端会减少对实体的分配。

#### biome-temperatures-use-aging-cache

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会使用更好的生态群落温度缓存。

#### async-pathfinding

:::danger

此功能暂时不可用。

:::

- **默认值**: `false`
- **简介**: 如果为是，那么服务端将会开启异步化的实体寻路。

#### async-entity-tracker

:::danger

此功能暂时不可用。

:::

- **默认值**: `false`
- **简介**: 如果为是，那么服务端将会开启异步化的实体追踪。

#### async-mob-spawning

- **默认值**: `false`
- **简介**: 如果为是，那么服务端将会将尽可能多的工作卸载到其他线程来减少实体生成对主线程的影响。
这可能会出现生成不一致的情况，但当问题发生时并不会出现错误，只会造成实体生成波动的问题。

:::caution

如果不想干扰任何生成机制，则可禁用此功能。但是此功能在拥有上千实体的服务器上可以带来足足 15% 的性能提升。
在我看来，为了这些性能提升而承担较小的实体生成不一致的风险是非常值得的。

:::

#### optimized-dragon-respawn

- **默认值**: `false`
- **简介**: 如果为是，那么服务端将会对龙战进行优化。

:::caution

此功能和原版表现不完全一致。

:::

#### cache-ignite-odds

- **默认值**: `true`
- **简介**: 是否开启对火焰蔓延检测中对方块燃烧概率的短暂缓存。如果为是，那么将比原版的检测快 70% 左右。

#### cache-CubeVoxelShape-shape-array

- **默认值**: `true`
- **简介**: 是否在 CubeVoxelShape 中加入缓存。如果为是，那么服务端可以优化一些位置计算。

#### use-fast-item-merge-raytracing

- **默认值**: `true`
- **简介**: 在 Paper 修复物品穿墙合并的时候使用更快的射线。如果为是，那么你需要手动在 **paper.yml** 中打开 fixItemsMergingThroughWalls。

#### skip-secondary-POI-sensor-if-absent

- **默认值**: `true`
- **简介**: 在村民寻找的次要职业兴趣点（secondary POI）不存在时，如果此项为是，那么服务端则会跳过之后的检测。

#### cache-BlockStatePairKey-hash

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会在 BlockStatePairKey 的哈希值计算上增加缓存。

#### faster-chunk-serialization

- **默认值**: `true`
- **简介**: 如果为是，那么服务端会使用 [Lithium](https://github.com/CaffeineMC/lithium-fabric) 快速区块保存序列化。

#### optimize-world-generation-and-block-access

- **默认值**: `true`
- **简介**: 是否在世界生成时优化区块和方块获取流程。如果为是，那么世界生成速度将会有改善。

#### store-mob-counts-in-array

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会在生物生成上限计算时使用数组（Array）。这可能对于性能有优化。使用了 [VMP](https://github.com/RelativityMC/VMP-fabric) 的方案。

#### optimize-noise-generation

- **默认值**: `false`
- **简介**: 如果为是，那么服务端将会使用 [C2ME](https://github.com/RelativityMC/C2ME-fabric) 的世界生成噪声优化。

:::caution

这是一个实验性功能，它可能不会工作。

:::

#### cache-world-generator-sea-level

- **默认值**: `true`
- **简介**: 是否在世界生成时缓存海平面高度，如果为是，那么服务端将会避免重复获取。这可能对于世界生成有帮助。

#### dont-trigger-lootable-refresh-for-non-player

- **默认值**：`true`
- **简介**: 如果为是，那么服务端将会在方块实体尝试更新战利品表但触发更新的玩家不存在时不触发战利品表更新。

#### optimize-sun-burn-tick

- **默认值**: `true`
- **简介**: 是否优化实体的阳光照射检测。如果为是，那么部分生物的 AI 开销可能会有所降低。

#### use-optimized-collection

- **默认值**: `true`
- **简介**: 如果为是，那么服务端会在一些调用集合类的代码执行片段中使用优化后的集合类替代原版的集合类。

#### optimized-CubePointRange

- **默认值**: `true`
- **简介**: 是否优化 CubePointRange。如果为是，那么这对一些位置计算可能有一定优化。

#### check-frozen-ticks-before-landing-block

- **默认值**: `true`
- **简介**: 如果为是，那么在尝试生成冰的时候优先对游戏刻进行检查，而不是先检查方块是否为空气（因为检查方块是否为空气较慢）。

#### cache-ominous-banner-item

- **默认值**: `true`
- **简介**: 如果为是，那么将会缓存灾厄旗帜的 NBT 数据。（因为没有必要每次都创建一个新的物品，这会拖累一些性能）

#### skip-entity-move-if-movement-is-zero

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会在实体完全没有移动的时候直接跳过之后的位移计算。

#### skip-cloning-advancement-criteria

- **默认值**: `true`
- **简介**: 如果为是，那么服务端将会跳过进度判断的复制。这可能有助于优化部分数据包。

#### skip-unnecessary-mob-spawning-computations

- **默认值**: `true`
- **简介**: 如果此项为是，那么服务端将会跳过无必要的生物生成计算。

#### skip-negligible-planar-movement-multiplication

- **默认值**: `true`
- **简介**: 如果此项为是，那么服务端将会跳过玩家移动中不必要的乘法计算。

#### fix-villagers-dont-release-memory

- **默认值**: `true`
- **简介**: 如果此项为是，那么村民占用内存不释放的问题将得到有效解决。

### protocol

#### carpet-alternative-block-placement

- **默认值**: `false`
- **简介**: 是否支持 carpet 的精确放置协议。

:::tip

如果想在投影模组的轻松放置功能上使用精确放置协议，你需要手动调整投影模组使用的协议类型为 `V2` 或开启 leaves-carpet-support 。

:::

#### pca-sync-protocol

- **默认值**: `false`
- **简介**: 是否开启对 [pca数据同步协议](https://github.com/plusls/plusls-carpet-addition) 的支持。

#### syncmatica.enable

- **默认值**: `false`
- **简介**: 是否开启对 [Syncmatica](https://github.com/End-Tech/syncmatica) 的支持来共享原理图。

#### syncmatica.quota

- **默认值**: `false`
- **简介**: 是否限制玩家可上传原理图的最大大小。

#### syncmatica.quota-limit

- **默认值**: `40000000`
- **简介**: 玩家可上传原理图的最大大小，单位为字节（Bytes）。

#### jade-protocol

- **默认值**: `false`
- **简介**: 是否开启对 [Jade](https://github.com/Snownee/Jade) 的支持，开启后 Jade 可以显示更多信息。

:::caution

在装载了 Viaversion 的服务器上使用此项目将会出现一些问题，请参考 [Leaves开发者的建议](https://github.com/LeavesMC/Leaves/issues/74) 和 [Leaves-73](https://github.com/LeavesMC/Leaves/issues/73)。
如果在服务端装载 Via 的情况下仍旧选择开启此项目，Leaves 团队不会接受任何与此有关的 issues！

:::

#### bbor-protocol

- **默认值**: `false`
- **简介**: 是否开启对 [BBOR](https://github.com/irtimaled/BoundingBoxOutlineReloaded) 的支持。

#### pca-sync-player-entity

- **默认值**: `OPS`
- **简介**: 控制 pca 同步协议可以同步的玩家。
  - `NOBODY`: 任何玩家数据都不能被同步。
  - `BOT`: 假人的数据可以被同步。
  - `OPS`: 假人的数据可以被同步，OP 可以同步所有玩家的数据。
  - `OPS_AND_SELF`: 假人的数据可以被同步，OP 可以同步所有玩家的数据，同时玩家可以同步自己的数据。
  - `EVERYONE`: 所有玩家数据都可以被同步。

#### appleskin-protocol

- **默认值**: `false`
- **简介**: 是否开启对 [AppleSkin](https://github.com/squeek502/AppleSkin) 的支持来显示饥饿值和饱和度。

#### xaero-map-protocol

- **默认值**: `false`
- **简介**: 是否开启对 [Xaero's World Map](https://minecraft.curseforge.com/projects/xaeros-world-map) 和
 [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap) 的支持，来自动在服务器间切换地图。

#### leaves-carpet-support

- **默认值**: `false`
- **简介**: 是否启用由 Leaves 实现的 carpet 协议。如果为是，那么这可以让客户端认为自己进入了一个带有 carpet 的服务器并提供一些客户端支持。

#### bladeren.mspt-sync-protocol

- **默认值**: `false`
- **简介**: 是否启用对 [Bladeren](https://github.com/LeavesMC/Bladeren) 中的 mspt 信息同步的支持。

:::note

Blareden 按照正常来说并不会出现同步不及时的问题。如果你遇到了这种症状，那么尝试检查客户端侧的 mod 是否会导致这种问题。

:::
