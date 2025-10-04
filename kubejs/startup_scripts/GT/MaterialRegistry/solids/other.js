// Priority: 999
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('ceramic').parent('dull')
    event.create('pearl').parent('ruby')
    event.create('gaia').parent('metallic')
    event.create('infinity').parent('metallic')
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("ceramic")
        .ingot()
        .color(0x9b6045).secondaryColor(0x83513c).iconSet("ceramic")
        .flags(GTMaterialFlags.GENERATE_PLATE)  
    event.create("infinity")
        .ingot()
        .iconSet("infinity")
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW, 
            GTMaterialFlags.GENERATE_RING
        )
        .element(GTElements.get("infinity"));

    event.create("artificial_amethyst")
        .gem()
        .color(0xc796f6).secondaryColor(0x7a3f7f).iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .formula("(SiO2)4Fe");

    event.create("naquadah_fused_plastic")
        .ingot()
        .color(0x30261d).secondaryColor(0x1f4925).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_PLATE)
        .formula("Nq2(C12H10O4)(ZrO2)");
})
