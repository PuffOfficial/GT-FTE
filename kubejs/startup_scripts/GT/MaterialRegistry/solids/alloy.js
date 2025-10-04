GTCEuStartupEvents.registry("gtceu:material", event => {
//Andesite Alloy
event.create("andesite_alloy")
    .ingot()
    .color(0x6a6a6a).secondaryColor(0x4b5f4f).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
    .formula("ZnFe2(Mg3Si2H4O9)4(KNO3)")
    .components("zinc", "2x iron", "2x andesite");
//Jetboots - Obsidian Gold
event.create("obsidian_gold")
    .ingot()
    .color(0xfdf55f).secondaryColor(0x3b275c).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
    .components("1x gold", "2x obsidian");
//Radiation Resistant Alloy
event.create("radiation_resistant_alloy")
    .ingot()
    .liquid()
    .color(0x7e6f82).secondaryColor(0x355e67).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
    .formula("WNiCu")
    .components("1x tungsten","1x nickel","1x copper");
//Titanium Oxide
event.create("titanium_noctium")
    .ingot()
    .color(0x402e55).secondaryColor(0x130c1b).iconSet(GTMaterialIconSet.DULL)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
    .blastTemp(4800, 'high', 8192, 780)
    .formula("TiNc");
//Stargate Alloy
event.create("stargate_alloy")
    .blastTemp(3600, 'mid', 2048, 1300)
    .ingot()
    .color(0x8eb2ba).secondaryColor(0x355e67).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
    .components("2x titanium", "1x molybdenum", "12x steel", "2x manasteel");
//Silicon Carbide
event.create("silicon_carbide")
    .ingot()
    .color(0x5b5b5b).secondaryColor(0x3c4952).iconSet(GTMaterialIconSet.DULL)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL)
    .components("silicon", "carbon");
//Chromium Molybdenum Steel
event.create("chromium_molybdenum_steel")
    .ingot()
    .color(0xafafaf).secondaryColor(0x3c4952).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_BOLT_SCREW)
    .components("chromium", "molybdenum", "steel")
    .rotorStats(420,100,10,800);
//Europium-Naquadah Alloy
event.create("europium_naquadah_alloy")
    .ingot()
    .liquid()
    .blastTemp(7200, "high", GTValues.VA[GTValues.ZPM], 2400)
    .color(0x20FFFF).secondaryColor(0x111111).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROTOR)
    .components("europium", "naquadah");
})