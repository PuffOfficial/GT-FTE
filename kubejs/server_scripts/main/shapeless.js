ServerEvents.recipes(event => {
event.shapeless('kubejs:stick_fragments', [
    "minecraft:dirt"
])
event.shapeless('minecraft:stick', [
    'kubejs:stick_fragments',
    'kubejs:stick_fragments'
])
event.shapeless('kubejs:simple_knitting_kit', [
    'minecraft:stick',
    'minecraft:stick'
])
event.shapeless('kubejs:string_mesh_chunk', [
    'minecraft:string',
    'minecraft:string',
    'kubejs:simple_knitting_kit'
]).damageIngredient('kubejs:simple_knitting_kit')
event.shapeless('6x gtceu:wood_plate', [
    '#minecraft:oak_logs',
    '#forge:tools/saws'
]).damageIngredient('#forge:tools/saws')
event.shapeless('gtceu:treated_wood_plate', [
    'gtceu:treated_wood_planks',
    '#forge:tools/saws'
]).damageIngredient('#forge:tools/saws')
event.shapeless('gtceu:andesite_dust', [
    'minecraft:andesite',
    '#forge:tools/mortars'
]).damageIngredient('#forge:tools/mortars')
event.shapeless('gtceu:raw_rubber_dust', [
    'gtceu:sticky_resin',
    '#forge:tools/mortars'
]).damageIngredient('#forge:tools/mortars')

event.shapeless('gtceu:programmed_circuit', [
    '#gtceu:circuits',
])
/*
event.shapeless('gtceu:compressed_fireclay', [
    'gtceu:fireclay_dust',
    'gtceu:fireclay_dust',
    'gtceu:fireclay_dust',
    'gtceu:brick_wooden_form',
])
*/
event.shapeless('exdeorum:string_mesh', [
    'kubejs:string_mesh_chunk',
    'kubejs:string_mesh_chunk',
    'kubejs:string_mesh_chunk',
    'kubejs:string_mesh_chunk',
    'kubejs:string_mesh_chunk',
    'kubejs:string_mesh_chunk',
    'kubejs:string_mesh_chunk',
    'kubejs:string_mesh_chunk',
    'kubejs:simple_knitting_kit'
]).damageIngredient('kubejs:simple_knitting_kit')
event.shapeless('gtceu:glass_lens', [
    'gtceu:glass_plate',
    'gtceu:glass_plate',
    'gtceu:glass_plate',
    'gtceu:glass_plate',
    '#forge:tools/files',
    '#forge:tools/saws',
    '#forge:tools/mallets',
    'minecraft:water_bucket',
]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
})
