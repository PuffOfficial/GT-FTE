let AE2ItemsToAnnihilate = [
    "fluix_shovel", "fluix_pickaxe", "fluix_axe", "fluix_sword", "fluix_block", "fluix_crystal", "fluix_dust", "fluix_stairs", "fluix_slab", "fluix_wall", "fluix_crystal", "fluix_dust", "fluix_stairs", "fluix_slab", "fluix_wall", "fluix_upgrade_smithing_template",
    "certus_quartz_axe", "certus_quartz_pickaxe", "certus_quartz_hoe", "certus_quartz_sword", "certus_quartz_shovel", "certus_quartz_crystal", "certus_quartz_dust", "flawless_budding_quartz", "flawed_budding_quartz", "chipped_budding_quartz", "damaged_budding_quartz", "small_quartz_bud", "medium_quartz_bud", "large_quartz_bud", "quartz_cluster", "quartz_block", "charged_certus_quartz_crystal"
]
let CreateItemsToAnnihilate = ["zinc_nugget", "zinc_ingot", "brass_nugget", "brass_ingot", "brass_sheet", "copper_sheet"]
let BotaniaItemsToAnnihilate = ["manasteel_ingot", "manasteel_block", "mana_pearl", "mana_powder", "mana_diamond", "terrasteel_ingot", "terrasteel_block"]



JEIEvents.hideItems(event => {
    event.hide('create:andesite_alloy')

AE2ItemsToAnnihilate.forEach(item => {
    event.hide(`ae2:${item}`)
})
CreateItemsToAnnihilate.forEach(item => {
    event.hide(`create:${item}`)
})
BotaniaItemsToAnnihilate.forEach(item => {
    event.hide(`botania:${item}`)
})
})