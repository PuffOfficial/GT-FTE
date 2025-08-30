ServerEvents.recipes(event => {
    event.custom({
        "type":"exdeorum:crook",
        "block_predicate":{"block":"minecraft:dirt"},
        "chance":0.1,
        "result":"minecraft:oak_sapling"
    })
    event.custom({
        "type":"exdeorum:crook",
        "block_predicate":{"block":"minecraft:grass"},
        "chance":0.2,
        "result":"rootsclassic:old_root"
    })
    event.custom({
        "type":"exdeorum:crook",
        "block_predicate":{"block":"minecraft:wheat", "state":{"age": 7}},
        "chance":0.2,
        "result":"rootsclassic:verdant_sprig"
    })
})