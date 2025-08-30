ServerEvents.recipes(event => {
event.shaped('gtceu:aspect_collector', [
    'ADE', 
    'BCA',
    'ADE'  
  ], {
    A: global.IV.Cable('single'),  
    B: global.IV.Circuit, 
    C: "gtceu:robust_machine_casing", 
    D: global.IV.Pump, 
    E: "gtceu:osmiridium_rotor", 
  }
)
event.recipes.gtceu.aspect_collecting('gtfte:overworld').circuit(1)
      .dimension("minecraft:overworld")
      .outputFluids(['gtceu:ordo 10', 'gtceu:aqua 5'])
      .duration(100)
      .EUt(8192);
event.recipes.gtceu.aspect_collecting('gtfte:cavum_tenebrae').circuit(2)
      .dimension("sgjourney:cavum_tenebrae")
      .outputFluids(['gtceu:perditio 10', 'gtceu:ignis 5'])
      .duration(100)
      .EUt(8192);
event.recipes.gtceu.aspect_collecting('gtfte:abydos').circuit(3)
      .dimension("sgjourney:abydos")
      .outputFluids(['gtceu:ignis 10', 'gtceu:aer 5'])
      .duration(100)
      .EUt(8192);
event.recipes.gtceu.aspect_collecting('gtfte:rima').circuit(4)
      .dimension("sgjourney:rima")
      .outputFluids(['gtceu:terra 10', 'gtceu:perditio 5'])
      .duration(100)
      .EUt(8192);
event.recipes.gtceu.aspect_collecting('gtfte:chulak').circuit(5)
      .dimension("sgjourney:chulak")
      .outputFluids(['gtceu:aqua 10', 'gtceu:terra 5'])
      .duration(100)
      .EUt(8192);
event.recipes.gtceu.aspect_collecting('gtfte:unitas').circuit(6)
      .dimension("sgjourney:unitas")
      .outputFluids(['gtceu:aer 10', 'gtceu:ordo 5'])
      .duration(100)
      .EUt(8192);
})