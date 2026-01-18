ServerEvents.recipes(event => {
event.shaped(`gtceu:ulv_electrolyzer`, [
    `EDE`, 
    `EAE`,
    `BCB`  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable(`single`),
    D: `#forge:glass`,
    E: global.MV.Wire(`single`),
  }
);
    event.recipes.gtceu.electrolyzer(`gtfte:quartz_electrolyzing`)
        .itemInputs(`8x minecraft:glass`)
        .itemOutputs(`minecraft:quartz`)
        .outputFluids(`gtceu:oxygen 100`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV]);
})