ServerEvents.recipes(event => {
event.recipes.gtceu.chemical_bath("gtfte:gravel_slurry")
        .itemInputs("32x minecraft:gravel")
        .inputFluids("minecraft:water 8000")
        .outputFluids("gtceu:gravel_slurry 8000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.chemical_bath("gtfte:sand_slurry")
        .itemInputs("32x minecraft:sand")
        .inputFluids("minecraft:water 8000")
        .outputFluids("gtceu:sand_slurry 8000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.chemical_bath("gtfte:dirt_slurry")
        .itemInputs("32x minecraft:dirt")
        .inputFluids("minecraft:water 8000")
        .outputFluids("gtceu:dirt_slurry 8000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.chemical_bath("gtfte:endstone_slurry")
        .itemInputs("32x gtceu:endstone_dust")
        .inputFluids("minecraft:water 8000")
        .outputFluids("gtceu:endstone_slurry 8000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.chemical_bath("gtfte:netherrack_slurry")
        .itemInputs("32x gtceu:netherrack_dust")
        .inputFluids("minecraft:water 8000")
        .outputFluids("gtceu:netherrack_slurry 8000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
})