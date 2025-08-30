GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('pebf')
		.category('multiblock')
		.setMaxIOSize(3, 1, 0, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('primitive_electric_blast_furnace', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('pebf')
		.recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
		.appearanceBlock(() => Block.getBlock('kubejs:firebricks'))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('RRR', '###', '###', '###', 'FFF')
			.aisle('RFR', '# #', '# #', '# #', 'F F')
			.aisle('RRR', '#C#', '###', '###', 'FFF')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('gtceu:firebricks')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.get("primitive_maintenance")).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('F', Predicates.blocks('kubejs:solid_wrought_iron_casing'))
			.where('R', Predicates.blocks('kubejs:wrought_iron_firebox'))
			.where(' ', Predicates.any())
			.build())	
		.workableCasingModel("gtceu:block/casings/solid/machine_primitive_bricks", "gtceu:block/multiblock/primitive_blast_furnace")
});
