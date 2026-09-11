ServerEvents.recipes(event => {
      //ULV
      event.recipes.gtceu.alloy_smelter(`gtfte:verdant_copper`)
            .itemInputs([`minecraft:copper_ingot`, `2x rootsclassic:verdant_sprig`])
            .itemOutputs(`ftecore:verdant_copper_ingot`)
            .duration(80)
            .EUt(GTValues.VA[GTValues.ULV]);
      event.recipes.gtceu.alloy_smelter(`gtfte:root_iron`)
            .itemInputs([`minecraft:iron_ingot`, `2x rootsclassic:old_root`])
            .itemOutputs(`ftecore:root_iron_ingot`)
            .duration(80)
            .EUt(GTValues.VA[GTValues.ULV]);
      event.recipes.gtceu.alloy_smelter(`gtfte:quartz_glass`)
            .itemInputs([`4x gtceu:nether_quartz_dust`, `minecraft:glass`])
            .itemOutputs(`ae2:quartz_glass`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.MV]);
      event.recipes.gtceu.alloy_smelter(`gtfte:unstable_ingot`)
            .itemInputs([`gtceu:flawless_diamond_gem`, `2x gtceu:steel_ingot`])
            .itemOutputs(`unstabletools:unstable_ingot`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.MV]);
})