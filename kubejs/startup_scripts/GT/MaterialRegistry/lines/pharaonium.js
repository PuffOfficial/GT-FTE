GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("ancient_sand")
        .ore(4, 2, false)
        .addOreByproducts("naquadah", "naquadah", "naquadah", "naquadah")
        .color(0xd1ba8a).secondaryColor(0x1d1d23).iconSet(GTMaterialIconSet.SAND)
    event.create("pharaonium")
        .ingot()
        .blastTemp(7200, 'high', GTValues.VA[GTValues.ZPM], 4000)
        .color(0xc5aa70).secondaryColor(0x1d1d23).iconSet(GTMaterialIconSet.SHINY)

    event.create("ancient_metal_solution")
        .liquid()
        .color(0xACB770).secondaryColor(0x1d1d23).iconSet(GTMaterialIconSet.SHINY)

    event.create("ancient_metal_mixture")
        .dust()
        .color(0x75683c).secondaryColor(0x1d1d23).iconSet(GTMaterialIconSet.METALLIC)
})