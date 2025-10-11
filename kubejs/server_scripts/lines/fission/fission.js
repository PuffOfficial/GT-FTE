
const Fuels = [
    [1200, 'celestite', 'liquid_helium', "plutonium_241", 32768, 'celestite_to_steam'],
    [700, 'plutonium_241', 'liquid_helium', "plutonium", 32768, 'plutonium_241_to_steam'],
    [200, 'uranium', 'liquid_helium', "uranium_236", 8192, 'uranium_to_steam']
]

ServerEvents.recipes(event => {
event.shaped('gtceu:primitive_electric_blast_furnace', [
    'DDD', 
    'BAB',
    'CBC'  
  ], {
    A: 'gtceu:firebricks',  
    B: global.ULV.Circuit,  
    C: global.ULV.Cable("single"),
    D: 'minecraft:furnace', 
  }
)
for (const [duration, Fuel, Coolant, Waste, Production, id] of Fuels){
event.recipes.gtceu.fission(`gtfte:${id}`)
        .itemInputs(`4x gtceu:${Fuel}_fuel_rod`)
        .itemOutputs(`4x gtceu:empty_fuel_rod`)
        .outputFluids(`gtceu:${Waste} 288`)
        .perTick(true)
        .inputFluids([`minecraft:water 600`, `gtceu:${Coolant} 1`])
        .duration(duration)
        .EUt(-Production);
}
event.recipes.gtceu.fission(`gtfte:uranium_236`)
        .itemInputs([`4x gtceu:uranium_235_fuel_rod`, `4x gtceu:polonium_210_dust`])
        .itemOutputs(`4x gtceu:uranium_236_fuel_rod`, `4x gtceu:polonium_dust`)
        .perTick(true)
        .inputFluids([`minecraft:water 600`, `gtceu:liquid_helium`])
        .duration(600)
        .EUt(-8192);
})