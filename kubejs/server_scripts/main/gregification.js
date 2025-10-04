
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
  InputsForDeletion.forEach(input => {
    event.remove({ output: input })
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
})