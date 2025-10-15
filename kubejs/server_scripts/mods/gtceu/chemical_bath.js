ServerEvents.recipes(event => {
        //-----Slurries-----//
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
        //-----Honey Treated Wood-----//
        event.recipes.gtceu.chemical_bath("gtfte:honey_treated_wood_pulp")
                .itemInputs("gtceu:wood_dust")
                .inputFluids("forestry:honey 100")
                .itemOutputs("gtceu:honey_treated_wood_dust")
                .duration(600)
                .EUt(GTValues.VA[GTValues.LV]);
        //-----Glowstone-----//
        event.recipes.gtceu.chemical_bath("gtfte:glowstone")
                .itemInputs("gtceu:sulfur_dust")
                .inputFluids("gtceu:redstone 144")
                .itemOutputs("2x minecraft:glowstone_dust")
                .duration(200)
                .EUt(GTValues.VA[GTValues.ULV]);
})