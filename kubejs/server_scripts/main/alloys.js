const Alloys = [
    ['5x gtceu:andesite_alloy_dust', ['2x gtceu:andesite_dust', '2x gtceu:iron_dust', 'gtceu:zinc_dust'], 6, 40, true, true, "andesite_alloy", 2],
    ['2x gtceu:blue_alloy_dust', ['2x gtceu:manasteel_dust', '4x gtceu:electrotine_dust', "gtceu:silver_dust"], 12, 100, true, false, "blue_alloy", 2],
    ['gtceu:red_alloy_dust', ['gtceu:copper_dust', '4x minecraft:redstone'], 0, 0, false, true, 0, 0],
    ['8x gtceu:stargate_alloy_dust', ['2x gtceu:titanium_dust', 'gtceu:molybdenum_dust', '12x gtceu:steel_dust', '2x gtceu:manasteel_dust'], 2048, 200, true, false, "stargate_alloy", 3],
    ['3x gtceu:invar_dust', ['gtceu:nickel_dust', '2x gtceu:iron_dust'], 0, 0, false, true, 0, 0],
    ['3x gtceu:gaia_steel_dust', ['gtceu:plutonium_dust', 'gtceu:tungsten_steel_dust', 'gtceu:terrasteel_dust', 'botania:life_essence'], 8192, 1200, true, false, 'gaia_steel_dust', 2],

    ['2x gtceu:silicon_carbide_dust', ['gtceu:silicon_dust', 'gtceu:carbon_dust'], 512, 1200, true, false, 'silicon_carbide', 2],
    ['3x gtceu:chromium_molybdenum_steel_dust', ['gtceu:chromium_dust', 'gtceu:molybdenum_dust', 'gtceu:steel_dust'], 512, 1200, true, false, 'ch_steel', 2]
]


ServerEvents.recipes(event => {
    for (const [Output, Inputs, Energy, Time, HasMixer, HasCrafting, ID, Circuit] of Alloys) {
        if (HasCrafting == true) {
            event.shapeless(Output, Inputs)
        }
        if (HasMixer == true) {
            event.recipes.gtceu.mixer(`gtfte:${ID}`)
                .itemInputs(Inputs)
                .itemOutputs(Output)
                .duration(Time)
                .circuit(Circuit)
                .EUt(Energy);
        }
    }
})