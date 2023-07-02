---
slug: /leaves/configuration
toc_max_heading_level: 4
keywords:
  - leaves.yml
  - leaves.yml settings
---

# Leaves Configuration

Any configuration for the "Leaves" server is in file leaves.yml.

:::tip

Some configurations may override the upstream configuration (such as paper.yml).

:::

## settings

:::tip

Configurations under this section will affect all worlds on a server, or the server function itself.

:::

### misc

#### extra-yggdrasil-service.enable

- **default**: `false`
- **description**: If "true", enable support for [unofficial authentication servers](https://github.com/yushijinhun/authlib-injector).
 
:::caution

This is a test function and is unofficial. Enable this configuration may cause unknown problems with your server.

:::
 
#### extra-yggdrasil-service.urls

- **default**: 
	- 'https://url.with.authlib-injector-yggdrasil'
- **description**: The url of the unofficial authentication server (authlib-injector yggdrasil server), the url should not add "/" at the end. Will take effect when configuration "extra-yggdrasil-service.enable" is "true".

#### no-chat-sign

- **default**: `true`
- **description**: If "true", disable the signature in player chat. If this option is turned on, the server will also send a message that the server is safe to players who have installed ["No Chat Reports"](https://github.com/Aizistral-Studios/No-Chat-Reports) Mod.

#### disable-method-profiler

- **default**: `true`
- **description**: If "true", disable the method profiler on server. Disabling it will have a partial impact on testing and a small amount of performance improvement, but will not affect the use of the production environment.

### modify

#### return-nether-portal-fix

- **default**: `false`
- **description**: If "true", fix the problem that players incorrectly transfer to other portals when returning from nether to the overworld.

:::caution

This configuration is a experimental function and may not work properly.

:::

#### snowball-and-egg-can-knockback-player

- **default**: `true`
- **description**: If "true", snowballs and eggs can knock players back.

#### mc-technical-survival-mode

- **default**: `true`
- **description**: Whether to enable the "Minecraft technical survival mode". In this mode, the following configurations will be forcibly overwritten to "restore" to its vanilla form.
    - paper-global.yml unsupported-settings.allow-headless-pistons: true
    - paper-global.yml unsupported-settings.allow-grindstone-overstacking: true
    - paper-global.yml allow-permanent-block-break-exploits: true
    - paper-global.yml allow-piston-duplication: true
    - paper-global.yml packet-limiter.all-packets.max-packet-rate: 5000.0
    - paper-global.yml packet-limiter.overrides: Empty
    - paper-world.yml entities.spawning.count-all-mobs-for-spawning: true
    - paper-world.yml unsupported-settings.fix-invulnerable-end-crystal-exploit: false
    - paper-world.yml fixes.fix-curing-zombie-villager-discount-exploit: false
    - spigot.yml world-settings.max-tnt-per-tick: 2000

:::note

If you find that there are other configurations that need to be overwritten, please submit an issue.

:::

#### instant-block-updater-reintroduced

- **default**: `false`
- **description**: If "true", reintroduce the instant block update behavior from versions before 1.19, with that "update suppression" is doable in 1.19+ again.

#### flatten-triangular-distribution

- **default**: `false`
- **description**: If "true", change triangle distributional randomizers in Minecraft into uniform distributional randomizers, with that edge cases are more likely to happen.

#### redstone-shears-wrench

- **default**: `true`
- **description**:  If "true", shears can rotate part of the redstone component by right clicking. (If you need to rotate more redstone components, please submit an issue)

#### player-operation-limiter

- **default**: `false`
- **description**: If "true", each player can only instantly break 1 or place 2 blocks per game tick, which works against automatic bedrock breaker mods (such as: [Fabric-Bedrock-Miner
](https://github.com/LXYan2333/Fabric-Bedrock-Miner)) and doesn't affect normal bedrock breakings.

#### use-vanilla-random

- **default**: `false`
- **description**: If "true", use vanilla random number generator; it may lose some performance, but will allow RNG manipulation to be used within the server.

#### no-feather-falling-trample

- **default**: `false`
- **description**: If "true", jump in boots on farmland while boot is enchanted with "Feather Falling" will not decay the farmland

#### renewable-elytra

- **default**: `-1.0`
- **description**: The value is the probability that a phantom will drop a broken elytra when a shulker bullet killed him, if value is negative (value < 0, sgn(value) = -1), disable this configuration.

#### shears-in-dispenser-can-zero-amount

- **default**: `false`
- **description**: If "true", the shears can be used to negative durability in the dispenser without breaking.

:::note

This is an bug of old version of minecraft. ~~It's not a bug it's a feature~~

:::

#### fix-update-suppression-crash

- **default**: `true`
- **description**: If "true", fix crashes by update suppression.

#### disable-distance-check-for-use-item

- **default**: `false`
- **description**: If "true", disable distance check for UseItemOnPacket.

#### spectator-dont-get-advancement

- **default**: `false`
- **description**: If "true", players in spectator mode will not get advancements.
#### budding-amethyst-can-push-by-piston

- **default**: `false`
- **description**: If "true", piston can push the budding amethyst.

#### stick-change-armorstand-arm-status

- **default**: `true`
- **description**: If "true", players can use the "stick" (minecraft:stick) to right-click the armor stand when sneaking to change the display state of the arm of the armor stand.

#### stackable-shulker-boxes

- **default**: `'false'`
- **description**: If "true", empty shulker boxes can be stacked. This must be a string and either `true` / `false` or a positive integer (integer as a string) of 64 or less.
	If the string is an integer as string, the stackable amount of empty shulker boxes, which is treated as `2` if `true`, or 1 if `false`.

:::note

Empty shulker boxes are automatically stacked on the ground (as drops) and when picked up by the player, or can be manually stacked in the backpack if the player has a supported mod installed.
However, in order not to break down the machine, empty shulker boxes are not stacked inside the hopper, and stacked empty shulker boxes are separated when the hopper is running.

:::

#### shared-villager-discounts

- **default**: `false`
- **description**: If "true", for each villager, all players have the same villager discount. If one player got a discount on villager A, all players get same discount on villager A.
#### bedrock-break-list

- **default**: `false`
- **description**: Set "true" to open. A bedrock break list like [this mod](https://gitee.com/harvey-husky/YH-BBL).

#### fakeplayer.enable

- **default**: `true`
- **description**: If "true", enable bot function and '/bot' command

#### fakeplayer.unable-fakeplayer-names

- **default**:
	- player-name
- **description**: Blacklist list of name-using for bots.

#### fakeplayer.limit

- **default**: `10`
- **description**: The maximum number of existing bots (bot counts into the total number of players).

#### fakeplayer.always-send-data

- **default**: `true`
- **description**: If "true", send fakeplayer data to players in the same world, regardless of distance limit.
 
#### fakeplayer.resident-fakeplayer

- **default**: `false`
- **description**: If "true", save fakeplayer when shutting down the server and automatically create the fakeplayer at the next startup.
 
:::caution

This is an experimental function, and the actions of the fakeplayer will not be saved temporarily.

:::

#### fakeplayer.open-fakeplayer-inventory

- **default**: `false`
- **description**: If "true", can right click by empty hand to open the fakeplayer inventory.

#### fakeplayer.skip-sleep-check

- **default**: `false`
- **description**: 是否让假人不计入睡眠计数。

#### redstone-wire-dont-connect-if-on-trapdoor

- **default**: `false`
- **description**: 是否让红石粉不再连接到活板门上，这可以恢复1.20前的简易更新抑制。

#### disable-check-out-of-order-command

- **default**: `false`
- **description**: 是否禁用聊天信息顺序检查，这可以修复使用Velocity作为上游代理时粘贴原理图失败的问题。

#### despawn-enderman-with-block

- **default**: `false`
- **description**: 是否让手中有方块的末影人会被刷新，这可以消除服务器里一堆刷不掉的末影人。

#### creative-no-clip

- **default**: `false`
- **description**: 是否让玩家在创造飞行时没有碰撞箱。

:::note

此功能需要启用leaves-carpet-support并且需要玩家安装carpet才可正常使用。

:::

#### mending-compatibility-infinity

- **default**: `false`
- **description**: 使得经验修补和无限可以重叠。

#### shave-snow-layers

- **default**: `true`
- **description**: 使得雪片可以被铲子一层层铲。

#### ignore-lc

- **default**: `false`
- **description**: 使生物生成无视lc值进行。

:::caution

此功能是一个实验性功能，它不一定可以正常工作。

:::

#### elytra-aeronautics.no-chunk-load

- **default**: `false`
- **description**: 使玩家在一定高度和一定速度时鞘翅飞行不加载区块也不进行世界生成，以此减少服务器负荷。

:::caution

此功能是一个实验性功能，它不一定可以正常工作。

:::

#### elytra-aeronautics.no-chunk-height

- **default**: `500.0`
- **description**: 玩家进入不加载区块状态时飞行需要的高度。

#### elytra-aeronautics.no-chunk-speed

- **default**: `-1.0`
- **description**: 玩家进入不加载区块状态时飞行需要的速度。

#### elytra-aeronautics.message

- **default**: `true`
- **description**: 是否在玩家进入和退出不加载区块状态时进行提示。

#### elytra-aeronautics.message-start

- **default**: `Flight enter cruise mode`
- **description**: 玩家进入不加载区块状态时的提升。

#### elytra-aeronautics.message-end

- **default**: `Flight exit cruise mode`
- **description**: 玩家退出不加载区块状态时的提升。。

### performance

#### cache-climb-check

- **default**: `true`
- **description**: 将缓存攀爬检查结果。

#### entity-target-find-optimization

- **default**: `true`
- **description**: 在实体寻找目标时，如果找不到目标则直接停止寻找，可以减少一些冗余运算。

#### check-spooky-season-once-an-hour

- **default**: `true`
- **description**: 每小时检测一次万圣节（检测那么频繁干什么）。

#### reduce-chuck-load-and-lookup

- **default**: `true`
- **description**: 减少了没有必要的区块查找和加载。

#### optimize-chunk-ticking

- **default**: `true`
- **description**: 优化了以下的区块刻，可以提高5%到10%的性能。
	- 闪电
	- 冰和雪的生成

#### remove.tick-guard-lambda

- **default**: `true`
- **description**: 删除lambda表达式来提高性能。

#### remove.get-nearby-players-streams

- **default**: `true`
- **description**: 删除流来提高性能。

#### remove.inventory-contains-iterators

- **default**: `true`
- **description**: 删除选择器来提高性能。

#### remove.range-check-streams-and-iterators

- **default**: `true`
- **description**: 删除流和选择器来提高性能。

#### reduce-entity-fluid-lookup

- **default**: `true`
- **description**: 如果实体附近根本没有流体，则禁用低效率的流体查找。

#### enable-suffocation-optimization

- **default**: `true`
- **description**: 每隔20tick才检查一次窒息，玩家很难（但不是不可能）注意到这一变化。

#### strip-raytracing-for-entity

- **default**: `true`
- **description**: 旧rayTrace方法十分浪费性能的在不需要流体碰撞计算的时候依然计算，我们修复了这个问题。

#### inactive-goal-selector-disable

- **default**: `false`
- **description**: 在非活动的实体上限制实体目标查找器的运行。这可以提高一些性能并对游戏影响较小。

#### improve-fluid-direction-caching

- **default**: `true`
- **description**: 重新实现了FluidTypeFlowing的缓存系统，并使其性能更高。

#### fix.fix-paper-6045

- **default**: `true`
- **description**: 修复了一个Paper的bug。

#### dont-send-useless-entity-packets

- **default**: `true`
- **description**: 减少根本没用的一些实体包的发送。（这可能会破坏一些利用这些无用实体包的mod）

#### optimize-entity-coordinate-key

- **default**: `true`
- **description**: 当为实体（热路径）执行getCoordinateKey时，JVM需要重复将double转换为long。
 这对性能的影响取决于CPU架构，但通常在FPU和ALU之间切换会导致严重的性能损失。
 blockPosition结构中已提供了已转换/舍入的数据，因此我们使用该数据而不是重新进行转换。

#### use-more-thread-unsafe-random

- **default**: `true`
- **description**: 使用更多线程不安全的随机数发生器，它们虽然不安全，但是运行快。

#### skip-poi-find-in-vehicle

- **default**: `true`
- **description**: 跳过在载具内村民的poi计算，这对密集的村民交易大厅的优化十分明显。

#### simpler-vanilla-shapeless-recipes

- **default**: `true`
- **description**: 替换掉过于复杂的无序配方系统。

#### reduce-entity-allocations

- **default**: `true`
- **description**: 减少对实体的分配。

#### biome-temperatures-use-aging-cache

- **default**: `true`
- **description**: 使用了更好的生态群落温度缓存。

#### async-pathfinding

:::danger

此功能暂时不可用。

:::

- **default**: `false`
- **description**: 异步化的实体寻路。

#### async-entity-tracker

:::danger

此功能暂时不可用。

:::

- **default**: `false`
- **description**: 异步化的实体追踪。

#### async-mob-spawning

:::danger

此功能暂时不可用。

:::

- **default**: `false`
- **description**: 它的目的是通过将尽可能多的工作卸载到其他线程来减少实体生成对主线程的影响。
可能会出现生成不一致的情况，但当问题发生时并不会出现错误，只会造成在任何特定的时间点产生的实体或多或少的问题。

:::caution

如果不想干扰任何生成机制，则可禁用此功能。但是此功能在拥有上千实体的服务器上可以带来足足15%的性能提升。
在我看来，为了这些性能提升而承担较小的实体生成不一致的风险是非常值得的。

:::

#### optimized-dragon-respawn

- **default**: `false`
- **description**: 是否对龙战进行优化。

:::caution

此功能和原版表现不完全一致。

:::

### protocol

#### carpet-alternative-block-placement

- **default**: `false`
- **description**: 是否是否支持carpet的精确放置协议。

:::tip

如果想在投影模组的轻松放置功能上使用精确放置协议，你需要手动调整投影模组使用的协议类型为 `V2` 而不能使用 `Auto` 模式。

:::

#### pca-sync-protocol

- **default**: `false`
- **description**: 是否支持 [pca数据同步协议](https://github.com/plusls/plusls-carpet-addition)。

#### syncmatica.enable

- **default**: `false`
- **description**: 是否开启对 [Syncmatica](https://github.com/End-Tech/syncmatica) 的支持来共享原理图。
 
#### syncmatica.quota

- **default**: `false`
- **description**: 是否限制玩家可上传原理图的最大大小。

#### syncmatica.quota-limit

- **default**: `40000000`
- **description**: 玩家可上传原理图的最大大小，单位为byte。

#### jade-protocol

- **default**: `false`
- **description**: 是否开启对 [Jade](https://github.com/Snownee/Jade) 的支持，开启后Jade可以显示更多信息。

#### bbor-protocol

- **default**: `false`
- **description**: 是否开启对 [BBOR](https://github.com/irtimaled/BoundingBoxOutlineReloaded) 的支持。

#### pca-sync-player-entity

- **default**: `OPS`
- **description**: 控制pca同步协议可以同步的玩家。
    - `NOBODY`: 任何玩家数据都不能被同步。
    - `BOT`: 假人的数据可以被同步。
    - `OPS`: 假人的数据可以被同步，OP可以同步所有玩家的数据。
    - `OPS_AND_SELF`: 假人的数据可以被同步，OP可以同步所有玩家的数据，同时玩家可以同步自己的数据。
    - `EVERYONE`: 所有玩家数据都可以被同步。

#### appleskin-protocol

- **default**: `false`
- **description**: 是否开启对 [AppleSkin](https://github.com/squeek502/AppleSkin) 的支持来显示饥饿值和饱和度。

#### xaero-map-protocol
 
- **default**: `false`
- **description**: 是否开启对 [Xaero's World Map](https://minecraft.curseforge.com/projects/xaeros-world-map) 和
 [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap) 的支持来自动在服务器间切换地图。

#### leaves-carpet-support

 - **default**: `false`
 - **description**: 是否启用由Leaves实现的carpet协议，这可以让客户端认为自己进入了一个带有carpet的服务器并提供一些客户端支持。
