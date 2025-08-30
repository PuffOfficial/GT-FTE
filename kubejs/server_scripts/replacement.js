const Replacement = [
  ["create:andesite_alloy", "gtceu:andesite_alloy_ingot"],
  ["create:copper_sheet", "gtceu:copper_plate"],
  ["create:iron_sheet", "gtceu:iron_plate"],
  ["create:golden_sheet", "gtceu:gold_plate"],
  ["create:brass_sheet", "gtceu:brass_plate"],
  ["create:zinc_nugget", "gtceu:zinc_nugget"],
  ["create:zinc_ingot", "gtceu:zinc_ingot"],
  ["create:brass_nugget", "gtceu:brass_nugget"],
  ["create:brass_ingot", "gtceu:brass_ingot"],

  ["ae2:fluix_dust", "gtceu:fluix_dust"],
  ["ae2:fluix_crystal", "gtceu:fluix_gem"],
  ["ae2:fluix_block", "gtceu:fluix_block"],
  ["ae2:charged_certus_quartz_crystal", "gtceu:charged_certus_quartz_gem"],
  ["ae2:quartz_block", "gtceu:certus_quartz_block"],
  ["ae2:certus_quartz_crystal", "gtceu:certus_quartz_gem"],
  ["ae2:certus_quartz_dust", "gtceu:certus_quartz_dust"],
  ["botania:mana_pearl", "gtceu:mana_pearl_gem"],
  ["botania:mana_diamond", "gtceu:mana_gem_gem"],
  ["botania:mana_powder", "gtceu:mana_dust"],

  ["botania:manasteel_ingot", "gtceu:manasteel_ingot"],
  ["botania:terrasteel_ingot", "gtceu:terrasteel_ingot"],
  ["botania:elementium_ingot", "gtceu:elementium_ingot"],
  ["botania:gaia_ingot", "gtceu:gaia_steel_ingot"],

  ["jetboots:obsidian_infused_gold", "gtceu:obsidian_gold_plate"],

]

ServerEvents.recipes(event => {
for (const [ItemToReplace, ItemToChange] of Replacement) { 
event.replaceInput({input: ItemToReplace }, ItemToReplace, ItemToChange)
event.replaceOutput({output: ItemToReplace }, ItemToReplace, ItemToChange)}

event.replaceInput({id: "gtceu:shaped/hv_machine_hull"}, "gtceu:stainless_steel_plate", "gtceu:manasteel_plate")
event.replaceInput({id: "gtceu:shaped/cleanroom"}, "gtceu:stainless_steel_rotor", "gtceu:manasteel_rotor")
event.replaceInput({id: "gtceu:assembler/capacitor"}, "gtceu:aluminium_foil", "gtceu:manasteel_foil")
event.replaceInput({id: "botania:mana_ring"}, "botania:manasteel_ingot", "gtceu:manasteel_ingot")
event.replaceInput({id: "rootsclassic:mundane_standing_stone"}, "minecraft:lapis_block", "gtceu:verdant_copper_plate")
event.replaceInput({id: "gtceu:shaped/electronic_circuit_lv"}, "gtceu:steel_plate", "gtceu:living_steel_plate") 

event.replaceInput({id: "gtceu:shaped/casing_bronze_bricks"}, "gtceu:bronze_plate", "gtceu:wrought_iron_plate")
event.replaceInput({id: "gtceu:shaped/steam_oven"}, "gtceu:bronze_firebox_casing", "kubejs:wrought_iron_firebox")

event.replaceInput({id: "gtceu:laser_engraver/engrave_ram_silicon"}, "gtceu:silicon_wafer", "kubejs:nether_imbued_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_ssoc_silicon"}, "gtceu:silicon_wafer", "kubejs:nether_imbued_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_lpic_silicon"}, "gtceu:silicon_wafer", "kubejs:nether_imbued_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_cpu_silicon"}, "gtceu:silicon_wafer", "kubejs:nether_imbued_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_ulpic_silicon"}, "gtceu:silicon_wafer", "kubejs:nether_imbued_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_ilc_silicon"}, "gtceu:silicon_wafer", "kubejs:nether_imbued_wafer")

event.replaceInput({id: "gtceu:laser_engraver/engrave_nand_phosphorus"}, "gtceu:phosphorus_wafer", "kubejs:mana_doped_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_nor_phosphorus"}, "gtceu:phosphorus_wafer", "kubejs:mana_doped_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_pic_phosphorus"}, "gtceu:phosphorus_wafer", "kubejs:mana_doped_wafer")
event.replaceInput({id: "gtceu:laser_engraver/engrave_soc_phosphorus"}, "gtceu:phosphorus_wafer", "kubejs:mana_doped_wafer")

event.replaceInput({id: "gtceu:circuit_assembler/nano_mainframe_luv_asmd_soldering_alloy"}, "gtceu:aluminium_frame", "gtceu:gaia_steel_frame")
event.replaceInput({id: "gtceu:circuit_assembler/nano_mainframe_luv_soldering_alloy"}, "gtceu:aluminium_frame", "gtceu:gaia_steel_frame")
event.replaceInput({id: "gtceu:circuit_assembler/nano_mainframe_luv"}, "gtceu:aluminium_frame", "gtceu:gaia_steel_frame")
event.replaceInput({id: "gtceu:circuit_assembler/nano_mainframe_luv_asmd"}, "gtceu:aluminium_frame", "gtceu:gaia_steel_frame")

event.replaceInput({id: "gtceu:shaped/casing_luv"}, "gtceu:rhodium_plated_palladium_plate", "gtceu:blood_doped_rhodium_plated_palladium_plate")
event.replaceInput({id: "gtceu:shaped/luv_machine_hull"}, "gtceu:rhodium_plated_palladium_plate", "gtceu:blood_doped_rhodium_plated_palladium_plate")

event.replaceInput({id: "gtceu:shaped/steam_oven_from_hp"}, "gtceu:bronze_firebox_casing", "kubejs:wrought_iron_firebox")
event.replaceInput({id: "gtceu:shaped/steam_oven_from_lp"}, "gtceu:bronze_firebox_casing", "kubejs:wrought_iron_firebox")

event.replaceInput({id: "gtceu:circuit_assembler/quantum_processor_ev_asmd_soldering_alloy"}, "gtceu:fine_platinum_wire", "gtceu:fine_thaumium_wire")
event.replaceInput({id: "gtceu:circuit_assembler/quantum_processor_ev_asmd"}, "gtceu:fine_platinum_wire", "gtceu:fine_thaumium_wire")

event.replaceInput({id: "gtceu:circuit_assembler/quantum_computer_luv_asmd_soldering_alloy"}, "gtceu:fine_platinum_wire", "gtceu:fine_thaumium_wire")
event.replaceInput({id: "gtceu:circuit_assembler/quantum_computer_luv_asmd"}, "gtceu:fine_platinum_wire", "gtceu:fine_thaumium_wire")

event.replaceInput({id: "gtceu:circuit_assembler/quantum_assembly_iv_asmd_soldering_alloy"}, "gtceu:fine_platinum_wire", "gtceu:fine_thaumium_wire")
event.replaceInput({id: "gtceu:circuit_assembler/quantum_assembly_iv_asmd"}, "gtceu:fine_platinum_wire", "gtceu:fine_thaumium_wire")



event.custom(
  {
      "type": "ae2:charger",
      "ingredient": {
      "item": "gtceu:certus_quartz_crystal"
    },
    "result": {
      "item": "gtceu:charged_certus_quartz_crystal"
    }
  }
)
})