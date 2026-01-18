GTCEuStartupEvents.registry(`gtceu:recipe_type`, event => {
	event.create(`matter_fabrication`)
		.category(`multiblock`)
		.setMaxIOSize(2, 0, 0, 1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry(`gtceu:machine`, event => {

 	GTRecipeTypes.get("matter_fabrication").addDataInfo((data) => (
        `Required Energy: ${data.getInt("RequiredEnergy")}EU` // 
    )) // 

	event.create(`matter_fabricator`, `multiblock`)
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType(`matter_fabrication`)
		.recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
		.appearanceBlock(() => Block.getBlock(`gtceu:advanced_computer_casing`))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(`HHH`,`#A#`,`#A#`,`#A#`,`HHH`)
			.aisle(`HHH`,`GFA`,`GFA`,`GFA`,`HHH`)
			.aisle(`HHH`,`#A#`,`#C#`,`#A#`,`HHH`)
			.where(`C`, Predicates.controller(Predicates.blocks(definition.get())))
			.where(`#`, Predicates.blocks(`gtceu:computer_casing`))
			.where(`H`, Predicates.blocks(`gtceu:computer_heat_vent`))
			.where(`F`, Predicates.blocks(`gtceu:molybdenum_disilicide_coil_block`))
			.where(`A`, Predicates.blocks(`gtceu:advanced_computer_casing`).setMinGlobalLimited(4)
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
        		.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)))
			.where(`G`, Predicates.blocks(`gtceu:fusion_glass`))
            .where(` `, Predicates.any())
			.build())	
		.workableCasingModel(`gtceu:block/casings/hpca/advanced_computer_casing/bottom`, `gtceu:block/multiblock/research_station`)
});
