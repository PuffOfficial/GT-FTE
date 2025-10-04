GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('aspect_collecting')
		.category('multiblock')
		.setMaxIOSize(1, 0, 0, 2)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('aspect_collector', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('aspect_collecting')
		.recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
		.appearanceBlock(() => Block.getBlock("gtceu:robust_machine_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(' ### ',' #R# ',' #R# ',' #R# ',' ### ')
			.aisle('#####','#HFH#','#HFH#','#HFH#','##R##')
			.aisle('#####','RFPFR','RFPFR','RFPFR','#R#R#')
			.aisle('#####','#HFH#','#HFH#','#HFH#','##R##')
			.aisle(' #C# ',' #R# ',' #R# ',' #R# ',' ### ')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks("gtceu:robust_machine_casing")
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('R', Predicates.blocks("gtceu:extreme_engine_intake_casing"))
			.where('F', Predicates.blocks("gtceu:filter_casing"))
			.where('H', Predicates.blocks("gtceu:polysulfide_hermetic_block"))
			.where('P', Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/solid/machine_casing_robust_tungstensteel", "gtceu:block/machines/gas_collector")
});
