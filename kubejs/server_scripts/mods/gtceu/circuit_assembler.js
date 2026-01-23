ServerEvents.recipes(event => {
      event.recipes.gtceu.circuit_assembler(`gtfte:stargate_computation_mainframe`)
            .itemInputs([`16x gtceu:terrasteel_frame`, global.IV.CircuitMulti(4), `64x gtceu:styrene_butadiene_rubber_ring`, `kubejs:ram_mainframe`, `4x gtceu:ev_sensor`, `4x gtceu:ev_emitter`])
            .itemOutputs(`kubejs:stargate_computation_mainframe`)
            .duration(24000)
            .EUt(GTValues.VA[GTValues.HV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:ram_stick`)
            .itemInputs([`8x gtceu:ram_chip`, `gtceu:soc`, `gtceu:gold_bolt`, `16x gtceu:fine_red_alloy_wire`, `gtceu:plastic_printed_circuit_board`])
            .itemOutputs(`2x kubejs:ram_stick`)
            .duration(600)
            .EUt(GTValues.VA[GTValues.MV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:ram_mainframe`)
            .itemInputs([`2x kubejs:ram_stick`, global.MV.CircuitMulti(2), `4x gtceu:black_steel_plate`, `16x gtceu:fine_copper_wire`, `2x gtceu:soc`])
            .itemOutputs(`kubejs:ram_mainframe`)
            .duration(600)
            .EUt(GTValues.VA[GTValues.HV]);
      // MARK: AE2
      event.recipes.gtceu.circuit_assembler(`gtfte:certus_1`)
            .itemInputs([
                  `gtceu:resin_printed_circuit_board`,
                  `gtceu:cpu_chip`,
                  `2x gtceu:resistor`,
                  `gtceu:black_steel_plate`,
                  `2x gtceu:charged_certus_quartz_gem`,
                  `4x gtceu:fine_silver_wire`
            ])
            .itemOutputs(`3x gtceu:certus_chip`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:certus_2`)
            .itemInputs([
                  `gtceu:resin_printed_circuit_board`,
                  `gtceu:simple_soc`,
                  `gtceu:certus_chip`,
                  `gtceu:diode`,
                  `2x gtceu:fine_annealed_copper_wire`,
                  `2x gtceu:silver_bolt`
            ])
            .itemOutputs(`2x gtceu:basic_certus_circuit`)
            .duration(600)
            .EUt(GTValues.VA[GTValues.LV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:certus_3`)
            .itemInputs([
                  `gtceu:phenolic_printed_circuit_board`,
                  `gtceu:basic_certus_circuit`,
                  `2x gtceu:inductor`,
                  `2x gtceu:diode`,
                  `4x gtceu:charged_certus_quartz_gem`,
                  `2x gtceu:chromium_bolt`
            ])
            .itemOutputs(`2x gtceu:good_certus_circuit`)
            .duration(600)
            .EUt(GTValues.VA[GTValues.LV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:certus_4`)
            .itemInputs([
                  `gtceu:plastic_printed_circuit_board`,
                  `2x gtceu:ram_chip`,
                  `2x gtceu:good_certus_circuit`,
                  `2x gtceu:inductor`,
                  `4x gtceu:charged_certus_quartz_gem`,
                  `12x gtceu:fine_gold_wire`
            ])
            .itemOutputs(`gtceu:advanced_certus_circuit`)
            .duration(600)
            .EUt(GTValues.VA[GTValues.MV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:fluix_2`)
            .itemInputs([
                  `gtceu:plastic_printed_circuit_board`,
                  `gtceu:simple_soc`,
                  `4x gtceu:black_steel_foil`,
                  `2x gtceu:polyethylene_foil`,
                  `2x gtceu:fluix_gem`,
                  `2x gtceu:stainless_steel_bolt`
            ])
            .itemOutputs(`4x gtceu:fluix_chip`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.MV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:fluix_3`)
            .itemInputs([
                  `gtceu:cpu_chip`,
                  `gtceu:fluix_chip`,
                  `2x gtceu:fluix_plate`,
                  `4x gtceu:black_steel_foil`,
                  `2x gtceu:sterling_silver_bolt`
            ])
            .itemOutputs(`2x gtceu:basic_fluix_circuit`)
            .cleanroom(CleanroomType.CLEANROOM)
            .duration(300)
            .EUt(GTValues.VA[GTValues.MV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:fluix_4`)
            .itemInputs([
                  `gtceu:plastic_printed_circuit_board`,
                  `gtceu:soc`,
                  `2x gtceu:smd_capacitor`,
                  `2x gtceu:basic_fluix_circuit`,
                  `gtceu:flawless_fluix_gem`,
                  `4x gtceu:stainless_steel_bolt`
            ])
            .itemOutputs(`2x gtceu:advanced_fluix_circuit`)
            .duration(600)
            .cleanroom(CleanroomType.CLEANROOM)
            .EUt(GTValues.VA[GTValues.MV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:fluix_5`)
            .itemInputs([
                  `4x gtceu:black_steel_frame`,
                  `2x gtceu:advanced_fluix_circuit`,
                  `4x gtceu:smd_inductor`,
                  `4x gtceu:smd_diode`,
                  `gtceu:exquisite_fluix_gem`,
                  `16x gtceu:silver_single_wire`
            ])
            .itemOutputs(`gtceu:fluix_mainframe`)
            .duration(1200)
            .cleanroom(CleanroomType.CLEANROOM)
            .EUt(GTValues.VA[GTValues.HV]);
// MARK: AE2 Storage Components
      event.recipes.gtceu.circuit_assembler(`gtfte:1k_me_component`)
            .itemInputs([
                  `2x gtceu:black_steel_plate`,
                  `2x gtceu:certus_quartz_plate`,
                  `#gtfte:circuits/me_1`,
                  `4x gtceu:fine_silver_wire`,
                  `2x gtceu:ram_chip`
            ])
            .itemOutputs(`ae2:cell_component_1k`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:4k_me_component`)
            .itemInputs([
                  `2x gtceu:black_steel_plate`,
                  `2x ae2:cell_component_1k`,
                  `#gtfte:circuits/me_2`,
                  `4x gtceu:fine_silver_wire`,
                  `2x gtceu:ram_chip`
            ])
            .itemOutputs(`ae2:cell_component_4k`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:16k_me_component`)
            .itemInputs([
                  `2x gtceu:black_steel_plate`,
                  `2x ae2:cell_component_4k`,
                  `#gtfte:circuits/me_3`,
                  `4x gtceu:fine_silver_wire`,
                  `2x gtceu:ram_chip`
            ])
            .itemOutputs(`ae2:cell_component_16k`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.MV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:64k_me_component`)
            .itemInputs([
                  `2x gtceu:black_steel_plate`,
                  `2x ae2:cell_component_16k`,
                  `#gtfte:circuits/me_4`,
                  `4x gtceu:fine_silver_wire`,
                  `2x gtceu:ram_chip`
            ])
            .itemOutputs(`ae2:cell_component_64k`)
            .duration(200)
            .cleanroom(CleanroomType.CLEANROOM)
            .EUt(GTValues.VA[GTValues.HV]);
      event.recipes.gtceu.circuit_assembler(`gtfte:256k_me_component`)
            .itemInputs([
                  `2x gtceu:stainless_steel_plate`,
                  `2x ae2:cell_component_64k`,
                  `#gtfte:circuits/me_5`,
                  `4x gtceu:fine_silver_wire`,
                  `2x gtceu:ram_chip`
            ])
            .itemOutputs(`ae2:cell_component_256k`)
            .duration(200)
            .cleanroom(CleanroomType.CLEANROOM)
            .EUt(GTValues.VA[GTValues.EV]);
// MARK: Flux Networks
      event.recipes.gtceu.circuit_assembler(`gtfte:flux_core`)
            .itemInputs([
                  `2x gtceu:stainless_steel_plate`,
                  `2x ae2:cell_component_64k`,
                  `#gtfte:circuits/me_5`,
                  `4x gtceu:fine_silver_wire`,
                  `2x gtceu:ram_chip`
            ])
            .itemOutputs(`ae2:cell_component_256k`)
            .duration(200)
            .cleanroom(CleanroomType.CLEANROOM)
            .EUt(GTValues.VA[GTValues.EV]);
})