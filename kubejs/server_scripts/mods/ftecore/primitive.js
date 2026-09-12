let conversionList = [
    [`kubejs:solid_wrought_iron_casing`, `ftecore:solid_wrought_iron_casing`],
    [`kubejs:wrought_iron_firebox`, `ftecore:wrought_iron_firebox`],

    [`gtceu:ulv_extractor`, `ftecore:ulv_extractor`],
    [`gtceu:ulv_assembler`, `ftecore:ulv_assembler`],
    [`gtceu:ulv_compressor`, `ftecore:ulv_compressor`],
    [`gtceu:ulv_electrolyzer`, `ftecore:ulv_electrolyzer`],
    [`gtceu:ulv_forge_hammer`, `ftecore:ulv_forge_hammer`],
    [`gtceu:ulv_macerator`, `ftecore:ulv_macerator`],
    [`gtceu:ulv_polarizer`, `ftecore:ulv_polarizer`],
    [`gtceu:ulv_sifter`, `ftecore:ulv_sifter`],
    [`gtceu:ulv_wiremill`, `ftecore:ulv_wiremill`],
    [`gtceu:ulv_arc_furnace`, `ftecore:ulv_arc_furnace`],

    [`gtceu:ulv_hydrokinetic_dynamo`, `ftecore:ulv_hydrokinetic_dynamo`],

    [`gtceu:primitive_bender`, `ftecore:primitive_bender`],
    [`gtceu:primitive_electric_furnace`, `ftecore:primitive_electric_furnace`],
    [`gtceu:primitive_alloy_smelter`, `ftecore:primitive_alloy_smelter`],
]


ServerEvents.recipes(event => {
    conversionList.forEach(([item1, item2]) => {
        event.shapeless(item2, [
            item1,
        ]);
    });

    // MARK: Multiblocks

    event.recipes.gtceu.assembler(`gtfte:pbf`)
        .itemInputs(`gtceu:firebricks`, `4x gtceu:andesite_alloy_frame`, `8x gtceu:wrought_iron_plate`)
        .inputFluids(`gtceu:glue 100`)
        .itemOutputs(`gtceu:primitive_blast_furnace`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.ULV]);
});