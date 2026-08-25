ServerEvents.recipes(event => {
        event.recipes.gtceu.large_chemical_reactor(`gtfte:fiber_reinforced_circuit_board`)
                .itemInputs([`gtceu:reinforced_epoxy_resin_plate`, `16x gtceu:gold_foil`, `8x gtceu:uranium_236_foil`])
                .inputFluids(`gtceu:sulfuric_acid 125`)
                .itemOutputs(`gtceu:fiber_reinforced_circuit_board`)
                .duration(500)
                .EUt(GTValues.VA[GTValues.LV]);
        event.recipes.gtceu.large_chemical_reactor(`gtfte:fluix_lcr`)
                .itemInputs([`minecraft:quartz`, `gtceu:charged_certus_quartz_gem`])
                .inputFluids(`gtceu:redstone 144`)
                .itemOutputs(`2x gtceu:fluix_gem`)
                .duration(100)
                .EUt(GTValues.VA[GTValues.MV]);
});