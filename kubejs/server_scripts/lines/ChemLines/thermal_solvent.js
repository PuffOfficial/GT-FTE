ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer(`gtfte:activation_mixture`)
        .inputFluids(`gtceu:diluted_sulfuric_acid 1000`, `gtceu:distilled_water 1000`)
        .outputFluids(`gtceu:activation_mixture 1000`)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor(`gtfte:light_fuel_activation`)
        .inputFluids(`gtceu:activation_mixture 200`, `gtceu:light_fuel 1000`)
        .outputFluids(`gtceu:activated_light_fuel 1000`, `gtceu:chemical_waste 200`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.chemical_reactor(`gtfte:heavy_fuel_activation`)
        .inputFluids(`gtceu:activation_mixture 200`, `gtceu:heavy_fuel 1000`)
        .outputFluids(`gtceu:activated_heavy_fuel 1000`, `gtceu:chemical_waste 200`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
    // light
    event.recipes.gtceu.centrifuge(`gtfte:activated_light_fuel_processing`)
        .inputFluids(`gtceu:activated_light_fuel 1000`)
        .outputFluids(`gtceu:reactive_aliphatic_base 450`, `gtceu:chemical_waste 250`, `gtceu:light_fuel 200`)
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV]);
    // Heavy
    event.recipes.gtceu.distillation_tower(`gtfte:activated_heavy_fuel_processing`)
        .inputFluids(`gtceu:activated_heavy_fuel 1000`)
        .outputFluids(`gtceu:aromatic_base 450`, `gtceu:chemical_waste 250`, `gtceu:light_fuel 200`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_bath(`gtfte:aromatic_base_activation`)
        .inputFluids(`gtceu:aromatic_base 250`)
        .itemInputs(`2x gtceu:salt_dust`)
        .outputFluids(`gtceu:reactive_aromatic_base 500`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.chemical_reactor(`gtfte:unstable_thermal_solvent`)
        .inputFluids(`gtceu:reactive_aromatic_base 1000`, `gtceu:reactive_aliphatic_base 1000`)
        .outputFluids(`gtceu:unstable_thermal_solvent 2000`)
        .duration(20)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.vacuum_freezer(`gtfte:conditioned_thermal_solvent`)
        .inputFluids(`gtceu:unstable_thermal_solvent 1000`)
        .outputFluids(`gtceu:conditioned_thermal_solvent 1000`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.chemical_reactor(`gtfte:thermal_solvent`)
        .inputFluids(`gtceu:conditioned_thermal_solvent 1000`)
        .outputFluids(`gtceu:thermal_solvent 1000`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
})