GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("fluorite")
        .gem()
        .ore()
        .color(0x65a581).iconSet(GTMaterialIconSet.RUBY)
        .components('1x calcium', '2x fluorine');

    event.create("sombralite")
        .ore()
        .addOreByproducts(GTMaterials.get('celestite'))
        .color(0x0A0A0A).secondaryColor(0x2E3A87).iconSet(GTMaterialIconSet.METALLIC)
        .formula('?');
})
