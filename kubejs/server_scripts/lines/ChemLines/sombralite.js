ServerEvents.recipes(event => {
event.recipes.gtceu.large_chemical_reactor("gtfte:sombralite")
        .itemInputs("gtceu:purified_sombralite_ore")
        .inputFluids("gtceu:phosphoric_acid 2000")
        .itemOutputs("2x gtceu:plutonium_sludge_dust", "2x gtceu:sombralite_byproduct_sludge_dust", "3x gtceu:inert_metal_mixture_dust")
        .duration(2000)
        .EUt(2048);
event.recipes.gtceu.chemical_reactor("gtfte:nocturium_dioxide")
        .itemInputs("4x gtceu:sombralite_byproduct_sludge_dust")
        .inputFluids("minecraft:water 2000")
        .outputFluids(["gtceu:nocturium_dioxide 2000", "gtceu:hydrogen 4000"])
        .duration(370)
        .EUt(GTValues.VA[GTValues.IV]);
event.recipes.gtceu.centrifuge("gtfte:plutonium_sludge")
        .itemInputs("2x gtceu:plutonium_sludge_dust")
        .itemOutputs(["gtceu:plutonium_dust", "gtceu:celestite_dust"])
        .duration(200)
        .EUt(512);
event.recipes.gtceu.electrolyzer("gtfte:nocturium_dust")
        .inputFluids("gtceu:nocturium_dioxide 1000")
        .itemOutputs("gtceu:nocturium_dust")
        .outputFluids("gtceu:oxygen 2000")
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV]);
})