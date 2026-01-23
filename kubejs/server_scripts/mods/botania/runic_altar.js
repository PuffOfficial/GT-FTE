ServerEvents.recipes(event => {
    event.recipes.botania.runic_altar(`botania:rune_water`, [global.HV.Circuit, `watercollector:watercollector`, `gtceu:tungsten_steel_nugget`, `minecraft:bucket`], 10000)
    event.recipes.botania.runic_altar(`botania:rune_fire`, [global.HV.Circuit, `gtceu:matches`, `gtceu:red_alloy_nugget`, `minecraft:flint_and_steel`], 10000)
    event.recipes.botania.runic_altar(`botania:rune_earth`, [global.HV.Circuit, `forestry:bog_earth`, `gtceu:manganese_nugget`, `minecraft:grass_block`], 10000)
    event.recipes.botania.runic_altar(`botania:rune_air`, [global.HV.Circuit, `minecraft:string`, `gtceu:aluminium_nugget`, `minecraft:feather`], 10000)

    event.recipes.botania.runic_altar(`botania:rune_winter`, [`botania:rune_water`, `botania:rune_air`, `minecraft:snow_block`, Item.of(`minecraft:leather_helmet`, `{Damage:0}`)], 20000)
    event.recipes.botania.runic_altar(`botania:rune_summer`, [`botania:rune_air`, `botania:rune_fire`, `sgjourney:sulfur_sand`, `gtceu:exquisite_salt_gem`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_autumn`, [`botania:rune_earth`, `botania:rune_fire`, `pamhc2foodextended:cheeseontoastitem`, `minecraft:pumpkin_pie`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_spring`, [`botania:rune_water`, `botania:rune_earth`, `gtceu:fertilizer`, `rootsclassic:elderberry`], 20000)

    event.recipes.botania.runic_altar(`botania:rune_sloth`, [`botania:rune_water`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_air`, `gtceu:dense_tungsten_steel_plate`, `#minecraft:beds`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_lust`, [`botania:rune_water`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_air`, `gtceu:dense_tungsten_steel_plate`, `gtceu:chemical_pink_dye`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_greed`, [`botania:rune_water`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_air`, `gtceu:dense_tungsten_steel_plate`, `gtceu:titanium_turbine_blade`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_wrath`, [`botania:rune_water`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_air`, `gtceu:dense_tungsten_steel_plate`, `gtceu:chemical_red_dye`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_gluttony`, [`botania:rune_water`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_air`, `gtceu:dense_tungsten_steel_plate`,`pamhc2foodextended:peanutbutteritem`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_envy`, [`botania:rune_water`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_air`, `gtceu:dense_tungsten_steel_plate`, `gtceu:exquisite_diamond_gem`], 20000)
    event.recipes.botania.runic_altar(`botania:rune_pride`, [`botania:rune_water`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_air`, `gtceu:dense_tungsten_steel_plate`, `gtceu:polytetrafluoroethylene_block`], 20000)

    event.recipes.botania.runic_altar(`kubejs:alfheim_runes`, [`botania:rune_spring`, `botania:rune_autumn`, `gtceu:double_terrasteel_plate`, `botania:rune_summer`, `botania:rune_winter`, `gtceu:double_terrasteel_plate`], 100000)
    event.recipes.botania.runic_altar(`4x botania:gaia_pylon`, [`botania:rune_lust`,`botania:rune_gluttony`,`botania:rune_greed`,`botania:rune_sloth`,`botania:rune_wrath`,`botania:rune_envy`,`botania:rune_pride`,`gtceu:elementium_ingot`,`gtceu:elementium_ingot`,`botania:pixie_dust`,`botania:pixie_dust`], 100000)

})