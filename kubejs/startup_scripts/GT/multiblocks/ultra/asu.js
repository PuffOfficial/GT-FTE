GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('advanced_filtering')
		.category('multiblock')
		.setMaxIOSize(1, 6, 1, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('asu', 'multiblock')
		.machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeTypes(['advanced_filtering', GTRecipeTypes.SIFTER_RECIPES])
		.recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK, (machine, recipe) => ASUOverclock(machine, recipe)])
		.appearanceBlock(() => Block.getBlock('gtceu:vibration_safe_casing'))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('###', '#F#', '###', '###', '###', '###', '###')
			.aisle('###', 'GRG', 'GAG', 'GRG', 'GAG', 'GRG', '###')
			.aisle('###', 'GRG', 'GAG', 'GRG', 'GAG', 'GRG', '###')
            .aisle('###', 'GRG', 'GAG', 'GRG', 'GAG', 'GRG', '###')
            .aisle('###', '###', '###', '#C#', '###', '###', '###')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('gtceu:vibration_safe_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
			.where('F', Predicates.abilities(PartAbility.MUFFLER))
            .where('R', Predicates.heatingCoils())
			.where('A', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/gcym/vibration_safe_casing", "gtceu:block/multiblock/gcym/large_sifting_funnel")
            .additionalDisplay((controller, components) => {
                if (controller instanceof $CoilWorkableElectricMultiblockMachine && controller.isFormed()) {
                    components.add(Component.translatable("gtceu.multiblock.pyrolyse_oven.speed",
                            controller.getCoilTier() == 0 ? 75 : 50 * (controller.getCoilTier() + 1)));
                }
            })
});
