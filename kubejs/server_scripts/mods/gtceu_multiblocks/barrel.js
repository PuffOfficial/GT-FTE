ServerEvents.recipes(event => {
        event.shaped(`gtceu:large_barrel`, [
                `AAA`,
                `CBC`,
                `DCD`
        ], {
                A: `#exdeorum:wooden_barrels`,
                B: `gtceu:treated_wood_frame`,
                C: `gtceu:treated_wood_plate`,
                D: `gtceu:treated_wood_large_fluid_pipe`,
        }
        )
        event.recipes.gtceu.barrel(`gtfte:clay`)
                .itemInputs(`exdeorum:dust`)
                .inputFluids(`minecraft:water 1000`)
                .itemOutputs(`minecraft:clay`)
                .duration(10);

        event.recipes.gtceu.barrel(`gtfte:witch_water`)
                .notConsumable(`exdeorum:mycelium_spores`)
                .inputFluids(`minecraft:water 16000`)
                .outputFluids(`exdeorum:witch_water 16000`)
                .duration(100);
        event.recipes.gtceu.barrel(`gtfte:soul_sand`)
                .itemInputs(`minecraft:sand`)
                .inputFluids(`exdeorum:witch_water 1000`)
                .itemOutputs(`minecraft:soul_sand`)
                .duration(10);
        event.recipes.gtceu.barrel(`gtfte:wither_rose`)
                .itemInputs(`minecraft:poppy`)
                .inputFluids(`exdeorum:witch_water 1000`)
                .itemOutputs(`minecraft:wither_rose`)
                .duration(1200);

        event.recipes.gtceu.barrel(`gtfte:slime`)
                .itemInputs(`minecraft:milk_bucket`)
                .inputFluids([`minecraft:water 8000`])
                .itemOutputs([`16x minecraft:slime_block`, `minecraft:bucket`])
                .duration(100);
        // MARK: Stoneworks
        event.recipes.gtceu.barrel(`gtfte:netherrack`)
                .itemInputs(`16x minecraft:cobblestone`)
                .inputFluids([`gtceu:nether_air 1000`])
                .itemOutputs(`16x minecraft:netherrack`)
                .duration(100);
        event.recipes.gtceu.barrel(`gtfte:end_stone`)
                .itemInputs(`8x minecraft:glowstone_dust`)
                .inputFluids([`gtceu:ender_air 1000`])
                .itemOutputs(`16x minecraft:end_stone`)
                .duration(100);
})