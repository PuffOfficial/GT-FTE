
let InputsForDeletion = [
  //-----MINECRAFT-----//
  'minecraft:chest',
  'minecraft:lightning_rod',
  //-----FORESTRY-----//
  'forestry:worktable',
  'forestry:apiary',
  'forestry:bee_house',
  'forestry:alveary_plain',
  'forestry:impregnated_casing',
  'forestry:scoop',
  'forestry:impregnated_frame',
  'forestry:untreated_frame',
  //-----FORESTRY-----//
  'gendustry:receptable',
  'gendustry:power_module',
  'gendustry:genetics_processor',
  'gendustry:climate_control_module',
  'gendustry:upgrade_frame',
  'gendustry:elite_upgrade_frame',
  'gendustry:blank_gene_sample',
  'gendustry:blank_genetic_template',
  'gendustry:industrial_apiary'
]


ServerEvents.recipes(event => {
InputsForDeletion.forEach(input =>{
    event.remove({output: input})
})
//MARK: Minecraft
event.recipes.gtceu.assembler('gtfte:chest')
    .itemInputs('2x gtceu:wood_plate', 'gtceu:iron_ring', 'gtceu:iron_screw')
    .itemOutputs('minecraft:chest')
    .duration(400)
    .EUt(GTValues.VA[GTValues.LV]);
event.shaped('minecraft:chest', [
    'AAA', 
    'ADA',
    'AAA'  
  ], {
    A: 'gtceu:wood_plate',   
    D: 'gtceu:iron_ring'
  }
);
event.shaped('minecraft:lightning_rod', [
    'BAE', 
    ' DC',
    ' D '  
  ], {
    A: 'gtceu:double_copper_plate',  
    B: global.tools.AnyHammer,  
    C: global.tools.AnyScrewdriver,  
    D: 'gtceu:copper_rod',  
    E: 'gtceu:copper_screw',  
  }
).damageIngredient([global.tools.AnyHammer, global.tools.AnyScrewdriver]);
// MARK: CobbleForDays
event.shaped('cobblefordays:tier_1', [
    'ABA', 
    'FDE',
    'ACA'  
  ], {
    A: 'gtceu:wood_plate',  
    B: global.tools.AnyMallet,  
    C: global.tools.AnyScrewdriver,  
    D: 'gtceu:wrought_iron_ring',  
    E: 'minecraft:water_bucket',  
    F: 'minecraft:lava_bucket'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
event.shaped('cobblefordays:tier_2', [
    'ABA', 
    'FDE',
    'ACA'  
  ], {
    A: 'gtceu:wrought_iron_plate',  
    B: global.tools.AnyMallet,  
    C: global.tools.AnyScrewdriver,  
    D: 'gtceu:steel_ring',  
    E: 'minecraft:water_bucket',  
    F: 'minecraft:lava_bucket'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
event.shaped('cobblefordays:tier_3', [
    'ABA', 
    'FDE',
    'ACA'  
  ], {
    A: 'gtceu:steel_plate',  
    B: global.tools.AnyMallet,  
    C: global.tools.AnyScrewdriver,  
    D: 'gtceu:aluminium_ring',  
    E: 'minecraft:water_bucket',  
    F: 'minecraft:lava_bucket'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
event.shaped('cobblefordays:tier_4', [
    'ABA', 
    'FDE',
    'ACA'  
  ], {
    A: 'gtceu:aluminium_plate',  
    B: global.tools.AnyMallet,  
    C: global.tools.AnyScrewdriver,  
    D: 'gtceu:stainless_steel_ring',  
    E: 'minecraft:water_bucket',  
    F: 'minecraft:lava_bucket'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
event.shaped('cobblefordays:tier_5', [
    'ABA', 
    'FDE',
    'ACA'  
  ], {
    A: 'gtceu:stainless_steel_plate',  
    B: global.tools.AnyMallet,  
    C: global.tools.AnyScrewdriver,  
    D: 'gtceu:titanium_ring',  
    E: 'minecraft:water_bucket',  
    F: 'minecraft:lava_bucket'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
// MARK: AE2
event.shaped('ae2:controller', [
    'BAB', 
    'DCE',
    'BAB'  
  ], {
    A: global.HV.Circuit,
    B: 'gtceu:black_steel_plate',
    C: global.HV.Hull,
    D: 'ae2:engineering_processor',
    E: 'ae2:memory_processor',
  }
);
event.shaped('ae2:drive', [
    'BEB', 
    'BCB',
    'BAB'  
  ], {
    A: 'ae2:logic_processor',
    B: 'gtceu:black_steel_plate',
    C: global.HV.Hull,
    E: 'ae2:memory_processor',
  }
);
event.shaped('2x ae2:pattern_provider', [
    'BDB', 
    'ACA',
    'BEB'  
  ], {
    A: global.HV.Circuit,
    B: 'gtceu:titanium_plate',
    C: global.HV.Hull,
    E: 'ae2:logic_processor',
    D: 'kubejs:ram_mainframe',
  }
);
event.shaped('2x ae2:molecular_assembler', [
    'BCB', 
    'DAD',
    'BCB'  
  ], {
    A: global.HV.Circuit,
    B: 'gtceu:titanium_plate',
    C: 'gtceu:glass_plate',
    D: global.HV.RobotArm
  }
);
event.shaped('2x ae2:interface', [
    'BDB', 
    'ACA',
    'BEB'  
  ], {
    A: global.MV.Circuit,
    B: 'gtceu:stainless_steel_plate',
    C: global.MV.Hull,
    E: 'ae2:memory_processor',
    D: 'kubejs:ram_mainframe',
  }
);
event.shaped('ae2:crafting_unit', [
    'BEB', 
    'BAB',
    'BEB'  
  ], {
    A: 'ae2:calculation_processor',
    B: 'gtceu:stainless_steel_plate',
    E: 'ae2:logic_processor',
  }
);
event.shaped('ae2:formation_core', [
    'AB ', 
    'EB ',
    '   '  
  ], {
    A: 'ae2:logic_processor',
    B: 'gtceu:stainless_steel_plate',
    E: 'gtceu:flawless_certus_quartz_gem',
  }
);
event.shaped('2x ae2:annihilation_core', [
    'AB ', 
    'EB ',
    '   '  
  ], {
    A: 'ae2:logic_processor',
    B: 'gtceu:stainless_steel_plate',
    E: 'gtceu:flawless_fluix_gem',
  }
);

//MARK: Forestry
event.shaped('forestry:worktable', [
    'B C', 
    'ADA',
    'EFE'  
  ], {
    A: 'gtceu:wood_plate',  
    B: global.tools.AnyMallet,   
    C: global.tools.AnySaw,  
    D: 'minecraft:book',  
    E: 'gtceu:iron_screw',
    F: 'minecraft:chest'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnySaw]);
event.recipes.gtceu.assembler('gtfte:impregnated_casing')
    .itemInputs('18x gtceu:treated_wood_plate', 'gtceu:treated_wood_frame', '24x gtceu:steel_screw', '12x gtceu:silicone_rubber_foil')
    .itemOutputs('forestry:impregnated_casing')
    .duration(400)
    .EUt(GTValues.VA[GTValues.LV]);
event.shaped('forestry:bee_house', [
    'CFB', 
    'AEA',
    'AAA'  
  ], {
    A: 'gtceu:wood_plate',  
    B: global.tools.AnyMallet,   
    C: global.tools.AnySaw,  
    E: 'forestry:impregnated_casing',
    F: 'gtceu:treated_wood_plate'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnySaw]);
event.shaped('forestry:apiary', [
    'CAB', 
    'EFE',
    'GGG'  
  ], {
    A: 'gtceu:wood_plate',  
    B: global.tools.AnyMallet,   
    C: global.tools.AnySaw,  
    E: '#forestry:combs',
    F: 'forestry:impregnated_casing',
    G: 'gtceu:honey_treated_wood_plate'
  }
).damageIngredient([global.tools.AnyMallet, global.tools.AnySaw]);
event.shaped('forestry:scoop', [
    'AFA', 
    'DED',
    'BAC'  
  ], {
    A: 'gtceu:treated_wood_rod',  
    B: global.tools.AnyMallet,   
    C: global.tools.AnyScrewdriver,  
    D: 'gtceu:wrought_iron_ring',  
    E: 'gtceu:wrought_iron_screw',
    F: 'exdeorum:string_mesh'
  }
).damageIngredient([global.tools.AnyMallet,global.tools.AnyScrewdriver]);
//MARK: Gendustry
event.shaped('gendustry:blank_gene_sample', [
    ' A ', 
    'ABA',
    ' A '  
  ], {
    A: 'gtceu:polyethylene_foil',  
    B: 'gtceu:universal_fluid_cell'   
  }
);
event.shaped('gendustry:blank_genetic_template', [
    'ABA', 
    'BCB',
    'ABA'  
  ], {
    A: 'gtceu:polyethylene_plate',  
    B: 'gendustry:blank_gene_sample',  
    C: '#gtceu:circuits/mv'    
  }
);
event.shaped('gendustry:upgrade_frame', [
    'ACA', 
    'BDB',
    'EAE'  
  ], {
    A: 'gtceu:polyethylene_plate',  
    B: 'gtceu:smd_diode',  
    C: '#gtceu:circuits/lv',  
    D: 'gtceu:carbon_fiber_plate',  
    E: 'gtceu:steel_ring'
  }
);
event.shaped('gendustry:elite_upgrade_frame', [
    'ACA', 
    'BDB',
    'EAE'  
  ], {
    A: 'gtceu:honey_rubber_plate',  
    B: 'gtceu:smd_diode',  
    C: '#gtceu:circuits/hv',  
    D: 'gtceu:carbon_fiber_plate',  
    E: 'gtceu:stainless_steel_ring'
  }
);
})