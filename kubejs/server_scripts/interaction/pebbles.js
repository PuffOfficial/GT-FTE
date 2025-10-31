BlockEvents.rightClicked(event => {
    const { hand, block, player, item, facing } = event
    if (hand != 'MAIN_HAND') return
    if (!block.hasTag('minecraft:dirt')) return
    if (!item.isEmpty()) return
    if (!player.isShiftKeyDown()) return
    let loot = [
        "exdeorum:andesite_pebble",
        "exdeorum:basalt_pebble",
        "exdeorum:blackstone_pebble",
        "exdeorum:diorite_pebble",
        "exdeorum:granite_pebble",
        "exdeorum:deepslate_pebble",
        "kubejs:stick_fragments",
        "minecraft:flint"
    ]
    let random = Math.floor(Math.random() * 2 * loot.length)
    let dropItem = Item.of(loot[random] ?? "exdeorum:stone_pebble")
    block.popItemFromFace(dropItem, facing)
    player.swing()
})

BlockEvents.rightClicked(event => {
    const { hand, block, player, item, facing } = event
    if (hand != 'MAIN_HAND') return
    if (!block == 'minecraft:dirt') return
    if (!item.is('kubejs:stone_spade')) return
    if (!player.isShiftKeyDown()) return
    let loot = [
        "pamhc2crops:cattailseeditem",
    ]
    let random = Math.floor(Math.random() * 2 * loot.length)
    let dropItem = Item.of(loot[random] ?? "minecraft:wheat_seeds")
    block.popItemFromFace(dropItem, facing) 
    player.damageHeldItem(hand, 1)
    player.swing()
})
