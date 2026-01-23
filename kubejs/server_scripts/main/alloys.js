const Alloys = [
    [`5x gtceu:andesite_alloy_dust`, [`2x gtceu:andesite_dust`, `2x gtceu:iron_dust`, `gtceu:zinc_dust`], GTValues.VA[GTValues.ULV], 40, true, true, `andesite_alloy`, 2],
    [`2x gtceu:blue_alloy_dust`, [`2x gtceu:manasteel_dust`, `4x gtceu:electrotine_dust`, `gtceu:silver_dust`], GTValues.VA[GTValues.LV], 100, true, false, `blue_alloy`, 2],
    [`gtceu:red_alloy_dust`, [`gtceu:copper_dust`, `4x minecraft:redstone`], 0, 0, false, true, 0, 0],
    [`8x gtceu:stargate_alloy_dust`, [`2x gtceu:titanium_dust`, `gtceu:molybdenum_dust`, `12x gtceu:steel_dust`, `2x gtceu:manasteel_dust`], GTValues.VA[GTValues.EV], 200, true, false, `stargate_alloy`, 3],
    [`3x gtceu:invar_dust`, [`gtceu:nickel_dust`, `2x gtceu:iron_dust`], 0, 0, false, true, 0, 0],
    [`3x gtceu:gaia_steel_dust`, [`gtceu:plutonium_dust`, `gtceu:tungsten_steel_dust`, `gtceu:terrasteel_dust`, `botania:life_essence`], GTValues.VA[GTValues.IV], 1200, true, false, `gaia_steel_dust`, 2],

    [`2x gtceu:silicon_carbide_dust`, [`gtceu:silicon_dust`, `gtceu:carbon_dust`], GTValues.VA[GTValues.HV], 1200, true, false, `silicon_carbide`, 2],
    [`3x gtceu:chromium_molybdenum_steel_dust`, [`gtceu:chromium_dust`, `gtceu:molybdenum_dust`, `gtceu:steel_dust`], GTValues.VA[GTValues.HV], 1200, true, false, `ch_steel`, 2],

    [`gtceu:flux_fused_naquadah_dust`, [`2x fluxnetworks:flux_dust`, `gtceu:naquadah_dust`], GTValues.VA[GTValues.HV], 1200, true, false, `flux_fused_naquadah`, 1]
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