---
slug: /leaves/getting-started
---

# Getting Started

## Requirements

| Leaves Version | Recommended Java Version |
| -------------- | ------------------------ |
| 1.18.2+        | Java 17                  |


## Migrating to Leaves

### From Vanilla

Like Paper, migrating from Vanilla is easy.

Leaves will handle all conversion for you automatically. No additional consideration is required.

### From Craftbukkit or Spigot

Leaves is a drop in replacement for both CraftBukkit and Spigot or Paper, you don't need to make any changes.


## Downloading Leaves

Leaves provides runnable server jars directly from 
[github releases](https://github.com/LeavesMC/Leaves/releases).

:::caution

After the latest minecraft version is released, we will only keep the last build of the old version.

:::

## Running The Server

To run the server, simply start it up like any other Java application.

Open your terminal, navigate to the saved location, and then run
`java -Xms2G -Xmx2G -jar leaves.jar nogui`. Ensure you replace `leaves.jar` with the name of the jar
you have downloaded.

The amount of RAM can be set by changing the numbers in the `-Xms` and `-Xmx` arguments. `nogui`
disables Vanilla's GUI, so you don't get double interfaces when using the command line.

For more advanced Java tuning, see [Aikar's Flags](https://docs.papermc.io/paper/aikars-flags).

To configure your server, see the [Leaves Configuration](../configuration.md) page.

You also need see the [Paper Global Configuration](https://docs.papermc.io/paper/reference/global-configuration) and
[Paper Per World Configuration](https://docs.papermc.io/paper/reference/world-configuration) pages to configure paper config.

## Updating The Server

:::tip

If you are using a shared host, your host may provide a built-in way to update! Consult their
documentation before continuing.

:::

Updating Leaves is simple.

1. Download a new JAR from [github releases](https://github.com/LeavesMC/Leaves/releases)
2. Stop your server. It is not recommended and may cause issues to replace your Leaves JAR while the
   server is running.
3. Replace your old Leaves JAR file with the new one.
4. Start your server. Watch the startup log to ensure everything goes to plan. If there are any
   plugin conflicts or issues, you will see them here.
