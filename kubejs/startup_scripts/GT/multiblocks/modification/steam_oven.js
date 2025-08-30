
StartupEvents.postInit(event => {
    GTMultiMachines.STEAM_OVEN.setPatternFactory(definition =>
        FactoryBlockPattern.start()
        .aisle("AAA", "BBB", " B ")
        .aisle("AAA", "B B", " B ")
        .aisle("AAA", "BCB", " B ")
            .where("C", Predicates.controller(Predicates.blocks(GTMultiMachines.STEAM_OVEN.get())))
            .where("B", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where("A", Predicates.blocks("kubejs:wrought_iron_firebox"))
            .where(' ', Predicates.any())
        .build()
)})