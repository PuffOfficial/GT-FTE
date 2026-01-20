// Priority: 999
GTCEuStartupEvents.registry(`gtceu:material_icon_set`, event => {
    event.create(`ceramic`).parent(`dull`)
    event.create(`pearl`).parent(`ruby`)
    event.create(`gaia`).parent(`metallic`)
    event.create(`infinity`).parent(`metallic`)
    event.create(`charged`).parent(`dull`)
    event.create(`primal`).parent(`ruby`)

    event.create(`unobtanium`).parent(`metallic`)
})

GTCEuStartupEvents.registry(`gtceu:material`, event => {
    event.create(`ceramic`)
        .ingot()
        .color(0x9b6045).secondaryColor(0x83513c).iconSet(`ceramic`)
        .flags(GTMaterialFlags.GENERATE_PLATE)
    event.create(`infinity`)
        .ingot()
        .iconSet(`infinity`)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_RING
        )
        .element(GTElements.get(`infinity`));

    event.create(`artificial_amethyst`)
        .gem()
        .color(0xc796f6).secondaryColor(0x7a3f7f).iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .formula(`(SiO2)4Fe`);

    event.create(`hafnium_carbonitride`)
        .ingot()
        .color(0x30261d).secondaryColor(0x1f4925).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_PLATE)
        .formula(`HyCN`);

    event.create(`scrap`)
        .gem()
        .flags(GTMaterialFlags.NO_UNIFICATION)
        .color(0x482c23).secondaryColor(0x152710).iconSet(GTMaterialIconSet.LIGNITE);

    event.create(`pyrotheum`)
        .dust()
        .flags(GTMaterialFlags.NO_UNIFICATION)
        .color(0xfed14b).secondaryColor(0xfe874b).iconSet(`primal`);
    event.create(`cryotheum`)
        .dust()
        .flags(GTMaterialFlags.NO_UNIFICATION)
        .color(0xb6e7ff).secondaryColor(0x59b4e2).iconSet(`primal`);
    event.create(`aerotheum`)
        .dust()
        .flags(GTMaterialFlags.NO_UNIFICATION)
        .color(0xffed89).secondaryColor(0xe1dca0).iconSet(`primal`);
    event.create(`petrotheum`)
        .dust()
        .flags(GTMaterialFlags.NO_UNIFICATION)
        .color(0x362e2c).secondaryColor(0x333333).iconSet(`primal`);

    event.create('unbreakium')
        .ingot()
        .color(0x744a92).secondaryColor(0x000000).iconSet(GTMaterialIconSet.DULL)
        .toolStats(
            ToolProperty.Builder.of(1.8, 1.7, 65000, 3,
                [
                    GTToolType.WRENCH,
                    GTToolType.WIRE_CUTTER,
                    GTToolType.SCREWDRIVER,
                    GTToolType.CROWBAR
                ]
            )
            .unbreakable()
            .build()
        ) 
})
