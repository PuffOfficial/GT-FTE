ServerEvents.recipes(event => {
    event.recipes.gtceu.electrolyzer(`gtfte:quartz_electrolyzing`)
        .itemInputs(`8x minecraft:glass`)
        .itemOutputs(`minecraft:quartz`)
        .outputFluids(`gtceu:oxygen 100`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV]);
})