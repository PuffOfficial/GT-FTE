GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('energizing')
		.category('multiblock')
		.setMaxIOSize(1, 1, 0, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('energizer', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('energizing')
		.recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
		.appearanceBlock(() => Block.getBlock("gtceu:solid_machine_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('#R#', '#R#')
			.aisle('###', '#C#')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('gtceu:solid_machine_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('R', Predicates.blocks('kubejs:copper_coil'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/machines/electrolyzer")
});
