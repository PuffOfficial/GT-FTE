GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('alchemy')
		.category('multiblock')
		.setMaxIOSize(1, 1, 3, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.BATH);
});
/*
    let tempLogic = temp => [
        GTRecipeModifiers.OC_NON_PERFECT,
        (machine, recipe) => recipe.data.getLong("temp") > temp ?
            ModifierFunction.NULL : ModifierFunction.IDENTITY
    ]
*/
GTCEuStartupEvents.registry('gtceu:machine', event => {

	GTRecipeTypes.get("alchemy").addDataInfo((data) => (`Temperature: ${data.getInt("min_temp")}K-${data.getInt("max_temp")}K`))
	event.create('alchemical_crucible', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
		.recipeType('alchemy')
		.recipeModifier((machine, recipe) => AlchemyOverclock(machine, recipe))
		.appearanceBlock(() => Block.getBlock("kubejs:corruption_proof_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('S S','###','###','###','###')
			.aisle('   ','#H#','#P#','#P#','#R#')
			.aisle('S S','###','#C#','###','###')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks("kubejs:corruption_proof_casing")
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
			.where('P', Predicates.blocks("gtceu:ptfe_pipe_casing"))
			.where('R', Predicates.blocks("kubejs:simple_ventilation"))
			.where('S', Predicates.blocks("gtceu:steel_machine_casing"))
			.where('H', Predicates.heatingCoils())
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("kubejs:block/casings/corruption_proof/corruption_proof_casing", "kubejs:block/multiblock/alchemical_construction")
		.additionalDisplay((controller, components) => {	
			if (controller instanceof $CoilWorkableElectricMultiblockMachine && controller.isFormed()) {
				let coilMachine = controller
					let temp = coilMachine.getCoilType().getCoilTemperature()+(75*Math.max(0, coilMachine.getTier() - GTValues.MV))
				components.add(Component.translatable("gtfte.components.heat_capacity", 
						Text.of(`§c${$FormattingUtil.formatNumbers(temp)}`)
				));
			}
		})
});
