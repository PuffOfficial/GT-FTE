GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('decaying')
		.category('multiblock')
		.setMaxIOSize(2, 2, 2, 2)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('decay_chamber', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('decaying')
		.appearanceBlock(() => Block.getBlock('kubejs:radiation_resistant_casing'))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('###','###','###')
			.aisle('###','#F#','#R#')
			.aisle('###','#C#','###')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('kubejs:radiation_resistant_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(1)))
			.where('R', Predicates.blocks('kubejs:containment_coil'))
			.where('F', Predicates.blocks('gtceu:ptfe_pipe_casing'))
			.where(' ', Predicates.any())
			.build())	
		.workableCasingModel("kubejs:block/casings/radiation_resistant/radiation_resistant_casing", "gtceu:block/multiblock/vacuum_freezer")
});
