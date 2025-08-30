GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('sluicing')
		.category('multiblock')
		.setMaxIOSize(2, 9, 1, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
		.setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('sluice', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('sluicing')
		.appearanceBlock(() => Block.getBlock("gtceu:solid_machine_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle("###", "###", "###")
			.aisle("###", "RWR", "#R#")
			.aisle("###", "RWR", "#R#")
			.aisle("###", "RWR", "#R#")
			.aisle("###", "RWR", "#R#")
			.aisle("###", "#C#", "###")
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('gtceu:solid_machine_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('R', Predicates.blocks('gtceu:tempered_glass'))
			.where('W', Predicates.blocks('minecraft:water'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/machines/sifter")
});
