GTCEuStartupEvents.registry(`gtceu:material`, event => {
    event.create(`fluorite`)
        .gem()
        .ore()
        .color(0x65a581).iconSet(GTMaterialIconSet.RUBY)
        .components(`1x calcium`, `2x fluorine`);
})
