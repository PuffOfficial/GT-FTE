GTCEuStartupEvents.registry("gtceu:material", event => {
event.create("charged_certus_quartz")
    .gem()
    .color(0xadddfc).secondaryColor(0x507391).iconSet("charged")
    .flags()
    .formula("SiO2+");
event.create("fluix")
    .gem()
    .fluid()
    .color(0x826bde).secondaryColor(0x9e3ea5).iconSet("certus")
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.DISABLE_DECOMPOSITION)
    .components("1x charged_certus_quartz", "1x redstone", "1x quartz");
})