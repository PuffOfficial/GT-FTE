ServerEvents.recipes(event => {
//ULV
event.shaped(`gtceu:ulv_assembler`, [
    `EBE`, 
    `DAD`,
    `CBC`  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable(`single`),
    D: global.ULV.Conveyor,
    E: global.ULV.RobotArm,
  }
);
    event.recipes.gtceu.assembler(`gtfte:quartz_fibre`)
        .itemInputs(`gtceu:glass_plate`, `3x gtceu:nether_quartz_dust`)
        .itemOutputs(`2x ae2:quartz_fiber`)
        .duration(250)
        .EUt(GTValues.VA[GTValues.MV]);
// MARK: Resin Boards
    event.recipes.gtceu.assembler(`gtfte:resin_board`)
        .itemInputs(`gtceu:treated_wood_plate`, `3x gtceu:sticky_resin`)
        .itemOutputs(`gtceu:resin_circuit_board`)
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV]);
    event.recipes.gtceu.assembler(`gtfte:printed_resin_board_type1`)
        .itemInputs(`gtceu:resin_circuit_board`, `8x gtceu:copper_foil`, `3x gtceu:sticky_resin`)
        .itemOutputs(`gtceu:resin_printed_circuit_board`)
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV]);
    event.recipes.gtceu.assembler(`gtfte:printed_resin_board_type2`)
        .itemInputs(`gtceu:resin_circuit_board`, `8x gtceu:copper_foil`)
        .inputFluids(`gtceu:glue 100`)
        .itemOutputs(`gtceu:resin_printed_circuit_board`)
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV]);
// MARK: Vacuum Rubes
    event.recipes.gtceu.assembler(`gtfte:vacuum_tube`)
        .itemInputs(`2x gtceu:red_alloy_bolt`, `4x gtceu:copper_single_wire`, `2x minecraft:glass_pane`)
        .itemOutputs(`2x gtceu:vacuum_tube`)
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV]);
// MARK: Resistors
    event.recipes.gtceu.assembler(`gtfte:resistor_type1`)
        .itemInputs(`2x gtceu:coal_dust`, `4x gtceu:fine_copper_wire`, `4x gtceu:sticky_resin`)
        .itemOutputs(`2x gtceu:resistor`)
        .duration(150)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler(`gtfte:resistor_type2`)
        .itemInputs(`2x gtceu:coal_dust`, `4x gtceu:fine_annealed_copper_wire`, `4x gtceu:sticky_resin`)
        .itemOutputs(`4x gtceu:resistor`)
        .duration(150)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler(`gtfte:resistor_type3`)
        .itemInputs(`2x gtceu:coal_dust`, `4x gtceu:fine_copper_wire`)
        .inputFluids(`gtceu:glue 100`)
        .itemOutputs(`4x gtceu:resistor`)
        .duration(150)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler(`gtfte:resistor_type4`)
        .itemInputs(`2x gtceu:coal_dust`, `4x gtceu:fine_annealed_copper_wire`)
        .inputFluids(`gtceu:glue 100`)
        .itemOutputs(`6x gtceu:resistor`)
        .duration(150)
        .EUt(GTValues.VA[GTValues.LV]);
// MARK: Casing      
    event.recipes.gtceu.assembler(`gtfte:simple_vent`)
        .itemInputs(`4x gtceu:steel_plate`, `2x gtceu:iron_rotor`, `gtceu:steel_frame`, `gtceu:mv_electric_motor`)
        .itemOutputs(`kubejs:simple_ventilation`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
// MARK: Coils
    event.recipes.gtceu.assembler(`gtfte:manasteel_coil`)
        .itemInputs(`8x gtceu:galvanized_manasteel_double_wire`, `8x gtceu:stainless_steel_foil`)
        .itemOutputs(`kubejs:manasteel_coil`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.assembler(`gtfte:copper_coil`)
        .itemInputs(`8x gtceu:copper_double_wire`, `8x gtceu:steel_foil`)
        .inputFluids(`gtceu:tin_alloy 144`)
        .itemOutputs(`kubejs:copper_coil`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
// MARK: Other
    event.recipes.gtceu.assembler(`gtfte:scrap_box`)
        .itemInputs(`3x gtceu:scrap_gem`, `2x minecraft:paper`)
        .inputFluids(`gtceu:glue 20`)
        .itemOutputs(`gtceu:scrap_box`)
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV]);
// MARK: Botania
    event.recipes.gtceu.assembler(`gtfte:petal_apothecary`)
        .itemInputs(`2x #gtceu:circuits/mv`, `gtceu:mv_emitter`, `8x minecraft:stone_bricks`, `gtceu:steel_drum`)
        .inputFluids(`gtceu:tin_alloy 144`)
        .itemOutputs(`botania:apothecary_default`)
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.assembler(`gtfte:mana_ring`)
        .itemInputs([`gtceu:manasteel_ring`, `botania:mana_tablet`])
        .inputFluids(`gtceu:soldering_alloy 144`)
        .itemOutputs(`botania:mana_ring`)
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV]);
// MARK: Roots
    event.recipes.gtceu.assembler(`gtfte:standing_stone`)
        .itemInputs([`minecraft:chiseled_stone_bricks`, `4x minecraft:stone_bricks`, `2x gtceu:marble_bricks`, `2x gtceu:verdant_copper_plate`])
        .itemOutputs(`rootsclassic:attuned_standing_stone`)
        .duration(600)
        .EUt(GTValues.VA[GTValues.ULV]);
