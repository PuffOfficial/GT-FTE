ServerEvents.recipes(event => {
// MARK: Resources
//FLuix
event.recipes.gtceu.chemical_reactor("gtfte:fluix_gem")
        .itemInputs("minecraft:quartz", "gtceu:charged_certus_quartz_gem")
        .inputFluids("gtceu:redstone 144")
        .itemOutputs("2x gtceu:fluix_gem")
        .duration(200)
        .EUt(500);
//       Fluix Cable
event.recipes.gtceu.chemical_reactor("gtfte:fluix_cable")
        .itemInputs("ae2:quartz_fiber")
        .inputFluids("gtceu:fluix 144")
        .itemOutputs("2x ae2:fluix_glass_cable")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
//Clay
event.recipes.gtceu.chemical_reactor("gtfte:clay")
        .itemInputs("exdeorum:dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("minecraft:clay")
        .duration(200)
        .EUt(20);
//Galvanized Manasteel
event.recipes.gtceu.chemical_reactor("gtfte:galvanized_manasteel")
        .itemInputs("gtceu:manasteel_ingot")
        .inputFluids("gtceu:zinc 144")
        .itemOutputs("gtceu:galvanized_manasteel_ingot")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
// MARK: FUEL
//N-IL
event.recipes.gtceu.chemical_reactor("gtfte:nether_imbued_lava")
        .itemInputs("gtceu:carbon_dust")
        .inputFluids(["gtceu:nether_air 1000", "minecraft:lava 1000"])
        .outputFluids("gtceu:nether_imbued_lava 2000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
//M-FLPG
event.recipes.gtceu.chemical_reactor("gtfte:mana_fused_lpg")
        .itemInputs("gtceu:carbon_dust")
        .inputFluids(["gtceu:lpg 1000", "manafluid:mana 1000"])
        .outputFluids("gtceu:mana_fused_lpg 2000")
        .duration(50)
        .EUt(GTValues.VA[GTValues.HV]);
// MARK: Wafers
//Nether Imbued Wafer
event.recipes.gtceu.chemical_reactor("gtfte:nether_imbued_wafer")
        .itemInputs("gtceu:silicon_wafer")
        .inputFluids(["gtceu:nether_air 4000", "minecraft:water 100"])
        .itemOutputs("kubejs:nether_imbued_wafer")
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV]);
//UHPIC Wafer
event.recipes.gtceu.chemical_reactor("gtfte:uhpic_wafer")
        .itemInputs(["gtceu:hpic_wafer", "8x gtceu:indium_gallium_phosphide_dust"])
        .inputFluids(["gtceu:naquadah 576"])
        .itemOutputs("gtceu:uhpic_wafer")
        .duration(1200)
        .cleanroom(CleanroomType.getByName("ionizing"))
        .EUt(GTValues.VA[GTValues.LuV]);
//Honey Rubber
event.recipes.gtceu.chemical_reactor('gtfte:honey_rubber')
        .itemInputs(['9x gtceu:raw_honey_rubber_dust','3x gtceu:sulfur_dust'])
        .outputFluids([`gtceu:honey_rubber 1296`])
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
})