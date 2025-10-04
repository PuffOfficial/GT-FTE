ServerEvents.recipes(event => {
event.recipes.gtceu.chemical_reactor("gtfte:vanadium_pentoxide")
        .itemInputs("2x gtceu:vanadium_dust")
        .inputFluids("gtceu:oxygen 5000")
        .itemOutputs("7x gtceu:vanadium_pentoxide_dust")
        .duration(300)
        .EUt(2048);
event.recipes.gtceu.chemical_reactor("gtfte:molybdenum_trioxide")
        .itemInputs("gtceu:molybdenum_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("4x gtceu:molybdenum_trioxide_dust")
        .duration(300)
        .EUt(512);

event.recipes.gtceu.chemical_reactor("gtfte:maleic_anhydride")
        .notConsumable("gtceu:vanadium_pentoxide_dust")
        .notConsumable("gtceu:molybdenum_trioxide_dust")
        .inputFluids(["gtceu:benzene 1000", "gtceu:air 3500"])
        .outputFluids(["minecraft:water 4000", "gtceu:maleic_anhydride 1000"])
        .duration(300)
        .EUt(2048);

event.recipes.gtceu.chemical_reactor("gtfte:ethanol_plus_maleic_anhydride")
        .notConsumable("gtceu:sapphire_dust")
        .inputFluids(["gtceu:ethanol 1000", "gtceu:maleic_anhydride 1000"])
        .outputFluids(["gtceu:acetaldehyde 1000", "gtceu:diethyl_succinate 500"])
        .duration(600)
        .EUt(2048);

event.recipes.gtceu.large_chemical_reactor("gtfte:butadiene_from_acetaldehyde")
        .notConsumable("10x gtceu:sapphire_dust")
        .notConsumable("5x gtceu:zincite_dust")
        .inputFluids(["gtceu:acetaldehyde 2000"])
        .outputFluids(["gtceu:butadiene 1000", "minecraft:water 2000", "gtceu:carbon_dioxide 1000"])
        .duration(600)
        .EUt(2048);
})