ServerEvents.recipes(event => {
// MARK: Random Crafts
event.shaped('exdeorum:crook', [
    'SS ', 
    'S  ',
    '   '  
  ], {
    S: 'minecraft:stick',  
  }
);
event.shaped('exdeorum:flint_mesh', [
    'CFC', 
    'FMF',
    'CFC'  
  ], {
    M: 'exdeorum:string_mesh',  
    F: 'gtceu:flint_dust', 
    C: 'minecraft:string',
  }
);
event.shaped('exdeorum:iron_mesh', [
    'CFC', 
    'FMF',
    'CFC'  
  ], {
    M: 'exdeorum:flint_mesh',  
    F: 'gtceu:long_iron_rod', 
    C: 'minecraft:string',
  }
);
event.shaped('exdeorum:golden_mesh', [
    'CFC', 
    'FMF',
    'CFC'  
  ], {
    M: 'exdeorum:iron_mesh',  
    F: 'gtceu:long_gold_rod', 
    C: 'minecraft:string',
  }
);
// MARK: Roots
event.shaped('rootsclassic:runic_tablet', [
    'ADA', 
    'BDB',
    'CAC'  
  ], {
    A: 'gtceu:stone_plate',  
    B: 'gtceu:fine_verdant_copper_wire', 
    C: 'gtceu:root_iron_screw',
    D: 'gtceu:double_root_iron_plate',
  }
);
event.shaped('rootsclassic:altar', [
    'BAB', 
    'EFE',
    'CDC'  
  ], {
    A: 'gtceu:dragon_gold_plate',  
    B: 'gtceu:gold_plate', 
    C: 'gtceu:double_root_iron_plate',
    D: 'gtceu:verdant_copper_plate',
    E: global.ULV.Circuit,
    F: 'minecraft:chiseled_stone_bricks',
  }
);
event.shaped('sgjourney:classic_dhd', [
    'ABA', 
    'DCE',
    'AAA'  
  ], {  
    A: 'gtceu:double_black_steel_plate',  
    B: global.EV.Circuit,  
    C: global.EV.Hull,  
    D: global.EV.Sensor, 
    E: global.EV.Emitter, 
  }
);
// MARK: Multi blocks
event.shaped('gtceu:primitive_alloy_smelter', [
    'ABA', 
    'BDB',
    'CBC'  
  ], {
    A: global.ULV.Circuit,  
    B: global.ULV.Wire('quadruple'), 
    C: global.ULV.Cable('single'),
    D: global.ULV.Hull,
  }
);
event.shaped('gtceu:primitive_bender', [
    'AFA', 
    'BDB',
    'CEC'  
  ], {
    A: global.ULV.Piston,  
    B: global.ULV.Circuit, 
    C: global.ULV.Motor,
    D: global.ULV.Hull,
    E: global.ULV.Cable('single'),
    F: 'gtceu:wrought_iron_plate',
  }
);
event.shaped('gtceu:primitive_electric_furnace', [
    'ADA', 
    'DBD',
    'CDC'  
  ], { 
    A: global.ULV.Circuit, 
    B: global.ULV.Hull,
    C: global.ULV.Cable('single'),
    D: global.ULV.Wire('double'),
  }
);
// MARK: Gregtech Affliated
event.shaped('gtceu:zpm_ionizing_module', [
    'CAC', 
    'EBD',
    'CAC'  
  ], { 
    A: global.ZPM.Circuit, 
    B: global.ZPM.Hull,
    C: global.ZPM.Cable('single'),
    D: global.LuV.RobotArm,
    E: global.LuV.Emitter
  }
);
event.shaped('gtceu:ulv_primitive_maintenance_hatch', [
    'GFD', 
    'HBE',
    'CAI'  
  ], { 
    A: global.ULV.Circuit, 
    B: global.ULV.Hull,
    C: global.ULV.Cable('single'),
    D: global.tools.AnyWrench,
    E: global.tools.AnyScrewdriver,
    F: global.tools.AnyWireCutter,
    G: global.tools.AnyMallet,
    H: 'gtceu:treated_wood_plate',
    I: 'gtceu:copper_small_fluid_pipe',
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver, global.tools.AnyWrench, global.tools.AnyWireCutter]);
// MARK: Crafting Components
event.shaped('gtceu:empty_fuel_rod', [
    'BCB', 
    'A A',
    'BCB'  
  ], {
    A: 'gtceu:silicon_carbide_foil',  
    B: 'gtceu:silicon_carbide_bolt',  
    C: 'gtceu:silicon_carbide_plate'
  }
);
event.shaped('gtceu:rubber_plate', [
    ' B ', 
    ' A ',
    ' A '  
  ], {
    A: 'gtceu:sticky_resin',  
    B: '#gtceu:tools/crafting_hammers'
  }
);
event.shaped('gtceu:glass_tube', [
    '   ', 
    'AAA',
    'A A'  
  ], {
    A: 'minecraft:glass_pane',  
  }
);
event.shaped('gtceu:vacuum_tube', [
    'A M', 
    'RBR',
    'CCC'  
  ], {
    A: '#forge:tools/wrenches',  
    M: '#forge:tools/mallets',  
    B: 'gtceu:glass_tube',  
    R: 'gtceu:red_alloy_bolt',  
    C: 'gtceu:copper_single_wire'
  }
);
event.shaped('2x gtceu:resistor', [
    'ACA', 
    'DBD',
    ' E '  
  ], {
    A: 'gtceu:sticky_resin',
    B: 'gtceu:coal_dust',
    C: 'gtceu:small_copper_spring',
    D: 'minecraft:paper',
    E: 'gtceu:ceramic_plate',
  }
);
event.shaped('kubejs:hv_mana_amplifier', [
    'DFD', 
    'ECE',
    'BAB'  
  ], {
    A: global.HV.Hull,
    B: global.HV.Cable("single"),
    C: 'gtceu:exquisite_mana_gem_gem',
    D: 'gtceu:stainless_steel_plate',
    E: 'gtceu:manasteel_rod',
    F: global.EV.Circuit,
  }
);
event.shaped('2x kubejs:wrought_iron_firebox', [
    'BAB', 
    'ACA',
    'BAB'  
  ], {
    A: 'gtceu:wrought_iron_rod',
    B: 'gtceu:wrought_iron_plate',
    C: 'minecraft:campfire',
  }
);
//STARGATE
event.shaped('kubejs:stargate_coil', [
    ' BA', 
    'BCB',
    'AB '  
  ], {
    A: global.HV.Coil,
    B: global.EV.Coil,
    C: 'gtceu:small_stargate_alloy_gear',
  }
);
event.shaped('kubejs:stargate_chevron', [
    'DBE', 
    'CAC',
    ' C '  
  ], {
    A: 'kubejs:stargate_coil',
    B: global.IV.Circuit,
    C: 'gtceu:double_stargate_alloy_plate',
    D: 'gtceu:red_glass_lens',
    E: 'gtceu:yellow_glass_lens',
  }
);
event.shaped('kubejs:stargate_field_generator', [
    'ABA', 
    'CBC',
    'ABA'  
  ], {
    A: 'gtceu:hv_field_generator',
    B: 'gtceu:double_terrasteel_plate',
    C: 'gtceu:styrene_butadiene_rubber_rod',
  }
);
// MARK: Botania
event.shaped('botania:runic_altar', [
    'DAD', 
    'CBC',
    'DAD'  
  ], {
    A: 'gtceu:living_steel_plate',
    B: global.IV.Circuit,
    C: 'botania:livingrock_bricks',
    D: 'gtceu:double_manasteel_plate',
  }
);
event.shaped('botania:alfheim_portal', [
    'ABA', 
    'ACA',
    'ABA'  
  ], {
    A: 'botania:livingwood_log',
    B: 'gtceu:terrasteel_plate',
    C: 'kubejs:alfheim_runes',
  }
);
})