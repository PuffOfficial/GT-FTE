ServerEvents.recipes(event => {
event.shaped('gtceu:terrestrial', [
    'CEC', 
    'CAC',
    'DBD'  
  ], {
    A: 'gtceu:clean_machine_casing',  
    B: 'gtceu:aluminium_single_cable',  
    C: 'gtceu:galvanized_manasteel_quadruple_wire',  
    D: '#gtceu:circuits/iv',   
    E: 'gtceu:glass_plate' 
  }
)
event.recipes.gtceu.terrestrial('gtfte:terrasteel')
        .itemInputs(['gtceu:manasteel_ingot', 'gtceu:mana_gem_gem', 'gtceu:mana_pearl_gem'])
        .inputFluids('manafluid:mana 10000')
        .itemOutputs('gtceu:terrasteel_ingot')
        .duration(1200)
        .EUt(2048)
})