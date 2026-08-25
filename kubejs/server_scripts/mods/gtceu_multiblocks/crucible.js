ServerEvents.recipes(event => {
        event.shaped(`gtceu:large_crucible`, [
                `AAA`,
                `CBC`,
                `DCD`
        ], {
                A: `exdeorum:porcelain_crucible`,
                B: `gtceu:steel_frame`,
                C: `gtceu:stainless_steel_plate`,
                D: `gtceu:gold_large_fluid_pipe`,
        });
        event.recipes.gtceu.crucible(`gtfte:lava_crucible_1`).circuit(1)
                .itemInputs(`minecraft:cobblestone`)
                .itemOutputs(`gtceu:tiny_dark_ash_dust`)
                .outputFluids(`minecraft:lava 1000`)
                .EUt(GTValues.VA[GTValues.LV])
                .duration(5);
        event.recipes.gtceu.crucible(`gtfte:lava_crucible_2`).circuit(2)
                .itemInputs(`64x minecraft:cobblestone`)
                .itemOutputs(`9x gtceu:dark_ash_dust`)
                .outputFluids(`minecraft:lava 64000`)
                .EUt(GTValues.VA[GTValues.LV])
                .duration(5*64);
});