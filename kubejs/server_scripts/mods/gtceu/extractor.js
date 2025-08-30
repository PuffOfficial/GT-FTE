ServerEvents.recipes(event => {
event.shaped('gtceu:ulv_extractor', [
    'FBF', 
    'DAE',
    'CBC'  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable("single"),
    D: global.ULV.Piston,
    E: global.ULV.Pump,
    F: '#forge:glass',
  }
);
event.recipes.gtceu.extractor("gtfte:dragons_eye")
        .itemInputs("minecraft:ender_pearl")
        .itemOutputs("rootsclassic:dragons_eye")
        .outputFluids("gtceu:potassium 4")
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV]);
})