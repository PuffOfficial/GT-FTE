ServerEvents.recipes(event => {
event.custom({
  "type": "exdeorum:crucible_heat_source",
  "block_predicate": {
    "block": "minecraft:lightning_rod",
  },
  "heat_value": 75
})
})