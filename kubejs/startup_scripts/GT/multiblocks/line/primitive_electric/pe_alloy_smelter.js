GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('primitive_alloy_smelter', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType(GTRecipeTypes.ALLOY_SMELTER_RECIPES)
		.recipeModifiers([(machine, recipe) => ULVParallel(machine,recipe,4)])
		.appearanceBlock(() => Block.getBlock('kubejs:solid_wrought_iron_casing'))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('RRR', '###', '###', ' # ')
			.aisle('RRR', '# #', '# #', '###')
			.aisle('RRR', '#C#', '###', ' # ')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('#', Predicates.blocks('kubejs:solid_wrought_iron_casing')
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
				.or(Predicates.blocks('gtceu:ulv_primitive_maintenance_hatch').setExactLimit(1).setPreviewCount(1))
				.or(Predicates.blocks(PartAbility.INPUT_ENERGY.getBlocks([GTValues.ULV]).toArray()).setMaxGlobalLimited(2).setPreviewCount(1)))
            .where('R', Predicates.blocks('kubejs:wrought_iron_firebox'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("kubejs:block/casings/solid_wrought_iron/solid_wrought_iron_casing", "gtceu:block/machines/alloy_smelter")
		.additionalDisplay((controller, components) => {	
			if (controller instanceof $WorkableMultiblockMachine && controller.isFormed()) {
				components.add(Component.translatable("gtfte.components.parallels", Text.of(`§54`)));
			}
		})
});