// MARK: Stargate
    event.recipes.gtceu.assembler(`gtfte:stargate_core`)
        .itemInputs([
            Item.of(global.IV.Circuit, 2), 
            `16x gtceu:stargate_alloy_frame`, 
            `2x gtceu:terrasteel_plate`, 
            `32x gtceu:double_stargate_alloy_plate`, 
            `32x gtceu:double_stargate_alloy_plate`, 
            `16x gtceu:styrene_butadiene_rubber_foil`, 
            `4x kubejs:stargate_coil`, 
            `kubejs:stargate_computation_mainframe`,
            `kubejs:stargate_field_generator`])
        .inputFluids(`gtceu:glass 1269`)
        .itemOutputs(`sgjourney:classic_stargate_base_block`)
        .duration(2400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.assembler(`gtfte:stargate_chevron`)
        .itemInputs([
            global.EV.Sensor, 
            global.EV.Emitter, 
            `2x gtceu:stargate_alloy_frame`, 
            `1x gtceu:terrasteel_plate`, 
            `8x gtceu:double_stargate_alloy_plate`, 
            `32x gtceu:styrene_butadiene_rubber_foil`,
            `1x kubejs:stargate_coil`,
            `2x kubejs:stargate_chevron`])
        .itemOutputs(`sgjourney:classic_stargate_chevron_block`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.assembler(`gtfte:stargate_casing`)
        .itemInputs([
            `1x gtceu:stargate_alloy_frame`, 
            `6x gtceu:double_stargate_alloy_plate`, 
            `24x gtceu:styrene_butadiene_rubber_foil`,
            `2x kubejs:stargate_coil`])
        .itemOutputs(`2x sgjourney:classic_stargate_ring_block`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV]);
// MARK: ENDER IO CONDUITS
    event.recipes.gtceu.assembler(`gtfte:fluid_conduit`)
        .itemInputs([
            `2x gtceu:polyvinyl_chloride_plate`, 
            `gtceu:aluminium_small_fluid_pipe`])
        .inputFluids(`gtceu:deuterium 250`)
        .itemOutputs(`2x enderio:ender_fluid_conduit`)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.assembler(`gtfte:item_conduit`)
        .itemInputs([
            `2x gtceu:polyvinyl_chloride_plate`, 
            `gtceu:tin_small_item_pipe`])
        .inputFluids(`gtceu:deuterium 250`)
        .itemOutputs(`2x enderio:item_conduit`)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.assembler(`gtfte:item_filter`)
        .itemInputs([
            `2x gtceu:polyethylene_plate`, 
            `gtceu:item_filter`])
        .itemOutputs(`enderio:basic_item_filter`)
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler(`gtfte:fluid_filter`)
        .itemInputs([
            `2x gtceu:polyvinyl_chloride_plate`, 
            `gtceu:fluid_filter`])
        .itemOutputs(`enderio:basic_fluid_filter`)
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler(`gtfte:adv_item_filter`)
        .itemInputs([
            `2x gtceu:diamond_plate`, 
            `enderio:basic_item_filter`])
        .itemOutputs(`enderio:advanced_item_filter`)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
// MARK: Coils
    event.recipes.gtceu.assembler(`gtfte:containment_coil`)
        .itemInputs([
            `32x gtceu:uranium_235_ring`, 
            `16x gtceu:gaia_steel_foil`,
            `32x gtceu:stainless_steel_foil`])
        .inputFluids(`gtceu:metallum 250`)
        .itemOutputs(`kubejs:containment_coil`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);
// MARK: Flux Networks
    event.recipes.gtceu.assembler(`gtfte:flux_core`)
        .itemInputs([
            `4x fluxnetworks:flux_dust`, 
            `2x gtceu:flux_fused_naquadah_gear`,
            `minecraft:ender_eye`])
        .inputFluids(`gtceu:sensus 250`)
        .itemOutputs(`2x fluxnetworks:flux_core`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler(`gtfte:flux_plug`).circuit(1)
        .itemInputs([
            `4x fluxnetworks:flux_core`, 
            `16x gtceu:flux_fused_naquadah_gear`,
            `gtceu:flux_fused_naquadah_rotor`,
            `#gtceu:circuits/luv`])
        .inputFluids(`gtceu:sensus 250`)
        .itemOutputs(`2x fluxnetworks:flux_plug`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.assembler(`gtfte:flux_point`).circuit(2)
        .itemInputs([
            `4x fluxnetworks:flux_core`, 
            `16x gtceu:flux_fused_naquadah_gear`,
            `gtceu:flux_fused_naquadah_rotor`,
            `#gtceu:circuits/luv`])
        .inputFluids(`gtceu:sensus 250`)
        .itemOutputs(`2x fluxnetworks:flux_point`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV]);

})