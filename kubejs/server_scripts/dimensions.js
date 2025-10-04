let IsInDimension = false
PlayerEvents.tick(event => {
    let player = event.player

    const RequiresAdvancedHelmet = (player.helmet == 'gtceu:nanomuscle_helmet' || player.headArmorItem == 'gtceu:quarktech_helmet')
    const RequiresAdvancedChestplate = (player.body == 'gtceu:nanomuscle_chestplate' || player.headArmorItem == 'gtceu:quarktech_chestplate')
    const RequiresAdvancedLeggings = (player.legs == 'gtceu:nanomuscle_leggings' || player.headArmorItem == 'gtceu:quarktech_leggings')
    const RequiresAdvancedBoots = (player.boots == 'gtceu:nanomuscle_boots' || player.headArmorItem == 'gtceu:quarktech_boots')

    if (player.level.dimension.toString() == 'sgjourney:cavum_tenebrae' && IsInDimension == false && RequiresAdvancedHelmet) {
        IsInDimension = true
        player.tell(Text.translate('gtfte.cavum_tenebrae'))
        player.potionEffects.add('minecraft:nausea', 1000000000, 2, true, true)
    }

    if (player.level.dimension.toString() == 'sgjourney:chulak' && IsInDimension == false) {
        IsInDimension = true
        player.tell(Text.translate('gtfte.chulak'))
    }

    if (player.level.dimension.toString() == 'sgjourney:rima' && IsInDimension == false) {
        IsInDimension = true
        player.tell(Text.translate('gtfte.rima'))
    }

    if (player.level.dimension.toString() == 'sgjourney:abydos' && !RequiresAdvancedHelmet && !RequiresAdvancedChestplate && !RequiresAdvancedLeggings && !RequiresAdvancedBoots && IsInDimension == false) {
        IsInDimension = true
        player.tell(Text.translate('gtfte.abydos'))
    }

    if (player.level.dimension.toString() == 'sgjourney:unitas' && IsInDimension == false) {
        IsInDimension = true
        player.tell(Text.translate('gtfte.unitas'))
    }

    if (!(player.hasEffect('minecraft:nausea')) && player.level.dimension.toString() == 'sgjourney:cavum_tenebrae' && !(player.headArmorItem.id == 'gtceu:nanomuscle_helmet' || player.headArmorItem.id == 'gtceu:quarktech_helmet')) {
        player.tell(Text.translate("gtfte.dizzy"))
        player.potionEffects.add('minecraft:nausea', 1000000000, 2, true, true)
    }

    if (player.level.dimension.toString() == 'minecraft:overworld' && IsInDimension == true) {
        IsInDimension = false
        player.tell(Text.translate('gtfte.overworld'))
        player.potionEffects.clear()
    }
})

CommonAddedEvents.playerChangeDimension(event => {
    player.tell("puk")
    IsInDimension = false
})