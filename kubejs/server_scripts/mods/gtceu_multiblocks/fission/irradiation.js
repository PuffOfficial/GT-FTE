ServerEvents.recipes(event => {
event.shaped('gtceu:irradiation_chamber', [
    'CBC', 
    'EAE',
    'DCD'  
  ], {
    A: 'kubejs:radiation_resistant_casing',  
    B: global.LuV.Piston,  
    C: 'gtceu:laminated_glass', 
    D: 'gtceu:radiation_resistant_alloy_plate', 
    E: global.IV.Circuit, 
  }
)        
event.recipes.gtceu.irradiation(`gtfte:bismuth_210`)
        .inputFluids([`gtceu:beryllium 144`, 'gtceu:bismuth 144'])
        .itemOutputs(`gtceu:bismuth_210_dust`)
        .outputFluids(`gtceu:beryllium_4 144`)
        .duration(250)
        .EUt(8192);
})