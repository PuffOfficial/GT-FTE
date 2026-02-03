/*
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler(`gtfte:cleanroom_test_recipe`)
        .itemInputs(`minecraft:dirt`)
        .itemOutputs(`minecraft:diamond`)
        .duration(50)
        .EUt(GTValues.VA[GTValues.LV])
        .cleanroom(CleanroomType.getByName(`ionizing`));
})
*/ServerEvents.recipes(event => {
    let dataModelData = [
        [`blaze`, `minecraft:blaze_rod`, `4x hostilenetworks:nether_prediction`, true],
        [`creeper`, `minecraft:gunpowder`, `4x hostilenetworks:overworld_prediction`, true],
        [`enderman`, `minecraft:ender_pearl`, `4x hostilenetworks:end_prediction`, true],
        [`ghast`, `minecraft:ghast_tear`, `4x hostilenetworks:nether_prediction`, true],
        [`guardian`, `minecraft:prismarine_shard`, `4x hostilenetworks:overworld_prediction`, true],
        [`shulker`, `minecraft:diamond`, `4x hostilenetworks:end_prediction`, true],
        [`skeleton`, `minecraft:bone`, `4x hostilenetworks:overworld_prediction`, false],
        [`slime`, `minecraft:slime_ball`, `4x hostilenetworks:overworld_prediction`, true],
        [`spider`, `minecraft:spider_eye`, `4x hostilenetworks:overworld_prediction`, true],
        [`witch`, `minecraft:glass_bottle`, `4x hostilenetworks:overworld_prediction`, true],
        [`wither`, `minecraft:nether_star`, `4x hostilenetworks:nether_prediction`, true],
        [`wither_skeleton`, `minecraft:wither_skeleton_skull`, `4x hostilenetworks:nether_prediction`, true],
        [`zombie`, `minecraft:rotten_flesh`, `4x hostilenetworks:overworld_prediction`, false],
        [`botania/gaia`, `botania:life_essence`, `4x hostilenetworks:end_prediction`, true],
        [`sheep`, `#minecraft:wool`, `4x hostilenetworks:overworld_prediction`, true],
    ]

    dataModelData.forEach(modeldata => {
        let recipeIngredients = [
            `hostilenetworks:blank_data_model`,
            modeldata[1]
        ]
        if (modeldata[3]) {
            recipeIngredients.push(modeldata[2])
        }
        let item = Item.of(`hostilenetworks:data_model`, JSON.stringify({
            data_model: {
                data: 6,
                id: `hostilenetworks:${modeldata[0]}`,
            }
        }))

        event.recipes.gtceu.scanner(`gtfte:${modeldata[0]}_data_model_production`)
            .itemInputs(recipeIngredients)
            .itemOutputs(item)
            .duration(2400)
            .EUt(GTValues.VA[GTValues.IV]);

    })
})
