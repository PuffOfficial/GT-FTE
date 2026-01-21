ServerEvents.recipes(event => {
        event.shaped(`gtceu:ulv_extractor`, [
                `FBF`,
                `DAE`,
                `CBC`
        ], {
                A: global.ULV.Hull,
                B: global.ULV.Circuit,
                C: global.ULV.Cable(`single`),
                D: global.ULV.Piston,
                E: global.ULV.Pump,
                F: `#forge:glass`,
        }
        );
        event.recipes.gtceu.extractor(`gtfte:dragons_eye`)
                .itemInputs(`minecraft:ender_pearl`)
                .itemOutputs(`rootsclassic:dragons_eye`)
                .outputFluids(`gtceu:potassium 4`)
                .duration(200)
                .EUt(GTValues.VA[GTValues.ULV]);
        //-----Forestry Gregification-----//
        event.remove({ id: `forestry:squeezer/honey_dew` })
        event.remove({ id: `forestry:squeezer/honey_block` })
        event.remove({ id: `forestry:squeezer/sponge_comb` })
        event.remove({ id: `forestry:squeezer/honey_drop` })

        event.recipes.gtceu.extractor(`gtfte:gregification/honeydew`)
                .itemInputs(`forestry:honeydew`)
                .outputFluids(`forestry:honey 100`)
                .duration(500)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.extractor(`gtfte:gregification/honey_block`)
                .itemInputs(`minecraft:honey_block`)
                .outputFluids(`forestry:honey 800`)
                .duration(500)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.extractor(`gtfte:gregification/sponge_comb`)
                .itemInputs(`forestry:bee_comb_sponge`)
                .chancedOutput(`minecraft:sponge`, 200, 0)
                .outputFluids(`forestry:honey 100`)
                .duration(500)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.extractor(`gtfte:gregification/honey_drop`)
                .itemInputs(`forestry:honey_drop`)
                .chancedOutput(`forestry:propolis_normal`, 500, 0)
                .outputFluids(`forestry:honey 100`)
                .duration(500)
                .EUt(GTValues.VA[GTValues.LV]);
// MARK: Air processing
        event.recipes.gtceu.extractor(`gtfte:nether_air`)
                .itemInputs(`gtceu:netherrack_dust`)
                .chancedOutput(`gtceu:small_netherrack_dust`, 6000, 0)
                .outputFluids(`gtceu:nether_air 200`)
                .duration(60)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.extractor(`gtfte:ender_air`)
                .itemInputs(`gtceu:endstone_dust`)
                .chancedOutput(`gtceu:small_endstone_dust`, 6000, 0)
                .outputFluids(`gtceu:ender_air 200`)
                .duration(60)
                .EUt(GTValues.VA[GTValues.LV]);
// MARK: Thermal blends
        event.recipes.gtceu.extractor(`gtfte:cryotheum_extracting`)
                .itemInputs(`gtceu:cryotheum_dust`)
                .outputFluids(`gtceu:gelid_cryotheum 250`)
                .duration(100)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.extractor(`gtfte:pyrotheum_extracting`)
                .itemInputs(`gtceu:pyrotheum_dust`)
                .outputFluids(`gtceu:blazing_pyrotheum 250`)
                .duration(100)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.extractor(`gtfte:aerotheum_extracting`)
                .itemInputs(`gtceu:aerotheum_dust`)
                .outputFluids(`gtceu:zypherean_aerotheum 250`)
                .duration(100)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.extractor(`gtfte:petrotheum_extracting`)
                .itemInputs(`gtceu:petrotheum_dust`)
                .outputFluids(`gtceu:tectonic_petrotheum 250`)
                .duration(100)
                .EUt(GTValues.VA[GTValues.LV]);
})