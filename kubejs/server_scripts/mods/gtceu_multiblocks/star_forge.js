ServerEvents.recipes(event => {
event.shaped('gtceu:star_forge', [
    'BDB', 
    'CAC',
    'BDB'  
  ], {
    A: 'kubejs:hss_plated_nocturium_casing',  
    B: global.IV.Circuit,  
    C: global.IV.Coil,
    D: 'gtceu:polytetrafluoroethylene_huge_fluid_pipe', 
  }
)
event.recipes.gtceu.star_forge('gtfte:test')
        .itemInputs(['16x gtceu:hssg_plate', '64x gtceu:glass_plate', '64x gtceu:ender_pearl_dust', '16x gtceu:iridium_dust'])
        .inputFluids(['gtceu:nether_air 128000', 'gtceu:radon 16000'])
        .itemOutputs('2x gtceu:nether_star_dust')
        .duration(2400)
        .EUt(8192);
})