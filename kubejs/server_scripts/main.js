// Priority: 999
let AE2ItemsToAnnihilate = [
    "fluix_shovel", "fluix_pickaxe", "fluix_axe", "fluix_sword", "fluix_block", "fluix_crystal", "fluix_dust", "fluix_stairs", "fluix_slab", "fluix_wall", "fluix_crystal", "fluix_dust", "fluix_stairs", "fluix_slab", "fluix_wall", "fluix_upgrade_smithing_template",
    "certus_quartz_axe", "certus_quartz_pickaxe", "certus_quartz_hoe", "certus_quartz_sword", "certus_quartz_shovel", "certus_quartz_crystal", "certus_quartz_dust", "flawless_budding_quartz", "flawed_budding_quartz", "chipped_budding_quartz", "damaged_budding_quartz", "small_quartz_bud", "medium_quartz_bud", "large_quartz_bud", "quartz_cluster", "quartz_block"
]


ServerEvents.recipes(event => {

event.remove({ id: 'exdeorum:crook' })
event.remove({ id: 'create:item_application/andesite_casing_from_wood' })
event.remove({ id: 'create:item_application/andesite_casing_from_log' })
event.remove({ id: 'create:item_application/copper_casing_from_wood' })
event.remove({ id: 'create:item_application/copper_casing_from_log' })
event.remove({ id: 'exdeorum:string_mesh' })
event.remove({ id: 'exdeorum:flint_mesh' })
event.remove({ id: 'exdeorum:flint_mesh_from_string_mesh' })
event.remove({ id: 'exdeorum:iron_mesh' })
event.remove({ id: 'exdeorum:iron_mesh_from_flint_mesh' })
event.remove({ id: 'exdeorum:golden_mesh' })
event.remove({ id: 'exdeorum:golden_mesh_from_iron_mesh' })
event.remove({ id: 'exdeorum:diamond_mesh' })
event.remove({ id: 'gtceu:shaped/steel_bricks_hull' })
event.remove({ id: 'gtceu:smelting/smelt_crushed_ore_nickel_to_ingot' })
event.remove({ id: 'gtceu:shaped/plate_steel' })
event.remove({ id: 'gtceu:shaped/plate_magnetic_steel' })
event.remove({ id: 'gtceu:assembler/vacuum_tube_plain' })
event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy' })
event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy_annealed' })
event.remove({ id: 'gtceu:shaped/coated_board' })
event.remove({ id: 'gtceu:shapeless/coated_board_1x' })
event.remove({ id: 'gtceu:shapeless/coated_board_3x' })
event.remove({ id: 'gtceu:shaped/basic_circuit_board' })
event.remove({ id: 'gtceu:assembler/basic_circuit_board' }) 
event.remove({ id: 'gtceu:extractor/raw_rubber_from_resin' })
event.remove({ id: 'gtceu:extractor/raw_rubber_from_leaves' })
event.remove({ id: 'gtceu:extractor/raw_rubber_from_slime' })
event.remove({ id: 'gtceu:extractor/raw_rubber_from_log' })
event.remove({ id: 'gtceu:extractor/raw_rubber_from_sapling' })



event.remove({ id: 'botania:terra_plate/terrasteel_ingot' })
event.remove({ id: 'botania:pure_daisy/livingrock' })

event.remove({ id: 'rootsclassic:runic_tablet' })
event.remove({ id: 'rootsclassic:altar' })
event.remove({ id: 'rootsclassic:attuned_standing_stone' })

event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' })
event.remove({ id: 'ae2:network/blocks/controller' })
event.remove({ id: 'ae2:network/parts/quartz_fiber_part' })
event.remove({ id: 'ae2:network/cables/glass_fluix' })
event.remove({ id: 'ae2:network/blocks/storage_drive' })
event.remove({ id: 'ae2:decorative/quartz_glass' })

event.remove({ id: 'ae2:network/crafting/cpu_crafting_unit' })
event.remove({ id: 'ae2:network/crafting/molecular_assembler' })
event.remove({ id: 'ae2:network/blocks/interfaces_interface' })
event.remove({ id: 'ae2:network/blocks/pattern_providers_interface' })


event.remove({ id: 'ae2:materials/annihilationcore' })
event.remove({ id: 'ae2:materials/formationcore' })

event.remove({ id: 'ae2:network/cables/smart_fluix' })
event.remove({ id: 'ae2:network/cables/dense_smart_fluix' })
event.remove({ id: 'ae2:network/cables/dense_smart_from_smart' })

event.remove({ id: 'ae2:network/cells/item_storage_components_cell_1k_part' })
event.remove({ id: 'ae2:network/cells/item_storage_components_cell_4k_part' })
event.remove({ id: 'ae2:network/cells/item_storage_components_cell_16k_part' })
event.remove({ id: 'ae2:network/cells/item_storage_components_cell_64k_part' })
event.remove({ id: 'ae2:network/cells/item_storage_components_cell_256k_part' })

event.remove({ id: 'ae2:inscriber/engineering_processor' })
event.remove({ id: 'ae2:inscriber/calculation_processor' })
event.remove({ id: 'ae2:inscriber/logic_processor' })

event.remove({ id: 'gtceu:shaped/steam_turbine_lv' })
event.remove({ id: 'gtceu:shaped/steam_turbine_mv' })
event.remove({ id: 'gtceu:shaped/steam_turbine_hv' })

event.remove({ id: 'gtceu:assembler/diode_glass' })
event.remove({ id: 'gtceu:assembler/diode_polyethylene' })
event.remove({ id: 'gtceu:arc_furnace/arc_iron_ingot' })
event.remove({ id: 'gtceu:arc_furnace/arc_iron_ingot' })
event.remove({ id: 'gtceu:alloy_blast_smelter/blue_alloy' })
event.remove({ id: 'gtceu:mixer/blue_alloy' })
event.remove({ id: 'gtceu:alloy_smelter/silver_dust_and_electrotine_dust_into_blue_alloy' })
event.remove({ id: 'gtceu:alloy_smelter/silver_ingot_and_electrotine_dust_into_blue_alloy' })
event.remove({ id: 'gtceu:arc_furnace/glass_from_sand' })

event.remove({ output: 'ae2:certus_quartz_dust' })
event.remove({ output: 'ae2:certus_quartz_crystal' })
event.remove({ output: 'ae2:charged_certus_quartz_crystal' })
event.remove({ output: 'gtceu:vacuum_tube' })
event.remove({ output: 'create:brass_hand' })
event.remove({ output: 'create:deployer' })
event.remove({ output: 'gtceu:magnetic_iron_rod' })
event.remove({ output: 'gtceu:steel_ingot' })
event.remove({ output: 'gtceu:resistor' })
event.remove({ output: 'gtceu:ceramic_plate' })

event.remove({ id: 'jetboots:jetboots' })
event.remove({ id: 'jetboots:jetboots_template_shapeless' })
event.remove({ id: 'jetboots:jetboots_template_smithing' })

event.remove({ output: 'botania:apothecary_default' })
event.remove({ output: 'botania:apothecary_forest' })
event.remove({ output: 'botania:apothecary_plains' })
event.remove({ output: 'botania:apothecary_mountain' })
event.remove({ output: 'botania:apothecary_fungal' })
event.remove({ output: 'botania:apothecary_swamp' })
event.remove({ output: 'botania:apothecary_desert' })
event.remove({ output: 'botania:apothecary_taiga' })
event.remove({ output: 'botania:apothecary_mesa' })
event.remove({ output: 'botania:apothecary_mossy' })
event.remove({ output: 'botania:apothecary_livingrock' })
event.remove({ output: 'botania:apothecary_deepslate' })
event.remove({ output: 'botania:runic_altar' })
event.remove({ output: '#botania:runes' })
event.remove({ output: 'botania:gaia_pylon' })

event.remove({ id: 'botania:gaia_ingot' })
event.remove({ id: 'botania:elementium_block' })
event.remove({ id: 'botania:terrasteel_block' })
event.remove({ id: 'botania:elementium_block' })
event.remove({ id: 'botania:conversions/elementium_block_deconstruct' })
event.remove({ id: 'botania:conversions/terrasteel_block_deconstruct' })
event.remove({ id: 'botania:conversions/manasteel_block_deconstruct' })
event.remove({ id: 'botania:manasteel_block' })
event.remove({ id: 'botania:conversions/manasteel_to_nuggets' })
event.remove({ id: 'botania:conversions/terrasteel_to_nugget' })
event.remove({ id: 'botania:conversions/elementium_to_nuggets' })
event.remove({ id: 'botania:conversions/manasteel_from_nuggets' })
event.remove({ id: 'botania:mana_ring' })
event.remove({ id: 'botania:conversions/elementium_from_nuggets' })
event.remove({ id: 'botania:conversions/terrasteel_from_nugget' })

event.remove({ id: 'gtceu:laser_engraver/engrave_ilc_phosphorus' })
event.remove({ id: 'gtceu:laser_engraver/engrave_lpic_phosphorus' })
event.remove({ id: 'gtceu:laser_engraver/engrave_ssoc_phosphorus' })
event.remove({ id: 'gtceu:laser_engraver/engrave_ulpic_phosphorus' })
event.remove({ id: 'gtceu:laser_engraver/engrave_ram_phosphorus' })
event.remove({ id: 'gtceu:laser_engraver/engrave_cpu_phosphorus' })

event.remove({ id: 'gtceu:assembler/casing_luv' })

event.remove({ id: 'botania:mana_infusion/manasteel_block' })
event.remove({ id: 'botania:mana_infusion/manasteel' })

event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
event.remove({ id: 'ae2:inscriber/engineering_processor_print' })
event.remove({ id: 'ae2:inscriber/logic_processor_print' })

event.remove({ output: 'gtceu:fiber_reinforced_circuit_board' })

event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev_soldering_alloy' })
event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev' })

event.remove({ id: 'gtceu:circuit_assembler/quantum_mainframe_zpm_soldering_alloy' })
event.remove({ id: 'gtceu:circuit_assembler/quantum_mainframe_zpm' })

event.remove({ id: 'gtceu:circuit_assembler/quantum_assembly_iv_soldering_alloy' })
event.remove({ id: 'gtceu:circuit_assembler/quantum_assembly_iv' })

event.remove({ id: 'gtceu:circuit_assembler/quantum_computer_luv_soldering_alloy' })
event.remove({ id: 'gtceu:circuit_assembler/quantum_computer_luv' })

event.remove({ id: 'gtceu:chemical_reactor/uhpic_wafer' })
event.remove({ id: 'gtceu:large_chemical_reactor/uhpic_wafer' })


event.remove({ id: 'gtceu:sifter/gravel_sifting' })

event.remove({ output: 'gtceu:primitive_blast_furnace' })
event.remove({ output: 'gtceu:cupronickel_ingot', type: 'gtceu:alloy_smelter' })

event.remove({ id: 'gtceu:smelting/smelt_dust_cupronickel_to_ingot'})
event.remove({ id: 'gtceu:extractor/extract_cupronickel_dust'})

event.remove({ id: 'enderio:fire_crafting/infinity'})


AE2ItemsToAnnihilate.forEach(item => {
    event.remove({ output: `ae2:${item}` })
});

event.remove({ mod: 'sgjourney' })
event.remove({ mod: 'enderio' })
event.remove({ mod: 'cobblefordays' })
event.remove({ mod: 'thermal' })
event.remove({ type: 'exdeorum:sieve' })
event.remove({ type: 'exdeorum:compressed_sieve' })

})
