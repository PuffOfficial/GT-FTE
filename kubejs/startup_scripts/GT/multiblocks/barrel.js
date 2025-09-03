GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('barrel')
        .category('multiblock')
        .setMaxIOSize(1, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('large_barrel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('barrel')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .appearanceBlock(() => Block.getBlock("gtceu:treated_wood_planks"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('RRR', 'F#F', 'F#F', 'F#F')
            .aisle('RRR', '# #', '# #', '# #')
            .aisle('RRR', 'FCF', 'F#F', 'F#F')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.blocks('gtceu:treated_wood_planks')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('R', Predicates.blocks('gtceu:pump_deck'))
            .where('F', Predicates.blocks('gtceu:treated_wood_frame'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel("gtceu:block/treated_wood_planks", "gtceu:block/machines/brewery")
});
