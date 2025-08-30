ServerEvents.recipes(event => {
event.remove({ id: 'gtceu:assembly_line/electric_motor_luv' })
event.remove({ id: 'gtceu:assembly_line/electric_piston_luv' })
event.remove({ id: 'gtceu:assembly_line/conveyor_module_luv' })
event.remove({ id: 'gtceu:assembly_line/robot_arm_luv' })
event.remove({ id: 'gtceu:assembly_line/electric_pump_luv' })
event.remove({ id: 'gtceu:assembly_line/sensor_luv' })
event.remove({ id: 'gtceu:assembly_line/emitter_luv' })
event.remove({ id: 'gtceu:assembly_line/field_generator_luv' })
// MARK: LuV Components
// LuV Motor
    event.recipes.gtceu.assembly_line('gtfte:luv_electric_motor')
        .itemInputs(
                'gtceu:long_magnetic_samarium_rod',
                '2x gtceu:long_thaumium_rod', 
                '2x gtceu:thaumium_ring', 
                '4x gtceu:thaumium_round', 
                '64x gtceu:fine_ruridit_wire', 
                '2x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_electric_motor')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 144),
          Fluid.of('gtceu:lubricant', 250),
          Fluid.of('gtceu:motus', 2000),
          Fluid.of('gtceu:machina', 250),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_electric_motor')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// LuV Piston
    event.recipes.gtceu.assembly_line('gtfte:luv_electric_piston')
        .itemInputs(
                'gtceu:luv_electric_motor',
                '4x gtceu:thaumium_plate', 
                '4x gtceu:thaumium_ring', 
                '16x gtceu:thaumium_round', 
                '4x gtceu:thaumium_rod', 
                '1x gtceu:thaumium_gear', 
                '2x gtceu:small_thaumium_gear', 
                '2x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_electric_piston')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 144),
          Fluid.of('gtceu:lubricant', 250),
          Fluid.of('gtceu:motus', 1000),
          Fluid.of('gtceu:machina', 300),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_electric_piston')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// LuV Conveyor
    event.recipes.gtceu.assembly_line('gtfte:luv_conveyor_module')
        .itemInputs(
                '2x gtceu:luv_electric_motor',
                '2x gtceu:thaumium_plate', 
                '4x gtceu:thaumium_ring', 
                '16x gtceu:thaumium_round', 
                '4x gtceu:thaumium_screw', 
                '2x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_conveyor_module')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 144),
          Fluid.of('gtceu:lubricant', 250),
          Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
          Fluid.of('gtceu:machina', 500),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_conveyor_module')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// LuV Robot Arm
    event.recipes.gtceu.assembly_line('gtfte:luv_robot_arm')
        .itemInputs(
                '4x gtceu:long_thaumium_rod',
                'gtceu:thaumium_gear', 
                '3x gtceu:small_thaumium_gear', 
                '2x gtceu:luv_electric_motor', 
                'gtceu:luv_electric_piston', 
                global.LuV.CircuitMulti(1), 
                global.IV.CircuitMulti(2),
                global.EV.CircuitMulti(4), 
                '4x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_robot_arm')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 576),
          Fluid.of('gtceu:lubricant', 250),
          Fluid.of('gtceu:cognitio', 1000),
          Fluid.of('gtceu:machina', 500),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_robot_arm')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// LuV Pump
    event.recipes.gtceu.assembly_line('gtfte:luv_electric_pump')
        .itemInputs(
                'gtceu:luv_electric_motor',
                'gtceu:niobium_titanium_small_fluid_pipe', 
                '2x gtceu:thaumium_plate', 
                '8x gtceu:thaumium_screw', 
                '4x gtceu:silicone_rubber_ring', 
                'gtceu:thaumium_rotor', 
                '2x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_electric_pump')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 144),
          Fluid.of('gtceu:lubricant', 250),
          Fluid.of('gtceu:polysulfide_hermetic', 1296),
          Fluid.of('gtceu:machina', 250),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_electric_pump')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// LuV Sensor
    event.recipes.gtceu.assembly_line('gtfte:luv_sensor')
        .itemInputs(
                'gtceu:thaumium_frame',
                'gtceu:luv_electric_motor', 
                '4x gtceu:ruridit_plate', 
                'gtceu:quantum_star', 
                global.LuV.CircuitMulti(2), 
                '64x gtceu:palladium_foil', 
                '32x gtceu:palladium_foil', 
                '4x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_sensor')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 288),
          Fluid.of('gtceu:sensus', 500),
          Fluid.of('gtceu:machina', 250),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_sensor')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// LuV Emitter
    event.recipes.gtceu.assembly_line('gtfte:luv_emitter')
        .itemInputs(
                'gtceu:thaumium_frame',
                'gtceu:luv_electric_motor', 
                '4x gtceu:long_ruridit_rod', 
                'gtceu:quantum_star', 
                global.LuV.CircuitMulti(2), 
                '64x gtceu:palladium_foil', 
                '32x gtceu:palladium_foil', 
                '4x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_emitter')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 288),
          Fluid.of('gtceu:alienis', 500),
          Fluid.of('gtceu:auram', 100),
          Fluid.of('gtceu:machina', 250),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_emitter')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// LuV Field Generator
    event.recipes.gtceu.assembly_line('gtfte:luv_field_generator')
        .itemInputs(
                'gtceu:thaumium_frame',
                '6x gtceu:thaumium_plate',
                'gtceu:quantum_star', 
                '2x gtceu:luv_emitter',
                global.LuV.CircuitMulti(2), 
                '64x gtceu:fine_indium_tin_barium_titanium_cuprate_wire', 
                '64x gtceu:fine_indium_tin_barium_titanium_cuprate_wire', 
                '4x gtceu:niobium_titanium_single_cable'
        )
        .itemOutputs('gtceu:luv_field_generator')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 288),
          Fluid.of('gtceu:auram', 1000),
          Fluid.of('gtceu:machina', 250),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_field_generator')).EUt(GTValues.VA[GTValues.EV]).CWUt(11).dataStack("gtceu:data_stick")) // 
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
// Fission Reactor
    event.recipes.gtceu.assembly_line('gtfte:fission_reactor')
        .itemInputs(
                '32x gtceu:double_radiation_resistant_alloy_plate',
                '16x gtceu:radiation_resistant_alloy_rod',
                '8x gtceu:radiation_resistant_alloy_frame',
                '16x gtceu:double_thaumium_plate',
                'gtceu:quantum_star', 
                '2x gtceu:luv_emitter',
                '2x gtceu:luv_sensor',
                global.LuV.CircuitMulti(2), 
        )
        .itemOutputs('gtceu:fission_reactor')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 1296),
          Fluid.of('gtceu:auram', 2000),
          Fluid.of('gtceu:machina', 1000),
        )
       ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:uranium_ingot')).EUt(GTValues.VA[GTValues.IV]).duration(4200)) //         
        .duration(2400)
        .EUt(GTValues.VA[GTValues.IV])
