ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('gtfte:titanium_noctium')
        .itemInputs(['gtceu:titanium_dust', 'gtceu:nocturium_dust'])
        .itemOutputs('2x gtceu:titanium_noctium_dust')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.mixer('gtfte:raw_honey_rubber')
        .itemInputs(['2x gtceu:carbon_dust', '16x forestry:honey_drop'])
        .inputFluids(['gtceu:rubber 1296'])
        .outputFluids('gtceu:raw_honey_rubber 1000')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV]);
})