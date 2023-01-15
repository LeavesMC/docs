---
slug: /leaves/configuration
toc_max_heading_level: 4
keywords:
  - leaves.yml
  - leaves.yml settings
---

# Leaves Configuration

Leaves configuration is in `leaves.yml`.

:::tip

Some options may override the upstream configuration (such as paper.yml).

:::

## settings

:::tip

Configuration under this option will affect all worlds on a server, or the
server function itself.

:::

### misc

#### no-chat-sign

- **default**: `true`
- **description**: Whether to let the server delete the signature in the player
 chat. This option also controls whether the server will send the server security
 information to NoChatReports Mod.
 
#### disable-method-profiler

- **default**: `true`
- **description**: Whether the server disables the method profiler. Disabling it will
 have a partial impact on testing and a small amount of performance improvement, but
 will not affect the use of the production environment.

### modify

#### snowball-and-egg-can-knockback-player

- **default**: `true`
- **description**: Can snowballs and eggs knockback players.

#### player-operation-limiter

- **default**: `false`
- **description**: Each gt player can place 2 blocks and insta mine 1 block.
 Only one of these two operations can be done per gt
(for prevent automatic bedrock breaking mod)

#### redstone-shears-wrench

- **default**: `true`
- **description**: Whether the shears can rotate part of the redstone element
 by right clicking.
 
#### player-can-edit-sign

- **default**: `true`
- **description**: Whether the player can edit the text in the sign by 
 right-clicking it empty-handed.
 
#### budding-amethyst-can-push-by-piston

- **default**: `false`
- **description**: Whether the budding amethyst can be **pushed** by the piston.

#### fakeplayer.enable

- **default**: `true`
- **description**: Whether to enable bot and `/bot` command.

#### fakeplayer.unable-fakeplayer-names

- **default**:
	- player-name`
- **description**: Name prohibited for bot.

#### fakeplayer.limit

- **default**: `10`
- **description**: The maximum number of existing bots 
 (bot counts into the total number of players).

#### stackable-shulker-boxes

- **default**: `'false'`
- **description**: Whether to allow the stacking of empty shulker boxes, the value must
 be a string, which can be false/true or a number not exceeding 64. When the value is
 true, the stacking number of shulker boxes is 2, otherwise it is the corresponding number.
 
:::note

Empty shulker boxes will be stacked on the ground, and can also be merged manually in the player's
backpack using mod. However, in order not to damage the machine, the stack of shulker boxes will be
canceled when the hopper is running.

:::

#### spectator-dont-get-advancement

- **default**: `false`
- **description**: Whether players can't get advancements in spectator mode.

#### stick-change-armorstand-arm-status

- **default**: `true`
- **description**: Can the player change the display state of the arm of the armorstand by using stick
 on the armorstand in the shift state.

#### renewable-elytra

- **default**: `-1.0`
- **description**: The probability that the shulker kills the phantom and drops the elytra. If the value
 is negative, it is disabled.
 
#### shears-in-dispenser-can-zero-amount

- **default**: `false`
- **description**: Whether the durability of shears can be negative and not damaged when used by the dispenser.

:::note

This is an bug of old version of minecraft

:::

#### flatten-triangular-distribution

- **default**: `false`
- **description**: Change all triangle distribution in Minecraft randomizers into uniform distribution. With
 that edge cases are more likely to happen.
 
#### instant-block-updater-reintroduced

- **default**: `false`
- **description**: Reintroduce the instant block update behavior from versions before 1.19, with that update
 suppression is doable in 1.19+ again.

### performance

#### fix.fix-paper-6045

- **default**: `true`
- **description**: Just fix a bug.

#### remove.tick-guard-lambda

- **default**: `true`
- **description**: Remove lambda to improve performance.

#### remove.get-nearby-players-streams

- **default**: `true`
- **description**: Remove streams to improve performance.

#### remove.range-check-streams-and-iterators

- **default**: `true`
- **description**: Remove streams and iterators to improve performance.

#### remove.inventory-contains-iterators

- **default**: `true`
- **description**: Remove iterators to improve performance.

#### optimize-chunk-ticking

- **default**: `true`
- **description**: Depending on configuration for things that tick in a chunk, this is a
 5-10% improvement.
	- Lightning: Each chunk now keeps an int of how many ticks until the
	 lightning should strike. This int is a random number from 0 to 100000 * 2,
	 the multiplication is required to keep the probability the same.
	- Ice and snow: We just generate a single random number 0-16 and increment
	 it, while checking if it's 0 for the current chunk.
	 
#### cache-climb-check

- **default**: `true`
- **description**: Cache climbing check for activation.

### protocol

#### carpet-alternative-block-placement

- **default**: `false`
- **description**: Whether the server supports the carpet alternative block placement.

#### pca-sync-protocol

- **default**: `false`
- **description**: Whether the server supports the
 [pca sync protocol](https://github.com/plusls/plusls-carpet-addition).

#### pca-sync-player-entity

- **default**: `OPS`
- **description**: List of player data that the server can sync by pca.
	- `NOBODY`: All player data cannot be sync.
	- `BOT`: The data of the bot can be sync.
	- `OPS`: The data of the bot can be sync, and the op can sync the data of
	 all players.
	- `OPS_AND_SELF`: bot and player's own data can be sync, and the op can sync
	 the data of all players.
	- `EVERYONE`: Everyone's data can be sync.
	
#### bbor-protocol

- **default**: `false`
- **description**: Whether the server supports the
 [BBOR](https://github.com/irtimaled/BoundingBoxOutlineReloaded).
 
#### jade-protocol

- **default**: `false`
- **description**: Whether the server supports the
 [Jade](https://github.com/Snownee/Jade) to display more information.
