ServerEvents.recipes(event => {
event.recipes.gtceu.arc_furnace("gtfte:soot")
        .itemInputs('minecraft:coal')
        .chancedOutput('gtceu:soot_dust', 150, 0)
        .duration(600)
        .EUt(128);
event.recipes.gtceu.chemical_reactor("gtfte:ethylene_chlorohydrin")
        .inputFluids(["gtceu:ethylene 1000", "gtceu:hypochlorous_acid 1000"])
        .outputFluids(["gtceu:ethylene_chlorohydrin 1000"])
        .duration(600)
        .EUt(2048);
event.recipes.gtceu.chemical_reactor("gtfte:dichlorodiethylformal")
        .inputFluids(["gtceu:ethylene_chlorohydrin 2000", "gtceu:formaldehyde 1000", "gtceu:hydrochloric_acid 1000"])
        .outputFluids(["gtceu:dichlorodiethylformal 1000", "gtceu:diluted_hydrochloric_acid 1000"])
        .duration(600)
        .EUt(2048);
event.recipes.gtceu.chemical_reactor("gtfte:sodium_disulfide")
        .itemInputs(["2x gtceu:sodium_dust", "2x gtceu:sulfur_dust"])
        .itemOutputs("gtceu:sodium_disulfide_dust")
        .duration(100)
        .EUt(32);
event.recipes.gtceu.chemical_reactor("gtfte:polysulfide_rubber")
        .itemInputs(["2x gtceu:sodium_sulfide_dust", "gtceu:sodium_disulfide_dust"])
        .inputFluids("gtceu:dichlorodiethylformal 1000")
        .outputFluids("gtceu:polysulfide_rubber 1000")
        .itemOutputs(["2x gtceu:salt_dust", "gtceu:sodium_dust"])
        .duration(100)
        .EUt(128);
event.recipes.gtceu.mixer("gtfte:polysulfide_hermetic")
        .itemInputs(["2x gtceu:calcite_dust", "gtceu:talc_dust", "gtceu:soot_dust"])
        .inputFluids("gtceu:polysulfide_rubber 1000")
        .outputFluids("gtceu:polysulfide_hermetic 1296")
        .duration(100)
        .EUt(2048);
})