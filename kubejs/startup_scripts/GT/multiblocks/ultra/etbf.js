let etbfParallels = 8
GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('etbf', 'multiblock')
		.machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType(GTRecipeTypes.BLAST_RECIPES)
		.recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
		.appearanceBlock(() => Block.getBlock("kubejs:etbf_casing"))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('###', 'RRR', 'RRR', 'RRR', '###')
			.aisle('###', 'RAR', 'RAR', 'RAR', '#F#')
			.aisle('#C#', 'RRR', 'RRR', 'RRR', '###')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('kubejs:etbf_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
			.where('F', Predicates.abilities(PartAbility.MUFFLER))
            .where('R', Predicates.heatingCoils())
			.where('A', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("kubejs:block/casings/etbf/etbf_casing", "kubejs:block/multiblock/volcano")
		.additionalDisplay((controller, components) => {	
			if (controller instanceof $CoilWorkableElectricMultiblockMachine && controller.isFormed()) {
				let coilMachine = controller
					let temp = coilMachine.getCoilType().getCoilTemperature()+(100*Math.max(0, coilMachine.getTier() - GTValues.MV))

				    components.add(Component.translatable("gtfte.components.heat_capacity", Text.of(`§c${$FormattingUtil.formatNumbers(temp)}`))); //Line 2
			}
		})
});
