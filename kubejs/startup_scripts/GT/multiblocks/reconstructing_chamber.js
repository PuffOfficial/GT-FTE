GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('reconstructing')
		.category('simple')
		.setMaxIOSize(2, 1, 1, 1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('reconstruction_chamber', 'simple') 
        .tiers([GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV,GTValues.ZPM,GTValues.UV])
        .definition((tier, builder) => builder
        .langValue(GTValues.VLVH[tier] + ` Reconstruction Chamber`)
        .recipeTypes('reconstructing')
        .workableTieredHullModel(`gtceu:block/machines/reconstruction_chamber`)
    );

	event.create('large_reconstruction_chamber', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('reconstructing')
		.appearanceBlock(() => Block.getBlock("kubejs:vanadium_steel_casing"))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('###', '###', '###')
			.aisle('RRR', 'R R', 'RRR')
			.aisle('###', '###', '#C#')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('kubejs:vanadium_steel_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('R', Predicates.blocks('kubejs:copper_coil'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("kubejs:block/casings/vanadium_steel/vanadium_steel_casing", "gtceu:block/machines/reconstruction_chamber")
});
