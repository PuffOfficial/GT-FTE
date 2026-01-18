ServerEvents.tags('item', event => {
     event.removeAllTagsFrom('ae2:certus_quartz_crystal')
     event.removeAllTagsFrom('ae2:charged_certus_quartz_crystal')
     event.removeAllTagsFrom('ae2:certus_quartz_dust')
     event.removeAllTagsFrom('ae2:fluix_dust')
     event.removeAllTagsFrom('create:zinc_ingot')
     event.removeAllTagsFrom('create:zinc_nugget')
     event.removeAllTagsFrom('create:brass_ingot')
     event.removeAllTagsFrom('create:brass_nugget')
     event.removeAllTagsFrom('create:brass_sheet')
     event.removeAllTagsFrom('create:copper_sheet')
     event.removeAllTagsFrom('bigreactors:graphite_dust')
     event.removeAllTagsFrom('botania:mana_diamond')

     event.removeAllTagsFrom('botania:elementium_block')
     event.removeAllTagsFrom('botania:terrasteel_block')
     event.removeAllTagsFrom('botania:manasteel_block')
     event.removeAllTagsFrom('botania:elementium_ingot')
     event.removeAllTagsFrom('botania:terrasteel_ingot')
     event.removeAllTagsFrom('botania:manasteel_ingot')
     event.removeAllTagsFrom('botania:elementium_nugget')
     event.removeAllTagsFrom('botania:terrasteel_nugget')
     event.removeAllTagsFrom('botania:manasteel_nugget')

     event.removeAllTagsFrom('sgjourney:naquadah_alloy')
     event.removeAllTagsFrom('sgjourney:naquadah_nugget')
     event.removeAllTagsFrom('sgjourney:naquadah')
     event.removeAllTagsFrom('sgjourney:raw_naquadah')

     event.removeAllTagsFrom('forestry:ingot_tin')
     event.removeAllTagsFrom('thermal:tin_ingot')
     event.removeAllTagsFrom('thermal:tin_plate')

     event.removeAllTagsFrom('forestry:ingot_bronze')
     event.removeAllTagsFrom('thermal:bronze_ingot')
     event.removeAllTagsFrom('thermal:bronze_plate')

     event.add('gtfte:anything', Ingredient.all.itemIds)

     event.add('botania:terrasteel_ingots', 'gtceu:terrasteel_ingot')
     event.add('botania:elementium_ingots', 'gtceu:elementium_ingot')
     event.add('botania:manasteel_ingots', 'gtceu:manasteel_ingot')

     event.add('botania:terrasteel_nuggets', 'gtceu:terrasteel_nugget')
     event.add('botania:elementium_nuggets', 'gtceu:elementium_nugget')
     event.add('botania:manasteel_nuggets', 'gtceu:manasteel_nugget')

     event.add('botania:terrasteel_blocks', 'gtceu:terrasteel_block')
     event.add('botania:elementium_blocks', 'gtceu:elementium_block')
     event.add('botania:manasteel_blocks', 'gtceu:manasteel_block')

     event.add('botania:mana_diamond_gems', 'gtceu:mana_gem_gem')

     event.add('forge:gems/amethyst', 'gtceu:artificial_amethyst_gem')

     event.add('gtfte:has_pr_stick',['kubejs:stone_stick', 'minecraft:stick'])
     event.add('gtfte:has_pr_crook',['kubejs:stone_spade', 'exdeorum:crook'])

     event.add('gtfte:simulation_data',['kubejs:zombie_data','kubejs:skeleton_data','kubejs:enderman_data','kubejs:creeper_data','kubejs:blaze_data','kubejs:spider_data'])

})
ServerEvents.tags('block', event => {

})