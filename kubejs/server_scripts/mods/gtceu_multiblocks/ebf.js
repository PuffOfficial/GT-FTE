ServerEvents.recipes(event => {
event.recipes.gtceu.electric_blast_furnace('gtfte:cupronickel_ingot')
        .itemInputs('gtceu:cupronickel_dust')
        .itemOutputs('gtceu:cupronickel_ingot')
        .duration(320)
        .EUt(32)
        .blastFurnaceTemp(430);
})