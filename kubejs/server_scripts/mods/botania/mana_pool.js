ServerEvents.recipes(event => {
//Electric
    event.recipes.gtceu.electric_mana_pool('gtfte:manasteel_ingot')
        .itemInputs('gtceu:black_steel_ingot')
        .inputFluids('manafluid:mana 30')
        .itemOutputs('gtceu:manasteel_ingot')
        .duration(100)
        .EUt(500);
    event.recipes.gtceu.electric_mana_pool('gtfte:mana_pearl')
        .itemInputs('minecraft:ender_pearl')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('gtceu:mana_pearl_gem')
        .duration(100)
        .EUt(500);
    event.recipes.gtceu.electric_mana_pool('gtfte:mana_gem')
        .itemInputs('minecraft:diamond')
        .inputFluids('manafluid:mana 100')
        .itemOutputs('gtceu:mana_gem_gem')
        .duration(100)
        .EUt(500);
    event.recipes.gtceu.electric_mana_pool('gtfte:mana_dust')
        .itemInputs('#forge:dusts')
        .inputFluids('manafluid:mana 5')
        .itemOutputs('gtceu:mana_dust')
        .duration(100)
        .EUt(500);
//Default
    event.recipes.botania.mana_infusion("gtceu:manasteel_ingot", "gtceu:black_steel_ingot", 30)
    event.recipes.botania.mana_infusion("kubejs:mana_doped_wafer", "gtceu:phosphorus_wafer", 1000)

    event.recipes.botania.mana_infusion("gtceu:ruby_gem", "minecraft:emerald", 100)
    event.recipes.botania.mana_infusion("gtceu:raw_saltpeter", "gtceu:raw_coal", 50)
    event.recipes.botania.mana_infusion("gtceu:raw_pyrolusite", "gtceu:raw_lead", 50)
    event.recipes.botania.mana_infusion("gtceu:electrotine_dust", "gtceu:sapphire_dust", 10)
    event.recipes.botania.mana_infusion("gtceu:vanadium_dust", "gtceu:iron_dust", 100)
    event.recipes.botania.mana_infusion("gtceu:ilmenite_dust", "gtceu:lead_dust", 100, "kubejs:hv_mana_amplifier")

    event.recipes.botania.mana_infusion("gtceu:raw_lead", "gtceu:lead_dust", 250)
    event.recipes.botania.mana_infusion("gtceu:raw_stibnite", "gtceu:stibnite_dust", 250)
    event.recipes.botania.mana_infusion("gtceu:raw_nickel", "gtceu:nickel_dust", 250)
    event.recipes.botania.mana_infusion("gtceu:raw_realgar", "gtceu:realgar_dust", 250)
})