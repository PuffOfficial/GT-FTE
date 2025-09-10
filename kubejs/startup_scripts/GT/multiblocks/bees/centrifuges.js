GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('comb_centrifuge')
		.category('multiblock')
		.setMaxIOSize(1, 3, 1, 1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.CENTRIFUGE);
});
//MARK:Comb Centrifuge
GTCEuStartupEvents.registry('gtceu:machine', event => {

	GTRecipeTypes.get("comb_centrifuge").addDataInfo((data) => (`${Component.translatable("gtfte.components.comb_centrifuge_type").getString()}`+`${Component.translatable(`gtfte.components.comb_centrifuge_type_${data.getInt("centrifuge_type")}`).getString()}`));

	event.create('comb_centrifuge', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('comb_centrifuge')
		.recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, (machine, recipe) => CombCentrifugeLogic(machine, recipe, 1)])
		.appearanceBlock(() => Block.getBlock("kubejs:wood_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('S###S', '#####', ' ### ')
			.aisle('#####', '# R #', '#####')
			.aisle('#####', '#RPR#', '##C##')
			.aisle('#####', '# R #', '#####')
			.aisle('S###S', '#####', ' ### ')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks("kubejs:wood_casing")
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))
			.where('P', Predicates.blocks("gtceu:steel_pipe_casing"))
			.where('R', Predicates.blocks("kubejs:simple_ventilation"))
			.where('S', Predicates.blocks("gtceu:treated_wood_frame"))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("kubejs:block/casings/wood/wood_casing", "gtceu:block/machines/centrifuge")
		.additionalDisplay((controller, components) => {	
			if (controller.isFormed()) {
				components.add(Component.translatable("gtfte.components.comb_centrifuge_type", Text.of(Component.translatable(`gtfte.components.comb_centrifuge_type_1`)).getString()));
			}
		})
});
//MARK: Heated Centrifuge
GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('heated_comb_centrifuge', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('comb_centrifuge')
		.recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, (machine, recipe) => CombCentrifugeLogic(machine, recipe, 2)])
		.appearanceBlock(() => Block.getBlock("gtceu:solid_machine_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('S###S', '#####', ' ### ')
			.aisle('##A##', '# R #', '#####')
			.aisle('#AAA#', '#RPR#', '#####')
			.aisle('##A##', '# R #', '#####')
			.aisle('S###S', '##C##', ' ### ')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks("gtceu:solid_machine_casing")
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))
			.where('P', Predicates.blocks("gtceu:steel_pipe_casing"))
			.where('R', Predicates.blocks("kubejs:simple_ventilation"))
			.where('A', Predicates.blocks("gtceu:cupronickel_coil_block"))
			.where('S', Predicates.blocks("gtceu:steel_frame"))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/machines/thermal_centrifuge")
		.additionalDisplay((controller, components) => {	
			if (controller.isFormed()) {
				components.add(Component.translatable("gtfte.components.comb_centrifuge_type", Text.of(Component.translatable(`gtfte.components.comb_centrifuge_type_2`)).getString()));
			}
		})
});
