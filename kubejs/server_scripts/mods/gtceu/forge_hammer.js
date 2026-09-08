ServerEvents.recipes(event => {
        event.recipes.gtceu.forge_hammer(`gtfte:cobblestone_to_gravel`)
                .itemInputs(`minecraft:cobblestone`)
                .itemOutputs(`minecraft:gravel`)
                .duration(10)
                .EUt(GTValues.VA[GTValues.ULV] / 2);
        event.recipes.gtceu.forge_hammer(`gtfte:gravel_to_sand`)
                .itemInputs(`minecraft:gravel`)
                .itemOutputs(`minecraft:sand`)
                .duration(10)
                .EUt(GTValues.VA[GTValues.ULV] / 2);
        event.recipes.gtceu.forge_hammer(`gtfte:sand_to_dust`)
                .itemInputs(`minecraft:sand`)
                .itemOutputs(`exdeorum:dust`)
                .duration(10)
                .EUt(GTValues.VA[GTValues.ULV] / 2);
})