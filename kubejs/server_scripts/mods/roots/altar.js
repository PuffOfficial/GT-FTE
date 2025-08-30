ServerEvents.recipes(event => {
event.custom({
  "type": "rootsclassic:ritual",
  "effect": "rootsclassic:crafting",
  "level": 1,
  "color": "#ffffff",
  "ingredients": [
    {
      "item": "minecraft:stone"
    },
    {
      "item": "minecraft:stone"
    },
    {
      "item": "minecraft:stone"
    }
  ],
  "incenses": [
    {
      "item": "gtceu:stone_dust"
    },
    {
      "item": "minecraft:quartz"
    },
    {
      "item": "gtceu:stone_dust"
    },
    {
      "item": "minecraft:quartz"
    },
  ],
  "result": {
    "item": "gtceu:marble",
    "count": 16
  }
})
event.custom({
  "type": "rootsclassic:ritual",
  "effect": "rootsclassic:crafting",
  "level": 2,
  "color": "#75e366",
  "ingredients": [
    {
      "item": 'gtceu:steel_ingot'
    },
    {
      "item": 'gtceu:steel_ingot'
    }
  ],
  "incenses": [
    {
      "item": 'minecraft:wheat'
    },
    {
      "item": 'minecraft:cactus'
    },
    {
      "item": 'minecraft:potato'
    },
    {
      "item": 'minecraft:carrot'
    },
  ],
  "result": {
    "item": "gtceu:living_steel_ingot",
    "count": 8
  }
})
})