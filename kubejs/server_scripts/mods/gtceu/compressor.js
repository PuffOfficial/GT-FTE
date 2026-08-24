ServerEvents.recipes(event => {
  //ULV
  event.shaped(`gtceu:ulv_compressor`, [
    ` B `,
    `DAD`,
    `CBC`
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable(`single`),
    D: global.ULV.Piston,
  }
  );
  event.recipes.gtceu.compressor(`gtfte:compressed_chest`)
    .itemInputs(`9x minecraft:chest`)
    .itemOutputs(`avaritia:compressed_chest`)
    .duration(9600)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.compressor(`gtfte:compressed_porcelain_clay`)
    .itemInputs(`exdeorum:porcelain_clay_ball`)
    .itemOutputs(`kubejs:compressed_porcelain_clay`)
    .duration(80)
    .EUt(GTValues.VA[GTValues.ULV]);
})