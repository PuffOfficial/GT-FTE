const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    
    event.create('abydos_stone')
        .targets('minecraft:stone', '#minecraft:stone_ore_replaceables')
        .dimensions('sgjourney:abydos')

    event.create('abydos_sand')
        .targets('minecraft:sand', 'minecraft:sandstone')
        .dimensions('sgjourney:abydos')

    event.create('cavum_tenebrae_stone')
        .targets('minecraft:deepslate', '#minecraft:stone_ore_replaceables')
        .dimensions('sgjourney:cavum_tenebrae')

    event.create('chulak_stone')
        .targets('minecraft:stone', '#minecraft:stone_ore_replaceables')
        .dimensions('sgjourne:chulak')

    event.create('unitas_sand')
        .targets('sgjourney:sulfur_sand', '#minecraft:stone_ore_replaceables')
        .dimensions('sgjourney:unitas')
})

GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    event.create("sgjourney:abydos")
        .iconSupplier(() => Item.of("gtceu:abydos_marker").getItem())
        .tier(0)
    event.create("sgjourney:cavum_tenebrae")
        .iconSupplier(() => Item.of("gtceu:cavum_tenebrae_marker").getItem())
        .tier(0)
    event.create("sgjourney:unitas")
        .iconSupplier(() => Item.of("gtceu:unitas_marker").getItem())
        .tier(0)
    event.create("sgjourney:rima")
        .iconSupplier(() => Item.of("gtceu:rima_marker").getItem())
        .tier(0)
    event.create("sgjourney:chulak")
        .iconSupplier(() => Item.of("gtceu:chulak_marker").getItem())
        .tier(0)

})