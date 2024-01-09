---
id: fakeplayer
slug: /leaves/fakeplayer
---

# Leaves Fakeplayer

:::caution

Some information on this page may outdated.

:::

Leaves provides the support of carpet-like fakeplayer, but not completely the same.
The command of the fakeplayer is `/bot`.

## What is fakeplayer

Fakeplayer is a player entity. It can do most of the things a player can do. Such as:

- Chunk random tick
- Mob spawn
- Use item
- Break block
- ....

As a player entity, the monster will also be attracted by the fakeplayer and attack it,
but the fakeplayer has 0.01/tick natural health recovery.

## Permissions

- `bukkit.command.bot` - Allows the player to use the `/bot` command.

## Create

To create a fakeplayer, you need to use the command `/bot create <Bot Name> [Skin Name]`
as a **player**.

`<Bot Name>` is a required parameter, and it must comply with Minecraft's player naming rule.

`[Skin Name]` is an optional parameter, which is the skin corresponding ID used by the fakeplayer.
If it is not filled in, the skin of the fakeplayer will be randomly selected from the default skins.

The created fakeplayer will inherit the position and angle of view when the player use the command.

:::tip

If the player does not leave the current position when creating the fakeplayer,
the fakeplayer will collide with the player and change the position.

:::

:::caution

Fakeplayer cannot cross the portal for the time being. Please place fakeplayer in the right world.

If a fakeplayer changes the world by instructions or other ways, the fakeplayer may **won't** work properly.

:::

## Remove

The fakeplayer can't respawn. If the fakeplayer dies, it will drop all items and remove itself, even if the game rule `keepInventory` is set to `true`.

Fakeplayers are also killed before the server stop.

You can also use the command `/bot remove <Bot Name>` to kill a specified fakeplayer.

## Actions

Actions is an important component of a fakeplayer, which allows the fakeplayer to do more work.
Up to now, the fakeplayer has a total of 12 actions. However, each fakeplayer can only perform
one action at the same time. Any change to the fakeplayer action will cause the fakeplayer to
lose the data of the old action.

You can use `/bot action <Bot Name> <Action Name> [Action Args]` to make the specified fakeplayer perform the action.

### Action Args

#### TickDelay

- **type**: `Int`
- **default**: `20`
- **description**: The time to wait after each successful operation, in ticks.

#### DoNumber

- **type**: `Int`
- **default**: `-1`
- **description**: The number of times this action can complete a successful operation,
  or an infinite number of times if it is `-1`.

#### X or Y or Z

- **type**: `Double`
- **default**: `0.0`
- **description**: X/Y/Z coordinates of a location

### Attack Action

- **name**: `attack`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: The fakeplayer will try to attack the nearest entity.

### Attack Self Action

- **name**: `attack_self`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: When the fakeplayer starts performing this action, the fakeplayer will try to collide with entities inside its own **hitbox**.

### Break Block Action

- **name**: `break`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: The fakeplayer will try to dig the nearest block.

### Drop Action

- **name**: `drop`
- **args**: `None`
- **description**: The fakeplayer will drop all items in the backpack.

### Jump Action

- **name**: `jump`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: The fakeplayer will try jump.

### Look Action

- **name**: `look`
- **args**: `<X>` `<Y>` `<Z>`
- **description**: The fakeplayer will look at a location.

### Rotate Action

- **name**: `rotate`
- **args**: `None`
- **description**: The fakeplayer will rotate head to player location.

### Sneak Action

- **name**: `sneak`
- **args**: `None`
- **description**: The fakeplayer will change sneak status.

### Stop Action

- **name**: `stop`
- **args**: `None`
- **description**: The fakeplayer will stop action.

### Use Item Action

- **name**: `use`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: The fakeplayer will attempt to use the item of the main hand.
  This action will not attempt to select a block or entity.

:::caution

The behavior of the fakeplayer trying to use a item with GUI is undefined.

:::

### Use Item On Block Action

- **name**: `use_on`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: The fakeplayer will attempt to use the item on the main hand for the
  nearest block.

:::caution

The behavior of the fakeplayer trying to use a block with GUI is undefined.

:::

### Use Item To Entity Action

- **name**: `use_to`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: The fakeplayer will attempt to use the item on the main hand for the
  nearest entity. This action allows the fakeplayer to enter the vehicle.

:::caution

The behavior of the fakeplayer trying to use a entity with GUI is undefined.

:::

### Fish Action

- **name**: `fish`
- **args**: `[TickDelay]` `[DoNumber]`
- **description**: The fakeplayer will try auto fishing.

### Lay Action

- **name**: `lay`
- **args**: `none`
- **description**: When the fakeplayer starts performing this action, the fakeplayer will try to lie down.

## Botlist

/bot list [world] to view the global/world-specific bots.

[world] is an optional parameter. It defaults to world/world_nether/world_the_end. You can also enter the name of your own custom world to view the bots in that world.

Generally, the final output command is in this style: Total number:(current number of bots/max player capacity) World 1 (number):(will not be displayed if empty) World 2 (number):(will not be displayed if empty) World 3 (number):bot name 1, bot name 2…
