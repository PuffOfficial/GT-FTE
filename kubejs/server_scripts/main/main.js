// Priority: 999
let AE2ItemsToAnnihilate = [
    `fluix_shovel`, `fluix_pickaxe`, `fluix_axe`, `fluix_sword`, `fluix_block`, `fluix_crystal`, `fluix_dust`, `fluix_stairs`, `fluix_slab`, `fluix_wall`, `fluix_crystal`, `fluix_dust`, `fluix_stairs`, `fluix_slab`, `fluix_wall`, `fluix_upgrade_smithing_template`,
    `certus_quartz_axe`, `certus_quartz_pickaxe`, `certus_quartz_hoe`, `certus_quartz_sword`, `certus_quartz_shovel`, `certus_quartz_crystal`, `certus_quartz_dust`, `flawless_budding_quartz`, `flawed_budding_quartz`, `chipped_budding_quartz`, `damaged_budding_quartz`, `small_quartz_bud`, `medium_quartz_bud`, `large_quartz_bud`, `quartz_cluster`, `quartz_block`
]


ServerEvents.recipes(event => {
    //MARK: Removals
    event.remove({ id: `exdeorum:crook` })
    event.remove({ id: `create:item_application/andesite_casing_from_wood` })
    event.remove({ id: `create:item_application/andesite_casing_from_log` })
    event.remove({ id: `create:item_application/copper_casing_from_wood` })
    event.remove({ id: `create:item_application/copper_casing_from_log` })
    event.remove({ id: `exdeorum:string_mesh` })
    event.remove({ id: `exdeorum:flint_mesh` })
    event.remove({ id: `exdeorum:flint_mesh_from_string_mesh` })
    event.remove({ id: `exdeorum:iron_mesh` })
    event.remove({ id: `exdeorum:iron_mesh_from_flint_mesh` })
    event.remove({ id: `exdeorum:golden_mesh` })
    event.remove({ id: `exdeorum:golden_mesh_from_iron_mesh` })
    event.remove({ id: `exdeorum:diamond_mesh` })
    event.remove({ id: `gtceu:shaped/steel_bricks_hull` })
    event.remove({ id: `gtceu:smelting/smelt_crushed_ore_nickel_to_ingot` })
    event.remove({ id: `gtceu:shaped/plate_steel` })
    event.remove({ id: `gtceu:shaped/plate_magnetic_steel` })
    event.remove({ id: `gtceu:assembler/vacuum_tube_plain` })
    event.remove({ id: `gtceu:assembler/vacuum_tube_red_alloy` })
    event.remove({ id: `gtceu:assembler/vacuum_tube_red_alloy_annealed` })
    event.remove({ id: `gtceu:shaped/coated_board` })
    event.remove({ id: `gtceu:shapeless/coated_board_1x` })
    event.remove({ id: `gtceu:shapeless/coated_board_3x` })
    event.remove({ id: `gtceu:shaped/basic_circuit_board` })
    event.remove({ id: `gtceu:assembler/basic_circuit_board` })
    event.remove({ id: `gtceu:extractor/raw_rubber_from_resin` })
    event.remove({ id: `gtceu:extractor/raw_rubber_from_leaves` })
    event.remove({ id: `gtceu:extractor/raw_rubber_from_slime` })
    event.remove({ id: `gtceu:extractor/raw_rubber_from_log` })
    event.remove({ id: `gtceu:extractor/raw_rubber_from_sapling` })

    event.remove({ id: `gtceu:sifter/gravel_sifting` })

    event.remove({ id: `botania:terra_plate/terrasteel_ingot` })
    event.remove({ id: `botania:pure_daisy/livingrock` })

    event.remove({ id: `rootsclassic:runic_tablet` })
    event.remove({ id: `rootsclassic:altar` })
    event.remove({ id: `rootsclassic:attuned_standing_stone` })

    event.remove({ id: `ae2:network/blocks/energy_energy_acceptor` })
    event.remove({ id: `ae2:network/blocks/controller` })
    event.remove({ id: `ae2:network/parts/quartz_fiber_part` })
    event.remove({ id: `ae2:network/cables/glass_fluix` })
    event.remove({ id: `ae2:network/blocks/storage_drive` })
    event.remove({ id: `ae2:decorative/quartz_glass` })

    event.remove({ id: `ae2:network/cells/item_cell_housing` })
    event.remove({ id: `ae2:network/cells/item_storage_cell_1k` })
    event.remove({ id: `ae2:network/cells/item_storage_cell_4k` })
    event.remove({ id: `ae2:network/cells/item_storage_cell_16k` })
    event.remove({ id: `ae2:network/cells/item_storage_cell_64k` })
    event.remove({ id: `ae2:network/cells/item_storage_cell_256k` })

    event.remove({ id: `ae2:network/cells/fluid_cell_housing` })
    event.remove({ id: `ae2:network/cells/fluid_storage_cell_1k` })
    event.remove({ id: `ae2:network/cells/fluid_storage_cell_4k` })
    event.remove({ id: `ae2:network/cells/fluid_storage_cell_16k` })
    event.remove({ id: `ae2:network/cells/fluid_storage_cell_64k` })
    event.remove({ id: `ae2:network/cells/fluid_storage_cell_256k` })

    event.remove({ id: `ae2:network/crafting/cpu_crafting_unit` })
    event.remove({ id: `ae2:network/crafting/molecular_assembler` })
    event.remove({ id: `ae2:network/blocks/interfaces_interface` })
    event.remove({ id: `ae2:network/blocks/pattern_providers_interface` })

    event.remove({ id: `ae2:materials/annihilationcore` })
    event.remove({ id: `ae2:materials/formationcore` })

    event.remove({ id: `ae2:network/cables/smart_fluix` })
    event.remove({ id: `ae2:network/cables/dense_smart_fluix` })
    event.remove({ id: `ae2:network/cables/dense_smart_from_smart` })

    event.remove({ id: `ae2:network/cells/item_storage_components_cell_1k_part` })
    event.remove({ id: `ae2:network/cells/item_storage_components_cell_4k_part` })
    event.remove({ id: `ae2:network/cells/item_storage_components_cell_16k_part` })
    event.remove({ id: `ae2:network/cells/item_storage_components_cell_64k_part` })
    event.remove({ id: `ae2:network/cells/item_storage_components_cell_256k_part` })

    event.remove({ id: `ae2:inscriber/engineering_processor` })
    event.remove({ id: `ae2:inscriber/calculation_processor` })
    event.remove({ id: `ae2:inscriber/logic_processor` })

    event.remove({ id: `gtceu:shaped/steam_turbine_lv` })
    event.remove({ id: `gtceu:shaped/steam_turbine_mv` })
    event.remove({ id: `gtceu:shaped/steam_turbine_hv` })

    event.remove({ id: `gtceu:assembler/diode_glass` })
    event.remove({ id: `gtceu:assembler/diode_polyethylene` })
    event.remove({ id: `gtceu:arc_furnace/arc_iron_ingot` })
    event.remove({ id: `gtceu:arc_furnace/arc_iron_ingot` })
    event.remove({ id: `gtceu:alloy_blast_smelter/blue_alloy` })
    event.remove({ id: `gtceu:mixer/blue_alloy` })
    event.remove({ id: `gtceu:alloy_smelter/silver_dust_and_electrotine_dust_into_blue_alloy` })
    event.remove({ id: `gtceu:alloy_smelter/silver_ingot_and_electrotine_dust_into_blue_alloy` })
    event.remove({ id: `gtceu:arc_furnace/glass_from_sand` })

    event.remove({ id: `forestry:sturdy_machine` })

    event.remove({ output: `ae2:certus_quartz_dust` })
    event.remove({ output: `ae2:certus_quartz_crystal` })
    event.remove({ output: `ae2:charged_certus_quartz_crystal` })
    event.remove({ output: `gtceu:vacuum_tube` })
    event.remove({ output: `gtceu:magnetic_iron_rod` })
    event.remove({ output: `gtceu:steel_ingot` })
    event.remove({ output: `gtceu:resistor` })
    event.remove({ output: `gtceu:ceramic_plate` })

    event.remove({ id: `forestry:fertilizer_apatite` })
    event.remove({ id: `forestry:fertilizer_ash` })

    event.remove({ id: `jetboots:jetboots` })
    event.remove({ id: `jetboots:jetboots_template_shapeless` })
    event.remove({ id: `jetboots:jetboots_template_smithing` })

    event.remove({ output: `botania:apothecary_default` })
    event.remove({ output: `botania:apothecary_forest` })
    event.remove({ output: `botania:apothecary_plains` })
    event.remove({ output: `botania:apothecary_mountain` })
    event.remove({ output: `botania:apothecary_fungal` })
    event.remove({ output: `botania:apothecary_swamp` })
    event.remove({ output: `botania:apothecary_desert` })
    event.remove({ output: `botania:apothecary_taiga` })
    event.remove({ output: `botania:apothecary_mesa` })
    event.remove({ output: `botania:apothecary_mossy` })
    event.remove({ output: `botania:apothecary_livingrock` })
    event.remove({ output: `botania:apothecary_deepslate` })
    event.remove({ output: `botania:runic_altar` })
    event.remove({ output: `#botania:runes` })
    event.remove({ output: `botania:gaia_pylon` })

    event.remove({ id: `botania:gaia_ingot` })
    event.remove({ id: `botania:elementium_block` })
    event.remove({ id: `botania:terrasteel_block` })
    event.remove({ id: `botania:elementium_block` })
    event.remove({ id: `botania:conversions/elementium_block_deconstruct` })
    event.remove({ id: `botania:conversions/terrasteel_block_deconstruct` })
    event.remove({ id: `botania:conversions/manasteel_block_deconstruct` })
    event.remove({ id: `botania:manasteel_block` })
    event.remove({ id: `botania:conversions/manasteel_to_nuggets` })
    event.remove({ id: `botania:conversions/terrasteel_to_nugget` })
    event.remove({ id: `botania:conversions/elementium_to_nuggets` })
    event.remove({ id: `botania:conversions/manasteel_from_nuggets` })
    event.remove({ id: `botania:mana_ring` })
    event.remove({ id: `botania:conversions/elementium_from_nuggets` })
    event.remove({ id: `botania:conversions/terrasteel_from_nugget` })

    event.remove({ id: `gtceu:laser_engraver/engrave_ilc_phosphorus` })
    event.remove({ id: `gtceu:laser_engraver/engrave_lpic_phosphorus` })
    event.remove({ id: `gtceu:laser_engraver/engrave_ssoc_phosphorus` })
    event.remove({ id: `gtceu:laser_engraver/engrave_ulpic_phosphorus` })
    event.remove({ id: `gtceu:laser_engraver/engrave_ram_phosphorus` })
    event.remove({ id: `gtceu:laser_engraver/engrave_cpu_phosphorus` })

    event.remove({ id: `gtceu:assembler/casing_luv` })

    event.remove({ id: `botania:mana_infusion/manasteel_block` })
    event.remove({ id: `botania:mana_infusion/manasteel` })
    event.remove({ id: `botania:alfheim_portal` })

    event.remove({ id: `ae2:inscriber/calculation_processor_print` })
    event.remove({ id: `ae2:inscriber/engineering_processor_print` })
    event.remove({ id: `ae2:inscriber/logic_processor_print` })

    event.remove({ output: `gtceu:fiber_reinforced_circuit_board` })

    event.remove({ id: `gtceu:circuit_assembler/quantum_processor_ev_soldering_alloy` })
    event.remove({ id: `gtceu:circuit_assembler/quantum_processor_ev` })

    event.remove({ id: `gtceu:circuit_assembler/quantum_mainframe_zpm_soldering_alloy` })
    event.remove({ id: `gtceu:circuit_assembler/quantum_mainframe_zpm` })

    event.remove({ id: `gtceu:circuit_assembler/quantum_assembly_iv_soldering_alloy` })
    event.remove({ id: `gtceu:circuit_assembler/quantum_assembly_iv` })

    event.remove({ id: `gtceu:circuit_assembler/quantum_computer_luv_soldering_alloy` })
    event.remove({ id: `gtceu:circuit_assembler/quantum_computer_luv` })

    event.remove({ id: `gtceu:chemical_reactor/uhpic_wafer` })
    event.remove({ id: `gtceu:large_chemical_reactor/uhpic_wafer` })

    event.remove({ id: `functionalstorage:custom_compacting/amethyst` })
    event.remove({ id: `gtceu:compressor/compress_amethyst_gem_to_block` })

    event.remove({ output: `gtceu:primitive_blast_furnace` })
    event.remove({ output: `gtceu:cupronickel_ingot`, type: `gtceu:alloy_smelter` })

    event.remove({ id: `gtceu:smelting/smelt_dust_cupronickel_to_ingot` })
    event.remove({ id: `gtceu:extractor/extract_cupronickel_dust` })

    event.remove({ id: `enderio:fire_crafting/infinity` })

    event.remove({ id: `gtceu:shaped/mv_machine_hull` })

    event.remove({ id: `gtceu:centrifuge/glowstone_separation` })

    event.remove({ id: `gtceu:forge_hammer/gravel_to_sand` })
    event.remove({ id: `gtceu:forge_hammer/cobblestone_to_gravel` })

    event.remove({ id: `avaritia:compressed_chest` })

    event.remove({ id: `enderchests:ender_chest` })
    event.remove({ id: `endertanks:tank` })

    event.remove({ id: `fluxnetworks:fluxblock` })
    event.remove({ id: `fluxnetworks:fluxcore` })
    event.remove({ id: `fluxnetworks:fluxplug` })
    event.remove({ id: `fluxnetworks:fluxpoint` })

    event.remove({ id: `forestry:gear_bronze` })
    event.remove({ id: `forestry:gear_tin` })

    event.remove({ mod: `sgjourney` })
    event.remove({ mod: `ad_astra` })
    event.remove({ mod: `enderio` })
    event.remove({ mod: `cobblefordays` })
    event.remove({ mod: `thermal` })
    event.remove({ type: `exdeorum:sieve` })
    event.remove({ type: `exdeorum:compressed_sieve` })

    event.remove({ output: `unstabletools:unstable_ingot`})
    event.remove({ output: `unstabletools:unstable_helmet`})
    event.remove({ output: `unstabletools:unstable_chestplate`})
    event.remove({ output: `unstabletools:unstable_leggings`})
    event.remove({ output: `unstabletools:unstable_boots`})

    AE2ItemsToAnnihilate.forEach(item => {
        event.remove({ output: `ae2:${item}` })
    });
// MARK: Smelting
    //-----Furnace-----//
    event.smelting(`gtceu:wrought_iron_ingot`, `minecraft:iron_ingot`)
    // Campfire
    event.campfireCooking(`minecraft:glass`, `gtceu:glass_dust`)
    event.campfireCooking(`minecraft:slime_ball`, `gtceu:sticky_resin`)
// MARK: Crafting table
    //-----Shapeless-----//
    event.shapeless(`kubejs:simple_knitting_kit`, [
        `minecraft:stick`,
        `minecraft:stick`
    ])
    event.shapeless(`kubejs:stone_spade`, [
        `minecraft:cobblestone`,
        `exdeorum:stone_pebble`
    ])
    event.shapeless(`kubejs:string_mesh_chunk`, [
        `minecraft:string`,
        `minecraft:string`,
        `kubejs:simple_knitting_kit`
    ]).damageIngredient(`kubejs:simple_knitting_kit`)
    event.shapeless(`6x gtceu:wood_plate`, [
        `#minecraft:oak_logs`,
        `#forge:tools/saws`
    ]).damageIngredient(`#forge:tools/saws`)
    event.shapeless(`gtceu:treated_wood_plate`, [
        `gtceu:treated_wood_planks`,
        `#forge:tools/saws`
    ]).damageIngredient(`#forge:tools/saws`)
    event.shapeless(`gtceu:andesite_dust`, [
        `minecraft:andesite`,
        `#forge:tools/mortars`
    ]).damageIngredient(`#forge:tools/mortars`)
    event.shapeless(`gtceu:raw_rubber_dust`, [
        `gtceu:sticky_resin`,
        `#forge:tools/mortars`
    ]).damageIngredient(`#forge:tools/mortars`)

    event.shapeless(`gtceu:programmed_circuit`, [
        `#gtceu:circuits`,
    ])
    event.shapeless(`exdeorum:string_mesh`, [
        `kubejs:string_mesh_chunk`,
        `kubejs:string_mesh_chunk`,
        `kubejs:string_mesh_chunk`,
        `kubejs:string_mesh_chunk`,
        `kubejs:string_mesh_chunk`,
        `kubejs:string_mesh_chunk`,
        `kubejs:string_mesh_chunk`,
        `kubejs:string_mesh_chunk`,
        `kubejs:simple_knitting_kit`
    ]).damageIngredient(`kubejs:simple_knitting_kit`)
    event.shapeless(`gtceu:glass_lens`, [
        `gtceu:glass_plate`,
        `gtceu:glass_plate`,
        `gtceu:glass_plate`,
        `gtceu:glass_plate`,
        `#forge:tools/files`,
        `#forge:tools/saws`,
        `#forge:tools/mallets`,
        `minecraft:water_bucket`,
    ]).replaceIngredient(`minecraft:water_bucket`, `minecraft:bucket`)
    //-----Shaped-----//
    event.shaped(`exdeorum:crook`, [
        `SS `,
        `S  `,
        `   `
    ], {
        S: `minecraft:stick`,
    }
    );
    event.shaped(`exdeorum:flint_mesh`, [
        `CFC`,
        `FMF`,
        `CFC`
    ], {
        M: `exdeorum:string_mesh`,
        F: `gtceu:flint_dust`,
        C: `minecraft:string`,
    }
    );
    event.shaped(`exdeorum:iron_mesh`, [
        `CFC`,
        `FMF`,
        `CFC`
    ], {
        M: `exdeorum:flint_mesh`,
        F: `gtceu:long_iron_rod`,
        C: `minecraft:string`,
    }
    );
    event.shaped(`exdeorum:golden_mesh`, [
        `CFC`,
        `FMF`,
        `CFC`
    ], {
        M: `exdeorum:iron_mesh`,
        F: `gtceu:long_gold_rod`,
        C: `minecraft:string`,
    }
    );
// MARK: Roots
    event.shaped(`rootsclassic:runic_tablet`, [
        `ADA`,
        `BDB`,
        `CAC`
    ], {
        A: `gtceu:stone_plate`,
        B: `gtceu:fine_verdant_copper_wire`,
        C: `gtceu:root_iron_screw`,
        D: `gtceu:double_root_iron_plate`,
    }
    );
    event.shaped(`rootsclassic:altar`, [
        `BBB`,
        `EFE`,
        `CDC`
    ], {
        B: `gtceu:gold_plate`,
        C: `gtceu:double_root_iron_plate`,
        D: `gtceu:verdant_copper_plate`,
        E: global.ULV.Circuit,
        F: `minecraft:chiseled_stone_bricks`,
    }
    );
    event.shaped(`sgjourney:classic_dhd`, [
        `ABA`,
        `DCE`,
        `AAA`
    ], {
        A: `gtceu:double_black_steel_plate`,
        B: global.EV.Circuit,
        C: global.EV.Hull,
        D: global.EV.Sensor,
        E: global.EV.Emitter,
    }
    );
// MARK: Multi blocks
    event.shaped(`gtceu:primitive_alloy_smelter`, [
        `ABA`,
        `BDB`,
        `CBC`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Wire(`quadruple`),
        C: global.ULV.Cable(`single`),
        D: global.ULV.Hull,
    }
    );
    event.shaped(`gtceu:primitive_bender`, [
        `AFA`,
        `BDB`,
        `CEC`
    ], {
        A: global.ULV.Piston,
        B: global.ULV.Circuit,
        C: global.ULV.Motor,
        D: global.ULV.Hull,
        E: global.ULV.Cable(`single`),
        F: `gtceu:wrought_iron_plate`,
    }
    );
    event.shaped(`gtceu:primitive_electric_furnace`, [
        `ADA`,
        `DBD`,
        `CDC`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Hull,
        C: global.ULV.Cable(`single`),
        D: global.ULV.Wire(`double`),
    }
    );
// MARK: Gregtech Affliated
    event.shaped(`gtceu:zpm_ionizing_module`, [
        `CAC`,
        `EBD`,
        `CAC`
    ], {
        A: global.ZPM.Circuit,
        B: global.ZPM.Hull,
        C: global.ZPM.Cable(`single`),
        D: global.LuV.RobotArm,
        E: global.LuV.Emitter
    }
    );
    event.shaped(`gtceu:ulv_primitive_maintenance_hatch`, [
        `GFD`,
        `HBE`,
        `CAI`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Hull,
        C: global.ULV.Cable(`single`),
        D: global.tools.AnyWrench,
        E: global.tools.AnyScrewdriver,
        F: global.tools.AnyWireCutter,
        G: global.tools.AnyMallet,
        H: `gtceu:treated_wood_plate`,
        I: `gtceu:copper_small_fluid_pipe`,
    }
    ).damageIngredient([global.tools.AnyMallet, global.tools.AnyScrewdriver, global.tools.AnyWrench, global.tools.AnyWireCutter]);
// MARK: Crafting Components
    event.shaped(`gtceu:empty_fuel_rod`, [
        `BCB`,
        `A A`,
        `BCB`
    ], {
        A: `gtceu:silicon_carbide_foil`,
        B: `gtceu:silicon_carbide_bolt`,
        C: `gtceu:silicon_carbide_plate`
    }
    );
    event.shaped(`gtceu:rubber_plate`, [
        ` B `,
        ` A `,
        ` A `
    ], {
        A: `gtceu:sticky_resin`,
        B: `#gtceu:tools/crafting_hammers`
    }
    );
    event.shaped(`gtceu:glass_tube`, [
        `   `,
        `AAA`,
        `A A`
    ], {
        A: `minecraft:glass_pane`,
    }
    );
    event.shaped(`gtceu:vacuum_tube`, [
        `A M`,
        `RBR`,
        `CCC`
    ], {
        A: `#forge:tools/wrenches`,
        M: `#forge:tools/mallets`,
        B: `gtceu:glass_tube`,
        R: `gtceu:red_alloy_bolt`,
        C: `gtceu:copper_single_wire`
    }
    );
    event.shaped(`2x gtceu:resistor`, [
        `ACA`,
        `DBD`,
        ` E `
    ], {
        A: `gtceu:sticky_resin`,
        B: `gtceu:coal_dust`,
        C: `gtceu:small_copper_spring`,
        D: `minecraft:paper`,
        E: `gtceu:ceramic_plate`,
    }
    );
    event.shaped(`kubejs:hv_mana_amplifier`, [
        `DFD`,
        `ECE`,
        `BAB`
    ], {
        A: global.HV.Hull,
        B: global.HV.Cable(`single`),
        C: `gtceu:exquisite_mana_gem_gem`,
        D: `gtceu:stainless_steel_plate`,
        E: `gtceu:manasteel_rod`,
        F: global.EV.Circuit,
    }
    );
    event.shaped(`2x kubejs:wrought_iron_firebox`, [
        `BAB`,
        `ACA`,
        `BAB`
    ], {
        A: `gtceu:wrought_iron_rod`,
        B: `gtceu:wrought_iron_plate`,
        C: `minecraft:campfire`,
    }
    );
    //-----Stargate-----//
    event.shaped(`kubejs:stargate_coil`, [
        ` BA`,
        `BCB`,
        `AB `
    ], {
        A: global.HV.Coil,
        B: global.EV.Coil,
        C: `gtceu:small_stargate_alloy_gear`,
    }
    );
    event.shaped(`kubejs:stargate_chevron`, [
        `DBE`,
        `CAC`,
        ` C `
    ], {
        A: `kubejs:stargate_coil`,
        B: global.IV.Circuit,
        C: `gtceu:double_stargate_alloy_plate`,
        D: `gtceu:red_glass_lens`,
        E: `gtceu:yellow_glass_lens`,
    }
    );
    event.shaped(`kubejs:stargate_field_generator`, [
        `ABA`,
        `CBC`,
        `ABA`
    ], {
        A: `gtceu:hv_field_generator`,
        B: `gtceu:double_terrasteel_plate`,
        C: `gtceu:styrene_butadiene_rubber_rod`,
    }
    );
// MARK: Botania
    event.shaped(`botania:runic_altar`, [
        `DAD`,
        `CBC`,
        `DAD`
    ], {
        A: `gtceu:living_steel_plate`,
        B: global.IV.Circuit,
        C: `botania:livingrock_bricks`,
        D: `gtceu:double_manasteel_plate`,
    }
    );
    event.shaped(`botania:alfheim_portal`, [
        `ABA`,
        `ACA`,
        `ABA`
    ], {
        A: `botania:livingwood_log`,
        B: `gtceu:terrasteel_plate`,
        C: `kubejs:alfheim_runes`,
    }
    );
// MARK: ULV Components
    event.shaped(`kubejs:ulv_electric_motor`, [
        `ABC`,
        `BDB`,
        `CBA`
    ], {
        A: global.ULV.Cable(`single`),
        B: `gtceu:lead_single_wire`,
        C: `gtceu:copper_rod`,
        D: `minecraft:redstone`,
    }
    );
    event.shaped(`kubejs:ulv_conveyor_module`, [
        ` C `,
        `BAB`,
        ` C `
    ], {
        A: global.ULV.Cable(`single`),
        B: global.ULV.Motor,
        C: `gtceu:rubber_plate`,
    }
    );
    event.shaped(`kubejs:ulv_electric_piston`, [
        `EEE`,
        `ADD`,
        `ABC`
    ], {
        A: global.ULV.Cable(`single`),
        B: global.ULV.Motor,
        C: `gtceu:wrought_iron_gear`,
        D: `gtceu:copper_rod`,
        E: `gtceu:copper_plate`,
    }
    );
    event.shaped(`kubejs:ulv_robot_arm`, [
        `EEE`,
        `BDB`,
        `CFD`
    ], {
        B: global.ULV.Motor,
        C: global.ULV.Piston,
        D: `gtceu:copper_rod`,
        E: global.ULV.Cable(`single`),
        F: `#gtceu:circuits/ulv`,
    }
    );
    event.shaped(`kubejs:ulv_electric_pump`, [
        `EFB`,
        `GDH`,
        `BCA`
    ], {
        A: global.ULV.Cable(`single`),
        B: `gtceu:rubber_ring`,
        C: global.ULV.Motor,
        D: `gtceu:copper_normal_fluid_pipe`,
        E: `gtceu:copper_rotor`,
        F: `gtceu:copper_screw`,
        G: `#gtceu:tools/crafting_screwdrivers`,
        H: `#gtceu:tools/crafting_wrenches`,
    }
    );
    event.shaped(`gtceu:ulv_extruder`, [
        `DDA`,
        `CBE`,
        `DDA`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Hull,
        C: global.ULV.Piston,
        D: global.ULV.Wire(`quadruple`),
        E: `gtceu:copper_normal_fluid_pipe`,
    }
    );
});
