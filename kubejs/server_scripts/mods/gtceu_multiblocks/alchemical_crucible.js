ServerEvents.recipes(event => {
event.shaped('gtceu:alchemical_crucible', [
    'CDC', 
    'ABA',
    'AEA'  
  ], {
    A: global.IV.Cable('single'),  
    B: 'gtceu:iv_chemical_reactor',  
    C: 'gtceu:polybenzimidazole_huge_fluid_pipe',  
    D: 'gtceu:osmiridium_rotor',   
    E: global.IV.Pump, 
  }
)
event.recipes.gtceu.alchemy('gtfte:thaumium_ingot')
        .itemInputs('gtceu:hsss_ingot')
        .inputFluids(['gtceu:praecantatio 100', 'gtceu:metallum 50'])
        .itemOutputs('gtceu:thaumium_ingot')
        .addData("min_temp", 1000)
        .addData("max_temp", 2000)
        .duration(320)
        .EUt(2048);
event.recipes.gtceu.alchemy('gtfte:alchemical_bronze')
        .itemInputs('gtceu:black_bronze_ingot')
        .inputFluids(['gtceu:praecantatio 50', 'gtceu:vitreus 20'])
        .itemOutputs('gtceu:alchemical_bronze_ingot')
        .addData("min_temp", 700)
        .addData("max_temp", 1300)
        .duration(320)
        .EUt(512);
})