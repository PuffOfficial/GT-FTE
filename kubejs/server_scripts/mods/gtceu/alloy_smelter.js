ServerEvents.recipes(event => {
//ULV
event.recipes.gtceu.alloy_smelter('gtfte:verdant_copper')
      .itemInputs(['minecraft:copper_ingot', '2x rootsclassic:verdant_sprig'])
      .itemOutputs('gtceu:verdant_copper_ingot')
      .duration(80)
      .EUt(GTValues.VA[GTValues.ULV]);
event.recipes.gtceu.alloy_smelter('gtfte:root_iron')
      .itemInputs(['minecraft:iron_ingot', '2x rootsclassic:old_root'])
      .itemOutputs('gtceu:root_iron_ingot')
      .duration(80)
      .EUt(GTValues.VA[GTValues.ULV]);
event.recipes.gtceu.alloy_smelter('gtfte:dragon_gold')
      .itemInputs(['minecraft:gold_ingot', '2x rootsclassic:dragons_eye'])
      .itemOutputs('gtceu:dragon_gold_ingot')
      .duration(80)
      .EUt(GTValues.VA[GTValues.ULV]);
event.recipes.gtceu.alloy_smelter('gtfte:quartz_glass')
      .itemInputs(['4x gtceu:nether_quartz_dust', 'minecraft:glass'])
      .itemOutputs('ae2:quartz_glass')
      .duration(200)
      .EUt(GTValues.VA[GTValues.MV]);
})