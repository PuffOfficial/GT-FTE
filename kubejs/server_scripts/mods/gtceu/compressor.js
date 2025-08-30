ServerEvents.recipes(event => {
//ULV
event.shaped('gtceu:ulv_compressor', [
    ' B ', 
    'DAD',
    'CBC'  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable("single"),
    D: global.ULV.Piston,
  }
);
event.recipes.gtceu.compressor('gtfte:air_ingot')
      .itemInputs('gtceu:liquid_air_bucket')
      .itemOutputs('gtceu:small_air_dust')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.EV]);
})