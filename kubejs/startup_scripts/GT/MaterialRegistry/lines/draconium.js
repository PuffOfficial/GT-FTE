GTCEuStartupEvents.registry(`gtceu:material`, event => {
    event.create(`draconium`)
        .ingot()
        .liquid()
        .color(0x8f4ec4).secondaryColor(0x201741).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE)
        .element(GTElements.get(`draconium`));
    event.create(`awakened_draconium`)
        .ingot()
        .liquid()
        .color(0xff5517).secondaryColor(0x411817).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE)
        .element(GTElements.get(`awakened_draconium`));
    event.create(`chaotic_draconium`)
        .ingot()
        .liquid()
        .color(0x4d1313).secondaryColor(0x180404).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE)
        .element(GTElements.get(`chaotic_draconium`));
})