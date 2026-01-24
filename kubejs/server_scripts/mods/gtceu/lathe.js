ServerEvents.recipes(event => {
event.recipes.gtceu.lathe(`gtfte:skeleton_skull`)//.circuit(1)
        .itemInputs(`minecraft:bone_block`)
        .chancedOutput(`minecraft:skeleton_skull`, 1000, 0)
        .inputFluids(`minecraft:water 1000`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV]);
})