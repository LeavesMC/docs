---
slug: /leaves/configuration
toc_max_heading_level: 4
keywords:
  - leaves.yml
  - leaves.yml settings
---

# Leaves Configuration

Any configuration for the "Leaves" server is in file `leaves.yml`.

:::note

The last updated version of the document is [Leaves-1.20.4-08bc505](https://github.com/LeavesMC/Leaves/releases/tag/1.20.4-08bc505).

:::

:::tip

Some configurations may override the upstream configuration (such as paper.yml).

:::

## protocol

:::caution

Using this project on a server with Viaversion loaded will cause some problems, please refer to [Leaves developer’s suggestion](https://github.com/LeavesMC/Leaves/issues/74) and [Leaves-73](https://github.com/LeavesMC/Leaves/issues/73). If you still choose to enable this project on the server side with Via loaded, the Leaves team will not accept any issues related to this!


:::

### bladeren

#### protocol

- **default**: `false`
- **description**: [Bladeren](https://github.com/LeavesMC/Bladeren) Main switch.

#### mspt-sync-protocol

- **default**: `false`
- **description**: If enabled, it will support [Bladeren Mod](https://github.com/LeavesMC/Bladeren)'s mspt sync.

#### mspt-sync-tick-interval

- **default**: `20`
- **description**: The frequency of `MSPT` information synchronization, measured in ticks.

:::note

Blareden should not have the problem of synchronization lagging under normal circumstances. If you encounter this symptom, try checking if the client-side mod will cause this problem.

:::

### syncmatica

#### enable

- **default**: `false`
- **description**: If enabled, it will support [Syncmatica Mod](https://github.com/End-Tech/syncmatica).

#### quota

- **default**: `false`
- **description**: If enabled, it can limit the maximum size a player can upload a schematic.

#### quota-limit

- **default**: `40000000`
- **description**: The maximum size of schematic uploaded by player, in bytes.

### pca-sync-protocol

- **default**: `false`
- **description**: If enabled, it will support [pcaSyncProtocol](https://github.com/plusls/plusls-carpet-addition).

### pca-sync-player-entity

- **default**: `OPS`
- **description**: Control which players the pca sync protocol can sync.
  - `NOBODY`: Nobody can be synced
  - `BOT`: Fakeplayer can be synced
  - `OPS`: Fakeplayer can be synced, OP can syncs all player datas
  - `OPS_AND_SELF`: Fakeplayer can be synced, OP can sync all player datas, players can sync themselves datas
  - `EVERYONE`: Everyone can be synced by everyone.

### bbor-protocol

- **default**: `false`
- **description**: If enabled, it will support [BBOR Mod](https://github.com/irtimaled/BoundingBoxOutlineReloaded).

### jade-protocol

- **default**: `false`
- **description**: If enabled, it will support [Jade Mod](https://github.com/Snownee/Jade).

### alternative-block-placement

- **former name**:'carpet-alternative-block-placement'
- **default**: `NONE`
- **description**: If enabled, it will support alternative block placement protocol.There are four options available：`NONE` `CARPET` `CARPET_FIX` `LITEMATICA` .

:::tip

In easy placement, `CARPET` and `CARPET_FIX` corresponds to the `V2` mode, while `LITEMATICA` corresponds to the `V3` mode.\
Please note `CARPET_FIX` mode may require the client to install the `MasaGadget` mod in order to function properly.

:::

### appleskin-protocol

- **default**: `false`
- **description**: If enabled, it will support [AppleSkin Mod](https://github.com/squeek502/AppleSkin).

### xaero-map-protocol

- **default**: `false`
- **description**: If enabled, it will support [Xaero's World Map Mod](https://minecraft.curseforge.com/projects/xaeros-world-map) and
 [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap).

### xaero-map-server-id

- **default**: `RANDOM`
- **description**: Server id used in xaero map support, this id should be unique to identify the server information.

### servux-protocol

- **deafult**: `false`
- **description**: If enabled,it will support [Servux](https://github.com/maruohon/servux) (minihud structure display)

### leaves-carpet-support

- **default**: `false`
- **description**: If enabled, it will enable the support for carpet protocol implemented by LeavesMC, this lets the client think it's entering a server with a carpet and provides some client-side support.

## misc

### auto-update

:::note

This function needs to be used with the automatic restart plugin.The server won't restart itself.

:::

#### enable

- **default**: `false`
- **description**: If enabled, the server will automatically detect the version and update to the latest version at the time you specify.

#### time

- **default**: '- '14:00' - '2:00' '
- **description**: Set the time for automatic updates. This function needs to be used with the auto-update. enable option.

### extra-yggdrasil-service

:::caution

This is a test feature and an unofficial implementation, using this feature may cause unknown errors.

:::

#### enable

- **default**: `false`
- **description**: If enabled, it will enable supports for [unofficial authentication servers](https://github.com/yushijinhun/authlib-injector).

#### login-protect

- **default**: `false`
- **description**: If enabled, players with the same name but different uuid are not allowed to enter the server.

#### urls

- **default**:
  - '<https://url.with.authlib-injector-yggdrasil>'
- **description**: The url of the unofficial authentication server (authlib-injector yggdrasil server), the url should not add "/" at the end. Will take effect when configuration "extra-yggdrasil-service.enable" is "true".

### disable-method-profiler

- **default**: `true`
- **description**: If enabled, it will disable the method profiler on server. Disabling it will have a partial impact on testing and a small amount of performance improvement, but will not affect the use of the production environment.

### no-chat-sign

- **default**: `true`
- **description**: If enabled, it will strike out the signature in player chat and the server will also send a message that the server is safe to players who have installed ["No Chat Reports"](https://github.com/Aizistral-Studios/No-Chat-Reports) Mod.

### dont-respond-ping-before-start-fully

- **default**: `true`
- **description**: If enabled, then the server won't respond ping requests from clients.

### server-lang

- **default**: 'en_us '
- **description**: Set the language of the server. Currently supports zh_cn and en_us. 

### server-mod-name

- **default**: `Leaves`
- **description**: Specifies the name of the server. Changing this value may raise undetectable errors.

### bstats-privacy-mode

- **default**: `false`
- **description**: If enabled, it will enable the bstats privacy mode on the server, which means that bstats no longer collect the number of players, the java version used by the server, and the online mode information.

## region

### format

- **default**: `ANVIL`
- **description**: The file format used by the server to save the map. Currently supports` ANVIL `
(the original) and ` LINEAR ` ([LINEAR] (https://github.com/xymb-endcrystalme/LinearRegionFileFormatTools)).

:::note

When the LINEAR format is enabled, the server does not automatically convert the old archive to the new storage format. You need to convert the format manually.

:::

### linear

#### flush-frequency

- **default**: `10`
- **description**: Block retention frequency in seconds when the Linear format is enabled.

#### flush-max-threads

- **default**: `10`
- **description**: When the Linear format is enabled, the maximum number of threads used for block storage is automatically selected when it is' -1 '.

#### compression-level

- **default**: `1`
- **description**: When the Linear format is enabled, the compression level of the block file should be a number between '1' and '22'.

#### crash-on-broken-symlink

- **default**: `true`
- **description**: When using the Linear format, immediately throw an error and stop execution if there is an error loading the block file, to prevent file corruption or loss.

## modify

### fakeplayer

#### enable

- **default**: `true`
- **description**: If enabled, enable bot function and '/bot' command

#### unable-fakeplayer-names

- **default**:
  - player-name
- **description**: The blacklist of names that dummies are prohibited from using. It does not allow writing player names with Chinese or special symbols.

#### limit

- **default**: `10`
- **description**: The maximum number of existing bots (bot counts into the total number of players).

#### prefix

- **default**: `bot_`
- **description**: Set the prefix for the fakeplayer. This field does not allow input with Chinese characters or special symbols other than _.

#### suffix

- **default**: `''`
- **description**: Set the suffix for the fakeplayer. This field does not allow input with Chinese characters or special symbols other than _.

#### always-send-data

- **default**: `true`
- **description**: If enabled, then the server will send fakeplayer data to players in the same world, regardless of distance limit.

#### resident-fakeplayer

- **default**: `false`
- **description**: If enabled, then the server will save fakeplayer when shutting down the server and automatically create the fakeplayer at the next startup.

:::caution

The current actions, inventory, positional information, and skin of the fakeplayer will be saved.

:::

#### open-fakeplayer-inventory

- **default**: `false`
- **description**: If enabled, then players can right click by empty hand to open the fakeplayer inventory.

:::note

The structure slots in the fakeplayer's inventory are placeholders and do not have any special functions.

:::

#### skip-sleep-check

- **default**: `false`
- **description**: If enabled, then fakeplayers do not count towards the sleep cap.

#### spawn-phantom

- **default**: `false`
- **description**: If enabled, the fakeplayers will be able to spawn phantoms around them.

#### regen-amount

- **default**: `0.01`
- **description**: The amount of health the fakeplayer will recover per tick. If negative, the dummy will slowly lose health.

### minecraft-old

:::info

The configurations in "minecraft-old" are all bugs/features that have appeared in various versions of Minecraft throughout its history.

:::

#### shears-in-dispenser-can-zero-amount

- **default**: `false`
- **description**: If enabled, the shears can be used to negative durability in the dispenser without breaking.

#### instant-block-updater-reintroduced

- **default**: `false`
- **description**: If enabled, it will reintroduce the instant block update behavior from versions before 1.19, with that "update suppression" is doable in 1.19+ again.

- **default**：`false`
- **description**：If enabled, it allows projectiles from creatures to damage armor stands. This feature was removed in 1.20.2.

#### cce-update-suppression

- **default**: `false`
- **description**: If enabled, the CCE update suppression will be re-enabled. For more information on CCE, refer to [Void0's column]
  (https://www.bilibili.com/read/cv24323749/?spm_id_from=333.999.0.0).

#### villager-infinite-discounts

- **default**：`false`
- **description**：If enabled, the villagers can be discounted unlimited times. This feature was removed in 1.20.2.

#### copper-bulb-1gt-delay

- **default**: `false`
- **description**:  If enabled, it will reintroduce a 1-game tick delay to the copper bulb, restoring the behavior from version 23w45a

#### crafter-1gt-delay

- **default**: `false`
- **description**:If enabled, the delay for the crafter will be reverted to 1 game tick, restoring the behavior from version 23w45a.

#### redstone-wire-dont-connect-if-on-trapdoor

- **default**: `false`
- **description**: If enabled, then redstone dust can be linked to redstone dust on an open trapdoor.This can restore the Simple Update Suppression before version 1.20.

#### mending-compatibility-infinity

- **default**: `false`
- **description**: If enabled, then both "mending" and "infinity" can exist on a bow.

#### zero-tick-plants

- **default**: `false`
- **description**: If enabled, then the server will re-add the 0-tick ripening mechanism to the game.

#### loot-world-random

- **default**：`false`
- **description**：If enabled, the server will revert the loot table seed generation logic to pre-1.19.4.

:::caution

This configuration is a experimental function and may not work properly.

:::

#### protection-stacking

- **default**: `false`
- **description**: If enabled, the server will allow protection stacking for enchantments.

### elytra-aeronautics

:::tip

This feature was originally designed to cooperate with [Elytra Aeronautics](https://www.mcmod.cn/class/7844.html).

:::

:::caution

This feature is an experimental feature and may not work correctly.

:::

#### no-chunk-load

- **default**: `false`
- **description**: If enabled, when the player flies at a certain height and speed, they will not load chunks or do world generation, thereby reducing server load.

#### no-chunk-height

- **default**: `500.0`
- **description**: The height (Y-value) required for the player to fly when entering the state of not loading chunks. (elytra-aeronautics.no-chunk-load)

#### no-chunk-speed

- **default**: `-1.0`
- **description**: The speed required for the player to fly when entering the state of not loading chunks. Units: block/s. (elytra-aeronautics.no-chunk-load)

#### message

- **default**: `true`
- **description**: If enabled, the server will send notice when the player enters or exits the not loading chunk state.

#### message-start

- **default**: `Flight enter cruise mode`
- **description**: The notice when the player enters the state of not loading chunks.

#### message-end

- **default**: `Flight exit cruise mode`
- **description**: The notice when the player exits the state of not loading chunks.

### redstone-shears-wrench

- **default**: `true`
- **description**:  If enabled, then shears can rotate part of the redstone component by right clicking. (If you need to rotate more redstone components, please submit an issue)

### budding-amethyst-can-push-by-piston

- **default**: `false`
- **description**: If enabled, then pistons can **push** the budding amethyst.

### spectator-dont-get-advancement

- **default**: `false`
- **description**: If enabled, then players in spectator mode will not get advancements.

### stick-change-armorstand-arm-status

- **default**: `true`
- **description**: If enable,it will allow players to use sticks to right-click armor stands while crouching to change the display status of the armor stand arms, that is, set the NBT tag ShowArms to 1b. This will be similar to the bedrock edition performance.

### snowball-and-egg-can-knockback-player

- **default**: `true`
- **description**: If enabled, then snowballs and eggs can knock players back.

### flatten-triangular-distribution

- **default**: `false`
- **description**: If enabled, it will change triangle distributional randomizers in Minecraft into uniform distributional randomizers, with that edge cases are more likely to happen.

### player-operation-limiter

- **default**: `false`
- **description**: If enabled, each player can only instantly break 1 or place 2 blocks per game tick, which works against automatic bedrock breaker mods (such as: [Fabric-Bedrock-Miner
](https://github.com/LXYan2333/Fabric-Bedrock-Miner)) and doesn't affect normal bedrock breakings.

### renewable-elytra

- **default**: `-1.0`
- **description**: The value is the probability that a phantom will drop a broken elytra when a shulker bullet killed it, if value is negative (value < 0, sgn(value) = -1), disable this configuration.

### stackable-shulker-boxes

- **default**: `'false'`
- **description**:  If enable,it will allow the empty shulker box stack. This value must be a string of true / false or an integer less than or equal to 64. If the value is an integer, then this number is the stackable quantity of the shulker box. If it is true, it is defaulted to 2, and if it is false, it is considered 1.

:::note

Empty shulker boxes are automatically stacked on the ground (as drops) and when picked up by the player, or can be manually stacked in the backpack if the player has a supported mod installed.
However, in order not to break down the machine, empty shulker boxes are not stacked inside the hopper, and stacked empty shulker boxes are separated when the hopper is running.

:::

### force-void-trade

- **default**: `false`
- **description**: "If enabled, the Force Void Trade feature will be activated. Void trades are considered triggered after a player passes through a nether portal once, without the need to wait for chunk unloading.

### disable-moved-wrongly-threshold

- **default**: `false`
- **description**: If enabled, the server will disable Spigot's player movement speed detection.\
 This can effectively prevent players from receiving numerous unnecessary `moved wrongly` messages caused by exceeding normal movement speed.

### mc-technical-survival-mode

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
  - paper-global.yml item-validation.resolve-selectors-in-books: true
  - paper-world.yml fixes.disable-unloaded-chunk-enderpearl-exploit：false

:::note

If you find that there are other configurations that need to be overwritten, please submit an issue.

:::

### return-nether-portal-fix

- **default**: `false`
- **description**: If enabled, it will fix the problem that players incorrectly transfer to other portals when returning from nether to the overworld.

:::caution

This configuration is a experimental function and may not work properly.

:::

### use-vanilla-random

- **default**: `false`
- **description**: If enabled, the server will use the vanilla random number generator; it may lose some performance, but will allow RNG manipulation to be used within the server.

### fix-update-suppression-crash

- **default**: `true`
- **description**: If enabled, it will fix crashes by update suppression.The same effect as the yeetUpdateSuppressionCrash project in [Carpet TIS Addition](https://github.com/TISUnion/Carpet-TIS-Addition).

### bedrock-break-list

- **default**: `false`
- **description**: Set to "true" to enable. A bedrock break list like [this mod](https://gitee.com/harvey-husky/YH-BBL).

### disable-distance-check-for-use-item

- **default**: `false`
- **description**: If enabled, it will disable distance check for UseItemOnPacket.

:::note

When the `alternative-block-placement` configuration is not set to `NONE`, this setting will be automatically enabled to support easy placement.

:::

### no-feather-falling-trample

- **default**: `false`
- **description**: If enabled, jump in boots on farmland while boot is enchanted with "Feather Falling" won't decay the farmland.

### shared-villager-discounts

- **default**: `false`
- **description**: If enabled, then for each villager, all players have the same villager discount. If one player got a discount on villager A, all players get same discount on villager A.

### disable-check-out-of-order-command

- **default**: `false`
- **description**: If enabled, it will fix the issue of schematic pasting failure when using Velocity as an upstream proxy.

### despawn-enderman-with-block

- **default**: `false`
- **description**: If enabled, then endermen with blocks in their hands will be cleared away like other mobs, which can purge a bunch of Endermen that longlived in the server.

### creative-no-clip

- **default**: `false`
- **description**: If enabled, then players in gamemode "Creative" won't have collision box while flying.

:::note

This feature needs to enable configuration `leaves-carpet-support` and requires the player to install the `carpet` mod to work properly.

:::

### shave-snow-layers

- **default**: `true`
- **description**: If enabled, then shovels can dig snow layer by layer.

### ignore-lc

- **default**: `false`
- **description**: If enabled, then mobs spawn will ignore the effect of lc value.

:::caution

This feature is an experimental feature and may (not) work correctly.

:::

### disable-packet-limit

- **default**: `false`
- **description**: If enabled, the server will disable packet limits.

:::caution

If your server has installed packet-limiting plugins like ViaVersion, you need to disable their limits in their config.

:::

### lava-riptide

- **default**: `false`
- **description**: If enabled, then players can use tridents with riptide enchantment in lava, like in water. (Requires [Bladeren Mod](https://github.com/LeavesMC/Bladeren))

### no-block-update-command

- **default**: `false`
- **description**:  If enabled, the server will activate the blockupdate command to control block update states.

### raider-die-skip-self-raid-check

- **default**：`false`
- **description**: If enabled, then the server will skip portions of raid migration detection.

:::caution

This configuration will attempt to fix the raid farm issue through a highly aggressive approach. When set to true, it will enhance raid farm efficiency by 10% to 50%, but it will have a significant impact on server performance. Please consider whether to enable it.

:::

### container-passthrough

- **default**: `false`
- **description**: If enabled, then players can open chests behind a sign without items in **both two hands**. (Shift + Right-click to edit signs.)

### avoid-anvil-too-expensive

- **default**: `true`
- **description**: If enabled, the expensive setting of the anvil will be cancelled.

:::note

Enabling only this feature allows excessively expensive enchants to be clickable, but the client won't display the actual enchantment level.

If you want the client to display the actual enchantment level, you need to enable `leaves-carpet-support` and installed `plusls-carpet-addition` on the client.

:::

### bow-infinity-fix

- **default**: `false`
- **description**: If enabled, then the server will allow the use of infinite bows even when there are no arrows in the inventory.

### hopper-counter

- **default**：`false`
- **description**: If enabled,it will enable the `leaves counter` command and a wool hopper counter system similar to `Carpet`.

### spider-jockeys-drop-gapples

- **default**: `-1.0`
- **description**: The probability of dropping an enchanted golden apple when a Spider Jockey is killed. If the value is negative, this feature is disabled.

## performance

### fix

#### fix-paper-6045

- **default**: `true`
- **description**: Ifsets to  "true", it can fix a bug of paper.[Paper-6045](https://github.com/PaperMC/Paper/issues/6045)

#### fix-paper-9372

- **default**: `true`
- **description**: Ifsets to  "true", it can fix a bug of paper.[Paper-9372](https://github.com/PaperMC/Paper/issues/9372)

### remove

#### tick-guard-lambda

- **default**: `true`
- **description**: If enabled, `lambda` expressions will be removed to improve performance.

#### inventory-contains-iterators

- **default**: `true`
- **description**: If enabled, `inventory contains iterators` will be removed to improve performance.

#### get-nearby-players-streams

- **default**: `true`
- **description**: If enabled, `streams` usage will be removed to improve performance.

#### range-check-streams-and-iterators

- **default**: `true`
- **description**: If enabled, the server will remove `streams` and `inventory contains iterators` from distance checks to improve performance.

#### damage-lambda

- **default**: `true`
- **description**:If enabled, the server will remove `Lambda` from damage detection, which can slightly improve performance.

### optimized-dragon-respawn

- **default**: `false`
- **description**: If enabled, it will optimize dragon respawn.

:::caution

This function is not exactly the same as the original function.

:::

### dont-send-useless-entity-packets

- **default**: `true`
- **description**: If enabled, it can reduce the sending of some entity packets that are not used at all. (This may break some mods that utilize these useless entity packs)

### optimize-entity-coordinate-key

- **default**: `true`
- **description**: When executing getCoordinateKey for entities (a hotpath), the JVM is required to repeatedly cast doubles to longs. The performance impact of this depends on the CPU architecture, but generally switching between FPU and ALU incurs a significant performance hit. The casted/rounded data is already available in the blockPosition struct, so we use that instead of re-doing the casting.

### enable-suffocation-optimization

- **default**: `true`
- **description**: If enabled, then suffocation is only checked every 20 ticks, it is difficult (but not impossible) for the player to notice the change.

### strip-raytracing-for-entity

- **default**: `true`
- **description**: If enabled, it will change the old rayTrace method to improve performance.

### check-spooky-season-once-an-hour

- **default**: `true`
- **description**: If enabled, it will detect Halloween every hour. (Do Mojang staffs have Halloween every day?)


### optimize-chunk-ticking

- **default**: `true`
- **description**: If enabled, it will optimize the following chunk ticks, which can improve performance by 5% to 10%.
  - Lightning
  - Ice and Snow Generation

### skip-poi-find-in-vehicle

- **default**: `true`
- **description**: If enabled, it will skip entity POI finding if stuck in vehicle, which optimize the performance of villagers' trading hall.

### entity-target-find-optimization

- **default**: `true`
- **description**: If enabled, then when an entity is looking for a target, if the target cannot be found, the search will be stopped directly, which can reduce some redundant calculations.

### use-more-thread-unsafe-random

- **default**: `true`
- **description**: If enabled, the server will use more thread-unsafe random number generators, which are not safe but fast.

### inactive-goal-selector-disable

- **default**: `false`
- **description**: If enabled, it will restrict the running of entity target finders on inactive entities. This can improve some performance and have less impact on the game.

### reduce-entity-allocations

- **default**: `true`
- **description**: If enabled, it will reduce entity allocations.

### cache-climb-check

- **default**: `true`
- **description**: If enabled, the server will cache climb check result.

### biome-temperatures-use-aging-cache

- **default**: `true`
- **description**: If enabled, it will use aging cache for biome temperatures, This will bring some performance improvements.

### reduce-entity-fluid-lookup

- **default**: `true`
- **description**: If enabled, it will disable inefficient fluid lookup if there are no fluids near the entity at all.

### reduce-chuck-load-and-lookup

- **default**: `true`
- **description**: If enabled, the server will reduce unnecessary chunk lookups and loads.

### improve-fluid-direction-caching

- **default**: `true`
- **description**: If enabled, it will use a reimplemented higher performance FluidTypeFlowing caching system.


### cache-ignite-odds

- **default**: `true`
- **description**: If enabled, it will optimize fire ignite odds getter.

### faster-chunk-serialization

- **default**: `true`
- **description**: If enabled, it will use [Lithium](https://github.com/CaffeineMC/lithium-fabric)'s Faster Chunk Serialization.

### optimize-world-generation-and-block-access

- **default**: `true`
- **description**: If enabled, it will optimize the process of generating blocks and chunks when generating the world, which helps to improve the speed of world generation.

### cache-world-generator-sea-level

- **default**: `true`
- **description**: If enabled, the server will cache sea level height during world generation to avoid redundant retrieval. This may be helpful for world generation.

### skip-secondary-POI-sensor-if-absent

- **default**: `true`
- **description**: If enabled, skip the subsequent detection when secondary POI is not found during villagers' search.

### cache-CubeVoxelShape-shape-array

- **default**: `true`
- **description**: By adding caching to CubeVoxelShape can optimize some position calculations.

### store-mob-counts-in-array

- **default**: `true`
- **description**: If enabled, it will use arrays when calculating the upper limit of spawnable entities, it can help improve performance but not much.

### cache-BlockStatePairKey-hash

- **default**: `true`
- **description**: If enabled, the hash value calculation on BlockStatePairKey will be cached.

### optimize-noise-generation

- **default**: `false`
- **description**: If enabled, it will use [C2ME](https://github.com/RelativityMC/C2ME-fabric)'s optimized noise generator when generating worlds. (Experminal).

:::caution

This feature is an experimental feature and may not work correctly.

:::

### optimize-sun-burn-tick

- **default**: `true`
- **description**: If enabled, it will optimize the detection of sunlight on entities, and it can reduce some entities' AI costs.

### use-optimized-collection

- **default**: `true`
- **description**: If enabled, then the vanilla's collections will be replaced by optimized collections.

### optimized-CubePointRange

- **default**: `true`
- **description**: If enabled, it will optimize the CubePointRange, it may be helpful for location calculating.

### check-frozen-ticks-before-landing-block

- **default**: `true`
- **description**: If enabled, then before freezing water, it will check game ticks before the slower air detections.

### cache-ominous-banner-item

- **default**: `true`
- **description**: If enabled, then the ominous banner item will be cached instead of creating a new item every time the get method is called.

### skip-entity-move-if-movement-is-zero

- **default**: `true`
- **description**: If enabled, it will skip entity movement calculating after the entity is completly stopped moving.

### skip-cloning-advancement-criteria

- **default**: `true`
- **description**: If enabled, it will skip the advancement judgment during copying. This may help optimize some data packets.

### skip-negligible-planar-movement-multiplication

- **default**: `true`
- **description**: If enabled, server will skip unnecessary multiplication calculations during player movement.

### fix-villagers-dont-release-memory

- **default**: `true`
- **description**: If enabled, the problem of villagers occupying memory and not releasing it will be effectively solved. 