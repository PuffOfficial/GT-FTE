
ServerEvents.recipes(event => {
event.shaped('gtceu:decay_chamber', [
    'DBD', 
    'EAE',
    'DCD'  
  ], {
    A: 'kubejs:radiation_resistant_casing',  
    B: global.LuV.RobotArm,  
    C: global.EV.FieldGenerator,
    D: 'gtceu:radiation_resistant_alloy_plate', 
    E: global.IV.Circuit, 
  }
)
event.recipes.gtceu.decaying(`gtfte:polonium_210`)
        .inputFluids(`gtceu:bismuth_210`)
        .outputFluids(`gtceu:polonium_210`)
        .duration(1580);
})