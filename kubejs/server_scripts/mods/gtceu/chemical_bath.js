ServerEvents.recipes(event => {
//-----Slurries-----//
        event.recipes.gtceu.chemical_bath(`gtfte:gravel_slurry`)
                .itemInputs(`32x minecraft:gravel`)
                .inputFluids(`minecraft:water 8000`)
                .outputFluids(`gtceu:gravel_slurry 8000`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_bath(`gtfte:sand_slurry`)
                .itemInputs(`32x minecraft:sand`)
                .inputFluids(`minecraft:water 8000`)
                .outputFluids(`gtceu:sand_slurry 8000`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_bath(`gtfte:dirt_slurry`)
                .itemInputs(`32x minecraft:dirt`)
                .inputFluids(`minecraft:water 8000`)
                .outputFluids(`gtceu:dirt_slurry 8000`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_bath(`gtfte:endstone_slurry`)
                .itemInputs(`32x gtceu:endstone_dust`)
                .inputFluids(`minecraft:water 8000`)
                .outputFluids(`gtceu:endstone_slurry 8000`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_bath(`gtfte:netherrack_slurry`)
                .itemInputs(`32x gtceu:netherrack_dust`)
                .inputFluids(`minecraft:water 8000`)
                .outputFluids(`gtceu:netherrack_slurry 8000`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.MV]);
//-----Glowstone-----//
        event.recipes.gtceu.chemical_bath(`gtfte:glowstone`)
                .itemInputs(`gtceu:sulfur_dust`)
                .inputFluids(`gtceu:redstone 144`)
                .itemOutputs(`2x minecraft:glowstone_dust`)
                .duration(200)
                .EUt(GTValues.VA[GTValues.ULV]);
//-----Essences-----//
        event.recipes.gtceu.chemical_bath(`gtfte:cryotheum`)
                .itemInputs(`3x gtceu:ice_dust`)
                .inputFluids(`#forge:experience 500`)
                .itemOutputs(`gtceu:cryotheum_dust`)
                .duration(200)
                .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_bath(`gtfte:pyrotheum`)
                .itemInputs(`3x minecraft:blaze_powder`)
                .inputFluids(`#forge:experience 500`)
                .itemOutputs(`gtceu:pyrotheum_dust`)
                .duration(200)
                .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_bath(`gtfte:aerotheum`)
                .itemInputs(`3x gtceu:saltpeter_dust`)
                .inputFluids(`#forge:experience 500`)
                .itemOutputs(`gtceu:aerotheum_dust`)
                .duration(200)
                .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_bath(`gtfte:petrotheum`)
                .itemInputs(`3x gtceu:obsidian_dust`)
                .inputFluids(`#forge:experience 500`)
                .itemOutputs(`gtceu:petrotheum_dust`)
                .duration(200)
                .EUt(GTValues.VA[GTValues.MV]);
})