
const Fuels = [
        [1200, `celestite`, `liquid_helium`, `plutonium_241`, 32768, `celestite`],
        [700, `plutonium_241`, `liquid_helium`, `plutonium`, 32768, `plutonium_241`],
        [200, `uranium`, `liquid_helium`, `plutonium`, 8192, `uranium`],
        [1200, `naquadria`, `liquid_helium`, `naquadria_waste`, 131072, `naquadria`],
        [4800, `naquadria`, `gelid_cryotheum`, `naquadria_waste`, 131072, `naquadria_super_cooled`]
]

ServerEvents.recipes(event => {
        event.shaped(`gtceu:primitive_electric_blast_furnace`, [
                `DDD`,
                `BAB`,
                `CBC`
        ], {
                A: `gtceu:firebricks`,
                B: global.ULV.Circuit,
                C: global.ULV.Cable(`single`),
                D: `minecraft:furnace`,
        }
        )
        for (const [duration, Fuel, Coolant, Waste, Production, id] of Fuels) {
                event.recipes.gtceu.fission(`gtfte:${id}`)
                        .itemInputs([`gtceu:${Fuel}_fuel_rod`, `gtceu:${Fuel}_fuel_rod`, `gtceu:${Fuel}_fuel_rod`, `gtceu:${Fuel}_fuel_rod`])
                        .itemOutputs(`4x gtceu:empty_fuel_rod`)
                        .outputFluids(`gtceu:${Waste} 1152`)
                        .perTick(true)
                        .inputFluids([`minecraft:water 600`, `gtceu:${Coolant} 1`])
                        .duration(duration)
                        .EUt(-Production);
        }
        event.recipes.gtceu.fission(`gtfte:uranium_236`)
                .itemInputs([`gtceu:uranium_235_fuel_rod`, `gtceu:uranium_235_fuel_rod`, `gtceu:uranium_235_fuel_rod`, `gtceu:uranium_235_fuel_rod`, `4x gtceu:polonium_210_dust`])
                .itemOutputs(`4x gtceu:uranium_236_fuel_rod`, `4x gtceu:polonium_dust`)
                .perTick(true)
                .inputFluids([`minecraft:water 600`, `gtceu:liquid_helium`])
                .duration(600)
                .EUt(-8192);
})

// Tectonic Petrotheum
// Gelid Creotheum
// Zephyrean Aerotheum
// Blazing Pyrotheum