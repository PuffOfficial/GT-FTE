const Datas = [
    ["zombie", "#forge:foods/meat/raw"],
    ["blaze", "minecraft:blaze_powder"],
    ["enderman", "minecraft:ender_pearl"],
    ["creeper", "minecraft:gunpowder"],
    ["skeleton", "gtceu:calcium_dust"],
    ["spider", "minecraft:string"],
]
const DataOutputs = [
    ["zombie", ["8x minecraft:rotten_flesh", "2x minecraft:iron_ingot"], 1],
    ["skeleton", ["16x minecraft:bone", "6x minecraft:arrow"], 0.8],
    ["creeper", ["16x minecraft:gunpowder"], 1.5],
    ["enderman", ["2x minecraft:ender_pearl"], 2],
    ["blaze", ["6x minecraft:blaze_rod", "2x minecraft:blaze_powder"], 1.2],
    ["spider", ["16x minecraft:string", "2x minecraft:spider_eye"], 1.2],
]
ServerEvents.recipes(event => {
//Data Creation`
    for (const [data, input] of Datas) {
        event.recipes.gtceu.research_station(`${data}_creating`)
            .itemInputs([input, `gtceu:data_stick`])
            .itemOutputs(`kubejs:${data}_data`)
            .duration(600)
            .CWUt(16)
            .EUt(GTValues.VA[GTValues.IV]);
    };
    for (const [data, output, multiplier] of DataOutputs) {
        event.recipes.gtceu.simulation(`${data}_processing`)
            .itemInputs(`kubejs:${data}_data`)
            .inputFluids(`gtceu:uu_matter 50`)
            .itemOutputs(output)
            .outputFluids(`enderio:xp_juice ${250 * multiplier}`)
            .duration(100)
            .CWUt(4)
            .EUt(GTValues.VA[GTValues.HV]);
    };
});