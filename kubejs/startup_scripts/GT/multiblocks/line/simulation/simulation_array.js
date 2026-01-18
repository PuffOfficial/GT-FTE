GTCEuStartupEvents.registry(`gtceu:recipe_type`, event => {
	event.create(`simulation`)
		.category(`multiblock`)
		.setMaxIOSize(2, 2, 1, 1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry(`gtceu:machine`, event => {

	event.create(`simulation_array`, `multiblock`)
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType(`simulation`)
		.appearanceBlock(() => Block.getBlock(`gtceu:computer_casing`))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(`#####`,`#####`,`T   T`,`T   T`,`T   T`,`#####`,`#####`)
			.aisle(`#FFF#`,`#AAA#`,` FFF `,` GGG `,` FFF `,`#AAA#`,`#FFF#`)
			.aisle(`#FGF#`,`#ARA#`,` FRF `,` GRG `,` FRF `,`#ARA#`,`#FGF#`)
			.aisle(`#FFF#`,`#AAA#`,` FFF `,` GGG `,` FFF `,`#AAA#`,`#FFF#`)
			.aisle(`##C##`,`#####`,`T   T`,`T   T`,`T   T`,`#####`,`#####`)
			.where(`C`, Predicates.controller(Predicates.blocks(definition.get())))
			.where(`#`, Predicates.blocks(`gtceu:computer_casing`).setMinGlobalLimited(50)
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.OPTICAL_DATA_RECEPTION).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setMaxGlobalLimited(1).setPreviewCount(1)))
			.where(`R`, Predicates.blocks(`gtceu:molybdenum_disilicide_coil_block`))
			.where(`F`, Predicates.blocks(`gtceu:high_power_casing`))
			.where(`A`, Predicates.blocks(`gtceu:advanced_computer_casing`))
			.where(`G`, Predicates.blocks(`gtceu:fusion_glass`))
			.where(`T`, Predicates.blocks(`gtceu:polytetrafluoroethylene_frame`))
			.where(` `, Predicates.any())
			.build())	
		.workableCasingModel(`gtceu:block/casings/hpca/computer_casing/bottom`, `gtceu:block/multiblock/data_bank`)
});
