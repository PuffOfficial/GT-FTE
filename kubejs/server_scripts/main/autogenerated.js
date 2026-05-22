let simpleAspects = ['ordo', 'aqua', 'terra', 'perditio', 'ignis', 'aer']
ServerEvents.recipes(event => {
    //MARK: Aspects
    for (const [name, component1, component2, color] of global.ComplicatedAspects) {
        event.recipes.gtceu.chemical_reactor(`gtfte:aspect_${name}_1`).circuit(1)
            .inputFluids([`gtceu:${component1} 1000`, `gtceu:${component2} 1000`])
            .outputFluids(`gtceu:${name} 1000`)
            .duration(600)
            .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.chemical_reactor(`gtfte:aspect_${name}_2`).circuit(2)
            .inputFluids([`gtceu:${component1} 10`, `gtceu:${component2} 10`])
            .outputFluids(`gtceu:${name} 10`)
            .duration(6)
            .EUt(GTValues.VA[GTValues.MV]);

        event.recipes.gtceu.autoclave(`gtfte:crystalized_${name}`)
            .inputFluids([`gtceu:${name} 250`])
            .itemInputs('gtceu:nether_quartz_dust')
            .itemOutputs(`gtceu:crystallized_${name}_gem`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV]);
        event.recipes.gtceu.extractor(`gtfte:${name}_from_crystal`)
            .itemInputs(`gtceu:crystallized_${name}_gem`)
            .outputFluids(`gtceu:${name} 250`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV]);
    }
    simpleAspects.forEach(aspect => {
        event.recipes.gtceu.autoclave(`gtfte:crystalized_${aspect}`)
            .inputFluids([`gtceu:${aspect} 250`])
            .itemInputs('gtceu:nether_quartz_dust')
            .itemOutputs(`gtceu:crystallized_${aspect}_gem`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV]);
        event.recipes.gtceu.extractor(`gtfte:${aspect}_from_crystal`)
            .itemInputs(`gtceu:crystallized_${aspect}_gem`)
            .outputFluids(`gtceu:${aspect} 250`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV]);
    })
    //MARK: Fuel Rods
    for (const [name, color] of global.FuelRods) {
        event.recipes.gtceu.canner(`gtfte:${name}_fuel_rod_filling`)
            .itemInputs(`gtceu:empty_fuel_rod`)
            .inputFluids(`gtceu:${name} 288`)
            .itemOutputs(`gtceu:${name}_fuel_rod`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV]);

        event.recipes.gtceu.canner(`gtfte:${name}_fuel_rod_emptying`)
            .itemInputs(`gtceu:${name}_fuel_rod`)
            .outputFluids(`gtceu:${name} 288`)
            .itemOutputs(`gtceu:empty_fuel_rod`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV]);
    }
    //MARK: Data models
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
        
        [`sheep`, `#minecraft:wool`, `4x hostilenetworks:overworld_prediction`, false],
        [`chicken`, `minecraft:feather`, `4x hostilenetworks:overworld_prediction`, false],
        [`pig`, `minecraft:porkchop`, `4x hostilenetworks:overworld_prediction`, false],
        [`rabbit`, `minecraft:rabbit_foot`, `4x hostilenetworks:overworld_prediction`, false],
        [`cow`, `minecraft:leather`, `4x hostilenetworks:overworld_prediction`, false],
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
});