// MARK: Misc
// Jet Boots
    event.recipes.gtceu.assembly_line('gtfte:jetboots')
        .itemInputs(
                '8x gtceu:tungsten_plate',
                'gtceu:mv_lithium_battery',
                '2x gtceu:advanced_power_thruster',
                '16x gtceu:fine_tungsten_steel_wire',
                global.IV.CircuitMulti(1), 
        )
        .itemOutputs('jetboots:jetboots')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 288),
          Fluid.of('gtceu:volatus', 2000),
          Fluid.of('gtceu:machina', 250),
          Fluid.of('gtceu:motus', 1000),
        )
       ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:electric_jetpack')).EUt(GTValues.VA[GTValues.EV]).duration(2000))         
       .duration(600)
        .EUt(GTValues.VA[GTValues.IV])
//Extreme multis
    event.recipes.gtceu.assembly_line('gtfte:etbf')
        .itemInputs(
                '8x gtceu:electric_blast_furnace',
                '16x gtceu:polytetrafluoroethylene_frame',
                '32x gtceu:hssg_coil_block',
                '32x gtceu:niobium_titanium_single_cable',
                global.ZPM.CircuitMulti(2), 
        )
        .itemOutputs('gtceu:etbf')
        .inputFluids(
          Fluid.of('gtceu:soldering_alloy',1296),
          Fluid.of('gtceu:ignis', 16000),
          Fluid.of('gtceu:machina', 1000),
        )
       ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:electric_blast_furnace')).EUt(GTValues.VA[GTValues.IV]).duration(2000))         
       .duration(4800)
        .EUt(GTValues.VA[GTValues.LuV])
})