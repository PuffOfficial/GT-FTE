GTCEuStartupEvents.registry("gtceu:material", event => {
event.create("charged_certus_quartz")
    .gem()
    .color(0xadddfc).secondaryColor(0x507391).iconSet("certus")
    .flags()
    .formula("(SiO2)*");
event.create("fluix")
    .gem()
    .fluid()
    .color(0x826bde).secondaryColor(0x9e3ea5).iconSet("certus")
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS)
    .formula("Si(FeS2)5(CrAl2O3)Hg3(SiO2)2");
})