GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('bedrock_crushing')
		.category('multiblock')
		.setMaxIOSize(1, 1, 1, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('bedrock_crusher', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('bedrock_crushing')
		.recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
		.appearanceBlock(() => Block.getBlock("gtceu:secure_maceration_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('BBB', 'S S', '# #', '###', '#M#', ' # ')
			.aisle('BBB', ' R ', ' R ', '###', '#G#', '# #')
			.aisle('BBB', 'S S', '# #', '###', '#C#', ' # ')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks("gtceu:secure_maceration_casing")
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('R', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
			.where('B', Predicates.blocks('minecraft:bedrock'))
			.where('G', Predicates.blocks(GCYMBlocks.CRUSHING_WHEELS.get()))
			.where('S', Predicates.blocks('gtceu:steel_frame'))
			.where('M', Predicates.abilities(PartAbility.MUFFLER))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/gcym/secure_maceration_casing", "gtceu:block/multiblock/gcym/large_maceration_tower")
});
