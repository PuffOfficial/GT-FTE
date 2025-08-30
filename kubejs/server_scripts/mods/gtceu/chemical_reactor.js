ServerEvents.recipes(event => {
event.recipes.gtceu.chemical_reactor("gtfte:fluix_gem")
        .itemInputs("minecraft:quartz", "gtceu:charged_certus_quartz_gem")
        .inputFluids("gtceu:redstone 144")
        .itemOutputs("2x gtceu:fluix_gem")
        .duration(200)
        .EUt(500);
event.recipes.gtceu.chemical_reactor("gtfte:clay")
        .itemInputs("exdeorum:dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("minecraft:clay")
        .duration(200)
        .EUt(20);
event.recipes.gtceu.chemical_reactor("gtfte:galvanized_manasteel")
        .itemInputs("gtceu:manasteel_ingot")
        .inputFluids("gtceu:zinc 144")
        .itemOutputs("gtceu:galvanized_manasteel_ingot")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
event.recipes.gtceu.chemical_reactor("gtfte:fluix_cable")
        .itemInputs("ae2:quartz_fiber")
        .inputFluids("gtceu:fluix 144")
        .itemOutputs("2x ae2:fluix_glass_cable")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.chemical_reactor("gtfte:bloody_epoxy")
        .inputFluids(["bloodmagic:life_essence_fluid 144", "gtceu:epoxy 144"])
        .outputFluids("gtceu:blood_infused_epoxy 288")
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV]);

event.recipes.gtceu.chemical_reactor("gtfte:nether_imbued_lava")
        .itemInputs("gtceu:carbon_dust")
        .inputFluids(["gtceu:nether_air 1000", "minecraft:lava 1000"])
        .outputFluids("gtceu:nether_imbued_lava 2000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.chemical_reactor("gtfte:mana_fused_lpg")
        .itemInputs("gtceu:carbon_dust")
        .inputFluids(["gtceu:lpg 1000", "manafluid:mana 1000"])
        .outputFluids("gtceu:mana_fused_lpg 2000")
        .duration(50)
        .EUt(GTValues.VA[GTValues.HV]);

event.recipes.gtceu.chemical_reactor("gtfte:nether_imbued_wafer")
        .itemInputs("gtceu:silicon_wafer")
        .inputFluids(["gtceu:nether_air 4000", "minecraft:water 100"])
        .itemOutputs("kubejs:nether_imbued_wafer")
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV]);
})