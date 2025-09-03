GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('growth_simulator')
		.category('multiblock')
		.setMaxIOSize(2, 6, 2, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('daycycle_simulation_chamber', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('growth_simulator')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
		.appearanceBlock(() => Block.getBlock("gtceu:solid_machine_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('###', '#R#', '#R#', '#R#', '###')
			.aisle('###', 'RGR', 'RSR', 'R R', '#V#')
			.aisle('#C#', '#R#', '#R#', '#R#', '###')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('gtceu:solid_machine_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('R', Predicates.blocks('gtceu:tempered_glass'))
			.where('V', Predicates.blocks('kubejs:simple_ventilation'))
			.where('G', Predicates.blocks('minecraft:grass_block')
				.or(Predicates.blocks('minecraft:dirt')))
			.where('S', Predicates.blocks('minecraft:oak_sapling'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/machines/fermenter")
});
