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
    [`lapis`, `gtceu:lapis_rod`]
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
    }
})