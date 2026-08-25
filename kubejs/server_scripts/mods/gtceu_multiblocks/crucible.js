ServerEvents.recipes(event => {
        event.shaped(`gtceu:large_crucible`, [
                `AAA`,
                `CBC`,
                `DCD`
        ], {
                A: `#exdeorum:wooden_barrels`,
                B: `gtceu:treated_wood_frame`,
                C: `gtceu:treated_wood_plate`,
                D: `gtceu:treated_wood_large_fluid_pipe`,
        });
        event.recipes.gtceu.barrel(`gtfte:clay`)
                .itemInputs(`exdeorum:dust`)
                .inputFluids(`minecraft:water 1000`)
                .itemOutputs(`minecraft:clay`)
                .duration(10);
});