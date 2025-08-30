ServerEvents.recipes(event => {
//hv
event.shaped('gtceu:hv_electric_mana_garden', [
    'FEF', 
    'BAB',
    'CGC'  
  ], {
    A: global.HV.Hull,
    B: global.EV.Circuit,
    C: global.HV.Cable("single"),
    E: "gtceu:tempered_glass",
    F: "gtceu:item_filter",
    G: "minecraft:grass_block",
  }
);
//ev
event.shaped('gtceu:ev_electric_mana_garden', [
    'FEF', 
    'BAB',
    'CGC'  
  ], {
    A: global.EV.Hull,
    B: global.IV.Circuit,
    C: global.EV.Cable("single"),
    E: "gtceu:tempered_glass",
    F: "gtceu:item_filter",
    G: "minecraft:grass_block",
  }
);
//IV
event.shaped('gtceu:iv_electric_mana_garden', [
    'FEF', 
    'BAB',
    'CGC'  
  ], {
    A: global.IV.Hull,
    B: global.LuV.Circuit,
    C: global.IV.Cable("single"),
    E: "gtceu:tempered_glass",
    F: "gtceu:item_filter",
    G: "minecraft:grass_block",
  }
);
//LuV
event.shaped('gtceu:luv_electric_mana_garden', [
    'FEF', 
    'BAB',
    'CGC'  
  ], {
    A: global.LuV.Hull,
    B: global.ZPM.Circuit,
    C: global.LuV.Cable("single"),
    E: "gtceu:tempered_glass",
    F: "gtceu:item_filter",
    G: "minecraft:grass_block",
  }
);
//ZPM
event.shaped('gtceu:zpm_electric_mana_garden', [
    'FEF', 
    'BAB',
    'CGC'  
  ], {
    A: global.ZPM.Hull,
    B: global.UV.Circuit,
    C: global.ZPM.Cable("single"),
    E: "gtceu:tempered_glass",
    F: "gtceu:item_filter",
    G: "minecraft:grass_block",
  }
);
//EndoFlame
    event.recipes.gtceu.mana_garden('gtfte:endoflame_1')
        .notConsumable('botania:endoflame')
        .itemInputs('#minecraft:coals')
        .duration(100)
        .outputFluids("manafluid:mana 200")
        .EUt(512);
    event.recipes.gtceu.mana_garden('gtfte:endoflame_2')
        .notConsumable('botania:endoflame')
        .inputFluids('minecraft:lava 1000')
        .duration(1000)
        .outputFluids("manafluid:mana 2000")
        .EUt(512);
    event.recipes.gtceu.mana_garden('gtfte:endoflame_3')
        .notConsumable('botania:endoflame')
        .itemInputs('minecraft:blaze_powder')
        .duration(200)
        .outputFluids("manafluid:mana 400")
        .EUt(512);
//Rose Arcana
    event.recipes.gtceu.mana_garden('gtfte:rose_arcana')
        .notConsumable('botania:rosa_arcana')
        .inputFluids('enderio:xp_juice 500')
        .duration(100)
        .outputFluids("manafluid:mana 500")
        .EUt(512);
//Entropinnyum
    event.recipes.gtceu.mana_garden('gtfte:entropinnyum_1')
        .notConsumable('botania:entropinnyum')
        .itemInputs('2x minecraft:tnt')
        .duration(200)
        .outputFluids("manafluid:mana 1000")
        .EUt(512);
    event.recipes.gtceu.mana_garden('gtfte:entropinnyum_2')
        .notConsumable('botania:entropinnyum')
        .itemInputs('2x gtceu:industrial_tnt')
        .duration(1000)
        .outputFluids("manafluid:mana 5000")
        .EUt(512);
//Munchdew
    event.recipes.gtceu.mana_garden('gtfte:munchdew')
        .notConsumable('botania:munchdew')
        .itemInputs('#minecraft:leaves')
        .duration(10)
        .outputFluids("manafluid:mana 500")
        .EUt(512);
//Munchdew
    event.recipes.gtceu.mana_garden('gtfte:kekimurus')
        .notConsumable('botania:kekimurus')
        .itemInputs('minecraft:cake')
        .duration(300)
        .outputFluids("manafluid:mana 3000")
        .EUt(512);
//Munchdew
    event.recipes.gtceu.mana_garden('gtfte:narslimus')
        .notConsumable('botania:narslimmus')
        .itemInputs('minecraft:slime_ball')
        .duration(50)
        .outputFluids("manafluid:mana 500")
        .EUt(512);
//hydroangeas
    event.recipes.gtceu.mana_garden('gtfte:hydroangeas')
        .notConsumable('botania:hydroangeas')
        .inputFluids("minecraft:water 10000")
        .duration(25)
        .outputFluids("manafluid:mana 50")
        .EUt(512);
//thermalily
    event.recipes.gtceu.mana_garden('gtfte:thermalily')
        .notConsumable('botania:thermalily')
        .inputFluids("minecraft:lava 1000")
        .duration(150)
        .outputFluids("manafluid:mana 450")
        .EUt(512);
//dandelifeon
    event.recipes.gtceu.mana_garden('gtfte:dandelifeon')
        .notConsumable('botania:dandelifeon')
        .itemInputs('64x botania:cell_block')
        .duration(500)
        .outputFluids("manafluid:mana 10000")
        .EUt(512);
})