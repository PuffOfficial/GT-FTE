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
        .color(0xffffff).iconSet("infinity")
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
    event.create("honey_treated_wood")
        .wood()
        .color(0xe4a32b).secondaryColor(0x4d342b).iconSet(GTMaterialIconSet.WOOD)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_ROD);
    event.create("raw_honey_rubber")
        .polymer()
        .liquid()
        .color(0xb78b3a).secondaryColor(0x79665f).iconSet(GTMaterialIconSet.DULL)
        .formula("(C5H8)?C2");
    event.create("honey_rubber")
        .polymer()
        .liquid()
        .color(0xe4a32b).secondaryColor(0x79665f).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .formula("(Mg3Si4H2O12)16(C5H8)?C2");
})