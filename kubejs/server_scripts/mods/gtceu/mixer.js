ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer(`gtfte:titanium_noctium`)
        .itemInputs([`gtceu:titanium_dust`, `gtceu:nocturium_dust`])
        .itemOutputs(`2x gtceu:titanium_noctium_dust`)
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.mixer(`gtfte:apatite_fertilizer`)
        .itemInputs([`gtceu:apatite_dust`, `4x minecraft:sand`])
        .inputFluids(`gtceu:nitrogen 1000`)
        .itemOutputs(`12x forestry:fertilizer_compound`)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV]);
})