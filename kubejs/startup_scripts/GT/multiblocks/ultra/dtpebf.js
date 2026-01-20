GTCEuStartupEvents.registry(`gtceu:recipe_type`, event => {
	event.create(`dtpebf`)
		.category(`multiblock`)
		.setMaxIOSize(3, 1, 0, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE);
});

GTCEuStartupEvents.registry(`gtceu:machine`, event => {
	event.create(`dtpebf`, `multiblock`)
		.machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeTypes([`pebf`, `dtpebf`])
		.recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
		.appearanceBlock(() => Block.getBlock(`kubejs:etbf_casing`))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(`AAAAA`, `A   A`, `A   A`, `A   A`, `AAAAA`)
			.aisle(`AAAAA`, ` ### `, ` RRR `, ` ### `, `A   A`)
			.aisle(`AAAAA`, ` ### `, ` R R `, ` #F# `, `A   A`)
            .aisle(`AAAAA`, ` #C# `, ` RRR `, ` ### `, `A   A`)
            .aisle(`AAAAA`, `A   A`, `A   A`, `A   A`, `AAAAA`)
			.where(`C`, Predicates.controller(Predicates.blocks(definition.get())))
			.where(`#`, Predicates.blocks(`gtceu:firebricks`)
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
			.where(`F`, Predicates.abilities(PartAbility.MUFFLER))
            .where(`R`, Predicates.heatingCoils())
			.where(`A`, Predicates.blocks(`gtceu:solid_machine_casing`))
			.where(` `, Predicates.any())
			.build())
		.workableCasingModel(`gtceu:block/casings/solid/machine_primitive_bricks`, `gtceu:block/multiblock/primitive_blast_furnace`)
		.additionalDisplay((controller, components) => {	
			if (controller instanceof $CoilWorkableElectricMultiblockMachine && controller.isFormed()) {
				let coilMachine = controller
					let temp = coilMachine.getCoilType().getCoilTemperature()+(100*Math.max(0, coilMachine.getTier() - GTValues.MV))

				    components.add(Component.translatable(`gtfte.components.heat_capacity`, Text.of(`§c${$FormattingUtil.formatNumbers(temp)}`))); //Line 2
			}
		})
});
