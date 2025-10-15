const MinecraftTrees = [
        ['spruce', 'minecraft:air'],
        ['oak', 'minecraft:apple'],
        ['birch', 'minecraft:air'],
        ['jungle', 'minecraft:vine'],
        ['acacia', 'minecraft:air'],
        ['dark_oak', 'minecraft:apple'],
        ['cherry', 'minecraft:air']
]
const PH2CTrees = [
        ['avocado'],
        ['candlenut'],
        ['cherry'],
        ['chestnut'],
        ['gooseberry'],
        ['lemon'],
        ['nutmeg'],
        ['orange'],
        ['peach'],
        ['pear'],
        ['plum'],
        ['walnut'],
        ['hazelnut'],
        ['pawpaw'],
        ['soursop'],
        ['acorn'],
        ['almond'],
        ['apricot'],
        ['banana'],
        ['cashew'],
        ['cinnamon'],
        ['coconut'],
        ['date'],
        ['dragonfruit'],
        ['durian'],
        ['fig'],
        ['grapefruit'],
        ['lime'],
        ['mango'],
        ['olive'],
        ['papaya'],
        ['pecan'],
        ['peppercorn'],
        ['persimmon'],
        ['pistachio'],
        ['pomegranate'],
        ['starfruit'],
        ['vanillabean'],
        ['breadfruit'],
        ['guava'],
        ['jackfruit'],
        ['lychee'],
        ['passionfruit'],
        ['rambutan'],
        ['tamarind']
]

ServerEvents.recipes(event => {
        for (const [type, byproduct] of MinecraftTrees) {
                event.recipes.gtceu.growth_simulator(`gtfte:${type}_dsc`)
                        .notConsumable(`minecraft:${type}_sapling`).circuit(1)
                        .itemOutputs([`8x minecraft:${type}_log`, `16x minecraft:stick`, `4x minecraft:${type}_sapling`, `2x ${byproduct}`])
                        .perTick(true)
                        .inputFluids('minecraft:water 100')
                        .duration(600)
                        .EUt(GTValues.VA[GTValues.MV]);
        };
        for (const [type] of PH2CTrees) {
                event.recipes.gtceu.growth_simulator(`gtfte:${type}_pamhc2`)
                        .notConsumable(`pamhc2trees:${type}_sapling`).circuit(1)
                        .itemOutputs([`4x minecraft:oak_log`, `16x minecraft:stick`, `pamhc2trees:${type}_sapling`, `2x pamhc2trees:${type}item`])
                        .perTick(true)
                        .inputFluids('minecraft:water 100')
                        .duration(600)
                        .EUt(GTValues.VA[GTValues.HV]);
        };
})