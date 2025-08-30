ServerEvents.recipes(event => {
event.recipes.gtceu.alloy_blast_smelter('gtfte:radiation_resistant_alloy')
        .itemInputs('gtceu:tungsten_dust', 'gtceu:copper_dust', 'gtceu:nickel_dust')
        .outputFluids('gtceu:radiation_resistant_alloy 432')
        .duration(100)
        .EUt(2048)
        .blastFurnaceTemp(4200);
})