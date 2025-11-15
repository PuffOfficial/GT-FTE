const string = [
    //Pebbles - Dirt
    ["minecraft:dirt", "string", 'exdeorum:stone_pebble', 1.0, 0.7],
    ["minecraft:dirt", "string", 'exdeorum:diorite_pebble', 1.0, 0.7],
    ["minecraft:dirt", "string", 'exdeorum:granite_pebble', 1.0, 0.7],
    ["minecraft:dirt", "string", 'exdeorum:andesite_pebble', 1.0, 0.7],
    ["minecraft:dirt", "string", 'exdeorum:deepslate_pebble', 1.0, 0.7],
    ["minecraft:dirt", "string", 'exdeorum:tuff_pebble', 1.0, 0.7],
    ["minecraft:dirt", "string", 'exdeorum:calcite_pebble', 1.0, 0.7],
    //Saplings
    ["minecraft:dirt", "string", 'minecraft:oak_sapling', 1.0, 0.3],
    ["minecraft:dirt", "string", 'minecraft:spruce_sapling', 1.0, 0.3],
    ["minecraft:dirt", "string", 'minecraft:birch_sapling', 1.0, 0.3],
    ["minecraft:dirt", "string", 'minecraft:jungle_sapling', 1.0, 0.3],
    ["minecraft:dirt", "string", 'minecraft:acacia_sapling', 1.0, 0.3],
    ["minecraft:dirt", "string", 'minecraft:dark_oak_sapling', 1.0, 0.3],
    ["minecraft:dirt", "string", 'minecraft:cherry_sapling', 1.0, 0.3],
    ["minecraft:dirt", "string", 'gtceu:rubber_sapling', 1.0, 0.05],
    ["minecraft:dirt", "string", 'minecraft:cactus', 1.0, 0.2],
    //Seeds
    ["minecraft:dirt", "string", 'exdeorum:grass_seeds', 1.0, 0.05],
    ["minecraft:dirt", "string", 'minecraft:potato', 1.0, 0.05],
    ["minecraft:dirt", "string", 'minecraft:carrot', 1.0, 0.05],
    ["minecraft:dirt", "string", 'minecraft:wheat_seeds', 1.0, 0.05],
    ["minecraft:dirt", "string", 'minecraft:beetroot_seeds', 1.0, 0.05],
    ["minecraft:dirt", "string", 'exdeorum:mycelium_spores', 1.0, 0.05],
    ["minecraft:dirt", "string", 'minecraft:sugar_cane', 1.0, 0.05],

    //Ore Chunks - String
    ["minecraft:gravel", "string", "minecraft:flint", 1.0, 0.0125],
    ["minecraft:gravel", "string", "minecraft:coal", 1.0, 0.35],
    ["minecraft:gravel", "string", "gtceu:crushed_iron_ore", 3.0, 0.3],
    ["minecraft:sand", "string", "gtceu:impure_sphalerite_dust", 3.0, 0.3],
    ["minecraft:gravel", "string", "gtceu:crushed_copper_ore", 2.0, 0.4],
    ["minecraft:gravel", "string", "gtceu:crushed_gold_ore", 2.0, 0.2],
    ["minecraft:sand", "string", "gtceu:impure_cassiterite_sand_dust", 2.0, 0.3],
    ["minecraft:sand", "string", "gtceu:impure_redstone_dust", 4.0, 0.3],
    ["minecraft:sand", "string", "gtceu:impure_sulfur_dust", 2.0, 0.3],
    ["minecraft:gravel", "string", "gtceu:crushed_lead_ore", 2.0, 0.3],
]

ServerEvents.recipes(event => {
    function Sieving(Substract, Mesh, Result, num1, num2) {
        event.custom({
            "type":"exdeorum:sieve",
            "ingredient":{"item":Substract},
            "mesh":`exdeorum:${Mesh}_mesh`,
            "result":Result,
            "result_amount":{"type":"minecraft:binomial","n":num1,"p":num2}
        })
    }

    for (const [Substract, Mesh, Result, num1, num2] of string) {
        Sieving(Substract, Mesh, Result, num1, num2)
    }
})