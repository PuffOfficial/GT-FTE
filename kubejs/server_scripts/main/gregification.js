
let InputsForDeletion = ['minecraft:chest','forestry:worktable','minecraft:lightning_rod']


ServerEvents.recipes(event => {
InputsForDeletion.forEach(input =>{
    event.remove({output: input})
})
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
event.shaped('ae2:pattern_provider', [
    'BDB', 
    'ACA',
    'BEB'  
  ], {
    A: global.EV.Circuit,
    B: 'gtceu:titanium_plate',
    C: global.EV.Hull,
    E: 'ae2:logic_processor',
    D: 'kubejs:ram_mainframe',
  }
);
event.shaped('ae2:molecular_assembler', [
    'BCB', 
    'DAD',
    'BCB'  
  ], {
    A: global.EV.Circuit,
    B: 'gtceu:titanium_plate',
    C: 'gtceu:glass_plate',
    D: global.HV.RobotArm
  }
);
event.shaped('ae2:interface', [
    'BDB', 
    'ACA',
    'BEB'  
  ], {
    A: global.HV.Circuit,
    B: 'gtceu:stainless_steel_plate',
    C: global.HV.Hull,
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
event.recipes.gtceu.assembler('gtfte:chest')
    .itemInputs('2x gtceu:wood_plate', 'gtceu:iron_ring', 'gtceu:iron_screw')
    .itemOutputs('minecraft:chest')
    .duration(400)
    .EUt(GTValues.VA[GTValues.LV]);
})