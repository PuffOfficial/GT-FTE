ServerEvents.recipes(event => {
event.recipes.gtceu.fermenter("gtfte:fermented_biomass")
        .itemInputs("16x minecraft:potato")
        .itemOutputs("12x gtceu:raw_starch_dust")
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV]);    
event.recipes.gtceu.macerator("gtfte:starch")
        .itemInputs("2x gtceu:raw_starch_dust")
        .itemOutputs("2x gtceu:starch_dust")
        .duration(20)
        .EUt(GTValues.VA[GTValues.ULV]); 
event.recipes.gtceu.fermenter("gtfte:propylene")
        .itemInputs("12x minecraft:sugar_cane")
        .outputFluids("gtceu:propylene 500")
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]); 
event.recipes.gtceu.chemical_reactor("gtfte:lactic_acid")
        .itemInputs(['16x minecraft:sugar','12x gtceu:starch_dust'])
        .outputFluids(['gtceu:lactic_acid 1000', 'minecraft:water 3000'])
        .itemOutputs(['3x gtceu:carbon_dust'])
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV]);
event.recipes.gtceu.chemical_reactor("gtfte:tin_dioxide")
        .itemInputs('gtceu:tin_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs('2x gtceu:tin_dioxide_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
event.recipes.gtceu.chemical_reactor("gtfte:2_ethylhexanoic_acid")
        .inputFluids(['gtceu:propylene 1000', 'gtceu:carbon_monoxide 1000', 'gtceu:hydrogen 2000'])
        .outputFluids('gtceu:2_ethylhexanoic_acid 2000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV]);
event.recipes.gtceu.chemical_reactor("gtfte:stannous_octoate")
        .itemInputs('gtceu:tin_dioxide_dust')
        .inputFluids(['gtceu:2_ethylhexanoic_acid 2000'])
        .itemOutputs('4x gtceu:stannous_octoate_dust')
        .outputFluids(['minecraft:water 1000'])
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV]);
event.recipes.gtceu.chemical_reactor("gtfte:polylactic_acid")
        .chancedInput('2x gtceu:stannous_octoate_dust', 100, 0)
        .inputFluids(['gtceu:lactic_acid 1000'])
        .outputFluids('gtceu:polylactic_acid 1296')
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV]);
})