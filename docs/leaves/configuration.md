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

The last updated version of the document is [Leaves-bc4728c](https://github.com/LeavesMC/Leaves/releases/tag/1.20.1-bc4728c).

:::

:::tip

Some configurations may override the upstream configuration (such as paper.yml).

:::

## settings

:::tip

Configurations under this section will affect all worlds on a server, or the server function itself.

:::

### misc

#### dont-respond-ping-before-start-fully

- **default**: `true`
- **description**: If enabled, then the server won't respond ping requests from clients.

#### extra-yggdrasil-service.enable

- **default**: `false`
- **description**: If enabled, it will enable supports for [unofficial authentication servers](https://github.com/yushijinhun/authlib-injector).

:::caution

This is a test feature and an unofficial implementation, using this feature may cause unknown errors.

:::

#### extra-yggdrasil-service.urls

- **default**:
  - '<https://url.with.authlib-injector-yggdrasil>'
- **description**: The url of the unofficial authentication server (authlib-injector yggdrasil server), the url should not add "/" at the end. Will take effect when configuration "extra-yggdrasil-service.enable" is "true".

#### no-chat-sign

- **default**: `true`
- **description**: If enabled, it will strike out the signature in player chat and the server will also send a message that the server is safe to players who have installed ["No Chat Reports"](https://github.com/Aizistral-Studios/No-Chat-Reports) Mod.

#### disable-method-profiler

- **default**: `true`
- **description**: If enabled, it will disable the method profiler on server. Disabling it will have a partial impact on testing and a small amount of performance improvement, but will not affect the use of the production environment.

 #### bstats-privacy-mode

- **default**: `false`
- **description**: If enabled, it will enable the bstats privacy mode on the server, which means that bstats no longer collect the number of players, the java version used by the server, and the online mode information.

  #### auto-update.enable

- **default**: `false`
- **description**: If enabled, the server will automatically detect the version and update to the latest version at the time you specify.

 #### auto-update.time

- **default**: '- '14:00' - '2:00' '
- **description**: Set the time for automatic updates. This function needs to be used with the auto-update. enable option.

 #### server-lang

- **default**: 'en_us '
- **description**: Set the language of the server. Currently supports en_ Us and zh_ Cn. 



### modify

#### return-nether-portal-fix

- **default**: `false`
- **description**: If enabled, it will fix the problem that players incorrectly transfer to other portals when returning from nether to the overworld.

:::caution

This configuration is a experimental function and may not work properly.

:::

#### snowball-and-egg-can-knockback-player

- **default**: `true`
- **description**: If enabled, then snowballs and eggs can knock players back.

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
  - paper-global.yml item-validation.resolve-selectors-in-books: true
  - paper-world-default.yml disableUnloadedChunkEnderpearlExploit
:::note

If you find that there are other configurations that need to be overwritten, please submit an issue.

:::

#### instant-block-updater-reintroduced

- **default**: `false`
- **description**: If enabled, it will reintroduce the instant block update behavior from versions before 1.19, with that "update suppression" is doable in 1.19+ again.

#### flatten-triangular-distribution

- **default**: `false`
- **description**: If enabled, it will change triangle distributional randomizers in Minecraft into uniform distributional randomizers, with that edge cases are more likely to happen.

#### redstone-shears-wrench

- **default**: `true`
- **description**:  If enabled, then shears can rotate part of the redstone component by right clicking. (If you need to rotate more redstone components, please submit an issue)

#### player-operation-limiter

- **default**: `false`
- **description**: If enabled, each player can only instantly break 1 or place 2 blocks per game tick, which works against automatic bedrock breaker mods (such as: [Fabric-Bedrock-Miner
](https://github.com/LXYan2333/Fabric-Bedrock-Miner)) and doesn't affect normal bedrock breakings.

#### use-vanilla-random

- **default**: `false`
- **description**: If enabled, the server will use the vanilla random number generator; it may lose some performance, but will allow RNG manipulation to be used within the server.

#### no-feather-falling-trample

- **default**: `false`
- **description**: If enabled, jump in boots on farmland while boot is enchanted with "Feather Falling" won't decay the farmland.

#### renewable-elytra

- **default**: `-1.0`
- **description**: The value is the probability that a phantom will drop a broken elytra when a shulker bullet killed it, if value is negative (value < 0, sgn(value) = -1), disable this configuration.

#### shears-in-dispenser-can-zero-amount

- **default**: `false`
- **description**: If enabled, the shears can be used to negative durability in the dispenser without breaking.

:::note

This is an bug of old version of minecraft. ~~It's not a bug it's a feature~~

:::

#### fix-update-suppression-crash

- **default**: `true`
- **description**: If enabled, it will fix crashes by update suppression.The same effect as the yeetUpdateSuppressionCrash project in [Carpet TIS Addition](https://github.com/TISUnion/Carpet-TIS-Addition).

#### disable-distance-check-for-use-item

- **default**: `false`
- **description**: If enabled, it will disable distance check for UseItemOnPacket.

#### spectator-dont-get-advancement

- **default**: `false`
- **description**: If enabled, then players in spectator mode will not get advancements.

#### budding-amethyst-can-push-by-piston

- **default**: `false`
- **description**: If enabled, then pistons can **push** the budding amethyst.

#### stick-change-armorstand-arm-status

- **default**: `true`
- **description**: If enable,it will allow players to use sticks to right-click armor stands while crouching to change the display status of the armor stand arms, that is, set the NBT tag ShowArms to 1b. This will be similar to the bedrock edition performance.

#### stackable-shulker-boxes

- **default**: `'false'`
- **description**:  If enable,it will allow the empty shulker box stack. This value must be a string of true / false or an integer less than or equal to 64. If the value is an integer, then this number is the stackable quantity of the shulker box. If it is true, it is defaulted to 2, and if it is false, it is considered 1.

:::note

Empty shulker boxes are automatically stacked on the ground (as drops) and when picked up by the player, or can be manually stacked in the backpack if the player has a supported mod installed.
However, in order not to break down the machine, empty shulker boxes are not stacked inside the hopper, and stacked empty shulker boxes are separated when the hopper is running.

:::

#### shared-villager-discounts

- **default**: `false`
- **description**: If enabled, then for each villager, all players have the same villager discount. If one player got a discount on villager A, all players get same discount on villager A.

#### bedrock-break-list

- **default**: `false`
- **description**: Set to "true" to enable. A bedrock break list like [this mod](https://gitee.com/harvey-husky/YH-BBL).

#### fakeplayer.enable

- **default**: `true`
- **description**: If enabled, enable bot function and '/bot' command

#### fakeplayer.unable-fakeplayer-names

- **default**:
  - player-name
- **description**: The blacklist of names that dummies are prohibited from using. It does not allow writing player names with Chinese or special symbols.

#### fakeplayer.limit

- **default**: `10`
- **description**: The maximum number of existing bots (bot counts into the total number of players).

#### fakeplayer.always-send-data

- **default**: `true`
- **description**: If enabled, then the server will send fakeplayer data to players in the same world, regardless of distance limit.

#### fakeplayer.resident-fakeplayer

- **default**: `false`
- **description**: If enabled, then the server will save fakeplayer when shutting down the server and automatically create the fakeplayer at the next startup.

:::caution

This is an experimental function, and the actions of the fakeplayer will not be saved temporarily.

:::

#### fakeplayer.open-fakeplayer-inventory

- **default**: `false`
- **description**: If enabled, then players can right click by empty hand to open the fakeplayer inventory.

:::note

The structure slots in the fakeplayer's inventory are placeholders and do not have any special functions.

:::

#### fakeplayer.skip-sleep-check

- **default**: `false`
- **description**: If enabled, then fakeplayers do not count towards the sleep cap.

#### fakeplayer.prefix

- **default**: `bot_`
- **description**: Set the prefix for fakeplayers. It does not allow writing with Chinese or special symbols.

#### fakeplayer.suffix

- **default**: `''`
- **description**: Set the suffix for fakeplayers. It does not allow writing with Chinese or special symbols.

#### redstone-wire-dont-connect-if-on-trapdoor

- **default**: `false`
- **description**: If enabled, then redstone dust can be linked to redstone dust on an open trapdoor.

#### disable-check-out-of-order-command

- **default**: `false`
- **description**: If enabled, it will disable update-chat-order (updatechatorder).

#### despawn-enderman-with-block

- **default**: `false`
- **description**: If enabled, then endermen with blocks in their hands will be cleared away like other mobs, which can purge a bunch of Endermen that longlived in the server.

#### creative-no-clip

- **default**: `false`
- **description**: If enabled, then players in gamemode "Creative" won't have collision box while flying.

:::note

This feature needs to enable configuration "leaves-carpet-support" and requires the player to install the carpet mod to work properly.

:::

#### mending-compatibility-infinity

- **default**: `false`
- **description**: If enabled, then both "mending" and "infinity" can exist on a bow.

#### shave-snow-layers

- **default**: `true`
- **description**: If enabled, then shovels can dig snow layer by layer.

#### ignore-lc

- **default**: `false`
- **description**: If enabled, then mobs spawn will ignore the effect of lc value.

:::caution

This feature is an experimental feature and may (not) work correctly.

:::

#### elytra-aeronautics.no-chunk-load

- **default**: `false`
- **description**: If enabled, when the player flies at a certain height and speed, they will not load chunks or do world generation, thereby reducing server load.

:::tip

This feature was originally designed to cooperate with [Elytra Aeronautics](https://www.mcmod.cn/class/7844.html)。

:::

:::caution

This feature is an experimental feature and may not work correctly.

:::

#### elytra-aeronautics.no-chunk-height

- **default**: `500.0`
- **description**: The height (Y-value) required for the player to fly when entering the state of not loading chunks. (elytra-aeronautics.no-chunk-load)

#### elytra-aeronautics.no-chunk-speed

- **default**: `-1.0`
- **description**: The speed required for the player to fly when entering the state of not loading chunks. Units: block/s. (elytra-aeronautics.no-chunk-load)

#### elytra-aeronautics.message

- **default**: `true`
- **description**: If enabled, the server will send notice when the player enters or exits the not loading chunk state.

#### elytra-aeronautics.message-start

- **default**: `Flight enter cruise mode`
- **description**: The notice when the player enters the state of not loading chunks.

#### elytra-aeronautics.message-end

- **default**: `Flight exit cruise mode`
- **description**: The notice when the player exits the state of not loading chunks.

#### disable-packet-limit

- **default**: `false`
- **description**: If enabled, the server will disable packet limits.

:::caution

If your server has installed packet-limiting plugins like ViaVersion, you need to disable their limits in their config.

:::

#### container-passthrough

- **default**: `false`
- **description**: If enabled, then players can open chests behind a sign without items in **both two hands**. (Shift + Right-click to edit signs.)

#### lava-riptide

- **default**: `false`
- **description**: If enabled, then players can use tridents with riptide enchantment in lava, like in water. (Requires [Bladeren Mod](https://github.com/LeavesMC/Bladeren))

#### raider-die-skip-self-raid-check

- **default**: `false`
- **description**: If enabled, then the server will skip portions of raid migration detection.

:::caution

This configuration will attempt to fix the raid farm issue through a highly aggressive approach. When set to true, it will enhance raid farm efficiency by 10% to 50%, but it will have a significant impact on server performance. Please consider whether to enable it.

:::

#### avoid-anvil-too-expensive

- **default**: `true`
- **description**: If enabled, the expensive setting of the anvil will be cancelled.

#### bow-infinity-fix

- **default**: `false`
- **description**: If enabled, then the server will allow the use of infinite bows even when there are no arrows in the inventory.

 #### zero-tick-plants

- **default**: `false`
- **description**: If enabled, then the server will re-add the 0-tick ripening mechanism to the game.

### performance

#### cache-climb-check

- **default**: `true`
- **description**: If enabled, the server will cache climb check result.

#### entity-target-find-optimization

- **default**: `true`
- **description**: If enabled, then when an entity is looking for a target, if the target cannot be found, the search will be stopped directly, which can reduce some redundant calculations.

#### check-spooky-season-once-an-hour

- **default**: `true`
- **description**: If enabled, it will detect Halloween every hour. (Do Mojang staffs have Halloween every day?)

#### reduce-chuck-load-and-lookup

- **default**: `true`
- **description**: If enabled, the server will reduce unnecessary chunk lookups and loads.

#### optimize-chunk-ticking

- **default**: `true`
- **description**: If enabled, it will optimize the following chunk ticks, which can improve performance by 5% to 10%.
  - Lightning
  - Ice and Snow Generation

#### remove.tick-guard-lambda

- **default**: `true`
- **description**: If enabled, lambda expressions will be removed to improve performance.

#### remove.get-nearby-players-streams

- **default**: `true`
- **description**: If enabled, streams' usage will be removed to improve performance.

#### remove.inventory-contains-iterators

- **default**: `true`
- **description**: If enabled, inventory contains iterators will be removed to improve performance.

#### remove.range-check-streams-and-iterators

- **default**: `true`
- **description**: If enabled, the range check will be removed to improve performance.

#### reduce-entity-fluid-lookup

- **default**: `true`
- **description**: If enabled, it will disable inefficient fluid lookup if there are no fluids near the entity at all.

#### enable-suffocation-optimization

- **default**: `true`
- **description**: If enabled, then suffocation is only checked every 20 ticks, it is difficult (but not impossible) for the player to notice the change.

#### strip-raytracing-for-entity

- **default**: `true`
- **description**: If enabled, it will change the old rayTrace method to improve performance.

#### inactive-goal-selector-disable

- **default**: `false`
- **description**: If enabled, it will restrict the running of entity target finders on inactive entities. This can improve some performance and have less impact on the game.

#### improve-fluid-direction-caching

- **default**: `true`
- **description**: If sets to"true", it will use a reimplemented higher performance FluidTypeFlowing caching system.

#### fix.fix-paper-6045

- **default**: `true`
- **description**: Ifsets to  "true", it can fix a bug of paper.[Paper-6045](https://github.com/PaperMC/Paper/issues/6045)

#### fix.fix-paper-9372

- **default**: `true`
- **description**: If enabled, it can fix a bug of paper, again.[Paper-9372](https://github.com/PaperMC/Paper/issues/9372)

#### dont-send-useless-entity-packets

- **default**: `true`
- **description**: If enabled, it can reduce the sending of some entity packets that are not used at all. (This may break some mods that utilize these useless entity packs)

#### optimize-entity-coordinate-key

- **default**: `true`
- **description**: When executing getCoordinateKey for entities (a hotpath), the JVM is required to repeatedly cast doubles to longs. The performance impact of this depends on the CPU architecture, but generally switching between FPU and ALU incurs a significant performance hit. The casted/rounded data is already available in the blockPosition struct, so we use that instead of re-doing the casting.

#### use-more-thread-unsafe-random

- **default**: `true`
- **description**: If enabled, the server will use more thread-unsafe random number generators, which are not safe but fast.

#### skip-poi-find-in-vehicle

- **default**: `true`
- **description**: If enabled, it will skip entity POI finding if stuck in vehicle, which optimize the performance of villagers' trading hall.

#### simpler-vanilla-shapeless-recipes

- **default**: `true`
- **description**: If enabled, it will replace the overly complex shapeless recipe system.

#### reduce-entity-allocations

- **default**: `true`
- **description**: If enabled, it will reduce entity allocations.

#### biome-temperatures-use-aging-cache

- **default**: `true`
- **description**: If enabled, it will use aging cache for biome temperatures, This will bring some performance improvements.

#### async-pathfinding

:::danger

This feature is temporarily unavailable.

:::

- **default**: `false`
- **description**: NOT AVAILABLE YET

#### async-entity-tracker

:::danger

This feature is temporarily unavailable.

:::

- **default**: `false`
- **description**: NOT AVAILABLE YET

#### async-mob-spawning

- **default**: `false`
- **description**: NOT AVAILABLE YET

#### optimized-dragon-respawn

- **default**: `false`
- **description**: If enabled, it will optimize dragon respawn.

:::caution

This function is not exactly the same as the original function.

:::

#### cache-ignite-odds

- **default**: `true`
- **description**: If enabled, it will optimize fire ignite odds getter.

#### cache-CubeVoxelShape-shape-array

- **default**: `true`
- **description**: By adding caching to CubeVoxelShape can optimize some position calculations.

#### use-fast-item-merge-raytracing

- **default**: `true`
- **description**: Use faster rays when fixing items merging through walls in Paper. You need to open fixItemsMergingThroughWalls in **paper.yml**.

#### skip-secondary-POI-sensor-if-absent

- **default**: `true`
- **description**: If enabled, skip the subsequent detection when secondary POI is not found during villagers' search.

#### cache-BlockStatePairKey-hash

- **default**: `true`
- **description**: If enabled, the hash value calculation on BlockStatePairKey will be cached.

#### faster-chunk-serialization

- **default**: `true`
- **description**: If enabled, it will use [Lithium](https://github.com/CaffeineMC/lithium-fabric)'s Faster Chunk Serialization.

#### optimize-world-generation-and-block-access

- **default**: `true`
- **description**: If enabled, it will optimize the process of generating blocks and chunks when generating the world, which helps to improve the speed of world generation.

#### store-mob-counts-in-array

- **default**: `true`
- **description**: If enabled, it will use arrays when calculating the upper limit of spawnable entities, it can help improve performance but not much.

#### optimize-noise-generation

- **default**: `false`
- **description**: If enabled, it will use [C2ME](https://github.com/RelativityMC/C2ME-fabric)'s optimized noise generator when generating worlds. (Experminal)

#### cache-world-generator-sea-level

- **default**: `true`
- **description**: If enabled, the server will cache sea level height during world generation to avoid redundant retrieval. This may be helpful for world generation.

#### dont-trigger-lootable-refresh-for-non-player

- **default**: `true`
- **description**: If enabled, then the loot table update is not triggered if the triggering player does not exist.

#### optimize-sun-burn-tick

- **default**: `true`
- **description**: If enabled, it will optimize the detection of sunlight on entities, and it can reduce some entities' AI costs.

#### use-optimized-collection

- **default**: `true`
- **description**: If enabled, then the vanilla's collections will be replaced by optimized collections.

#### optimized-CubePointRange

- **default**: `true`
- **description**: If enabled, it will optimize the CubePointRange, it may be helpful for location calculating.

#### check-frozen-ticks-before-landing-block

- **default**: `true`
- **description**: If enabled, then before freezing water, it will check game ticks before the slower air detections.

#### cache-ominous-banner-item

- **default**: `true`
- **description**: If enabled, then the ominous banner item will be cached instead of creating a new item every time the get method is called.

#### skip-entity-move-if-movement-is-zero

- **default**: `true`
- **description**: If enabled, it will skip entity movement calculating after the entity is completly stopped moving.

#### skip-cloning-advancement-criteria

- **default**: `true`
- **description**: If enabled, it will skip the advancement judgment during copying. This may help optimize some data packets.

#### skip-unnecessary-mob-spawning-computations

- **default**: `true`
- **description**: If enabled, the server will skip unnecessary biological generation calculations.

#### skip-negligible-planar-movement-multiplication

- **default**: `true`
- **description**: If enabled, server will skip unnecessary multiplication calculations during player movement.

 #### fix-villagers-dont-release-memory

- **default**: `true`
- **description**: If enabled, the problem of villagers occupying memory and not releasing it will be effectively solved. 
  
### protocol

#### alternative-block-placement

- **former name**:'carpet-alternative-block-placement'
- **default**: `carpet`
- **description**: If enabled, it will support alternative block placement protocol.There are four options available：NONE CARPET CARPET_FIX LITEMATICA.

:::tip

If you want to use the alternative block placement protocol on the easy placement function of the litematica mod, you need to manually adjust the protocol type used by the litematica mod to `V2` instead of using `Auto` mode.

:::

#### pca-sync-protocol

- **default**: `false`
- **description**: If enabled, it will support [pcaSyncProtocol](https://github.com/plusls/plusls-carpet-addition).

#### syncmatica.enable

- **default**: `false`
- **description**: If enabled, it will support [Syncmatica Mod](https://github.com/End-Tech/syncmatica).

#### syncmatica.quota

- **default**: `false`
- **description**: If enabled, it can limit the maximum size a player can upload a schematic.

#### syncmatica.quota-limit

- **default**: `40000000`
- **description**: The maximum size of schematic uploaded by player, in bytes.

#### jade-protocol

- **default**: `false`
- **description**: If enabled, it will support [Jade Mod](https://github.com/Snownee/Jade).

:::caution

Using this project on a server with Viaversion loaded will cause some problems, please refer to [Leaves developer’s suggestion](https://github.com/LeavesMC/Leaves/issues/74) and [Leaves-73](https://github.com/LeavesMC/Leaves/issues/73). If you still choose to enable this project on the server side with Via loaded, the Leaves team will not accept any issues related to this!

:::  

#### bbor-protocol

- **default**: `false`
- **description**: If enabled, it will support [BBOR Mod](https://github.com/irtimaled/BoundingBoxOutlineReloaded).

#### pca-sync-player-entity

- **default**: `OPS`
- **description**: Control which players the pca sync protocol can sync.
  - `NOBODY`: Nobody can be synced
  - `BOT`: Fakeplayer can be synced
  - `OPS`: Fakeplayer can be synced, OP can syncs all player datas
  - `OPS_AND_SELF`: Fakeplayer can be synced, OP can sync all player datas, players can sync themselves datas
  - `EVERYONE`: Everyone can be synced by everyone.

#### appleskin-protocol

- **default**: `false`
- **description**: If enabled, it will support [AppleSkin Mod](https://github.com/squeek502/AppleSkin).

#### xaero-map-protocol

- **default**: `false`
- **description**: If enabled, it will support [Xaero's World Map Mod](https://minecraft.curseforge.com/projects/xaeros-world-map) and
 [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap).

#### leaves-carpet-support

- **default**: `false`
- **description**: If enabled, it will enable the support for carpet protocol implemented by LeavesMC, this lets the client think it's entering a server with a carpet and provides some client-side support.

#### bladeren.mspt-sync-protocol

- **default**: `false`
- **description**: If enabled, it will support [Bladeren Mod](https://github.com/LeavesMC/Bladeren)'s mspt sync.

:::note

Blareden should not have the problem of synchronization lagging under normal circumstances. If you encounter this symptom, try checking if the client-side mod will cause this problem.

:::
