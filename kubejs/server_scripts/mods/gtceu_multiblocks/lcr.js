ServerEvents.recipes(event => {
        event.recipes.gtceu.large_chemical_reactor('gtfte:fiber_reinforced_circuit_board')
                .itemInputs(['gtceu:reinforced_epoxy_resin_plate', '16x gtceu:gold_foil', '8x gtceu:uranium_236_foil'])
                .inputFluids('gtceu:sulfuric_acid 125')
                .itemOutputs('gtceu:fiber_reinforced_circuit_board')
                .duration(500)
                .EUt(32);
})