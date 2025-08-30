ServerEvents.recipes(event => {
event.shaped('gtceu:energizer', [
    'CEC', 
    'CAC',
    'DBD'  
  ], {
    A: 'gtceu:solid_machine_casing',  
    B: 'gtceu:tin_single_cable',  
    C: 'gtceu:annealed_copper_double_wire',  
    D: '#gtceu:circuits/lv',   
    E: 'gtceu:glass_plate' 
  }
)
event.recipes.gtceu.energizing('gtfte:charged_certus_quartz')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('gtceu:charged_certus_quartz_gem')
        .duration(100)
        .EUt(20);
})