ServerEvents.recipes(event => {
//LV
event.shaped('gtceu:lv_magmatic_dynamo', [
    'FEF', 
    'BAB',
    'DCD'  
  ], { 
    A: global.LV.Hull,      
    B: global.LV.Motor,
    C: global.LV.Pump,
    D: global.LV.Cable("single"),
    E: 'gtceu:tin_rotor',
    F: '#forge:glass',
  }
)
//MV
event.shaped('gtceu:mv_magmatic_dynamo', [
    'FEF', 
    'BAB',
    'DCD'  
  ], { 
    A: global.MV.Hull,      
    B: global.MV.Motor,
    C: global.MV.Pump,
    D: global.MV.Cable("single"),
    E: 'gtceu:bronze_rotor',
    F: '#forge:glass',
  }
)
//HV
event.shaped('gtceu:hv_magmatic_dynamo', [
    'FEF', 
    'BAB',
    'DCD'  
  ], { 
    A: global.HV.Hull,      
    B: global.HV.Motor,
    C: global.HV.Pump,
    D: global.HV.Cable("single"),
    E: 'gtceu:steel_rotor',
    F: '#forge:glass',
  }
)



event.recipes.gtceu.magmatic_dynamo('gtfte:lava')//.circuit(1)
        .chancedOutput(`gtceu:tiny_obsidian_dust`, 100, 0)
        .inputFluids('minecraft:lava 15')
        .duration(10)
        .perTick(true)
        .EUt(-32);
event.recipes.gtceu.magmatic_dynamo('gtfte:nether_imbued_lava')//.circuit(1)
        .chancedOutput(`gtceu:tiny_obsidian_dust`, 100, 0)
        .inputFluids('gtceu:nether_imbued_lava 10')
        .duration(100)
        .perTick(true)
        .EUt(-32);
})