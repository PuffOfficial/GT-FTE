GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("sombralite_byproduct_sludge")
        .dust()
        .liquid()
        .color(0x006a63).secondaryColor(0x1d1d23).iconSet(GTMaterialIconSet.DULL)
    event.create("nocturium_dioxide")
        .liquid()
        .color(0x73ccc6).secondaryColor(0x1d1d23).iconSet(GTMaterialIconSet.DULL)
        .formula("NcO2")
    event.create("plutonium_sludge")
        .dust()
        .liquid()
        .color(0x6a0e00).secondaryColor(0x0c1d14).iconSet(GTMaterialIconSet.DULL)

    event.create("nocturium")
        .ingot()
        .liquid()
        .blastTemp(4500, 'high', GTValues.VA[GTValues.IV], 2000)
        .color(0x00f7e5).secondaryColor(0x171717).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .element(GTElements.get("nocturium"));

})