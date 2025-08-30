//let ULVComponents = 



ServerEvents.recipes(event => {
// ULV COMPONENTS
event.shaped('kubejs:ulv_electric_motor', [
    'ABC', 
    'BDB',
    'CBA'  
  ], {
    A: global.ULV.Cable("single"),
    B: 'gtceu:lead_single_wire',
    C: 'gtceu:copper_rod',
    D: 'minecraft:redstone',
  }
);
event.shaped('kubejs:ulv_conveyor_module', [
    ' C ', 
    'BAB',
    ' C '  
  ], {
    A: global.ULV.Cable("single"),
    B: global.ULV.Motor,
    C: 'gtceu:rubber_plate',
  }
);
event.shaped('kubejs:ulv_electric_piston', [
    'EEE', 
    'ADD',
    'ABC'  
  ], {
    A: global.ULV.Cable("single"),
    B: global.ULV.Motor,
    C: 'gtceu:wrought_iron_gear',
    D: 'gtceu:copper_rod',
    E: 'gtceu:copper_plate',
  }
);
event.shaped('kubejs:ulv_robot_arm', [
    'EEE', 
    'BDB',
    'CFD'  
  ], {
    B: global.ULV.Motor,
    C: global.ULV.Piston,
    D: 'gtceu:copper_rod',
    E: global.ULV.Cable("single"),
    F: '#gtceu:circuits/ulv',
  }
);
event.shaped('kubejs:ulv_electric_pump', [
    'EFB', 
    'GDH',
    'BCA'  
  ], {
    A: global.ULV.Cable("single"),
    B: 'gtceu:rubber_ring',
    C: global.ULV.Motor,
    D: 'gtceu:copper_normal_fluid_pipe',
    E: 'gtceu:copper_rotor',
    F: 'gtceu:copper_screw',
    G: '#gtceu:tools/crafting_screwdrivers',
    H: '#gtceu:tools/crafting_wrenches',
  }
);

event.shaped('gtceu:ulv_extruder', [
    'DDA', 
    'CBE',
    'DDA'  
  ], {
    A: global.ULV.Circuit,
    B: global.ULV.Hull,
    C: global.ULV.Piston,
    D: global.ULV.Wire("quadruple"),
    E: 'gtceu:copper_normal_fluid_pipe',
  }
);
})