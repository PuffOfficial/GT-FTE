
ServerEvents.recipes(event => {
    // MARK: Multiblocks

    event.recipes.gtceu.assembler(`gtfte:pbf`)
        .itemInputs(`gtceu:firebricks`, `4x ftecore:andesite_alloy_frame`, `8x gtceu:wrought_iron_plate`)
        .itemOutputs(`gtceu:primitive_blast_furnace`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.ULV]);
});