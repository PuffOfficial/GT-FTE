ServerEvents.recipes(event => {
    event.custom({
        "type":"exdeorum:crook",
        "block_predicate":{"block":"minecraft:dirt"},
        "chance":0.3,
        "result":"minecraft:oak_sapling"
    })
    event.custom({
        "type":"exdeorum:crook",
        "block_predicate":{"block":"minecraft:grass_block"},
        "chance":0.3,
        "result":"rootsclassic:old_root"
    })
    event.custom({
        "type":"exdeorum:crook",
        "block_predicate":{"block":"minecraft:wheat", "state":{"age": 7}},
        "chance":0.5,
        "result":"rootsclassic:verdant_sprig"
    })
})