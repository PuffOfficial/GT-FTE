ServerEvents.recipes(event => {
event.recipes.gtceu.laser_engraver('gtfte:logic')
      .itemInputs(['gtceu:gold_plate', 'gtceu:fluix_lens'])
      .itemOutputs('ae2:printed_logic_processor')
      .duration(100)
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.laser_engraver('gtfte:engineering')
      .itemInputs(['gtceu:diamond_plate', 'gtceu:fluix_lens'])
      .itemOutputs('ae2:printed_engineering_processor')
      .duration(100)
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.laser_engraver('gtfte:calculation')
      .itemInputs(['gtceu:certus_quartz_plate', 'gtceu:fluix_lens'])
      .itemOutputs('ae2:printed_calculation_processor')
      .duration(100)
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.laser_engraver('gtfte:memory')
      .itemInputs(['gtceu:artificial_amethyst_plate', 'gtceu:fluix_lens'])
      .itemOutputs('ae2:printed_memory_processor')
      .duration(100)
      .EUt(GTValues.VA[GTValues.MV]);
})
