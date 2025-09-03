ServerEvents.recipes(event => {
event.recipes.gtceu.circuit_assembler('gtfte:1k_component')
      .itemInputs(['2x ae2:logic_processor', '4x gtceu:certus_quartz_plate', global.LV.CircuitMulti(1), '2x ae2:quartz_glass', 'ae2:memory_processor'])
      .itemOutputs('2x ae2:cell_component_1k')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.circuit_assembler('gtfte:4k_component')
      .itemInputs(['2x ae2:logic_processor', '4x gtceu:certus_quartz_plate', global.MV.CircuitMulti(1), '4x ae2:quartz_glass', '2x ae2:cell_component_1k', 'ae2:memory_processor'])
      .itemOutputs('2x ae2:cell_component_4k')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.circuit_assembler('gtfte:16k_component')
      .itemInputs(['2x ae2:logic_processor', '4x gtceu:certus_quartz_plate', global.HV.CircuitMulti(1), '8x ae2:quartz_glass', '2x ae2:cell_component_4k', 'ae2:memory_processor'])
      .itemOutputs('2x ae2:cell_component_16k')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.circuit_assembler('gtfte:64k_component')
      .itemInputs(['4x ae2:logic_processor', '8x gtceu:certus_quartz_plate', global.EV.CircuitMulti(1), '16x ae2:quartz_glass', '2x ae2:cell_component_16k', 'ae2:memory_processor'])
      .itemOutputs('2x ae2:cell_component_64k')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.circuit_assembler('gtfte:256k_component')
      .itemInputs(['8x ae2:logic_processor', '16x gtceu:certus_quartz_plate', global.IV.CircuitMulti(1), '32x ae2:quartz_glass', '2x ae2:cell_component_64k', 'ae2:memory_processor'])
      .itemOutputs('2x ae2:cell_component_256k')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.circuit_assembler('gtfte:stargate_computation_mainframe')
      .itemInputs(['16x gtceu:terrasteel_frame', global.IV.CircuitMulti(4), '64x gtceu:styrene_butadiene_rubber_ring', 'kubejs:ram_mainframe', '4x gtceu:ev_sensor', '4x gtceu:ev_emitter'])
      .itemOutputs('kubejs:stargate_computation_mainframe')
      .duration(24000)    
      .EUt(GTValues.VA[GTValues.HV]);
event.recipes.gtceu.circuit_assembler('gtfte:ram_stick')
      .itemInputs(['8x gtceu:ram_chip', 'gtceu:soc', 'gtceu:gold_bolt', '16x gtceu:fine_red_alloy_wire', 'gtceu:plastic_printed_circuit_board'])
      .itemOutputs('2x kubejs:ram_stick')
      .duration(600)    
      .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.circuit_assembler('gtfte:ram_mainframe')
      .itemInputs(['2x kubejs:ram_stick', global.MV.CircuitMulti(2), '4x gtceu:black_steel_plate','16x gtceu:fine_copper_wire','2x gtceu:soc'])
      .itemOutputs('kubejs:ram_mainframe')
      .duration(600)    
      .EUt(GTValues.VA[GTValues.HV]);
// MARK: AE2
event.recipes.gtceu.circuit_assembler('gtfte:ae2_logic')
      .itemInputs(['ae2:printed_logic_processor', 'gtceu:silicon_plate','2x gtceu:ilc_chip', global.MV.CircuitMulti(1)])
      .itemOutputs('ae2:logic_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);   
event.recipes.gtceu.circuit_assembler('gtfte:ae2_engineering')
      .itemInputs(['ae2:printed_engineering_processor', 'gtceu:silicon_plate','2x gtceu:cpu_chip', global.MV.CircuitMulti(1)])
      .itemOutputs('ae2:engineering_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);  
event.recipes.gtceu.circuit_assembler('gtfte:ae2_calculation')
      .itemInputs(['ae2:printed_calculation_processor', 'gtceu:silicon_plate','2x gtceu:lpic_chip', global.MV.CircuitMulti(1)])
      .itemOutputs('ae2:calculation_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);  
event.recipes.gtceu.circuit_assembler('gtfte:ae2_memory')
      .itemInputs(['ae2:printed_memory_processor', 'gtceu:silicon_plate','2x gtceu:ram_chip', global.MV.CircuitMulti(1)])
      .itemOutputs('ae2:memory_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);     
})