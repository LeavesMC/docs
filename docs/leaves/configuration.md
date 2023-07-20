---
slug: /leaves/configuration
toc_max_heading_level: 4
keywords:
  - leaves.yml
  - leaves.yml settings
---

# Leaves Configuration

Any configuration for the "Leaves" server is in file `leaves.yml`.

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
- **description**: If sets to "true", it will enable supports for [unofficial authentication servers](https://github.com/yushijinhun/authlib-injector).

:::caution

This is a test function and is unofficial. Enable this configuration may cause unknown problems with your server.

:::

#### extra-yggdrasil-service.urls

- **default**: 
  - 'https://url.with.authlib-injector-yggdrasil'
- **description**: The url of the unofficial authentication server (authlib-injector yggdrasil server), the url should not add "/" at the end. Will take effect when configuration "extra-yggdrasil-service.enable" is "true".

#### no-chat-sign

- **default**: `true`
- **description**: If sets to "true", it will strike out the signature in player chat and the server will also send a message that the server is safe to players who have installed ["No Chat Reports"](https://github.com/Aizistral-Studios/No-Chat-Reports) Mod.

#### disable-method-profiler

- **default**: `true`
- **description**: If sets to "true", it will disable the method profiler on server. Disabling it will have a partial impact on testing and a small amount of performance improvement, but will not affect the use of the production environment.

### modify

#### return-nether-portal-fix

- **default**: `false`
- **description**: If sets to "true", it will fix the problem that players incorrectly transfer to other portals when returning from nether to the overworld.

:::caution

This configuration is a experimental function and may not work properly.

:::

#### snowball-and-egg-can-knockback-player

- **default**: `true`
- **description**: If sets to "true", then snowballs and eggs can knock players back.

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
- **description**: If sets to "true", it will reintroduce the instant block update behavior from versions before 1.19, with that "update suppression" is doable in 1.19+ again.

#### flatten-triangular-distribution

- **default**: `false`
- **description**: If sets to "true", it will change triangle distributional randomizers in Minecraft into uniform distributional randomizers, with that edge cases are more likely to happen.

#### redstone-shears-wrench

- **default**: `true`
- **description**:  If sets to "true", then shears can rotate part of the redstone component by right clicking. (If you need to rotate more redstone components, please submit an issue)

#### player-operation-limiter

- **default**: `false`
- **description**: If sets to "true", each player can only instantly break 1 or place 2 blocks per game tick, which works against automatic bedrock breaker mods (such as: [Fabric-Bedrock-Miner
](https://github.com/LXYan2333/Fabric-Bedrock-Miner)) and doesn't affect normal bedrock breakings.

#### use-vanilla-random

- **default**: `false`
- **description**: If sets to "true", the server will use the vanilla random number generator; it may lose some performance, but will allow RNG manipulation to be used within the server.

#### no-feather-falling-trample

- **default**: `false`
- **description**: If sets to "true", jump in boots on farmland while boot is enchanted with "Feather Falling" won't decay the farmland.

#### renewable-elytra

- **default**: `-1.0`
- **description**: The value is the probability that a phantom will drop a broken elytra when a shulker bullet killed it, if value is negative (value < 0, sgn(value) = -1), disable this configuration.

#### shears-in-dispenser-can-zero-amount

- **default**: `false`
- **description**: If sets to "true", then the shears can be used to negative durability in the dispenser without breaking.

:::note

This is an bug of old version of minecraft. ~~It's not a bug it's a feature~~

:::

#### fix-update-suppression-crash

- **default**: `true`
- **description**: If sets to "true", it will fix crashes by update suppression.

#### disable-distance-check-for-use-item

- **default**: `false`
- **description**: If sets to "true", it will disable distance check for UseItemOnPacket.

#### spectator-dont-get-advancement

- **default**: `false`
- **description**: If sets to "true", then players in spectator mode will not get advancements.

#### budding-amethyst-can-push-by-piston

- **default**: `false`
- **description**: If sets to "true", then pistons can push the budding amethyst.

#### stick-change-armorstand-arm-status

- **default**: `true`
- **description**: If sets to "true", then players can use the "stick" (minecraft:stick) to right-click the armor stand when sneaking to change the display state of the arms of the armor stand.

#### stackable-shulker-boxes

- **default**: `'false'`
- **description**: If sets to "true", then empty shulker boxes can be stacked. This must be a string and either `true` / `false` or a positive integer (integer as a string) of 64 or less.
  If the string is an integer as string, the stackable amount of empty shulker boxes, which is treated as `2` if `true`, or 1 if `false`.

:::note

Empty shulker boxes are automatically stacked on the ground (as drops) and when picked up by the player, or can be manually stacked in the backpack if the player has a supported mod installed.
However, in order not to break down the machine, empty shulker boxes are not stacked inside the hopper, and stacked empty shulker boxes are separated when the hopper is running.

:::

#### shared-villager-discounts

- **default**: `false`
- **description**: If sets to "true", then for each villager, all players have the same villager discount. If one player got a discount on villager A, all players get same discount on villager A.

#### bedrock-break-list

- **default**: `false`
- **description**: Set "true" to enable. A bedrock break list like [this mod](https://gitee.com/harvey-husky/YH-BBL).

#### fakeplayer.enable

- **default**: `true`
- **description**: If sets to "true", enable bot function and '/bot' command

#### fakeplayer.unable-fakeplayer-names

- **default**:
	- player-name
- **description**: Blacklist list of name-using for bots.

#### fakeplayer.limit

- **default**: `10`
- **description**: The maximum number of existing bots (bot counts into the total number of players).

#### fakeplayer.always-send-data

- **default**: `true`
- **description**: If sets to "true", then the server will send fakeplayer data to players in the same world, regardless of distance limit.

#### fakeplayer.resident-fakeplayer

- **default**: `false`
- **description**: If sets to "true", then the server will save fakeplayer when shutting down the server and automatically create the fakeplayer at the next startup.

:::caution

This is an experimental function, and the actions of the fakeplayer will not be saved temporarily.

:::

#### fakeplayer.open-fakeplayer-inventory

- **default**: `false`
- **description**: If sets to "true", then players can right click by empty hand to open the fakeplayer inventory.

#### fakeplayer.skip-sleep-check

- **default**: `false`
- **description**: If sets to "true", then fakeplayers do not count towards the sleep cap

#### redstone-wire-dont-connect-if-on-trapdoor

- **default**: `false`
- **description**: If sets to "true", then redstone dust can be linked to redstone dust on an open trapdoor.

#### disable-check-out-of-order-command

- **default**: `false`
- **description**: If sets to "true", it will disable update-chat-order (updatechatorder).

#### despawn-enderman-with-block

- **default**: `false`
- **description**: If sets to "true", then endermen with blocks in their hands will be cleared away like other mobs, which can purge a bunch of Endermen that longlived in the server.

#### creative-no-clip

- **default**: `false`
- **description**: If sets to "true", then players in gamemode "Creative" won't have collision box while flying.

:::note

This feature needs to enable configuration "leaves-carpet-support" and requires the player to install the carpet mod to work properly.

:::

#### mending-compatibility-infinity

- **default**: `false`
- **description**: If sets to "true", then both "mending" and "infinity" can exist on a bow.

#### shave-snow-layers

- **default**: `true`
- **description**: If sets to "true", then shovels can dig snow layer by layer.

#### ignore-lc

- **default**: `false`
- **description**: If sets to "true", then mobs spawn will ignore the effect of lc value.

:::caution

This feature is an experimental feature and may (not) work correctly.

:::

#### elytra-aeronautics.no-chunk-load

- **default**: `false`
- **description**: If sets to "true", when the player flies at a certain height and speed, they will not load chunks or do world generation, thereby reducing server load.

:::caution

This feature is an experimental feature and may (not) work correctly.

:::

#### elytra-aeronautics.no-chunk-height

- **default**: `500.0`
- **description**: The height (Y-value) required for the player to fly when entering the state of not loading chunks. (elytra-aeronautics.no-chunk-load)

#### elytra-aeronautics.no-chunk-speed

- **default**: `-1.0`
- **description**: The speed required for the player to fly when entering the state of not loading chunks. Units: block/s. (elytra-aeronautics.no-chunk-load)

#### elytra-aeronautics.message

- **default**: `true`
- **description**: If sets to "true", the server will send notice when the player enters or exits the not loading chunk state.

#### elytra-aeronautics.message-start

- **default**: `Flight enter cruise mode`
- **description**: The notice when the player enters the state of not loading chunks.

#### elytra-aeronautics.message-end

- **default**: `Flight exit cruise mode`
- **description**: The notice when the player exits the state of not loading chunks.

### performance

#### cache-climb-check

- **default**: `true`
- **description**: If sets to "true", the server will cache climb check result.

#### entity-target-find-optimization

- **default**: `true`
- **description**: If sets to "true", then when an entity is looking for a target, if the target cannot be found, the search will be stopped directly, which can reduce some redundant calculations.

#### check-spooky-season-once-an-hour

- **default**: `true`
- **description**: If sets to "true", it will detect Halloween every hour. (Do Mojang staffs have Halloween every day?)

#### reduce-chuck-load-and-lookup

- **default**: `true`
- **description**: If sets to "true", it can reduce unnecessary chunk lookups and loads.

#### optimize-chunk-ticking

- **default**: `true`
- **description**: If sets to "true", it will optimize the following chunk ticks, which can improve performance by 5% to 10%.
	- Lightning
	- Ice and Snow Generation

#### remove.tick-guard-lambda

- **default**: `true`
- **description**: If sets to "true", lambda expressions will be removed to improve performance.

#### remove.get-nearby-players-streams

- **default**: `true`
- **description**: If sets to "true", streams' usage will be removed to improve performance.

#### remove.inventory-contains-iterators

- **default**: `true`
- **description**: If sets to "true", inventory contains iterators will be removed to improve performance.

#### remove.range-check-streams-and-iterators

- **default**: `true`
- **description**: If sets to "true", the range check will be removed to improve performance.

#### reduce-entity-fluid-lookup

- **default**: `true`
- **description**: If sets to "true", it will disable inefficient fluid lookup if there are no fluids near the entity at all.

#### enable-suffocation-optimization

- **default**: `true`
- **description**: If sets to "true", then suffocation is only checked every 20 ticks, it is difficult (but not impossible) for the player to notice the change.

#### strip-raytracing-for-entity

- **default**: `true`
- **description**: If sets to "true", it will change the old rayTrace method to improve performance.

#### inactive-goal-selector-disable

- **default**: `false`
- **description**: If sets to "true", it will restrict the running of entity target finders on inactive entities. This can improve some performance and have less impact on the game.

#### improve-fluid-direction-caching

- **default**: `true`
- **description**: If sets to"true", it will use a reimplemented higher performance FluidTypeFlowing caching system.

#### fix.fix-paper-6045

- **default**: `true`
- **description**: Ifsets to  "true", it can fix a bug of paper.

#### fix.fix-paper-9372

- **default**: `true`
- **description**: If sets to "true", it can fix a bug of paper, again.

#### dont-send-useless-entity-packets

- **default**: `true`
- **description**: If sets to "true", it can reduce the sending of some entity packets that are not used at all. (This may break some mods that utilize these useless entity packs)

#### optimize-entity-coordinate-key

- **default**: `true`
- **description**: When executing getCoordinateKey for entities (a hotpath), the JVM is required to repeatedly cast doubles to longs. The performance impact of this depends on the CPU architecture, but generally switching between FPU and ALU incurs a significant performance hit. The casted/rounded data is already available in the blockPosition struct, so we use that instead of re-doing the casting.

#### use-more-thread-unsafe-random

- **default**: `true`
- **description**: If sets to "true", the server will use more thread-unsafe random number generators, which are not safe but fast.

#### skip-poi-find-in-vehicle

- **default**: `true`
- **description**: If sets to "true", it will skip entity POI finding if stuck in vehicle, which optimize the performance of villagers' trading hall.

#### simpler-vanilla-shapeless-recipes

- **default**: `true`
- **description**: If sets to "true", it will replace the overly complex shapeless recipe system.

#### reduce-entity-allocations

- **default**: `true`
- **description**: If sets to "true", it will reduce entity allocations.

#### biome-temperatures-use-aging-cache

- **default**: `true`
- **description**: If sets to "true", it will use aging cache for biome temperatures, This will bring some performance improvements.

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

:::danger

This feature is temporarily unavailable.

:::

- **default**: `false`
- **description**: NOT AVAILABLE YET

#### optimized-dragon-respawn

- **default**: `false`
- **description**: If sets to "true", it will optimize dragon respawn.

:::caution

This function is not exactly the same as the original function.

:::

#### cache-ignite-odds

- **default**: `true`
- **description**: If sets to "true", it will optimize fire ignite odds getter.

### protocol

#### carpet-alternative-block-placement

- **default**: `false`
- **description**: If sets to "true", it will support alternative block placement protocol (from Litematica).

:::tip

If you want to use the alternative block placement protocol on the easy placement function of the litematica mod, you need to manually adjust the protocol type used by the litematica mod to `V2` instead of using `Auto` mode.

:::

#### pca-sync-protocol

- **default**: `false`
- **description**: If sets to "true", it will support [pcaSyncProtocol](https://github.com/plusls/plusls-carpet-addition).

#### syncmatica.enable

- **default**: `false`
- **description**: If sets to "true", it will support [Syncmatica Mod](https://github.com/End-Tech/syncmatica).

#### syncmatica.quota

- **default**: `false`
- **description**: If sets to "true", it can limit the maximum size a player can upload a schematic.

#### syncmatica.quota-limit

- **default**: `40000000`
- **description**: The maximum size of schematic uploaded by player, in bytes.

#### jade-protocol

- **default**: `false`
- **description**: If sets to "true", it will support [Jade Mod](https://github.com/Snownee/Jade).

#### bbor-protocol

- **default**: `false`
- **description**: If sets to "true", it will support [BBOR Mod](https://github.com/irtimaled/BoundingBoxOutlineReloaded).

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
- **description**: If sets to "true", it will support [AppleSkin Mod](https://github.com/squeek502/AppleSkin).

#### xaero-map-protocol

- **default**: `false`
- **description**: If sets to "true", it will support [Xaero's World Map Mod](https://minecraft.curseforge.com/projects/xaeros-world-map) and
 [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap).

#### leaves-carpet-support

- **default**: `false`
- **description**: If sets to "true", it will enable the support for carpet protocol implemented by LeavesMC, this lets the client think it's entering a server with a carpet and provides some client-side support.

#### bladeren.mspt-sync-protocol

- **default**: `false`
- **description**: If sets to "true", it will support [Bladeren Mod](https://github.com/LeavesMC/Bladeren)'s mspt sync.
