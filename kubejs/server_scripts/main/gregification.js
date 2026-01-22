
let InputsForDeletion = [
  //-----MINECRAFT-----//
  `minecraft:chest`,
  `minecraft:lightning_rod`,
  //-----FORESTRY-----//
  `forestry:worktable`,
  `forestry:apiary`,
  `forestry:bee_house`,
  `forestry:alveary_plain`,
  `forestry:impregnated_casing`,
  `forestry:scoop`,
  `forestry:impregnated_frame`,
  `forestry:untreated_frame`,
  //-----FORESTRY-----//
  `gendustry:receptable`,
  `gendustry:power_module`,
  `gendustry:genetics_processor`,
  `gendustry:climate_control_module`,
  `gendustry:upgrade_frame`,
  `gendustry:elite_upgrade_frame`,
  `gendustry:blank_gene_sample`,
  `gendustry:blank_genetic_template`,
  `gendustry:industrial_apiary`,
  //-----AE2-----//
  `ae2:blank_pattern`,
]

let ModsToUnify = [
  `forestry`,
]

ServerEvents.recipes(event => {
  InputsForDeletion.forEach(input => {
    event.remove({ output: input })
  })
  //MARK: Minecraft
  event.recipes.gtceu.assembler(`gtfte:chest`)
    .itemInputs(`2x gtceu:wood_plate`, `gtceu:iron_ring`, `gtceu:iron_screw`)
    .itemOutputs(`minecraft:chest`)
    .duration(400)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped(`minecraft:chest`, [
    `AAA`,
    `ADA`,
    `AAA`
  ], {
    A: `gtceu:wood_plate`,
    D: `gtceu:iron_ring`
  }
  );
  event.shaped(`minecraft:lightning_rod`, [
    `BAE`,
    ` DC`,
    ` D `
  ], {
    A: `gtceu:double_copper_plate`,
    B: global.tools.AnyHammer,
    C: global.tools.AnyScrewdriver,
    D: `gtceu:copper_rod`,
    E: `gtceu:copper_screw`,
  }
  ).damageIngredient([global.tools.AnyHammer, global.tools.AnyScrewdriver]);
  // MARK: CobbleForDays
  event.shaped(`cobblefordays:tier_1`, [
    `ABA`,
    `FDE`,
    `ACA`
  ], {
    A: `gtceu:wood_plate`,
    B: global.tools.AnyMallet,
    C: global.tools.AnyScrewdriver,
    D: `gtceu:wrought_iron_ring`,
    E: `minecraft:water_bucket`,
    F: `minecraft:lava_bucket`
  }
  ).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
  event.shaped(`cobblefordays:tier_2`, [
    `ABA`,
    `FDE`,
    `ACA`
  ], {
    A: `gtceu:wrought_iron_plate`,
    B: global.tools.AnyMallet,
    C: global.tools.AnyScrewdriver,
    D: `gtceu:steel_ring`,
    E: `minecraft:water_bucket`,
    F: `minecraft:lava_bucket`
  }
  ).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
  event.shaped(`cobblefordays:tier_3`, [
    `ABA`,
    `FDE`,
    `ACA`
  ], {
    A: `gtceu:steel_plate`,
    B: global.tools.AnyMallet,
    C: global.tools.AnyScrewdriver,
    D: `gtceu:aluminium_ring`,
    E: `minecraft:water_bucket`,
    F: `minecraft:lava_bucket`
  }
  ).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
  event.shaped(`cobblefordays:tier_4`, [
    `ABA`,
    `FDE`,
    `ACA`
  ], {
    A: `gtceu:aluminium_plate`,
    B: global.tools.AnyMallet,
    C: global.tools.AnyScrewdriver,
    D: `gtceu:stainless_steel_ring`,
    E: `minecraft:water_bucket`,
    F: `minecraft:lava_bucket`
  }
  ).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
  event.shaped(`cobblefordays:tier_5`, [
    `ABA`,
    `FDE`,
    `ACA`
  ], {
    A: `gtceu:stainless_steel_plate`,
    B: global.tools.AnyMallet,
    C: global.tools.AnyScrewdriver,
    D: `gtceu:titanium_ring`,
    E: `minecraft:water_bucket`,
    F: `minecraft:lava_bucket`
  }
  ).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver]);
  // MARK: AE2
  event.shaped(`ae2:drive`, [
    `ACA`,
    `BDB`,
    `ACA`
  ], {
    A: `gtceu:aluminium_plate`,
    B: global.MV.Emitter,
    C: `#gtfte:circuits/me_2`,
    D: `gtceu:mv_machine_hull`,
  }
  );
  event.shaped(`ae2:controller`, [
    `BAB`,
    `CDC`,
    `BAB`
  ], {
    A: `gtceu:fluix_plate`,
    B: `gtceu:aluminium_plate`,
    C: `#gtfte:circuits/me_3`,
    D: `gtceu:mv_machine_hull`,
  }
  );
  event.shaped(`2x ae2:blank_pattern`, [
    `DED`,
    `ECE`,
    `BAB`
  ], {
    A: `gtceu:certus_quartz_plate`,
    B: `gtceu:polyethylene_plate`,
    C: `#gtfte:circuits/me_1`,
    D: `ae2:quartz_glass`,
    E: `gtceu:fine_annealed_copper_wire`,
  }
  );
  event.shaped(`ae2:pattern_provider`, [
    `DCD`,
    `ABF`,
    `DED`
  ], {
    A: `ae2:formation_core`,
    B: `gtceu:black_steel_frame`,
    C: `#gtfte:circuits/me_5`,
    D: `gtceu:black_steel_plate`,
    E: `gtceu:platinum_plate`,
    F: `ae2:annihilation_core`,
  }
  );
  event.shaped(`ae2:interface`, [
    `DCD`,
    `ABF`,
    `DED`
  ], {
    A: `ae2:formation_core`,
    B: `gtceu:black_steel_frame`,
    C: `#gtfte:circuits/me_3`,
    D: `gtceu:black_steel_plate`,
    E: `gtceu:certus_quartz_plate`,
    F: `ae2:annihilation_core`,
  }
  );
  event.shaped(`ae2:molecular_assembler`, [
    `DCD`,
    `ABA`,
    `DED`
  ], {
    A: `ae2:quartz_glass`,
    B: `gtceu:black_steel_frame`,
    C: `#gtfte:circuits/me_4`,
    D: `gtceu:black_steel_plate`,
    E: `gtceu:mv_robot_arm`,
  }
  );
  event.shaped(`ae2:formation_core`, [
    ` AD`,
    `CEB`,
    `DA `
  ], {
    A: `ae2:black_steel_plate`,
    B: `ae2:certus_quartz_plate`,
    C: `ae2:gold_plate`,
    D: `ae2:fine_silver_wire`,
    E: `#gtfte:circuits/me_2`,
  }
  );
  event.shaped(`ae2:annihilation_core`, [
    ` AD`,
    `BEC`,
    `DA `
  ], {
    A: `ae2:black_steel_plate`,
    B: `ae2:certus_quartz_plate`,
    C: `ae2:diamond_plate`,
    D: `ae2:fine_silver_wire`,
    E: `#gtfte:circuits/me_2`,
  }
  );
  event.shaped(`2x ae2:item_cell_housing`, [
    `FEF`,
    `CDC`,
    `ABA`
  ], {
    A: `gtceu:steel_plate`,
    B: `gtceu:iron_plate`,
    C: `gtceu:iron_screw`,
    D: `gtceu:fine_silver_wire`,
    E: `gtceu:redstone_plate`,
    F: `ae2:quartz_glass`,
  }
  );
  event.shaped(`2x ae2:fluid_cell_housing`, [
    `FEF`,
    `CDC`,
    `ABA`
  ], {
    A: `gtceu:copper_plate`,
    B: `gtceu:manasteel_plate`,
    C: `gtceu:manasteel_screw`,
    D: `gtceu:fine_silver_wire`,
    E: `gtceu:redstone_plate`,
    F: `ae2:quartz_glass`,
  }
  );
  //MARK: Forestry
  event.shaped(`forestry:worktable`, [
    `B C`,
    `ADA`,
    `EFE`
  ], {
    A: `gtceu:wood_plate`,
    B: global.tools.AnyMallet,
    C: global.tools.AnySaw,
    D: `minecraft:book`,
    E: `gtceu:iron_screw`,
    F: `minecraft:chest`
  }
  ).damageIngredient([global.tools.AnyMallet, global.tools.AnySaw]);
})