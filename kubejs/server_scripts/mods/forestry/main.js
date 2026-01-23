const TubeTypes = [
    [`copper`, `gtceu:copper_rod`],
    [`tin`, `gtceu:tin_rod`],
    [`bronze`, `gtceu:bronze_rod`],
    [`iron`, `gtceu:iron_rod`],
    [`gold`, `gtceu:gold_rod`],
    [`diamond`, `gtceu:diamond_rod`],
    [`obsidian`, `gtceu:obsidian_dust`],
    [`blaze`, `minecraft:blaze_rod`],
    [`apatite`, `gtceu:apatite_rod`],
    [`lapis`, `gtceu:lapis_rod`],
    [`emerald`, `gtceu:emerald_rod`]
]
const FarmBlockTypes = [
    [`stone_brick`, `minecraft:stone_bricks`],
    [`mossy_stone_brick`, `minecraft:mossy_stone_bricks`],
    [`cracked_stone_brick`, `minecraft:cracked_stone_bricks`],
    [`brick`, `minecraft:bricks`],
    [`cut_sandstone`, `minecraft:cut_sandstone`],
    [`sandstone_chiseled`, `minecraft:chiseled_sandstone`],
    [`brick_nether`, `minecraft:nether_bricks`],
    [`brick_chiseled`, `minecraft:chiseled_stone_bricks`],
    [`quartz`, `minecraft:quartz_block`],
    [`quartz_chiseled`, `minecraft:chiseled_quartz_block`],
    [`quartz_lines`, `minecraft:quartz_pillar`]
]
ServerEvents.recipes(event => {
    for (const [Type, Input] of TubeTypes) {
        event.remove({ output: `gtceu:electron_tube_${Type}` })

        event.recipes.gtceu.assembler(`gtfte:electron_tube_${Type}`)
            .itemInputs(`2x gtceu:electrum_bolt`, Input, `gtceu:glass_tube`)
            .inputFluids(`gtceu:redstone 144`)
            .itemOutputs(`forestry:electron_tube_${Type}`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
    };
    for (const [Type, Input] of FarmBlockTypes) {
        event.remove({ output: `forestry:farm_plain_${Type}` })
        event.remove({ output: `forestry:farm_hatch_${Type}` })
        event.remove({ output: `forestry:farm_valve_${Type}` })
        event.remove({ output: `forestry:farm_control_${Type}` })
        event.remove({ output: `forestry:farm_gearbox_${Type}` })

        event.recipes.gtceu.assembler(`gtfte:farm_plain_${Type}`)
            .itemInputs(`forestry:electron_tube_tin`, Input, `2x gtceu:copper_plate`)
            .inputFluids(`gtceu:redstone 144`)
            .itemOutputs(`2x forestry:farm_plain_${Type}`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.assembler(`gtfte:farm_gearbox_${Type}`)
            .itemInputs(`forestry:electron_tube_bronze`, `forestry:farm_plain_${Type}`, `2x gtceu:bronze_gear`)
            .inputFluids(`gtceu:redstone 144`)
            .itemOutputs(`forestry:farm_gearbox_${Type}`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.assembler(`gtfte:farm_control_${Type}`)
            .itemInputs(`forestry:electron_tube_diamond`, `forestry:farm_plain_${Type}`, `2x gtceu:gold_plate`, `2x gtceu:wrought_iron_gear`)
            .inputFluids(`gtceu:redstone 144`)
            .itemOutputs(`forestry:farm_control_${Type}`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);

        event.shapeless(`forestry:farm_hatch_${Type}`, [
            `forestry:farm_plain_${Type}`,
            `minecraft:chest`,
            `forestry:electron_tube_gold`,
            global.tools.AnyScrewdriver
        ]).damageIngredient(global.tools.AnyScrewdriver)
        event.shapeless(`forestry:farm_valve_${Type}`, [
            `forestry:farm_plain_${Type}`,
            `minecraft:glass`,
            `forestry:electron_tube_copper`,
            global.tools.AnyScrewdriver
        ]).damageIngredient(global.tools.AnyScrewdriver)
    };
})